import * as React from "react";
const SvgTasks = (props) => (
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
    <g transform="translate(0 -.034)scale(.04793)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Tasks_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Tasks_svg__a)">
        <path
          d="M9 6h11M9 14.758h11"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.39px",
          }}
          transform="matrix(17.19808 0 0 18.80644 75.859 58.935)"
        />
        <path
          d="m110.811 149.864-4.461 4.461M110.946 154.325l-4.46-4.461"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "1.4px",
            strokeLinejoin: "miter",
            strokeMiterlimit: 30,
          }}
          transform="matrix(20.86287 0 0 20.86287 -2128.009 -2836.638)"
        />
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
          }}
          transform="matrix(23.75 0 0 26.3889 -34.416 -66.667)"
        />
        <path
          d="m5 13 4 4L19 7"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "3.84px",
          }}
          transform="translate(42.156 69.926)scale(7.60474)"
        />
      </g>
    </g>
  </svg>
);
export default SvgTasks;
