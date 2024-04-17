import * as React from "react";
const SvgPricingTable = (props) => (
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
    <g transform="translate(.034 -.075)scale(.04793)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Pricing_table_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Pricing_table_svg__a)">
        <path
          d="M15 8.5c-.685-.685-1.891-1.161-3-1.191M9 15c.644.86 1.843 1.35 3 1.391m0-9.082c-1.32-.036-2.5.561-2.5 2.191 0 3 5.5 1.5 5.5 4.5 0 1.711-1.464 2.446-3 2.391m0-9.082V5.5m0 10.891V18.5"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.48px",
          }}
          transform="translate(84.423 84.423)scale(16.9231)"
        />
        <path
          d="M5.825 21.027 4 21c-1.097 0-2-.903-2-2V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v1.415"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.18px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
          }}
          transform="matrix(20 0 0 22.2222 -27.5 -54.759)"
        />
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.18px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
          }}
          transform="matrix(20 0 0 22.2222 47.5 20.833)"
        />
      </g>
    </g>
  </svg>
);
export default SvgPricingTable;
