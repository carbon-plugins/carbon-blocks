import * as React from "react";
const SvgCards = (props) => (
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
    <g transform="translate(-.041 -.075)scale(.048)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Cards_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Cards_svg__a)">
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.18px",
          }}
          transform="matrix(20.00002 0 0 22.2223 47.5 20.833)"
        />
        <path
          d="M212.299 152.433h11.025"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "1.2px",
            strokeLinecap: "round",
            strokeMiterlimit: 30,
          }}
          transform="matrix(20.83334 0 0 20.83334 -4252.527 -2829.565)"
        />
        <path
          d="M110.099 86.423h10.651"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "1.31px",
            strokeLinecap: "round",
            strokeMiterlimit: 30,
          }}
          transform="matrix(17.25714 0 0 20.83334 -1729.63 -1391.156)"
        />
        <path
          d="M215.939 144.314v2.061a.114.114 0 0 1-.113.114h-4.264a.113.113 0 0 1-.113-.114v-2.061c0-.063.05-.114.113-.114h4.264c.062 0 .113.051.113.114Z"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: ".48px",
            strokeLinecap: "round",
            strokeMiterlimit: 30,
          }}
          transform="matrix(52.17337 0 0 51.50553 -10861.61 -7261.395)"
        />
        <path
          d="M5.825 21.027 4 21c-1.097 0-2-.903-2-2V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v1.415"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.18px",
          }}
          transform="matrix(20 0 0 22.2222 -27.5 -54.759)"
        />
      </g>
    </g>
  </svg>
);
export default SvgCards;
