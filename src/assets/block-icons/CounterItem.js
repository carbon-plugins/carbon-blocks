import * as React from "react";
const SvgCounterItem = (props) => (
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
    <g transform="scale(.048)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Counter_Item_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Counter_Item_svg__a)">
        <path
          d="M13 16V8l-3 3"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.01px",
          }}
          transform="translate(-109.314 -104.407)scale(29.57391)"
        />
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
          }}
          transform="matrix(23.74998 0 0 26.38884 -34.393 -66.667)"
        />
      </g>
    </g>
  </svg>
);
export default SvgCounterItem;
