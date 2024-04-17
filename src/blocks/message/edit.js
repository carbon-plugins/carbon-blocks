// External dependencies
import { get } from 'lodash';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useRef, useState } from "@wordpress/element";
import { store as blocksStore } from '@wordpress/blocks';
import { PanelBody, ToolbarGroup } from "@wordpress/components";
import {
	useInnerBlocksProps, useBlockProps, RichText,
	InspectorControls, BlockControls,
	__experimentalBlockVariationPicker as BlockVariationPicker
} from '@wordpress/block-editor';

//Internal dependencies
import './editor.scss';
import { titlePlaceholder } from './../../assets/components/placeholders';
import { ConditionalLink, ConditionalRender } from "../../assets/components/conditionals";
import { Link, LinkToolbarButton } from "../../assets/components/Link";
import Toggle from "../../assets/components/Toggle";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { content, title, showIcon, slug, icon, post } = attributes;
	const blockProps = useBlockProps();
	const [ isPopoverOpen, setPopoverVisibility ] = useState( false );
	const popoverRef = useRef();

	const MessageVariationPicker = ( {  name, setAttributes } ) => {
		const { blockType, defaultVariation, variations } = useSelect(
			( select ) => {
				const { getBlockType, getDefaultBlockVariation, getBlockVariations, } = select( blocksStore );
				return {
					blockType: getBlockType( name ),
					defaultVariation: getDefaultBlockVariation( name, 'block' ),
					variations: getBlockVariations( name, 'block' ),
				};
			},
			[ name ]
		);
		return <div { ...blockProps }>
			<BlockVariationPicker
				icon={ get( blockType, [ 'icon', 'src' ] ) }
				label={ get( blockType, [ 'title' ] ) }
				instructions={ get(  blockType, ['description'] ) }
				variations={ variations }
				onSelect={ ( nextVariation = defaultVariation ) => {
					if ( nextVariation.attributes ) {
						setAttributes( nextVariation.attributes );
					}
				} }
			/>
		</div>
	};

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'carbon-blocks/icons' ],
		renderAppender: false,
		template: [
			[ "carbon-blocks/icons", { hasLink: false, icon, isChild: true } ]
		]
	} )

	return title
		? <>
			<InspectorControls>
				<PanelBody title={ __( "Settings", 'carbon-blocks' ) }>
					<Toggle
						label={ __( "Show icon", 'carbon-blocks' ) }
						value={ showIcon }
						onChange={ () => setAttributes( { showIcon: !showIcon } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<ConditionalLink post={ post } props={ innerBlocksProps } data-slug={ slug } Tag="section">
				<ConditionalRender conditions={ showIcon }>
					{ children }
				</ConditionalRender>
				<RichText
					tagName="p"
					value={ content }
					onChange={ content => { setAttributes( { content } ) } }
					placeholder={ titlePlaceholder }
					multiline={ false }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
				/>
			</ConditionalLink>
			{
				<BlockControls>
					<ToolbarGroup>
						<LinkToolbarButton
							isActive={ post?.url }
							popoverRef={ popoverRef }
							isPopoverOpen={ isPopoverOpen }
							setPopoverVisibility={setPopoverVisibility }
						/>
					</ToolbarGroup>
				</BlockControls>
			}
			<Link
				post={ post }
				popoverRef={ popoverRef }
				setAttributes={ setAttributes }
				isPopoverOpen={ isPopoverOpen }
				setPopoverVisibility={setPopoverVisibility }
			/>
		</>
		: <MessageVariationPicker { ...props } />
}
