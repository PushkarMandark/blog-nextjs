import React, { useState } from "react";
import Image from "next/image";
import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  const [isActive, setisActive] = useState(false);

  const MobMenuOnClick = () => {
    setisActive(!isActive);
    console.log(isActive);
  };
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__main}`}>
        <div>
          <h1>Avignity</h1>
          {/* <Image
            src="/vercel.svg"
            alt="Avighnity logo"
            width="100"
            height="100"
            className={styles.header__logoImg}
          /> */}
        </div>

        <nav>
          <div className={styles.header__nav__menu}>
            <ul className="grid">
              <li>Home</li>
              <li>About Us</li>
              <li>Blogs</li>
              <li>Our Work</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </nav>
        <button
          onClick={MobMenuOnClick}
          className={`${styles.hamburger} ${isActive ? styles.isActive : ""}`}
        >
          <div className={styles.bar}></div>
        </button>
      </div>
      <nav>
        <div className={styles.header__mobile}>
          <ul
            className={`${styles.header__mobile_nav} ${
              isActive ? styles.isActive : ""
            }`}
          >
            <li>Home</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Our Work</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
