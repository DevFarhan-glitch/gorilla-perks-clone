import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppChat from "../WhatsAppChat";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Smooth page load fade-in trigger
    setMounted(true);
    return () => setMounted(false);
  }, [location.pathname]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.05, // Trigger when 5% of the section is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before hitting the exact viewport edge
      }
    );

    // Dynamic selection of all sections on the current page to ensure scroll animations
    const elementsToReveal = document.querySelectorAll("section");
    elementsToReveal.forEach((el) => {
      if (!el.classList.contains("animate-on-scroll")) {
        el.classList.add("animate-on-scroll");
      }
      observer.observe(el);
    });

    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname, children]); // Re-run when page content or route updates

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        className={`flex-1 transition-all duration-700 ease-out transform ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {children}
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Layout;
