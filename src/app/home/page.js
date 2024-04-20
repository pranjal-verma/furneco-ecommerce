import React from "react";
import styles from "./index.module.scss";
import ProductRangeCard from "@/components/ProductRangeCard";
function Home() {
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
            <p>Browse range</p>
            <div>
              <ProductRangeCard title="Dining" url="/dining.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
