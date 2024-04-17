// WordPress dependencies
import { __ } from '@wordpress/i18n';
import {
	useInnerBlocksProps, useBlockProps, 
	InspectorControls, BlockControls 
} from '@wordpress/block-editor';
import { PanelBody, ToolbarGroup } from '@wordpress/components';

//Internal dependencies
import './editor.scss';
import { 
	HorizontalControl, getAlignment, HorizontalAlignmentToolbar 
} from '../../assets/components/alignment';
import { getGap } from '../../assets/components/flex-column-control';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { justification, style } = attributes;

	const gap = getGap(style.spacing.blockGap);

	const blockProps = useBlockProps({
		style: {
			gap: `${gap}px`,
			justifyContent: getAlignment( justification )
		}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ "carbon-blocks/counter" ],
		template: [
			[ "carbon-blocks/counter" ]
		],
		orientation: "horizontal"
	} )

	return <>
		<InspectorControls>
			<PanelBody title={ __( "Settings", "carbon" ) }>
				<HorizontalControl 
					value={ justification }
					onChange={ justification => setAttributes({ justification }) }
					allowSpaceBetween={ true }
				/>
			</PanelBody>
		</InspectorControls>
		<dl { ...innerBlocksProps }>
			{ children }
		</dl>
		<BlockControls>
			<ToolbarGroup group="blocks">
				<HorizontalAlignmentToolbar
					value={ justification }
					allowSpaceBetween={ true }
					onChange={ justification => setAttributes({ justification }) }
				/>
			</ToolbarGroup>
		</BlockControls>
	</>
}
