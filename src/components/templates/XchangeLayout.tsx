import type { ReactNode } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

interface XchangeLayoutProps {
  children: ReactNode;
}

const XchangeLayout = ({ children }: XchangeLayoutProps) => {
  return (
    <div className="xchange-page">
      <Header />
      <div className="app-container">
        <main className="xchange-page__main">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default XchangeLayout;
