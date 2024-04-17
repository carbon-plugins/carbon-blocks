// WordPress dependencies
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

// Internal dependencies
import { getAlignment } from '../../assets/components/alignment';

export default function save( props ) {
	const { attributes } = props;
	const { alignment } = attributes;

  const blockProps = useBlockProps.save({
		style: {
			justifyContent: getAlignment( alignment )
		}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps.save( blockProps );

	return <article { ...innerBlocksProps }>
		{ children }
	</article>
}
