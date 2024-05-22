import * as React from "react";
const SvgTab = (props) => (
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
    <g transform="translate(0 -.034)scale(.04793)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Tab_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Tab_svg__a)">
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: 1,
          }}
          transform="matrix(23.75 0 0 26.3889 -35 -66.667)"
        />
        <path
          d="M6.5 6v12"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.37px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="matrix(23.75 0 0 10.2451 95.625 -48.97)"
        />
        <path
          d="M2 7h20"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.05px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="translate(-35 -30.809)scale(23.75)"
        />
      </g>
    </g>
  </svg>
);
export default SvgTab;
