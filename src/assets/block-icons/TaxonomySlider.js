import * as React from "react";
const SvgTaxonomySlider = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
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
      <clipPath id="Taxonomy_Slider_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Taxonomy_Slider_svg__a)">
        <path
          d="M22 17.347V19c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2v-1.653"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#151826",
            strokeWidth: 1,
          }}
          transform="matrix(23.71615 0 0 26.35153 -34.946 -66.572)"
        />
        <path
          d="M22 17.347V19c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2v-1.653"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: 1,
          }}
          transform="matrix(-23.71615 0 0 -26.35153 534.238 565.865)"
        />
        <path
          d="M17.5 8.5 21 12l-3.5 3.5"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.16px",
            strokeLinejoin: "round",
          }}
          transform="translate(36.757 -7.537)scale(21.4319)"
        />
        <path
          d="M17.5 8.5 21 12l-3.5 3.5"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.16px",
            strokeLinejoin: "round",
          }}
          transform="rotate(-180 231.277 253.415)scale(21.4319)"
        />
      </g>
    </g>
  </svg>
);
export default SvgTaxonomySlider;
