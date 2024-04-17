import * as React from "react";
const SvgFaq = (props) => (
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
    <g transform="translate(.017)scale(.04793)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="FAQ_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#FAQ_svg__a)">
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
        <path
          d="M7.9 8.08c0-4.773 7.5-4.773 7.5 0 0 3.409-3.409 2.727-3.409 6.818M12 19.01l.01-.011"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.93px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="translate(110.86 109.266)scale(15.1622)"
        />
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.18px",
          }}
          transform="matrix(20 0 0 22.2222 47.5 20.833)"
        />
      </g>
    </g>
  </svg>
);
export default SvgFaq;
