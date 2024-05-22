import * as React from "react";
const Duplicate = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
    style={{
			fill: "none"
    }}
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
    {...props}
	>
		<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
		<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
	</svg>
);
export default Duplicate;
