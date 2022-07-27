import React from "react";

import styles from "./Footer.module.scss"

export default function Footer() {
    return (
      <footer role="contentinfo">
        <div className={styles.inner}>
          <div className={styles.copyright}>© 2022 Ahram Lim</div>
          <span className="blind">Footer Navigation</span>
        </div>
      </footer>
    )
}