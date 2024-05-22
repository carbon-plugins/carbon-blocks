import * as React from "react";
const SvgProgress = (props) => (
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
    <g transform="rotate(.523)scale(.04792)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Progress_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Progress_svg__a)">
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
          d="M15.121 15.621c.274 0 .5-.226.5-.5s-.226-.5-.5-.5-.5.226-.5.5.226.5.5.5M8.879 9.379c.274 0 .5-.226.5-.5s-.226-.5-.5-.5-.5.226-.5.5.226.5.5.5"
          style={{
            fill: "#18181b",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.89px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="translate(-65.667 -67.212)scale(26.3889)"
        />
        <path
          d="m16 8-8 8"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.14px",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="translate(-66.667 -67.212)scale(26.3889)"
        />
      </g>
    </g>
  </svg>
);
export default SvgProgress;
