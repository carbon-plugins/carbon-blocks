// WordPress dependencies
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

//Internal dependencies
import { getGap, getSize } from '../../assets/components/flex-column-control';

export default function save( props ) {
	const { attributes } = props;
	const { columns, style } = attributes;

	const gap = getGap(style.spacing.blockGap);

	const blockProps = useBlockProps.save({ 
		style: {
			"--testimonial-size-md": columns <= 2 ? getSize(columns, gap) : `calc(50% - (${gap} / 2))`,
			"--testimonial-size-lg": columns <= 3 ? getSize(columns, gap) : `calc(33.33% - (${gap} / 3))`,
			"--testimonial-size-xl": getSize(columns, gap),
		}
	});

	return <section { ...blockProps }>
		<InnerBlocks.Content />
	</section>
}
