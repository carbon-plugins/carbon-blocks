import * as React from "react";
const SvgMasonry = (props) => (
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
    <g transform="translate(.034)scale(.04793)">
      <path
        d="M0 0h500v500H0z"
        style={{
          fill: "none",
        }}
      />
      <clipPath id="Masonry_svg__a">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <g clipPath="url(#Masonry_svg__a)">
        <path
          d="M3 7.4V3.6c0-.329.271-.6.6-.6h5.8c.329 0 .6.271.6.6v3.8c0 .329-.271.6-.6.6H3.6a.603.603 0 0 1-.6-.6Zm11 13v-3.8c0-.329.271-.6.6-.6h5.8c.329 0 .6.271.6.6v3.8c0 .329-.271.6-.6.6h-5.8a.603.603 0 0 1-.6-.6Zm0-8V3.6c0-.329.271-.6.6-.6h5.8c.329 0 .6.271.6.6v8.8c0 .329-.271.6-.6.6h-5.8a.603.603 0 0 1-.6-.6Zm-11 8v-8.8c0-.329.271-.6.6-.6h5.8c.329 0 .6.271.6.6v8.8c0 .329-.271.6-.6.6H3.6a.603.603 0 0 1-.6-.6Z"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: "#18181b",
            strokeWidth: "1.14px",
          }}
          transform="matrix(26.0473 0 0 26.0509 -62.405 -63.108)"
        />
      </g>
    </g>
  </svg>
);
export default SvgMasonry;
