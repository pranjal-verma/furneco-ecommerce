import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import Link from "next/link";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/logos/main.svg"
          width={50}
          height={32}
          style={{ marginTop: "6px" }}
          alt="Picture of the author"
        ></Image>
        <p>Furniro</p>
      </div>
      <div className={styles.navigation}>
      <Link href="/home">  <p>Home</p> </Link>
      <Link href="/shop">  <p>Shop</p> </Link>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className={styles.navbar_icons}>
        <div className={styles.navbar_icon_container}>
          <UserAddOutlined />
        </div>
        <div className={styles.navbar_icon_container}>
          <SearchOutlined />
        </div>
        <div className={styles.navbar_icon_container}>
          <HeartOutlined />
        </div>
        <div className={styles.navbar_icon_container}>
          <ShoppingCartOutlined />
        </div>
      </div>
      {/* Navbar */}
    </div>
  );
}

export default Navbar;
