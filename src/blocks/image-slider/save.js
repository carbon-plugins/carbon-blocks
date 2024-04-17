// External dependencies

// WordPress dependencies
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Slider from '../../assets/components/public/Slider';

//Internal dependencies

export default function save( props ) {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return <Slider blockProps={ blockProps } attributes={ attributes }>
		<InnerBlocks.Content />
	</Slider>
}
