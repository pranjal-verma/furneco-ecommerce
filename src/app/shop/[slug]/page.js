"use client";
import React from "react";
import styles from "./index.module.scss";
import WarrantyBanner from "@/components/WarrantyBanner/WarrantyBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/navigation";
function ProductDetails({ params }) {
  const router = useRouter();
  const crumbs = [
    { title: "Home", path: "/home" },
    { title: "Shop", path: "/shop" },
    { title: "Current Page", path: `/shop/${params.slug}}` },
  ];
  return (
    <>
      <div>
        {/* Filter and pagination */}
        <div className={styles.filter}>
          <div className={styles.breadcrumb_container}>
            <Breadcrumb crumbs={crumbs} />
          </div>
        </div>

        {/* Product Cards section */}
        {/* <div className={styles.products_container}>
          {products.map((prod, i) => {
            return <ProductInfoCard key={i} imageUrl={prod.url} />;
          })}
        </div> */}
      </div>
      <WarrantyBanner />
    </>
  );
}

export default ProductDetails;
function getProductDetailsData() {
  return {
    status: "success",
    data: {
      id: 1,
      name: "Modern Coffee Table",
      category: "tables",
      price: 199.99,
      description: "A sleek and modern coffee table with tempered glass top.",
      dimensions: {
        width: 120,
        height: 50,
        depth: 70,
      },
      material: "Glass, Metal",
      image_urls: [
        "https://example.com/images/modern_coffee_table_1.jpg",
        "https://example.com/images/modern_coffee_table_2.jpg",
      ],
    },
  };
}
