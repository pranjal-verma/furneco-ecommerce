import Banner from "@/components/Banner";
import React from "react";
import styles from "./index.module.scss";
import ProductInfoCard from "@/components/ProductInfoCard";
import WarrantyBanner from "@/components/WarrantyBanner";

function ShopPage() {
  const products = getProducts();
  return (
    <>
      <div>
        <Banner></Banner>
        {/* Filter and pagination */}
        <div className={styles.filter}></div>

        {/* Product Cards section */}
        <div className={styles.products_container}>
          {products.map((prod, i) => {
            return <ProductInfoCard key={i} imageUrl={prod.url} />;
          })}
        </div>
      </div>
      <WarrantyBanner />
    </>
  );
}

export default ShopPage;

function getProducts() {
  return [
    {
      url: "/couch.png",
      title: "Sultherine",
    },
    {
      url: "/dining.png",
      title: "Grito",
    },
    {
      url: "/banner.jpeg",
      title: "Lolito",
    },
    {
      url: "/dining.png",
      title: "Sultherine",
    },
    {
      url: "/dining.png",
      title: "Grito",
    },
    {
      url: "/banner.jpeg",
      title: "Lolito",
    },
    {
      url: "/bedroom.png",
      title: "Sultherine",
    },
    {
      url: "/couch.png",
      title: "Grito",
    },
    {
      url: "/dining.png",
      title: "Grito",
    },
    {
      url: "/banner.jpeg",
      title: "Lolito",
    },
    {
      url: "/bedroom.png",
      title: "Sultherine",
    },
    {
      url: "/couch.png",
      title: "Grito",
    },
  ];
}
