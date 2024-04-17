// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useInnerBlocksProps, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

//Internal dependencies
import './editor.scss';

export default function Edit(props) {
	const { attributes, isSelected, clientId } = props;
	const { hasChild, maxButtons, showAllTime } = attributes;

	const blockProps = useBlockProps();
	
	let innerBlockCount = [];
	innerBlockCount = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getBlock( clientId ).innerBlocks
	}, [] );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'carbon-blocks/advanced-button' ],
		renderAppender: innerBlockCount.length < maxButtons && ( isSelected || showAllTime ) ? InnerBlocks.DefaultBlockAppender : false,
		template: hasChild ? [
			[ "carbon-blocks/advanced-button" ]
		] : [],
		orientation: "horizontal"
	} );

	return <section { ...innerBlocksProps } />
}
