import * as React from "react";
const SvgSignature = (props) => (
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
      <clipPath id="Signature_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Signature_svg__a)">
        <path
          d="M20 19.5v.5c0 1.097-.903 2-2 2H6c-1.097 0-2-.903-2-2V4c0-1.097.903-2 2-2h8.5L18 5.5"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.05px",
          }}
          transform="matrix(23.7837 0 0 23.69415 -57.29 -34.135)"
        />
        <path
          d="M140.746 120.807h5.13"
          style={{
            fill: "none",
            stroke: "#151826",
            strokeWidth: "1.4px",
            strokeLinejoin: "miter",
            strokeMiterlimit: 30,
          }}
          transform="matrix(20.8629 0 0 20.86286 -2837.357 -2128.019)"
        />
        <path
          d="M18.42 9.61a2.1 2.1 0 0 1 1.485-.615c1.152 0 2.1.948 2.1 2.1a2.1 2.1 0 0 1-.615 1.485L16.95 17 13 18l.99-3.95z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.23px",
          }}
          transform="matrix(23.7837 0 0 23.69415 -57.29 -34.135)"
        />
      </g>
    </g>
  </svg>
);
export default SvgSignature;
