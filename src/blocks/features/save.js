// WordPress dependencies
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { getGap, getSize } from '../../assets/components/flex-column-control';
import { getAlignment } from '../../assets/components/alignment';

export default function save( props ) {
	const { attributes } = props;
	const { columns, justification, alignment, style } = attributes;

	const gap = getGap(style.spacing.blockGap);

  const blockProps = useBlockProps.save({
		style: {
			gap: `${gap}px`,
			alignItems: getAlignment( alignment ),
			justifyContent: getAlignment( justification ),
			"--feature-size-md": columns <= 2 ? getSize(columns, gap) : `calc(50% - (${gap}px / 2))`,
			"--feature-size-lg": columns <= 3 ? getSize(columns, gap) : `calc(33.33% - (${gap}px / 3))`,
			"--feature-size-xl": getSize(columns, gap),
	 	}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps.save( blockProps );

	return <section { ...innerBlocksProps }>
		{ children }
	</section>
}
