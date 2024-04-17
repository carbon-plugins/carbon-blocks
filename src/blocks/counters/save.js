// WordPress dependencies
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';
import { getAlignment } from '../../assets/components/alignment';
import { getGap } from '../../assets/components/flex-column-control';

export default function save( props ) {
	const { attributes } = props;
	const { justification, style } = attributes;

	const gap = getGap(style.spacing.blockGap);

	const blockProps = useBlockProps.save({
		style: {
			gap: `${gap}px`,
			justifyContent: getAlignment( justification )
		}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps.save( blockProps )

	return <dl { ...innerBlocksProps }>
		{ children }
	</dl>
}
