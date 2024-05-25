import React from "react";
import styles from "./index.module.scss";
import { ShareAltOutlined, HeartOutlined } from "@ant-design/icons";
import ButtonSolid from "../ButtonSolid";
function ProductInfoCard(props) {
  const {
    imageUrl = "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CzDbAu76X5kMArUMYpFLFJf8WB0We2dCiPUA6YGiQIoLnIAX7RYq2iRnP7P6OJJQjQ-ih~~PmsljDh~rwX9~hIHJXpAmPbPkOPwsF4vOQGhk7EBmLBqIcHHeeVmTZ2CWqIUV-8Vjf99nbD4WDvjmxPDkXLvf1M5BjOEZ3YSPisl-AlTJAflbgsg3jdHrmrgRC8CahLJl-VXkNZhsFqP-Pje8dOquBN03EEdF5cAnpfNScOoRd43R~aiCBVChIyWMyol81SejYpe8hWCCt2tvgcxecMD-pHr~JgYksvipEQPPM6s-ADRkk2PIBNxk3HFcRnPr6oF2AeR6dJsW8uiqsQ__",
    title,
  } = props;
  return (
    <>
      <div className={styles.card_container}>
        <div className={styles.popup}>
          <ButtonSolid label="Add to cart" />
          <div className={styles.popup_cta}>
            <p>
              <ShareAltOutlined /> Share
            </p>
            <p>
              <HeartOutlined /> Like
            </p>
            {/* TODO: ADD compare ICON and CTA if implemeneted */}
            {/* <p>
              <SettingFilled></SettingFilled>
            </p> */}
          </div>
        </div>
        <div className={styles.hover_div}></div>
        <div className={styles.image_container}>
          <img style={{ objectFit: "cover" }} src={imageUrl} />
        </div>
        <div className={styles.info_container}>
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Slytherin</p>
          <p style={{ color: "#898989", fontWeight: 500, fontSize: "14px" }}>
            Stylish Cafe chair{" "}
          </p>
          <div>
            <p style={{ color: "#3A3A3A", fontWeight: 500, fontSize: "18px" }}>
              ₹ 18,500{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfoCard;
