import * as React from "react";
const SvgBadge = (props) => (
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
    <g transform="scale(.048)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Badge_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Badge_svg__a)">
        <path
          d="M2 20.558v-5.116C2 14.598 2.598 14 3.442 14h17.116c1.035 0 1.442.606 1.442 1.442v5.116c0 .829-.613 1.442-1.442 1.442H3.442C2.5 22 2 21.5 2 20.558Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.05px",
          }}
          transform="translate(-35 -177.5)scale(23.75)"
        />
        <path
          d="M18 8c1.646 0 3-1.354 3-3s-1.354-3-3-3-3 1.354-3 3 1.354 3 3 3"
          style={{
            fill: "#18181b",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.28px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="translate(-93.573 189.976)scale(11.7284)"
        />
        <path
          d="M3364.83 1523.31h78"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "13.94px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 30,
          }}
          transform="matrix(2.32843 0 0 1.82692 -7598.74 -2534.34)"
        />
      </g>
    </g>
  </svg>
);
export default SvgBadge;
