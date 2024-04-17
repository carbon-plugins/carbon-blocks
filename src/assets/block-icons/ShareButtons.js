import * as React from "react";
const SvgShareButtons = (props) => (
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
    <g transform="matrix(.04792 0 0 .04792 0 -.109)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Share_Buttons_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Share_Buttons_svg__a)">
        <path
          d="M18 22c1.646 0 3-1.354 3-3s-1.354-3-3-3-3 1.354-3 3 1.354 3 3 3m0-14c1.646 0 3-1.354 3-3s-1.354-3-3-3-3 1.354-3 3 1.354 3 3 3M6 15c1.646 0 3-1.354 3-3S7.646 9 6 9s-3 1.354-3 3 1.354 3 3 3"
          style={{
            fill: "#18181b",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.28px",
          }}
          transform="matrix(11.7284 0 0 11.7284 106.318 109.26)"
        />
        <path
          d="m15.5 6.5-7 4m0 3 7 4"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "2.56px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
          }}
          transform="matrix(11.7284 0 0 11.7284 106.318 109.26)"
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
          transform="matrix(23.75 0 0 26.3889 -34.416 -66.667)"
        />
      </g>
    </g>
  </svg>
);
export default SvgShareButtons;
