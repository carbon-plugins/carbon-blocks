// WordPress dependencies
import { useBlockProps, RichText, useInnerBlocksProps } from '@wordpress/block-editor';
import { wordPlaceholder } from '../../assets/components/placeholders';
import { ConditionalRender } from '../../assets/components/conditionals';

export default function save( props ) {
	const { attributes } = props;
	const { badgeContent, showIcon, orientation } = attributes;

	const getOrientation = () => {
		switch (orientation) {
			case "left": 	return "row-reverse"
			case "right": return "row"
		}
	}

	const blockProps = useBlockProps.save({ style: {
		flexDirection: getOrientation()
	} });

	const { children, ...innerBlocksProps } = useInnerBlocksProps.save( blockProps );

	return <li { ...innerBlocksProps }>
		<ConditionalRender conditions={ showIcon }>
			{ children }
		</ConditionalRender>
		<RichText.Content
			tagName="span"
			value={ badgeContent || wordPlaceholder }
		/>
	</li>
}
