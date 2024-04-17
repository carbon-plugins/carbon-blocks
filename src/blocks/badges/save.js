// WordPress dependencies
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save();
	const { children, ...innerBlocksProps } = useInnerBlocksProps.save( blockProps );

	return <ul { ...innerBlocksProps }>
		{ children }
	</ul>
}
