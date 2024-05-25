"use client";
import React from "react";
import styles from "./index.module.scss";
import WarrantyBanner from "@/components/WarrantyBanner/WarrantyBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/navigation";
import StarRating from "@/components/StarRating";
import ButtonSolid from "@/components/ButtonSolid";
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
        <div className={styles.info}>
          <div className={styles.images_sections}>
            <ProductImageCard />
          </div>
          <div className={styles.product_info}>
            <div className={styles.details}>
              <p style={{ fontSize: "42px", fontWeight: 400 }}>Asgaard Sofa</p>
              <p
                style={{ fontSize: "24px", fontWeight: 500, color: "#9F9F9F" }}
              >
                Rs. 150,000
              </p>
              <p style={{ fontSize: "13px", fontWeight: 400 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <StarRating initialRating={0} />
            </div>

            <div className={styles.action_items}>
              <Counter />
              <ButtonSolid label={"Add to cart"} invertColors={true} />
            </div>
          </div>
        </div>
      </div>
      <WarrantyBanner />
    </>
  );
}
// This will return a component that will display image from getProductDetailsData
// this component should be displayed in images_section div which should be on the right side of the product_info div
function ProductImageCard() {
  const imageSrc =
    "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const imageStyle = {
    maxWidth: "100%",
  };

  const [mainImage, setMainImage] = React.useState(imageSrc);
  const [previewImages, setPreviewImages] = React.useState([
    "https://images.pexels.com/photos/6123320/pexels-photo-6123320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6123320/pexels-photo-6123320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.preview}>
        {previewImages.map((image, index) => (
          <img
            key={index}
            src={image}
            style={{
              width: "100px",
              cursor: "pointer",
              height: "100px",
              margin: "0 5px 5px 5px",
            }}
            alt={`Preview ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      <img src={mainImage} className={styles.main_image} />
    </div>
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

// Returns a counter component which will display a counter and a button to increment and decrement the counter, counter will inform how many items to add in cart
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button
        style={{ border: "1px solid black", background: "transparent" }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={{ border: "1px solid black", background: "transparent" }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
