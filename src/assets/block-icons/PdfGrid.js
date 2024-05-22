import * as React from "react";
const SvgPdfGrid = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    {...props}
  >
    <g transform="translate(-.014 -.15)scale(.04793)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="PDF_Grid_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#PDF_Grid_svg__a)">
        <path
          d="M.277-.734H.114c-.037 0-.068.025-.068.072v.599c0 .049.031.073.068.073s.067-.024.067-.073v-.198h.077c.104 0 .192.003.257-.109a.27.27 0 0 0 .001-.247C.456-.723.358-.734.277-.734Zm-.096.115h.11a.122.122 0 1 1 0 .245h-.11z"
          style={{
            fill: "#18181b",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: ".03px",
          }}
          transform="translate(146.16 346.578)scale(163.2132)"
        />
        <path
          d="M.114 0h.184c.216 0 .341-.159.341-.367S.521-.734.298-.734H.114c-.037 0-.068.025-.068.072v.589c0 .048.031.073.068.073Zm.389-.367c.002.121-.072.246-.208.246H.181v-.494h.122c.132 0 .198.121.2.248Z"
          style={{
            fill: "#18181b",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: ".03px",
          }}
          transform="translate(240.496 346.578)scale(163.2132)"
        />
        <path
          d="M.181-.308h.166c.032 0 .058-.029.058-.062S.375-.429.343-.429H.181v-.184h.193c.033 0 .059-.03.059-.063S.403-.734.37-.734H.114c-.037 0-.068.025-.068.072v.599c0 .049.031.073.068.073s.067-.024.067-.073z"
          style={{
            fill: "#18181b",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: ".03px",
          }}
          transform="translate(350.665 346.578)scale(163.2132)"
        />
        <path
          d="M5.825 21.027 4 21c-1.097 0-2-.903-2-2V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v1.415"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.18px",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
          }}
          transform="matrix(20 0 0 22.1844 -27.5 -53.963)"
        />
        <path
          d="M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.18px",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
          }}
          transform="matrix(20 0 0 22.2222 47.5 20.833)"
        />
      </g>
    </g>
  </svg>
);
export default SvgPdfGrid;
