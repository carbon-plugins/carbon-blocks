// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { titlePlaceholder, descPlaceholder } from '../../assets/components/placeholders';
import {
	InspectorControls, useBlockProps, useInnerBlocksProps, BlockControls
} from '@wordpress/block-editor';
import { useState, useRef } from '@wordpress/element';
import { PanelBody, ToolbarGroup } from '@wordpress/components';

//Internal dependencies
import './editor.scss';
import Toggle from '../../assets/components/Toggle';
import { Link, LinkToolbarButton } from "../../assets/components/Link";
import { ConditionalRender } from '../../assets/components/conditionals';
import { VerticalControl, getAlignment } from '../../assets/components/alignment';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { showSeeMore, post, alignment } = attributes;
	const [ isPopoverOpen, setPopoverVisibility ] = useState( false );
	const popoverRef = useRef();
  const blockProps = useBlockProps({
		style: {
			justifyContent: getAlignment( alignment )
		}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ "carbon-blocks/icons", "core/heading", "core/paragraph", "carbon-blocks/advanced-buttons" ],
		template: [
			[ "carbon-blocks/icons", { showActions: false, isChild: true } ],
			[ "core/heading", { textAlign: "center", placeholder: titlePlaceholder, level: 3 } ],
			[ "core/paragraph", {  placeholder: descPlaceholder, align: "center" } ],
			[ "carbon-blocks/advanced-buttons", { showActions: false } ]
		]
	} );

	return <>
		<InspectorControls>
			<PanelBody title={ __( "Settings", 'carbon-blocks' ) }>
				<VerticalControl
					value={ alignment }
					onChange={ alignment => setAttributes({ alignment }) }
					allowSpaceBetween={ true }
					allowStretch={ true }
				/>
				<ConditionalRender conditions={ post?.url }>
					<Toggle
						label={ __( "Show link text", 'carbon-blocks' ) }
						value={ showSeeMore }
						onChange={ showSeeMore => setAttributes({ showSeeMore })}
					/>
				</ConditionalRender>
			</PanelBody>
		</InspectorControls>
		<article { ...innerBlocksProps }>
			{ children }
		</article>
		<BlockControls>
			<ToolbarGroup group="blocks">
				<LinkToolbarButton
					isActive={ post?.url }
					popoverRef={ popoverRef }
					isPopoverOpen={ isPopoverOpen }
					setPopoverVisibility={ setPopoverVisibility }
				/>
			</ToolbarGroup>
		</BlockControls>
		<Link
			post={ post }
			popoverRef={ popoverRef }
			setAttributes={ setAttributes }
			isPopoverOpen={ isPopoverOpen }
			setPopoverVisibility={ setPopoverVisibility }
		/>
	</>
}
