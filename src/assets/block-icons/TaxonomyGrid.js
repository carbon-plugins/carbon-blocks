import * as React from "react";
const SvgTaxonomyGrid = (props) => (
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
      <clipPath id="Taxonomy_Grid_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Taxonomy_Grid_svg__a)">
        <path
          d="M5.825 21.027 4 21c-1.097 0-2-.903-2-2V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v1.415"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.18px",
          }}
          transform="matrix(20.00002 0 0 22.18442 -27.5 -53.963)"
        />
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
          d="M110.099 83.547h11.814"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "1.2px",
            strokeLinecap: "round",
            strokeMiterlimit: 30,
          }}
          transform="matrix(20.8629 0 0 20.8629 -2128.016 -1455.912)"
        />
        <path
          d="M110.099 83.547h11.814"
          style={{
            fill: "none",
            stroke: "#18181b",
            strokeWidth: "1.2px",
            strokeLinecap: "round",
            strokeMiterlimit: 30,
          }}
          transform="matrix(20.8629 0 0 20.8629 -2128.016 -1539.362)"
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
          transform="matrix(17.28164 0 0 20.8629 -1733.716 -1431.683)"
        />
      </g>
    </g>
  </svg>
);
export default SvgTaxonomyGrid;
