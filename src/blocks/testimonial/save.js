// WordPress dependencies
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

//Internal dependencies
import SlideWrapper from '../../assets/components/public/SlideWrapper';
import { getAlignment } from '../../assets/components/alignment';

export default function save( props ) {
	const { attributes } = props;
	const { isSlide, alignment } = attributes;

	const blockProps = useBlockProps.save({
		style: {
			alignItems: getAlignment( alignment )
		}
	});

	const { children, ...innerBlocksProps} = useInnerBlocksProps.save( blockProps )

	return <SlideWrapper isSlide={ isSlide } blockProps={ {} }>
		<blockquote { ...innerBlocksProps }>
			{ children }
		</blockquote>
	</SlideWrapper>
}
