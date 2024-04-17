import * as React from "react";
const SvgCounter = (props) => (
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
      <clipPath id="Counter_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Counter_svg__a)">
        <path
          d="M13 16V8l-3 3"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.01px",
          }}
          transform="matrix(25.2292 0 0 25.2292 -164.904 -54.135)"
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
        <path
          d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.2px",
          }}
          transform="translate(-80.07 -268.737)scale(24.2942)"
        />
        <path
          d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5 0 1.097-.903 2-2 2M17 17.5c2 1.5 4 .3 4-1.5 0-1.097-.903-2-2-2"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: ".99px",
          }}
          transform="matrix(24.9733 0 0 24.9733 -94.332 70.52)"
        />
        <path
          d="M114.237.6v22.8"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "1.4px",
            strokeLinejoin: "miter",
            strokeMiterlimit: 30,
            strokeDasharray: "1.4,2.8,0,0,0,0",
          }}
          transform="translate(-2125)scale(20.8333)"
        />
      </g>
    </g>
  </svg>
);
export default SvgCounter;
