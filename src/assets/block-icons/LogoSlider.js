import * as React from "react";
const SvgLogoSlider = (props) => (
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
      <clipPath id="Logo_Slider_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Logo_Slider_svg__a)">
        <circle
          cx={12}
          cy={12}
          r={10}
          style={{
            fill: "none",
            stroke: "#151826",
            strokeWidth: "2.5px",
          }}
          transform="matrix(10 0 0 10 130 130)"
        />
        <path
          d="M17.5 8.5 21 12l-3.5 3.5"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.16px",
          }}
          transform="matrix(21.4624 0 0 21.4624 36.81 -7.548)"
        />
        <path
          d="M17.5 8.5 21 12l-3.5 3.5"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.16px",
          }}
          transform="matrix(-21.4624 0 0 -21.4624 463.21 507.548)"
        />
        <path
          d="M22 17.347V19c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2v-1.653"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: 1,
            strokeLinejoin: "miter",
          }}
          transform="matrix(23.74981 0 0 26.38892 -34.996 -66.667)"
        />
        <path
          d="M22 17.347V19c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2v-1.653"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: 1,
            strokeLinejoin: "miter",
          }}
          transform="matrix(-23.74981 0 0 -26.38892 534.996 566.668)"
        />
        <path
          d="M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9m0 1.5c4.1 0 7.5 3.12 7.5 7.22v.1c-1.4-.8-3.3-1.7-3.4-1.8-.2-.1-.5-.1-.8.1l-2.9 2.1-3.4-1.2c-.2-.1-.4 0-.6.1l-3.7 2.2c-.1-.5-.2-.72-.2-1.22 0-4.2 3.4-7.6 7.5-7.6m0 15c-3.1 0-5.7-1.59-6.9-4.19l3.7-2.2 3.5 1.2c.2.1.5 0 .7-.1l2.9-2.1c.8.4 2.5 1.2 3.5 1.9-.9 3.3-3.9 5.49-7.4 5.49"
          style={{
            fill: "#18181b",
            fillRule: "nonzero",
          }}
          transform="translate(100.596 100.388)scale(12.4503)"
        />
      </g>
    </g>
  </svg>
);
export default SvgLogoSlider;
