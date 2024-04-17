// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useState, useRef } from '@wordpress/element';
import {
	InspectorControls, PanelColorSettings,
	RichText, useBlockProps, BlockControls, useInnerBlocksProps
} from '@wordpress/block-editor';
import {
	PanelBody, ToolbarGroup
} from '@wordpress/components';

//Internal dependencies
import './editor.scss';
import { Link, LinkToolbarButton } from "../../assets/components/Link";
import { ConditionalRender } from "../../assets/components/conditionals";
import Toggle from "../../assets/components/Toggle";
import { titlePlaceholder, descPlaceholder, linkPlaceholder } from '../../assets/components/placeholders';

export default function edit( props ) {
	const { attributes, setAttributes } = props;
	const { post, seeMore, showSeeMore, linkColor, backgroundColor } = attributes;
	const blockProps = useBlockProps({
		style: {
			backgroundColor
		}
	});
	const [ isPopoverOpen, setPopoverVisibility ] = useState( false );
	const popoverRef = useRef();

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ "carbon-blocks/advanced-image", "core/heading", "core/paragraph", "carbon-blocks/advanced-buttons" ],
		template: [
			[ "carbon-blocks/advanced-image", {
				showActions: false,
				isChild: true,
				objectFit: "cover",
				aspectRatio: '4/3'
			} ],
			[ "core/heading", { textAlign: "center", placeholder: titlePlaceholder, level: 3 } ],
			[ "core/paragraph", { placeholder: descPlaceholder, align: "center" } ]
		]
	} );

	return <>
		<InspectorControls group="styles">
			<PanelColorSettings
				enableAlpha
				__experimentalIsRenderedInSidebar
				title={ __( 'Colors', 'carbon-blocks' ) }
				className="carbon-blocks-color-panel"
				colorSettings={ [
					{
						value: linkColor,
						onChange: linkColor => setAttributes( { linkColor } ),
						label: __( 'Link', 'carbon-blocks' ),
					},
					{
						value: backgroundColor,
						onChange: backgroundColor => setAttributes( { backgroundColor } ),
						label: __( 'Background', 'carbon-blocks' ),
					},
				] }
			/>
		</InspectorControls>
		<InspectorControls>
			<PanelBody title={ __( "Settings", 'carbon-blocks' ) } initialOpen={true}>
				<ConditionalRender conditions={ post?.id }>
					<Toggle
						value={ showSeeMore }
						onChange={ showSeeMore => setAttributes({ showSeeMore }) }
						label={ __( 'Show "see more"', 'carbon-blocks' ) }
					/>
				</ConditionalRender>
			</PanelBody>
		</InspectorControls>
		<article { ...innerBlocksProps }>
      { children }
			<ConditionalRender conditions={ post?.url && showSeeMore }>
				<RichText
					tagName="span"
					onChange={ seeMore => setAttributes( { seeMore } ) }
					value={ seeMore }
					placeholder={ linkPlaceholder }
					style={{ color: linkColor }}
					allowedFormats={ [ 'core/bold', 'core/italic', 'carbon-blocks/text-animation', 'carbon-blocks/text-color' ] }
				/>
			</ConditionalRender>
      <ConditionalRender conditions={ post?.url }>
        <a href={ post?.url } />
      </ConditionalRender>
		</article>
		<BlockControls>
			<ToolbarGroup group="blocks">
				<LinkToolbarButton
					isActive={ post?.url }
					popoverRef={ popoverRef }
					isPopoverOpen={ isPopoverOpen }
					setPopoverVisibility={setPopoverVisibility }
				/>
			</ToolbarGroup>
		</BlockControls>
		<Link
			post={ post }
			popoverRef={ popoverRef }
			setAttributes={ setAttributes }
			isPopoverOpen={ isPopoverOpen }
			setPopoverVisibility={setPopoverVisibility }
		/>
	</>
}
