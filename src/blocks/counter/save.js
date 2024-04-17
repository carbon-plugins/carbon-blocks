// WordPress dependencies
import { useInnerBlocksProps, RichText, useBlockProps } from '@wordpress/block-editor';
import { ConditionalRender } from '../../assets/components/conditionals';

export default function save( props ) {
	const { attributes } = props;
	const {
		prefixe, suffixe, number, text, textColor, prefixColor, suffixColor, showText,
		numberColor, backgroundColor, showPrefix, showSuffix, showIcon, orientation,
		justification
	} = attributes;

	const getAlignment = () => {
		switch (justification) {
			case "left": 		return "flex-start"
			case "center": 	return "center"
			case "right": 	return "flex-end"
		}
	}

	const getOrientation = () => {
		switch (orientation) {
			case "up": 		return "column-reverse"
			case "down": 	return "column"
			case "left": 	return "row-reverse"
			case "right": return "row"
		}
	}

	const blockProps = useBlockProps.save({
		style: {
			backgroundColor,
			alignItems: getAlignment(),
			flexDirection: getOrientation(),
			textAlign: justification
		}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps.save( blockProps )

	return (
		<section { ...innerBlocksProps } data-anim>
			<ConditionalRender conditions={ showIcon }>
				{ children }
			</ConditionalRender>
			<dt>
				{/* <ConditionalRender conditions={ prefixe && showPrefix }>
					<RichText.Content
						tagName="p"
						value={ prefixe }
						style={ { color: prefixColor } }
					/>
				</ConditionalRender> */}
				<span style={ { color: numberColor } }>{ number || 0 }</span>
				{/* <ConditionalRender conditions={ suffixe && showSuffix }>
					<RichText.Content
						tagName="p"
						value={ suffixe }
						style={ { color: suffixColor } }
					/>
				</ConditionalRender> */}
			</dt>
			<ConditionalRender conditions={ showText }>
				<RichText.Content
					tagName="dd"
					value={ text || "Lorem ipsum" }
					style={ { color: textColor } }
				/>
			</ConditionalRender>
		</section>
	);
}
