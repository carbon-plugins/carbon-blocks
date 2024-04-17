// WordPress dependencies
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

//Internal dependencies

export default function save( props ) {
	const { attributes } = props;
	const { id } = attributes;

	const blockProps = useBlockProps.save();

	return <section { ...blockProps } data-id={ id }>
		<InnerBlocks.Content />
	</section>
}
