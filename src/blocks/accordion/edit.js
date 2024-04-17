// External dependencies
import { v4 as uuidv4 } from 'uuid';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {
	InnerBlocks, useInnerBlocksProps,	useBlockProps, InspectorControls,
	useSetting
} from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalBorderControl as BorderControl
} from '@wordpress/components';

//Internal dependencies
import './editor.scss';
import Toggle from '../../assets/components/Toggle';

export default function Edit( props ) {
	const { attributes, setAttributes, isSelected, clientId } = props;
	const { name, border } = attributes;

	const blockProps = useBlockProps({
		style: {
			"--accordion-separator-color": border.color,
			"--accordion-separator-style": border.style,
			"--accordion-separator-width": border.width
		}
	});

	const defaultPalette = useSetting( 'color.palette' ) || [];

	const isParentOfSelectedBlock = useSelect( ( select ) => select( 'core/block-editor' ).hasSelectedInnerBlock( clientId, true ) );

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ "carbon-blocks/accordion-item" ],
		renderAppender: isSelected || isParentOfSelectedBlock ? InnerBlocks.ButtonBlockAppender : false,
		template: [
			[ "carbon-blocks/accordion-item" ]
		]
	} );

	return <>
		<InspectorControls>
			<PanelBody title={ __( 'Settings', 'carbon-blocks' ) }  initialOpen={true}>
				<Toggle
					value={ name ? true : false }
					onChange={ () => setAttributes({ name: uuidv4() })}
					label={ __( "Only open one item at a time", 'carbon-blocks' ) }
				/>
			</PanelBody>
		</InspectorControls>
		<InspectorControls group="styles">
			<PanelBody title={ __( 'Styles', 'carbon-blocks' ) }  initialOpen={true}>
				<BorderControl
					colors={ defaultPalette }
					label={ __( 'Separator', 'carbon-blocks' ) }
					onChange={ border => setAttributes({ border }) }
					value={ border }
				/>
			</PanelBody>
		</InspectorControls>
		<section { ...innerBlocksProps }>
			{ children }
		</section>
	</>

}
