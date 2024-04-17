import * as React from "react";
const SvgSocialMedias = (props) => (
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
    <g transform="matrix(.04792 0 0 .04792 0 -.109)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Social_Medias_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Social_Medias_svg__a)">
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: 1,
          }}
          transform="matrix(23.75 0 0 26.3889 -34.416 -66.667)"
        />
        <path
          d="M18 22c1.646 0 3-1.354 3-3s-1.354-3-3-3-3 1.354-3 3 1.354 3 3 3m0-14c1.646 0 3-1.354 3-3s-1.354-3-3-3-3 1.354-3 3 1.354 3 3 3M6 15c1.646 0 3-1.354 3-3S7.646 9 6 9s-3 1.354-3 3 1.354 3 3 3"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.94px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="matrix(15.09046 0 0 15.09046 65.973 68.915)"
        />
        <path
          d="m15.5 6.5-7 4m0 3 7 4"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.94px",
          }}
          transform="matrix(15.09046 0 0 15.09046 65.973 68.915)"
        />
      </g>
    </g>
  </svg>
);
export default SvgSocialMedias;
