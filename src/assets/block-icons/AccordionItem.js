import * as React from "react";
const SvgAccordionItem = (props) => (
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
      transform="matrix(.04792 0 0 .04792 .052 -.184)"
    />
    <path
      d="m3 10 2.5-2.5L3 5"
      style={{
        fill: "none",
        fillRule: "nonzero",
        stroke: "#18181b",
        strokeWidth: "1.2px",
      }}
      transform="translate(.033 4.296)"
    />
    <path
      d="M10 6h11"
      style={{
        fill: "none",
        fillRule: "nonzero",
        stroke: "#18181b",
        strokeWidth: "1.2px",
      }}
      transform="translate(.03 5.795)"
    />
  </svg>
);
export default SvgAccordionItem;
