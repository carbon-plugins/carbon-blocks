import * as React from "react";
const SvgFeature = (props) => (
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
    <g transform="scale(.04793)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Feature_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Feature_svg__a)">
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: 1,
          }}
          transform="matrix(23.7837 0 0 26.4263 -34.483 -66.779)"
        />
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "5.28px",
          }}
          transform="matrix(4.48501 0 0 4.98335 91.03 117.168)"
        />
        <path
          d="M148.084 76.631h6.896M140.793 82.133h14.38"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "1.2px",
            strokeLinecap: "round",
            strokeMiterlimit: 30,
          }}
          transform="matrix(20.8629 0 0 20.8629 -2837.35 -1418.678)"
        />
        <path
          d="M110.099 86.423h12.897"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "1.31px",
            strokeLinecap: "round",
            strokeMiterlimit: 30,
          }}
          transform="matrix(17.2816 0 0 20.8629 -1802.69 -1424.72)"
        />
      </g>
    </g>
  </svg>
);
export default SvgFeature;
