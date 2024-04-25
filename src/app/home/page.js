import React from "react";
import styles from "./index.module.scss";
import ProductRangeCard from "@/components/ProductRangeCard";
import ProductInfoCard from "@/components/ProductInfoCard";
function Home() {
  const productRange = getProductsRange();
  const products = getProducts();
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
              {[...products, products[0]].map((prod) => {
                return <ProductInfoCard imageUrl={prod.url} />;
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

function getProducts() {
  return [
    {
      url: "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CzDbAu76X5kMArUMYpFLFJf8WB0We2dCiPUA6YGiQIoLnIAX7RYq2iRnP7P6OJJQjQ-ih~~PmsljDh~rwX9~hIHJXpAmPbPkOPwsF4vOQGhk7EBmLBqIcHHeeVmTZ2CWqIUV-8Vjf99nbD4WDvjmxPDkXLvf1M5BjOEZ3YSPisl-AlTJAflbgsg3jdHrmrgRC8CahLJl-VXkNZhsFqP-Pje8dOquBN03EEdF5cAnpfNScOoRd43R~aiCBVChIyWMyol81SejYpe8hWCCt2tvgcxecMD-pHr~JgYksvipEQPPM6s-ADRkk2PIBNxk3HFcRnPr6oF2AeR6dJsW8uiqsQ__",
      title: "Sultherine",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lFD09JNwIakJOEG45Lxl8hwG2GJyrNJrNgPJGmt~LTrUKaBKmXpg8S7HfQPzCPt4oXnpbJxgJfnouG6YIMuVNlmJn45CMyVLekH84YXTkH5C1Ki8JcJ~6MZjeT70TnrK55J2wtWLKwKLz2-CC63cusLr0K81sN9OWEvkkPUhHkl4edV92GjvX-ycGOLtyJr1TaBuNSo0jRP5DmAsUXKn4hC4gi7iBMHZBkSj1tMZX9ynlKTBjS~zNaE8fMQw9~Cjzj5ltrnL8bpcz9v9rwCipUPkbuCwaqcCA856DZPZrrIl5WhOyZK26fDqNFF4O~P0JMumZbOKlBWDSZ9bNQo-vw__",
      title: "Grito",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/3c0a/6c98/3f9e66e49766034d57360d64e957ff6a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZHUZAPcu8gBwi~y~xUYpchTGJd0jlFrnGjam-xY8tedejc8R5jDGYAVMMPOGCYcH4xaTvzVdGqJT63fJg1VCyd7~81RNksSQyx-dtaIf16u9R5CzUtPp9B~MnttVUL~t2hgQbXQECuw~3hBxzo6JfYqbB4suzZo00mQ6d9sMSzdfHxJLpumlx0yqG2MmO7Z1c1FIwVawdtawzGt6abSpQPyiEmhkmOYkO3veej3u8e7hgjy0vI44qwYCVgsGk~ln03kodSKO4MmiOiaVUFp9XZGbXAR5boyRO1WpKY7a-LjzvERtoyukv78XYLVIZkO44N1hasl5XohrG2B3JfG3Q__",
      title: "Lolito",
    },
  ];
}
