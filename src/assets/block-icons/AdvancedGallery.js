import * as React from "react";
const SvgAdvancedGallery = (props) => (
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
      strokeMiterlimit: 30,
    }}
    {...props}
  >
    <g transform="matrix(.04792 0 0 .04792 .041 -.109)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Advanced_Gallery_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Advanced_Gallery_svg__a)">
        <path
          d="m3 16 7-3 10.64 4.896M16 10c-1.097 0-2-.903-2-2s.903-2 2-2 2 .903 2 2-.903 2-2 2"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.12px",
          }}
          transform="matrix(22.2633 0 0 22.2671 19.645 20.724)"
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
            strokeMiterlimit: 4,
          }}
          transform="matrix(20.037 0 0 22.2671 47.443 20.724)"
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
            strokeMiterlimit: 4,
          }}
          transform="matrix(20.0058 0 0 22.2287 -27.508 -54.775)"
        />
      </g>
    </g>
  </svg>
);
export default SvgAdvancedGallery;
