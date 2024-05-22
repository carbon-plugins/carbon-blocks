import * as React from "react";
const SvgIcons = (props) => (
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
    <g transform="scale(.04801)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Icons_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Icons_svg__a)">
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
          d="M2 9.146V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2h-4.865"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "2.98px",
          }}
          transform="matrix(9.26694 0 0 10.25586 192.692 75.672)"
        />
        <path
          d="M5025.8 1580.38q.542-.005 1.085-.005c58.99 0 106.882 47.892 106.882 106.881"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "27.74px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 30,
          }}
          transform="matrix(1.08378 0 0 1.07949 -5235.641 -1530.338)"
        />
        <path
          d="M5133.76 1687.25c0 58.99-47.892 106.882-106.882 106.882s-106.882-47.892-106.882-106.882c0-58.627 47.306-106.293 105.797-106.876"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "26.96px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 30,
          }}
          transform="matrix(1.08378 0 0 1.07949 -5235.641 -1530.338)"
        />
      </g>
    </g>
  </svg>
);
export default SvgIcons;
