"use client";
import React from "react";
import styles from "./index.module.scss";
import WarrantyBanner from "@/components/WarrantyBanner/WarrantyBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/navigation";
import StarRating from "@/components/StarRating";
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
        <div>
          <div className={styles.images_sections}></div>
          <div className={styles.product_info}>
            <div className={styles.info}>
              <p>Asgaard Sofa</p>
              <p>Rs. 150,000</p>
              <StarRating initialRating={0} />
            </div>
            <div className={styles.action_items}></div>
          </div>
        </div>
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
