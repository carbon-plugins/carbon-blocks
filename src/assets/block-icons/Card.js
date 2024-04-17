import * as React from "react";
const SvgCard = (props) => (
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
      <clipPath id="Card_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Card_svg__a)">
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
          d="M3364.83 1523.31h78"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "8.29px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 30,
          }}
          transform="matrix(3.84615 0 0 1.84432 -12844.084 -2488.125)"
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
          transform="matrix(17.2571 0 0 20.8333 -1802.374 -1415.645)"
        />
        <path
          d="M21 3.6v16.8c0 .329-.271.6-.6.6H3.6a.603.603 0 0 1-.6-.6V3.6c0-.329.271-.6.6-.6h16.8c.329 0 .6.271.6.6"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.87px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="matrix(16.9983 0 0 8.18612 46.605 90.613)"
        />
      </g>
    </g>
  </svg>
);
export default SvgCard;
