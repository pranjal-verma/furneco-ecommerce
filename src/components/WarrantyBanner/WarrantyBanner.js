import React from "react";
import styles from "./warranty.module.scss";
import {
  TrophyOutlined,
  CheckCircleOutlined,
  CustomerServiceOutlined,
  TruckOutlined,
} from "@ant-design/icons";
function WarrantyBanner() {
  return (
    <div className={styles.jumbotron}>
      {/*  */}
      <div className={styles.banner_item}>
        <div className={styles.icon}>
          <TrophyOutlined width="60px" height="60px" style={{fontSize:"60px"}} />
        </div>
        <div className={styles.icon_label}>
          <p className={styles.headline}>High Quality</p>
          <p className={styles.byline}> craftem from top materials</p>
        </div>
      </div>

      <div className={styles.banner_item}>
        <div className={styles.icon}>
          <CheckCircleOutlined />
        </div>
        <div className={styles.icon_label}>
          <p className={styles.headline}>Warranty Protections</p>
          <p className={styles.byline}> Over 2 years</p>
        </div>
      </div>

      <div className={styles.banner_item}>
        <div className={styles.icon}>
          <TruckOutlined />
        </div>
        <div className={styles.icon_label}>
          <p className={styles.headline}>Free Shipping</p>
          <p className={styles.byline}> above 5000 purchase</p>
        </div>
      </div>

      <div className={styles.banner_item}>
        <div className={styles.icon}>
          <CustomerServiceOutlined />
        </div>
        <div className={styles.icon_label}>
          <p className={styles.headline}>24 / 7 Support</p>
          <p className={styles.byline}>Dedicated Support</p>
        </div>
      </div>
    </div>
  );
}

export default WarrantyBanner;
