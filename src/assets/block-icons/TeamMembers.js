import * as React from "react";
const SvgTeamMembers = (props) => (
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
    <g transform="translate(-.007 -.075)scale(.04793)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Team_Members_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Team_Members_svg__a)">
        <path
          d="M7 18v-1c0-2.743 2.257-5 5-5s5 2.257 5 5v1M1 18v-1c0-1.646 1.354-3 3-3m19 4v-1c0-1.646-1.354-3-3-3m-8-2c1.646 0 3-1.354 3-3s-1.354-3-3-3-3 1.354-3 3 1.354 3 3 3m-8 2c1.097 0 2-.903 2-2s-.903-2-2-2-2 .903-2 2 .903 2 2 2m16 0c1.097 0 2-.903 2-2s-.903-2-2-2-2 .903-2 2 .903 2 2 2"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.87px",
          }}
          transform="translate(92.875 26.704)scale(13.385)"
        />
        <path
          d="M3364.83 1523.31h78"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "8.3px",
            strokeMiterlimit: 30,
          }}
          transform="matrix(3.84615 0 0 1.84432 -12840.9 -2479.8)"
        />
        <path
          d="M110.099 86.423h12.897"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "1.31px",
            strokeLinejoin: "miter",
            strokeMiterlimit: 30,
          }}
          transform="matrix(17.2816 0 0 20.8629 -1801.96 -1410.04)"
        />
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#151826",
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
export default SvgTeamMembers;
