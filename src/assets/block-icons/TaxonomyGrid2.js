import * as React from "react";
const SvgTaxonomyGrid2 = (props) => (
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
      transform="matrix(.04792 0 0 .04792 0 -.15)"
    />
    <path
      d="M10 4v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1M21 4v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1M21 15v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1M10 15v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1"
      style={{
        fill: "none",
        stroke: "#18181b",
        strokeWidth: "1.2px",
      }}
      transform="translate(.077 -.17)"
    />
  </svg>
);
export default SvgTaxonomyGrid2;
