// src/components/Layout/Layout.tsx

import React, {ReactNode} from "react";
import {Link} from "react-router-dom";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.layoutHeader}>
        <nav className={styles.layoutNav}>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>

      <main className={styles.layoutContent}>{children}</main>
    </div>
  );
};

export default Layout;
