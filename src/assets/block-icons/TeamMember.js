import * as React from "react";
const SvgTeamMember = (props) => (
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
    <g transform="translate(0 -.075)scale(.04793)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Team_Member_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Team_Member_svg__a)">
        <path
          d="M7 18v-1c0-2.743 2.257-5 5-5s5 2.257 5 5v1m-5-6c1.646 0 3-1.354 3-3s-1.354-3-3-3-3 1.354-3 3 1.354 3 3 3"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "2.45px",
          }}
          transform="translate(28.333 71.541)scale(10.194)"
        />
        <path
          d="M216.365 180.003h6.896"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "1.2px",
            strokeLinejoin: "miter",
            strokeMiterlimit: 30,
          }}
          transform="matrix(20.8629 0 0 20.8629 -4255.676 -3529.093)"
        />
        <path
          d="M208.881 184.502h14.38"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "1.2px",
            strokeLinejoin: "miter",
            strokeMiterlimit: 30,
          }}
          transform="matrix(20.8629 0 0 20.8629 -4255.676 -3549.952)"
        />
        <path
          d="M110.099 86.423h12.897"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "1.31px",
            strokeLinejoin: "miter",
            strokeMiterlimit: 30,
          }}
          transform="matrix(17.2816 0 0 20.8629 -1801.61 -1435.73)"
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
      </g>
    </g>
  </svg>
);
export default SvgTeamMember;
