import * as React from "react";
const SvgMessage = (props) => (
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
    <g transform="scale(.04793)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Message_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Message_svg__a)">
        <path
          d="M7 12h10M7 8h6"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.14px",
          }}
          transform="matrix(26.3888 0 0 26.3888 -66.667 -66.122)"
        />
        <path
          d="M3 20.29V5c0-1.097.903-2 2-2h14c1.097 0 2 .903 2 2v10c0 1.097-.903 2-2 2H7.961a2 2 0 0 0-1.561.75l-2.331 2.914A.6.6 0 0 1 3 20.29Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: ".95px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
          }}
          transform="matrix(26.3888 0 0 26.3888 -66.667 -64.122)"
        />
      </g>
    </g>
  </svg>
);
export default SvgMessage;
