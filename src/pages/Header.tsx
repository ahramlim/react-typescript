import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss"

export default function Header() {
    return (    
      <header>
          <div className={styles.inner}>
            <div className={styles.logo}>
              <Link to='/'>A</Link>
            </div>  
            <span className="blind">Navigation</span>
            <nav id="nav">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='About'>About</Link></li>
                    <li><Link to='Main'>Main</Link></li>
                    <li><Link to='Board'>Board</Link></li>
                    <li><Link to='Contact'>Contact</Link></li>
                </ul>
            </nav>
            <button type="button" className={styles.icon}><span className={styles.logo_line}></span>  mobile navigation</button>
          </div>
      </header>   
    )
}