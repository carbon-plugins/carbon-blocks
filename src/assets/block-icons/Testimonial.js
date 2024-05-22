import * as React from "react";
const SvgTestimonial = (props) => (
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
    <g transform="translate(0 -.075)scale(.04793)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Testimonial_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Testimonial_svg__a)">
        <path
          d="M3 20.29V5c0-1.097.903-2 2-2h14c1.097 0 2 .903 2 2v10c0 1.097-.903 2-2 2H7.961a2 2 0 0 0-1.561.75l-2.331 2.914A.6.6 0 0 1 3 20.29Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: ".95px",
          }}
          transform="matrix(26.3889 0 0 26.5515 -66.667 -67.154)"
        />
        <path
          d="M10.894 10h-2c-.549 0-1-.451-1-1V8c0-.549.451-1 1-1h1c.548 0 1 .451 1 1zm0 0c0 1-1 2-2 3m7.212-3h-2c-.548 0-1-.451-1-1V8c0-.549.452-1 1-1h1c.549 0 1 .451 1 1zm0 0c0 1-1 2-2 3"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: ".95px",
            strokeLinecap: "round",
          }}
          transform="matrix(26.3889 0 0 26.5515 -66.667 -56.697)"
        />
      </g>
    </g>
  </svg>
);
export default SvgTestimonial;
