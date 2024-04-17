// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useInnerBlocksProps, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody
} from "@wordpress/components";

//Internal dependencies
import { FlexColumnControl, getGap, getSize } from '../../assets/components/flex-column-control';
import './editor.scss';
import { HorizontalControl, getAlignment } from '../../assets/components/alignment';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { style, columns, justification } = attributes;

	const gap = getGap(style.spacing.blockGap);

  const blockProps = useBlockProps({
		style: {
			gap: `${gap}px`,
			justifyContent: getAlignment( justification ),
			"--card-size-md": columns <= 2 ? getSize(columns, gap) : `calc(50% - (${gap}px / 2))`,
			"--card-size-lg": columns <= 3 ? getSize(columns, gap) : `calc(33.33% - (${gap}px / 3))`,
			"--card-size-xl": getSize(columns, gap),
	 	}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ "carbon-blocks/card" ],
		template: [
			[ "carbon-blocks/card" ]
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
