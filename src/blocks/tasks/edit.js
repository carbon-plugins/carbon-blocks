// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';

//Internal dependencies
import './editor.scss';

export default function Edit( props ) {
	const { isSelected, clientId } = props;

	const blockProps = useBlockProps();

	const isParentOfSelectedBlock = useSelect( ( select ) => select( 'core/block-editor' ).hasSelectedInnerBlock( clientId, true ) );

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'carbon-blocks/task' ],
		templateLock: false,
		renderAppender: isSelected || isParentOfSelectedBlock ? InnerBlocks.ButtonBlockAppender : false,
		template: [
			[ "carbon-blocks/task" ]
		],
		orientation: "vertical"
	} );

	return <ul { ...innerBlocksProps }>
		{ children }
	</ul>
}
