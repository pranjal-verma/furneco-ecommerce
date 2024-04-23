import React from "react";
import styles from "./index.module.scss";
import ProductRangeCard from "@/components/ProductRangeCard";
import ProductInfoCard from "@/components/ProductInfoCard";
function Home() {
  const productRange = getProductsRange();
  return (
    <>
      <div className={styles.home_container}>
        <div className="background-image">
          <img
            src="/homepage-background.jpeg"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        {/* Range */}
        <div>
          <div className={styles.range_card}>
            <div className={styles.title_container}>
              <p className={styles.title}>Browse range</p>
              <p className={styles.subheading}> Lorem ipsum dolor sit amet</p>
            </div>
            <div className={styles.range_scroll}>
              {productRange.map((prod) => {
                return <ProductRangeCard title={prod.title} url={prod.url} />;
              })}
            </div>
          </div>
        </div>
        <div>
          <div className={styles.range_card}>
            <div className={styles.title_container}>
              <p className={styles.title}>Our Products</p>
            </div>
            <div className={styles.range_scroll}>
              {[...productRange, productRange[0]].map((prod) => {
                return <ProductInfoCard />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

function getProductsRange() {
  return [
    {
      title: "Dining",
      url: "/dining.png",
    },
    {
      title: "Living",
      url: "living.png",
    },
    {
      title: "Bedroom",
      url: "/bedroom.png",
    },
  ];
}
