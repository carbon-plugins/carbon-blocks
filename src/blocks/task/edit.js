// WordPress dependencies
import { __ } from '@wordpress/i18n';
import {
	RichText, BlockControls, PanelColorSettings,
	InspectorControls, useBlockProps, useInnerBlocksProps
} from '@wordpress/block-editor';
import {
	ToolbarGroup, ToolbarButton, PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption
} from '@wordpress/components';
import { Icon } from '@wordpress/components';
import { check, closeSmall } from '@wordpress/icons';

//Internal dependencies
import './editor.scss';

export default function Edit( props ) {
	const { attributes, setAttributes, context } = props;
	const { textContent, activeTask, color, background, tickColor, tickBackground, disabledColor, type } = attributes;

	const blockProps = useBlockProps({
		style:{
			textDecoration: activeTask
				? "none"
				: type === "strikethrough" && `line-through ${disabledColor}`
		}
	});

	const customLabels = context['carbon-blocks/labels'];

	let labels = customLabels
		? {
			completed: customLabels.completed,
			taskCompleted: customLabels.taskCompleted,
			taskTodo: customLabels.taskTodo,
			style: customLabels.style
		}
		: {
			completed: __( 'Completed', 'carbon-blocks' ),
			taskCompleted: __( "Task completed", 'carbon-blocks' ),
			taskTodo: __( "Task to-do", 'carbon-blocks' ),
			style: __( "Task completed style", 'carbon-blocks' )
		}

	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {});

	return <>
		<InspectorControls>
			<PanelBody title={ __( "Settings", 'carbon-blocks' ) } initialOpen={true}>
				<ToggleGroupControl
					label={ labels.style }
					value={ type }
					onChange={ type => setAttributes( { type } ) }
					isBlock
					__nextHasNoMarginBottom
				>
					<ToggleGroupControlOption
						label={ __( "Strikethrough", 'carbon-blocks' ) }
						value="strikethrough"
					/>
					<ToggleGroupControlOption
						label={ __( "Cross", 'carbon-blocks' ) }
						value="cross"
					/>
				</ToggleGroupControl>
			</PanelBody>
		</InspectorControls>
		<InspectorControls group="styles">
			<PanelColorSettings
				enableAlpha
				__experimentalIsRenderedInSidebar
				title={ __( 'Colors', 'carbon-blocks' ) }
				className="carbon-blocks-color-panel"
				colorSettings={ [
					{
						value: color,
						onChange: color => setAttributes( { color } ),
						label: __( 'Text', 'carbon-blocks' ),
					},
					{
						value: background,
						onChange: background => setAttributes( { background } ),
						label: __( 'Background', 'carbon-blocks' ),
					},
					{
						value: tickColor,
						onChange: tickColor => setAttributes( { tickColor } ),
						label: __( 'Tick', 'carbon-blocks' ),
					},
					{
						value: tickBackground,
						onChange: tickBackground => setAttributes( { tickBackground } ),
						label: __( 'Tick background', 'carbon-blocks' ),
					},
					{
						value: disabledColor,
						onChange: disabledColor => setAttributes( { disabledColor } ),
						label: labels.completed,
					}
				] }
			/>
		</InspectorControls>
		<li { ...innerBlocksProps }>
			<Icon
				icon={ activeTask
					? check
					: type === "strikethrough"
						? check
						: closeSmall
				}
				style={{
					fill: activeTask ? tickColor : "#ffffff",
					background: activeTask ? tickBackground : disabledColor
				}}
			/>
			<RichText
				tagName='span'
				value={ textContent }
				multiline={ false }
				onChange={ (textContent) => setAttributes( {textContent} ) }
				placeholder="Lorem ipsum"
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				style={{
					color: activeTask ? color : disabledColor,
					background: activeTask ? background : "none"
				}}
			/>
		</li>
		<BlockControls>
			<ToolbarGroup group="blocks">
				<ToolbarButton
					isActive={ !activeTask }
					label={ activeTask ? labels.taskCompleted : labels.taskTodo }
					icon={ activeTask ? check : closeSmall }
					onClick={ () => setAttributes({ activeTask: !activeTask }) }
				/>
			</ToolbarGroup>
		</BlockControls>
	</>
}
