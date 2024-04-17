// External dependencies

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import {
	useBlockProps, RichText, PanelColorSettings, InspectorControls,
	useInnerBlocksProps, store as blockEditorStore,
} from '@wordpress/block-editor';

import { useState } from '@wordpress/element';
import { PanelBody } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

//Internal dependencies
import './editor.scss';
import { titlePlaceholder } from '../../assets/components/placeholders';
import Toggle from '../../assets/components/Toggle';

export default function Edit( props ) {
	const { attributes, setAttributes, clientId, context } = props;
	const { summary, showContent, name } = attributes;

	const [isOpened, setIsOpened] = useState(true);
	const handleToggle = e => {
		e.preventDefault();
		setIsOpened( !isOpened )
	}

	if( !name && context["carbon-blocks/name"] ) {
		setAttributes({
			name: context["carbon-blocks/name"],
			showContent: false
		})
	}

	const blockProps = useBlockProps();

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		template: [
			[ "core/paragraph" ]
		]
	} );

	const hasSelection = useSelect(( select ) => {
		const { isBlockSelected, hasSelectedInnerBlock } = select( blockEditorStore );
		return hasSelectedInnerBlock( clientId, true ) || isBlockSelected( clientId )
	}, [ clientId ] );

	return <>
		<InspectorControls>
			<PanelBody title={ __( 'Settings', 'carbon-blocks' ) }  initialOpen={true}>
				<Toggle
					value={ showContent }
					onChange={ () => setAttributes({ showContent: !showContent })}
					label={ __( "Open by default", 'carbon-blocks' ) }
					disabled={ name ? true : false }
					disabledHelp={ __( "This option is disabled because only one item can be visible at a time", "carbon-blocks" ) }
				/>
			</PanelBody>
		</InspectorControls>
		<details { ...innerBlocksProps } open={ showContent || hasSelection } name={ name }>
			<summary onClick={ handleToggle }>
				<RichText
					identifier="summary"
					aria-label={ titlePlaceholder }
					placeholder={ titlePlaceholder }
					allowedFormats={ [] }
					withoutInteractiveFormatting
					value={ summary }
					onChange={ summary => setAttributes( { summary } ) }
				/>
			</summary>
			{ children }
		</details>
	</>
}
