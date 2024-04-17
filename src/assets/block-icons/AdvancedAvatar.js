import * as React from "react";
const SvgAdvancedAvatar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    {...props}
  >
    <g transform="translate(0 .007)scale(.048)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Advanced_Avatar_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Advanced_Avatar_svg__a)">
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: 1,
          }}
          transform="matrix(23.6458 0 0 26.2779 -33.75 -65.335)"
        />
        <path
          d="M7 18v-1c0-2.743 2.257-5 5-5s5 2.257 5 5v1m-5-6c1.646 0 3-1.354 3-3s-1.354-3-3-3-3 1.354-3 3 1.354 3 3 3"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: ".96px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="translate(-124.073 -86.36)scale(31.1728)"
        />
      </g>
    </g>
  </svg>
);
export default SvgAdvancedAvatar;
