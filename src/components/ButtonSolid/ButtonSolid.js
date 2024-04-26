"use client";
import React from "react";

function ButtonSolid(props) {
  const { onClick = () => {}, label = "Click", invertColors = false } = props;
  let [bgColor, color] = ["white", "#B88E2F"];
  if (invertColors) {
    [bgColor, color] = ["#B88E2F", "white"];
  }
  return (
    <>
      <div
        onClick={onClick}
        style={{
          cursor: "pointer",
          height: "50px",
          width: "202px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color,
          backgroundColor: bgColor,
          fontSize: "14px",
          fontWeight: 600,
          position: "relative",
          fontFamily: "Poppins",
        }}
      >
        {label}
      </div>
    </>
  );
}

export default ButtonSolid;
