import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/logos/main.svg"
          width={34}
          height={34}
          alt="Picture of the author"
        ></Image>
        <p>Furniro</p>
      </div>
      <div className={styles.navigation}>
        <p>Home</p>
        <p>Shop</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      {/* Navbar */}
    </div>
  );
}

export default Navbar;
