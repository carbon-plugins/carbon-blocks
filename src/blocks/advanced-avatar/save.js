// External dependencies

// WordPress dependencies
import { useBlockProps } from '@wordpress/block-editor';
import { ConditionalRender } from '../../assets/components/conditionals';

//Internal dependencies
import getInitials from './initials';
import { getAlignment } from '../../assets/components/alignment';

export default function save( props ) {
	const { attributes } = props;
	const { type, size, image, focalPoint, initials, uuid, variant, palette, border, alignment } = attributes;
	const { radius } = attributes?.style?.border

	const isFlatBorder = border?.color || border?.style || border?.width;
	let borderStyles;

	const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	if(isFlatBorder){
		borderStyles = {
			borderWidth: border?.width,
			borderStyle: border?.style,
			borderColor: border?.color
		}
	} else {
		borderStyles = {};
		const props = [ "color", "style", "width" ];
		Object.keys(border).map(key => {
			const keyName = capitalizeFirstLetter(key);
			props.map(prop => {
				const propName = capitalizeFirstLetter(prop);
				borderStyles[`border${keyName}${propName}`] = border[key][prop];
			})
		})
	}

	const dataAttributes = {
		"data-type": type,
		"data-size": size,
		"data-name": uuid,
		"data-variant": variant,
		"data-border": JSON.stringify({
			styles: borderStyles,
			radius: radius,
		}),
		"data-colors": JSON.stringify(palette),
	};

	const blockProps = useBlockProps.save({
		style: {
			justifyContent: getAlignment( alignment ),
			border: "none",
			borderRadius: 0
		},
		...dataAttributes
	});
	const hasImage = image?.sizes?.medium?.url || image?.url;

	return <section { ...blockProps }>
		<ConditionalRender conditions={type === "image"}>
			<img
				src={ hasImage || "" }
				height={ size }
				width={ size }
				style={{
					...borderStyles,
					borderRadius: radius,
					objectPosition: `${ focalPoint.x * 100 }% ${ focalPoint.y * 100 }%`
				}}
			/>
		</ConditionalRender>
		<ConditionalRender conditions={type === "initials"}>
			<img
				src={ getInitials(initials, size) }
				height={ size }
				width={ size }
				style={{
					...borderStyles,
					borderRadius: radius
				}}
			/>
		</ConditionalRender>
	</section>
}
