import React from "react";
import Avatar from "boring-avatars";
import { createRoot } from 'react-dom/client';

document.addEventListener('DOMContentLoaded', function() {

	document.querySelectorAll('.wp-block-carbon-blocks-advanced-avatar').forEach(avatar => {
		let { size, variant, name, colors, type } = avatar.dataset;

		const border = JSON.parse(avatar.dataset.border)

		if( type === "shape" ) {
			colors = JSON.parse(colors);

			const root = createRoot(avatar);
			root.render(
				<div style={{
					...border.styles,
					borderRadius: border.radius,
					height: `${size}px`,
					width: `${size}px`,
					overflow: "hidden"
				}}>
					<Avatar
						size={ size }
						variant={ variant }
						name={ name }
						colors={ colors }
						square={ true }
					/>
				</div>
			);
		}

	})

})
