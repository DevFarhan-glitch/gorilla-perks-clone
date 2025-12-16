import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppChat from "../WhatsAppChat";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Layout;
