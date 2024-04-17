// External dependencies

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useState, useRef } from '@wordpress/element';
import {
	PanelBody, ToolbarGroup,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption
} from "@wordpress/components";
import {
	useBlockProps, BlockControls, RichText,
	InspectorControls, useInnerBlocksProps,
} from '@wordpress/block-editor';

//Internal dependencies
import './editor.scss';
import Toggle from '../../assets/components/Toggle';
import { Link, LinkToolbarButton } from "../../assets/components/Link";
import { HorizontalAlignmentToolbar, HorizontalControl, getAlignment } from '../../assets/components/alignment';
import { buttonPlaceholder } from '../../assets/components/placeholders';
import { ConditionalRender } from '../../assets/components/conditionals';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { text, alignment, post, isChild, width, showIcon, iconPosition } = attributes;

	const [ isPopoverOpen, setPopoverVisibility ] = useState( false );
	const popoverRef = useRef();

	const blockProps = useBlockProps({
		style: {
			justifyContent: getAlignment( alignment ),
			width,
      flexDirection: `${ iconPosition }`
		}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {
		allowedBlocks: false,
		templateLock: 'all',
		renderAppender: false,
		template: [
			[ "carbon-blocks/icons", {
				size: 25,
				showActions: false,
				isChild: true
			} ]
		]
	});

	return <a
		{ ...innerBlocksProps }
		href={ post?.url }
		target={ post?.opensInNewWindow ? '_blank' : '_self' }
		rel='noopener'
		onClick={ e => e.preventDefault() }
	>
		<InspectorControls>
			<PanelBody title={ __( "Settings", 'carbon-blocks' ) }>
				<Toggle
					label={ __( "Show icon", 'carbon-blocks' ) }
					value={ showIcon }
					onChange={ showIcon => setAttributes({ showIcon }) }
				/>
        <ConditionalRender conditions={ showIcon }>
          <ToggleGroupControl
            isBlock
            label={ __( "Icon position", "carbon-blocks" ) }
            value={ iconPosition }
            onChange={ iconPosition => setAttributes({ iconPosition }) }
            __nextHasNoMarginBottom
          >
            <ToggleGroupControlOption
              label={ __( "Start", "carbon-blocks" ) }
              value="row-reverse"
            />
            <ToggleGroupControlOption
              label={ __( "End", "carbon-blocks" ) }
              value="row"
            />
          </ToggleGroupControl>
        </ConditionalRender>
				<ToggleGroupControl
					isBlock
					label={ __( "Width", "carbon-blocks" ) }
					value={ width }
					onChange={ width => setAttributes({ width }) }
					__nextHasNoMarginBottom
				>
					<ToggleGroupControlOption
						label={ __( "Fit", "carbon-blocks" ) }
						value="fit-content"
					/>
					<ToggleGroupControlOption
						label={ __( "Full", "carbon-blocks" ) }
						value="100%"
					/>
				</ToggleGroupControl>
				<ConditionalRender conditions={ width === "100%" }>
					<HorizontalControl
						value={ alignment }
						onChange={ alignment => setAttributes({ alignment }) }
						allowSpaceBetween={ true }
					/>
				</ConditionalRender>
			</PanelBody>
		</InspectorControls>
		<RichText
			tagName="span"
			value={ text }
			placeholder={ buttonPlaceholder }
			onChange={ text => setAttributes( { text } ) }
			multiline={ false }
			allowedFormats={ [ 'core/bold', 'core/italic' ] }
		/>
		<ConditionalRender conditions={ showIcon }>
			{ children }
		</ConditionalRender>
		<ConditionalRender conditions={ !isChild }>
			<BlockControls>
				<ToolbarGroup group="blocks">
					<ConditionalRender conditions={ width === "100%" }>
						<HorizontalAlignmentToolbar
							value={ alignment }
							allowSpaceBetween={ true }
							onChange={ alignment => setAttributes({ alignment }) }
						/>
					</ConditionalRender>
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
		</ConditionalRender>
	</a>
}
