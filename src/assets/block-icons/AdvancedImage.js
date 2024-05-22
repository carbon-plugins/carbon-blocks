import * as React from "react";
const SvgAdvancedImage = (props) => (
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
    <g transform="scale(.048)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Advanced_Image_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Advanced_Image_svg__a)">
        <path
          d="m3 16 7-3 10.64 4.896M16 10c-1.097 0-2-.903-2-2s.903-2 2-2 2 .903 2 2-.903 2-2 2"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.11px",
          }}
          transform="matrix(26.38437 0 0 26.3888 -67.93 -66.667)"
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
            strokeMiterlimit: 4,
          }}
          transform="matrix(23.74597 0 0 26.3888 -34.987 -66.667)"
        />
      </g>
    </g>
  </svg>
);
export default SvgAdvancedImage;
