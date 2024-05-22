import * as React from "react";
const SvgSlide = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }}
    {...props}
  >
    <path
      d="M0 0h500v500H0z"
      style={{
        fill: "none",
      }}
      transform="matrix(.04792 0 0 .04792 -.041 -.109)"
    />
    <path
      d="M2 3v18"
      style={{
        fill: "none",
        fillRule: "nonzero",
        stroke: "#18181b",
        strokeWidth: "1.31px",
      }}
      transform="matrix(1.08038 0 0 .7238 -1.006 3.185)"
    />
    <path
      d="M18 5.763v12.474C18 19.762 17.171 21 16.149 21H7.851C6.829 21 6 19.762 6 18.237V5.763C6 4.238 6.829 3 7.851 3h8.298C17.171 3 18 4.238 18 5.763"
      style={{
        fill: "none",
        stroke: "#18181b",
        strokeWidth: "1.31px",
      }}
      transform="matrix(1.08038 0 0 .7238 -1.006 3.185)"
    />
    <path
      d="M22 3v18"
      style={{
        fill: "none",
        fillRule: "nonzero",
        stroke: "#18181b",
        strokeWidth: "1.31px",
      }}
      transform="matrix(1.08038 0 0 .7238 -1.006 3.185)"
    />
  </svg>
);
export default SvgSlide;
