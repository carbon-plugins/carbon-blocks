import * as React from "react";
const SvgAdvancedButton = (props) => (
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
    <g transform="translate(0 .007)scale(.048)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Advanced_Button_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Advanced_Button_svg__a)">
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
          d="M3364.83 1523.31h78"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "12.54px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 30,
          }}
          transform="matrix(2.14814 0 0 1.82692 -7145.09 -2534.34)"
        />
        <path
          d="M5 12h14"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "4.12px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="translate(285.352 161.19)scale(7.28571)"
        />
        <path
          d="M11.33 5.67 19 12l-7.67 6.33"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "3.43px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="translate(285.352 161.19)scale(7.28571)"
        />
      </g>
    </g>
  </svg>
);
export default SvgAdvancedButton;
