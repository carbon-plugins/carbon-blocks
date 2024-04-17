// External dependencies

// WordPress dependencies
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;
	const { border } = attributes;
	
	const blockProps = useBlockProps.save({
		style: {
			"--accordion-separator-color": border.color,
			"--accordion-separator-style": border.style,
			"--accordion-separator-width": border.width
		}
	});

	return <section { ...blockProps }>
		<InnerBlocks.Content />
	</section>
}
