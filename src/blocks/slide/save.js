// WordPress dependencies
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

//Internal dependencies
import Slide from '../../assets/components/public/Slide';

export default function save() {
	const blockProps = useBlockProps.save();
	const { children, ...innerBlocksProps } = useInnerBlocksProps.save( blockProps );

	return <Slide blockProps={ innerBlocksProps }>
		{ children }
	</Slide>
}
