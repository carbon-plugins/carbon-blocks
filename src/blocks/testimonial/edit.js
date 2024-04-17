// External dependencies
import { titlePlaceholder, descPlaceholder } from '../../assets/components/placeholders';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useInnerBlocksProps, useBlockProps, BlockControls } from '@wordpress/block-editor';

//Internal dependencies
import './editor.scss';
import SlideWrapper from '../../assets/components/SlideWrapper';
import { getAlignment, HorizontalAlignmentToolbar } from '../../assets/components/alignment';

export default function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;
	const { isSlide, alignment } = attributes;

	const blockProps = useBlockProps({
		style: {
			alignItems: getAlignment( alignment )
		}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ "carbon-blocks/signature", "core/heading", "core/paragraph" ],
		renderAppender: false,
		template: [
			[ "core/heading", { textAlign: "center", placeholder: titlePlaceholder, level: 3 } ],
			[ "core/paragraph", { placeholder: descPlaceholder, align: "center" } ],
			[ "carbon-blocks/signature" ],
		]
	} );

	return <>
		<SlideWrapper
			isSlide={ isSlide }
			blockProps={ {} }
			clientId={ clientId }
			showSettingButton={ false }
			blockName={ props.name }
		>
			<blockquote { ...innerBlocksProps }>
				{ children }
			</blockquote>
		</SlideWrapper>
		<BlockControls>
			<HorizontalAlignmentToolbar
				value={ alignment }
				onChange={ alignment => setAttributes({ alignment }) }
			/>
		</BlockControls>
	</>
}
