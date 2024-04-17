import * as React from "react";
const SvgBlockSlider = (props) => (
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
      <clipPath id="Block_Slider_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Block_Slider_svg__a)">
        <path
          d="M17.5 8.5 21 12l-3.5 3.5"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#151826",
            strokeWidth: "1.16px",
          }}
          transform="translate(36.81 -7.548)scale(21.4623)"
        />
        <path
          d="M17.5 8.5 21 12l-3.5 3.5"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.16px",
          }}
          transform="rotate(-180 231.605 253.774)scale(21.4623)"
        />
        <path
          d="M21 3.6v16.8c0 .329-.271.6-.6.6H3.6a.603.603 0 0 1-.6-.6V3.6c0-.329.271-.6.6-.6h16.8c.329 0 .6.271.6.6"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "2.25px",
          }}
          transform="translate(116.667 116.667)scale(11.1111)"
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
          transform="matrix(23.7497 0 0 26.3889 -34.996 -66.667)"
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
          transform="matrix(-23.7497 0 0 -26.3889 534.994 566.667)"
        />
      </g>
    </g>
  </svg>
);
export default SvgBlockSlider;
