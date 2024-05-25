import React from "react";
import styles from "./index.module.scss";
function ProductRangeCard(props) {
  const { url = "", title = "" } = props;
  return (
    <>
      <div>
        <div className={styles.card_container}>
          <img
            alt="example"
            style={{
              objectFit: "cover",
              maxHeight: "100%",
              height: "100%",
              maxWidth: "100%",
              padding: 0,
              margin: 0,
              borderRadius: "10px",
            }}
            src={url}
          />
          <p className={styles.card_title}>{title}</p>
        </div>
      </div>
    </>
  );
}

export default ProductRangeCard;
