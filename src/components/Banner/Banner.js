import React from "react";
import styles from "./index.module.scss";
function Banner(props) {
  const { label = "Home" } = props;
  return (
    <>
      <div className={styles.banner}>
        <img className={styles.banner_image} src="/banner.jpeg" />
        <div className={styles.banner_info}>
          <p
            style={{
              fontFamily: "Poppins",
              padding: 0,
              margin: 0,
              fontWeight: 500,
              fontSize: "48px",
            }}
          >
            {label}
          </p>
        </div>
      </div>
      p
    </>
  );
}

export default Banner;
