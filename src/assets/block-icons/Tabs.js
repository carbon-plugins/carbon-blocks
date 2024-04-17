import * as React from "react";
const SvgTabs = (props) => (
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
    <g transform="translate(.034 -.034)scale(.04793)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Tabs_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Tabs_svg__a)">
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.19px",
          }}
          transform="matrix(19.92504 0 0 22.13894 49.15 22.582)"
        />
        <path
          d="M6.5 6v12"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.63px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="matrix(19.92504 0 0 8.59512 158.737 37.429)"
        />
        <path
          d="M2 7h20"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.25px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="matrix(19.92504 0 0 19.92504 49.15 52.665)"
        />
        <path
          d="M5.825 21.027 4 21c-1.097 0-2-.903-2-2V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v1.415"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.18px",
          }}
          transform="matrix(20 0 0 22.1894 -27.5 -54.068)"
        />
      </g>
    </g>
  </svg>
);
export default SvgTabs;
