import React, { Component } from "react";
import styles from "../../../styles/Header.module.css";
import { useRouter } from "next/router";

function Header() { 
    const router = useRouter();
    return (
      <nav className={`${styles.container} ${styles.headerNav}`}>
        <div className="d-flex flex-row justify-content-between">
          <div className={`${styles.headerTitle} p-2`}>
            <h2>FazzPay</h2>
          </div>
          <div className="p-2 d-flex flex-row">
            <div className={`${styles.loginButton} p-2 px-3 mx-3`}
             onClick={() => {
              router.push("/login");
            }}
            >Login</div>
            <div className={`${styles.signButton} p-2 px-3`}
             onClick={() => {
              router.push("/register");
            }}
            >Sign Up</div>
          </div>
        </div>
      </nav>
    );
  }

export default Header;
