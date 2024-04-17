// External dependencies

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import {
	InspectorControls, RichText, useBlockProps, BlockControls, useInnerBlocksProps,
	PanelColorSettings, JustifyContentControl
} from '@wordpress/block-editor';
import {
	PanelBody, ToolbarGroup,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon
} from '@wordpress/components';
import { arrowDown, arrowLeft, arrowUp, arrowRight } from '@wordpress/icons';
import { SVG, Path } from '@wordpress/primitives';

//Internal dependencies
import './editor.scss';
import { ConditionalRender } from "../../assets/components/conditionals";
import Toggle from '../../assets/components/Toggle';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const {
		prefixe, suffixe, number, text, textColor, prefixColor, suffixColor, showText,
		numberColor, backgroundColor, showPrefix, showSuffix, showIcon, orientation,
		justification
	} = attributes;

	const getAlignment = () => {
		switch (justification) {
			case "left": 		return "flex-start"
			case "center": 	return "center"
			case "right": 	return "flex-end"
		}
	}

	const getOrientation = () => {
		switch (orientation) {
			case "up": 		return "column-reverse"
			case "down": 	return "column"
			case "left": 	return "row-reverse"
			case "right": return "row"
		}
	}

	const rotation = orientation === "left" || orientation === "right"
		?	"90deg"
		: "0deg"

	const blockProps = useBlockProps({
		style: {
			backgroundColor,
			alignItems: getAlignment(),
			flexDirection: getOrientation(),
			textAlign: justification
		}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ "carbon-blocks/icons" ],
		renderAppender: false,
		template: [
			[ "carbon-blocks/icons",  { showActions: false, isChild: true } ]
		]
	} );


	return <>
		<InspectorControls group="styles">
			<PanelColorSettings
				title={ __( 'Colors', 'carbon-blocks' ) }
				__experimentalIsRenderedInSidebar
				enableAlpha={true}
				className="carbon-blocks-color-panel"
				colorSettings={ [
					{
						value: numberColor,
						onChange: numberColor => setAttributes( { numberColor } ),
						label: __( 'Number', 'carbon-blocks' ),
					},
					// {
					// 	value: prefixColor,
					// 	onChange: prefixColor => setAttributes( { prefixColor } ),
					// 	label: __( 'Prefix', 'carbon-blocks' ),
					// },
					// {
					// 	value: suffixColor,
					// 	onChange: suffixColor => setAttributes( { suffixColor } ),
					// 	label: __( 'Suffix', 'carbon-blocks' ),
					// },
					{
						value: textColor,
						onChange: textColor => setAttributes( { textColor } ),
						label: __( 'Text', 'carbon-blocks' ),
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
			<PanelBody title={ __( "Settings", "carbon" ) }>
				<ToggleGroupControl
					__nextHasNoMarginBottom
					label={ __( "Orientation", 'carbon-blocks' ) }
					value={ orientation }
					onChange={orientation => setAttributes({ orientation })}
				>
					<ToggleGroupControlOptionIcon
						icon={ arrowUp }
						label={ __( "Up", 'carbon-blocks' ) }
						value="up"
					/>
					<ToggleGroupControlOptionIcon
						icon={ arrowDown }
						label={ __( "Down", 'carbon-blocks' ) }
						value="down"
					/>
					<ToggleGroupControlOptionIcon
						icon={ arrowLeft }
						label={ __( "Left", 'carbon-blocks' ) }
						value="left"
					/>
					<ToggleGroupControlOptionIcon
						icon={ arrowRight }
						label={ __( "Right", 'carbon-blocks' ) }
						value="right"
					/>
				</ToggleGroupControl>
				<ToggleGroupControl
					__nextHasNoMarginBottom
					label={ __( "Alignment", 'carbon-blocks' ) }
					value={ justification }
					onChange={ justification => setAttributes({ justification }) }
				>
					<ToggleGroupControlOptionIcon
						icon={ <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: rotation }}><Path d="M9 9v6h11V9H9zM4 20h1.5V4H4v16z"></Path></SVG> }
						label={
							orientation === "left" || orientation === "right"
								? __( "Left", 'carbon-blocks' )
								: __( "Top", 'carbon-blocks' )
						}
						value="left"
					/>
					<ToggleGroupControlOptionIcon
						icon={ <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: rotation }}><Path d="M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"></Path></SVG> }
						label={ __( "Center", 'carbon-blocks' ) }
						value="center"
					/>
					<ToggleGroupControlOptionIcon
						icon={ <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: rotation }}><path d="M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"></path></SVG> }
						label={
							orientation === "left" || orientation === "right"
								? __( "Right", 'carbon-blocks' )
								: __( "Bottom", 'carbon-blocks' )
						}
						value="right"
					/>
				</ToggleGroupControl>
				{/* <Toggle
					label={ __( "Add prefix", 'carbon-blocks' )}
					onChange={ showPrefix => setAttributes( { showPrefix } ) }
					value={ showPrefix }
				/> */}
				<Toggle
					label={ __( "Show icon", 'carbon-blocks' )}
					onChange={ showIcon => setAttributes( { showIcon } ) }
					value={ showIcon }
				/>
				<Toggle
					label={ __( "Show text", 'carbon-blocks' )}
					onChange={ showText => setAttributes( { showText } ) }
					value={ showText }
				/>
				{/* <Toggle
					label={ __( "Add suffix", 'carbon-blocks' )}
					onChange={ showSuffix => setAttributes( { showSuffix } ) }
					value={ showSuffix }
				/> */}
			</PanelBody>
		</InspectorControls>
		<div { ...innerBlocksProps } data-anim>
			<ConditionalRender conditions={ showIcon }>
				{ children }
			</ConditionalRender>
			<dt>
				{/* <ConditionalRender conditions={ showPrefix }>
					<RichText
						tagName="p"
						value={ prefixe }
						onChange={ prefixe => setAttributes( { prefixe } ) }
						placeholder="____"
						style={ { color: prefixColor } }
						allowedFormats={ [ 'core/bold', 'core/italic', 'carbon-blocks/animate-text' ] }
					/>
				</ConditionalRender> */}
					<RichText
						tagName="span"
						value={ number }
						onChange={ number => setAttributes( { number } ) }
						placeholder="0"
						style={ { color: numberColor } }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
					/>
				{/* <ConditionalRender conditions={ showSuffix }>
					<RichText
						tagName="p"
						value={ suffixe }
						onChange={ suffixe => setAttributes( { suffixe } ) }
						placeholder="____"
						style={ { color: suffixColor } }
						allowedFormats={ [ 'core/bold', 'core/italic', 'carbon-blocks/animate-text' ] }
					/>
				</ConditionalRender> */}
			</dt>
			<ConditionalRender conditions={ showText }>
				<RichText
					tagName="dd"
					value={ text }
					onChange={ text => setAttributes( { text } ) }
					placeholder="Lorem ipsum"
					style={ { color: textColor } }
					allowedFormats={ [ 'core/bold', 'core/italic', 'carbon-blocks/animate-text' ] }
				/>
			</ConditionalRender>
		</div>
		<BlockControls>
			<ToolbarGroup group="blocks">
				<JustifyContentControl
					value={ justification }
					allowedControls={ [ 'left', 'center', 'right'  ] }
					onChange={ justification =>  setAttributes( { justification } )}
				/>
			</ToolbarGroup>
		</BlockControls>
	</>
}
