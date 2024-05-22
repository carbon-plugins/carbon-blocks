// WordPress dependencies
import {
	useBlockProps, RichText, useInnerBlocksProps
} from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { check, closeSmall } from '@wordpress/icons';

export default function save( props ) {
	const { attributes } = props;
	const { textContent, activeTask, color, background, tickColor, tickBackground, disabledColor, type } = attributes;

	const blockProps = useBlockProps.save({
		style:{
			textDecoration: activeTask
				? "none"
				: `line-through ${disabledColor}`
		}
	});
	const { children, ...innerBlocksProps } = useInnerBlocksProps.save( blockProps )

	return <>
		<li { ...innerBlocksProps }>
		<Icon
				icon={ activeTask
					? check
					: type === "strikethrough"
						? check
						: closeSmall
				}
				style={{
					fill: activeTask ? tickColor : "#ffffff",
					background: activeTask ? tickBackground : disabledColor
				}}
		/>
			<RichText.Content
				tagName='span'
				value={ textContent || "Lorem ipsum" }
				style={{
					color: activeTask ? color : disabledColor,
					background: activeTask ? background : "none"
				}}
			/>
		</li>
	</>
}
