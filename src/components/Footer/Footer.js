import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_info}>
          <div className={styles.address}>
            <p style={{ fontWeight: "700", fontSize: "24px" }}> Furnico</p>
            <p
              style={{ fontWeight: "400", fontSize: "16px", color: "#9F9F9F" }}
            >
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className={styles.links_sections}>
            <div className={styles.links}>
              <p className={styles.heading}>Links</p>
              <Link href="/home">Home</Link>
              <Link href={"/shop"}>Shop </Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
            <div className={styles.links}>
              <p>Help</p>
              <Link href="/home">Payment Options</Link>
              <Link href={"/shop"}>Returns </Link>
              <Link href={"/about"}>Privacy Policies</Link>
            </div>
            <div className={styles.links}>
              <p>Newletter</p>
              <Link href="/home">Home</Link>
              <Link href={"/shop"}>Shop </Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
          </div>
        </div>
        <p>2024 furino. All rights reverved</p>
      </div>
    </>
  );
}

export default Footer;
