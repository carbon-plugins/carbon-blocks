import * as React from "react";
const SvgVerticalSlider = (props) => (
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
    <g transform="matrix(.04792 0 0 .04792 0 -.109)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Vertical_Slider_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Vertical_Slider_svg__a)">
        <path
          d="M17.5 8.5 21 12l-3.5 3.5"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.17px",
          }}
          transform="matrix(0 -21.4624 21.4624 0 -12.105 463.2)"
        />
        <path
          d="M17.5 8.5 21 12l-3.5 3.5"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#151826",
            strokeWidth: "1.17px",
          }}
          transform="matrix(0 21.4624 -21.4624 0 502.99 36.799)"
        />
        <path
          d="M22 17.347V19c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2v-1.653"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#151826",
            strokeWidth: 1,
            strokeLinejoin: "miter",
          }}
          transform="matrix(0 23.74981 -26.38892 0 566.667 -34.997)"
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
          transform="matrix(0 -23.74981 26.38892 0 -66.667 534.995)"
        />
        <path
          d="M21 3.6v16.8c0 .329-.271.6-.6.6H3.6a.603.603 0 0 1-.6-.6V3.6c0-.329.271-.6.6-.6h16.8c.329 0 .6.271.6.6"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "2.25px",
          }}
          transform="matrix(11.11113 0 0 11.11113 117.251 116.666)"
        />
        <path
          d="m3 16 7-3 10.64 4.896M16 10c-1.097 0-2-.903-2-2s.903-2 2-2 2 .903 2 2-.903 2-2 2"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "2.25px",
            strokeMiterlimit: 30,
          }}
          transform="matrix(11.11113 0 0 11.11113 117.251 116.666)"
        />
      </g>
    </g>
  </svg>
);
export default SvgVerticalSlider;
