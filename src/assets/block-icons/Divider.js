import * as React from "react";
const SvgDivider = (props) => (
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
    <g transform="matrix(.04792 0 0 .04792 0 -.15)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Divider_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Divider_svg__a)">
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
          d="M4.471 12H29.81"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.54px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="matrix(14.1939 0 0 18.1092 7.719 32.69)"
        />
        <path
          d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.38px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="matrix(19.402 0 0 -16.7671 14.235 212.364)"
        />
        <path
          d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.38px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="matrix(19.402 0 0 -16.7671 14.235 690.048)"
        />
      </g>
    </g>
  </svg>
);
export default SvgDivider;
