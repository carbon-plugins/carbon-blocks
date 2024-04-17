import * as React from "react";
const SvgAccordion = (props) => (
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
      transform="matrix(.04792 0 0 .04792 -.012 -.184)"
    />
    <path
      d="m3 10 2.5-2.5L3 5M3 19l2.5-2.5L3 14M10 6h11M10 12h11M10 18h11"
      style={{
        fill: "none",
        fillRule: "nonzero",
        stroke: "#18181b",
        strokeWidth: "1.2px",
      }}
      transform="translate(-.032 -.204)"
    />
  </svg>
);
export default SvgAccordion;
