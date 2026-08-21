import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerender() {
  const rootDir = path.resolve(__dirname, "..");
  const distDir = path.resolve(rootDir, "dist");
  const distServerDir = path.resolve(rootDir, "dist-server");
  const templatePath = path.resolve(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template index.html not found at ${templatePath}`);
  }

  const templateHtml = fs.readFileSync(templatePath, "utf-8");

  // Import the compiled server entry point
  const serverEntryPath = path.resolve(distServerDir, "entry-server.js");
  const serverEntry = await import(`file://${serverEntryPath.replace(/\\/g, "/")}`);

  const { render, PRERENDER_ROUTES } = serverEntry;

  if (!render || !PRERENDER_ROUTES) {
    throw new Error("entry-server.js must export 'render' and 'PRERENDER_ROUTES'");
  }

  console.log(`Starting static pre-rendering for ${PRERENDER_ROUTES.length} routes...`);

  for (const route of PRERENDER_ROUTES) {
    const helmetContext = {};
    const appHtml = render(route, helmetContext);
    const { helmet } = helmetContext;

    let pageHtml = templateHtml;

    if (helmet) {
      const titleStr = helmet.title ? helmet.title.toString() : "";
      const metaStr = helmet.meta ? helmet.meta.toString() : "";
      const linkStr = helmet.link ? helmet.link.toString() : "";
      const scriptStr = helmet.script ? helmet.script.toString() : "";

      if (titleStr && titleStr.trim() !== "<title data-rh=\"true\"></title>") {
        pageHtml = pageHtml.replace(/<title[^>]*>.*?<\/title>/gi, "");
      }
      if (metaStr.includes('name="description"')) {
        pageHtml = pageHtml.replace(/<meta\s+name=["']description["'][^>]*\/?>/gi, "");
      }
      if (metaStr.includes('property="og:title"')) {
        pageHtml = pageHtml.replace(/<meta\s+property=["']og:title["'][^>]*\/?>/gi, "");
      }
      if (metaStr.includes('property="og:description"')) {
        pageHtml = pageHtml.replace(/<meta\s+property=["']og:description["'][^>]*\/?>/gi, "");
      }
      if (linkStr.includes('rel="canonical"')) {
        pageHtml = pageHtml.replace(/<link\s+rel=["']canonical["'][^>]*\/?>/gi, "");
      }

      const helmetHeadContent = [titleStr, metaStr, linkStr, scriptStr].filter(Boolean).join("\n    ");
      pageHtml = pageHtml.replace("</head>", `    ${helmetHeadContent}\n</head>`);
    }

    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Determine output filename
    let destPath;
    if (route === "/" || route === "") {
      destPath = path.resolve(distDir, "index.html");
    } else {
      const routePath = route.startsWith("/") ? route.slice(1) : route;
      const folderPath = path.resolve(distDir, routePath);
      fs.mkdirSync(folderPath, { recursive: true });
      destPath = path.resolve(folderPath, "index.html");
    }

    fs.writeFileSync(destPath, pageHtml, "utf-8");
    console.log(`  ✓ Pre-rendered: ${route} -> ${path.relative(rootDir, destPath)}`);
  }

  // Clean up dist-server directory safely (Windows may lock imported ESM files)
  try {
    if (fs.existsSync(distServerDir)) {
      fs.rmSync(distServerDir, { recursive: true, force: true });
    }
  } catch (e) {
    // Ignore transient file lock during node exit on Windows
  }

  console.log(`Successfully pre-rendered ${PRERENDER_ROUTES.length} pages into dist/!`);
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
