import React from "react";
import styles from "./index.module.scss";
import ProductRangeCard from "@/components/ProductRangeCard";
import ProductInfoCard from "@/components/ProductInfoCard";
import ButtonSolid from "@/components/ButtonSolid";
function Home() {
  const productRange = getProductsRange();
  const products = getProducts();
  return (
    <>
      <div className={styles.home_container}>
        <div className="background-image">
          <div className={styles.collection_popup}>
            <p style={{ fontWeight: "600", color: "#333333" }}>New Arrivals</p>
            <p style={{ color: "#B88E2F", fontWeight: 700, fontSize: "52px" }}>
              Discover Our New Collection
            </p>
            <p style={{ fontWeight: 400, fontSize: "18px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ButtonSolid label={"Buy Now"} invertColors={true} />
          </div>
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
              {productRange.map((prod, i) => {
                return (
                  <ProductRangeCard key={i} title={prod.title} url={prod.url} />
                );
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
              {products.map((prod, i) => {
                return <ProductInfoCard key={i} imageUrl={prod.url} />;
              })}
            </div>
          </div>
        </div>
        <div className={styles.inspirations_card}>
          {/* Carousel */}
          <div className={styles.explore_inspiration}>
            <p style={{ fontSize: "40px", fontWeight: "700" }}>
              50+ Beautiful room insipiration
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                margin: "5px 0 10px 0",
                color: "#616161",
              }}
            >
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <ButtonSolid label="Browse" invertColors={true}></ButtonSolid>
          </div>
          <div className={styles.carousel_container}>
            <div className={styles.carousel_active_image}>
              <img src="/banner.jpeg" />
            </div>
            <div className={styles.carousel_passsive_image}>
              <img src={products[1].url} />
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

function getProducts() {
  return [
    {
      url: "/couch.png",
      title: "Sultherine",
    },
    {
      url: "/lamp.png",
      title: "Grito",
    },
    {
      url: "/dining.png",
      title: "Lolito",
    },
    {
      url: "/bedroom.png",
      title: "Sultherine",
    },
    {
      url: "/couch2.png",
      title: "Grito",
    },
    {
      url: "/couch.png",
      title: "Lolito",
    },
    {
      url: "/bedroom.png",
      title: "Sultherine",
    },
    {
      url: "/bedroom.png",
      title: "Grito",
    },
  ];
}
