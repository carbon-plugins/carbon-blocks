// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useInnerBlocksProps, useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

//Internal dependencies
import './editor.scss';
import { FlexColumnControl, getGap, getSize } from '../../assets/components/flex-column-control';

export default function Edit( props ) {
	const { isSelected, clientId, attributes, setAttributes } = props;
	const { style, columns } = attributes;

	const gap = getGap(style.spacing.blockGap);

  const blockProps = useBlockProps({
		style: {
			"--testimonial-size-md": columns <= 2 ? getSize(columns, gap) : `calc(50% - (${gap} / 2))`,
			"--testimonial-size-lg": columns <= 3 ? getSize(columns, gap) : `calc(33.33% - (${gap} / 3))`,
			"--testimonial-size-xl": getSize(columns, gap),
	 	}
	});

	const isParentOfSelectedBlock = useSelect( ( select ) => select( 'core/block-editor' ).hasSelectedInnerBlock( clientId, true ) );

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ "carbon-blocks/testimonial" ],
		renderAppender: isSelected || isParentOfSelectedBlock ? InnerBlocks.ButtonBlockAppender : false,
		template: [
			[ "carbon-blocks/testimonial" ],
			[ "carbon-blocks/testimonial" ],
			[ "carbon-blocks/testimonial" ],
			[ "carbon-blocks/testimonial" ]
		],
		orientation: "horizontal"
	} )

	return <>
		<InspectorControls>
			<PanelBody title={ __( "Settings", 'carbon-blocks' ) } initialOpen={true}>
				<FlexColumnControl
					columns={ columns }
					setAttributes={ setAttributes }
				/>
			</PanelBody>
		</InspectorControls>
		<section { ...innerBlocksProps }>
			{ children }
		</section>
	</>
}
