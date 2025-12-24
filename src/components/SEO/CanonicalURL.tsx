import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * SEO Component to handle canonical URLs and enforce URL standards.
 * This ensures that search engines know which version of a page is the definitive one,
 * preventing duplicate content issues (e.g., trailing slashes).
 * It also performs a client-side redirect to remove trailing slashes.
 */
const CanonicalURL = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const siteUrl = "https://henleazetaxconsultancy.com";
  
  // Remove trailing slash for consistency (except for the root path)
  const hasTrailingSlash = location.pathname.endsWith("/") && location.pathname !== "/";
  const cleanPath = hasTrailingSlash
    ? location.pathname.slice(0, -1)
    : location.pathname;

  // Enforce clean URLs (no trailing slash) via client-side redirect
  useEffect(() => {
    if (hasTrailingSlash) {
      // Use replace: true to avoid adding to history stack
      navigate(cleanPath, { replace: true });
    }
  }, [hasTrailingSlash, cleanPath, navigate]);
    
  // Ensure the path starts with a slash if it's not empty
  const formattedPath = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
  
  // Combine to form the full canonical URL
  const canonicalUrl = `${siteUrl}${formattedPath === "/" ? "" : formattedPath}`;
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {/* Also add og:url for social media consistency */}
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalURL;
