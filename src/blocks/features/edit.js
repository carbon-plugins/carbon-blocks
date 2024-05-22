// WordPress dependencies
import { __ } from '@wordpress/i18n';
import {
	useInnerBlocksProps, useBlockProps,
	InspectorControls, InnerBlocks, BlockControls
} from '@wordpress/block-editor';
import { PanelBody } from "@wordpress/components";

//Internal dependencies
import './editor.scss';
import { FlexColumnControl, getGap, getSize } from '../../assets/components/flex-column-control';
import {
	HorizontalControl, getAlignment,
	VerticalControl, AlignmentToolbar
} from '../../assets/components/alignment';

export default function Edit( props ) {
	const { attributes, setAttributes, isSelected } = props;
	const { justification, alignment, columns, style } = attributes;

	const gap = getGap(style.spacing.blockGap);

  const blockProps = useBlockProps({
		style: {
			gap: `${gap}px`,
			alignItems: getAlignment( alignment ),
			justifyContent: getAlignment( justification ),
			"--feature-size-md": columns <= 2 ? getSize(columns, gap) : `calc(50% - (${gap}px / 2))`,
			"--feature-size-lg": columns <= 3 ? getSize(columns, gap) : `calc(33.33% - (${gap}px / 3))`,
			"--feature-size-xl": getSize(columns, gap),
	 	}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks:[ 'carbon-blocks/feature' ],
		template: [
			[ "carbon-blocks/feature", {} ]
		],
		orientation: "horizontal"
	} );

	return <>
		<InspectorControls>
			<PanelBody title={ __( "Settings", 'carbon-blocks' ) } initialOpen={true}>
				<HorizontalControl
					value={ justification }
					onChange={ justification => setAttributes({ justification }) }
					allowSpaceBetween={ true }
				/>
				<VerticalControl
					value={ alignment }
					onChange={ alignment => setAttributes({ alignment }) }
					allowStretch={ true }
				/>
				<FlexColumnControl
					columns={ columns }
					setAttributes={ setAttributes }
				/>
			</PanelBody>
		</InspectorControls>
		<section { ...innerBlocksProps }>
			{ children }
		</section>
    <BlockControls>
			<AlignmentToolbar
				alignment={ alignment }
				justification={ justification }
				onAlignmentChange={ alignment => setAttributes({ alignment }) }
				onJustificationChange={ justification => setAttributes({ justification }) }
				allowStretch={ true }
				allowSpaceBetween={ true }
			/>
		</BlockControls>
	</>
}
