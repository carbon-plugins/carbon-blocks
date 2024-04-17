// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {
	useBlockProps, ButtonBlockAppender,
	useInnerBlocksProps
} from '@wordpress/block-editor';

//Internal dependencies
import './editor.scss';
import { ConditionalRender } from '../../assets/components/conditionals';

export default function Edit( props ) {
	const { attributes, clientId, isSelected } = props;
	const { hasChild } = attributes;

	const blockProps = useBlockProps();

	const isParentOfSelectedBlock = useSelect( ( select ) => select( 'core/block-editor' ).hasSelectedInnerBlock( clientId, true ) );

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'carbon-blocks/badge' ],
		templateLock: false,
		renderAppender: false,
		template: hasChild ? [
			[ "carbon-blocks/badge" ]
		] : [],
		orientation: "horizontal"
	} );

	return <ul { ...innerBlocksProps }>
		{ children }
		<ConditionalRender conditions={isSelected || isParentOfSelectedBlock}>
			<ButtonBlockAppender rootClientId={ clientId } className="button-appender-sm"/>
		</ConditionalRender>
	</ul>
}
