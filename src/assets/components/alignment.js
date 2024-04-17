import { __ } from '@wordpress/i18n';
import { JustifyContentControl } from '@wordpress/block-editor';
import {
	ToolbarGroup, ToolbarDropdownMenu,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon
} from '@wordpress/components';
import { SVG, Path } from '@wordpress/primitives';
import { row, stack } from '@wordpress/icons';
import { ConditionalRender } from './conditionals';

export const getAlignment = alignment => {
	switch (alignment) {
		case "top": 						return "flex-start"
		case "left": 						return "flex-start"
		case "center": 					return "center"
		case "right": 					return "flex-end"
		case "bottom": 					return "flex-end"
		case "space-between": 	return "space-between"
		case "stretch": 				return "stretch"
	}
}

export const HorizontalControl = ({ value, onChange, allowSpaceBetween = false }) => {
	return <ToggleGroupControl
		__nextHasNoMarginBottom
		label={ __( "Horizontal alignment", 'carbon-blocks' ) }
		value={ value }
		onChange={ onChange }
	>
		<ToggleGroupControlOptionIcon
			icon={ <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M9 9v6h11V9H9zM4 20h1.5V4H4v16z"></Path></SVG> }
			label={ __( "Left", 'carbon-blocks' ) }
			value="left"
		/>
		<ToggleGroupControlOptionIcon
			icon={ <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"></Path></SVG> }
			label={ __( "Center", 'carbon-blocks' ) }
			value="center"
		/>
		<ToggleGroupControlOptionIcon
			icon={ <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"></Path></SVG> }
			label={ __( "Right", 'carbon-blocks' ) }
			value="right"
		/>
		<ConditionalRender conditions={ allowSpaceBetween }>
			<ToggleGroupControlOptionIcon
				icon={ <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><Path d="M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z"></Path></SVG> }
				label={ __( "Space between", 'carbon-blocks' ) }
				value="space-between"
			/>
		</ConditionalRender>
	</ToggleGroupControl>
}

export const VerticalControl = ({ value, onChange, allowStretch = false }) => {
	return <ToggleGroupControl
		__nextHasNoMarginBottom
		label={ __( "Vertical alignment", 'carbon-blocks' ) }
		value={ value }
		onChange={ onChange }
	>
		<ToggleGroupControlOptionIcon
			icon={ <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: "90deg" }}><Path d="M9 9v6h11V9H9zM4 20h1.5V4H4v16z"></Path></SVG> }
			label={ __( "Top", 'carbon-blocks' ) }
			value="top"
		/>
		<ToggleGroupControlOptionIcon
			icon={ <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: "90deg" }}><Path d="M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"></Path></SVG> }
			label={ __( "Center", 'carbon-blocks' ) }
			value="center"
		/>
		<ToggleGroupControlOptionIcon
			icon={ <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: "90deg" }}><Path d="M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"></Path></SVG> }
			label={ __( "Bottom", 'carbon-blocks' ) }
			value="bottom"
		/>
		<ConditionalRender conditions={ allowStretch }>
			<ToggleGroupControlOptionIcon
				icon={ <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: "90deg" }}><Path d="M4 4H5.5V20H4V4ZM7 10L17 10V14L7 14V10ZM20 4H18.5V20H20V4Z"></Path></SVG> }
				label={ __( "Stretch", 'carbon-blocks' ) }
				value="stretch"
			/>
		</ConditionalRender>
	</ToggleGroupControl>
}

export const DirectionControl = ({ value, onChange }) => {
	return <ToggleGroupControl
		__nextHasNoMarginBottom
		label={ __( "Direction", 'carbon-blocks' ) }
		value={ value }
		onChange={ onChange }
	>
		<ToggleGroupControlOptionIcon
			icon={ row }
			label={ __( "Row", 'carbon-blocks' ) }
			value="row"
		/>
		<ToggleGroupControlOptionIcon
			icon={ stack }
			label={ __( "Column", 'carbon-blocks' ) }
			value="column"
		/>
	</ToggleGroupControl>
}

export const HorizontalAlignmentToolbar = ({ value, onChange, allowSpaceBetween = false }) => {
	const allowedControls = [ 'left', 'center', 'right', ... allowSpaceBetween ? ['space-between'] : [], ];
	return <ToolbarGroup group="blocks">
		<JustifyContentControl
			value={ value }
			allowedControls={ allowedControls }
			onChange={ onChange }
		/>
	</ToolbarGroup>
}


export const VerticalAlignmentToolbar = ({ value, onChange, allowStretch = false }) => {
	const icons = {
		"top": <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: "90deg" }}><Path d="M9 9v6h11V9H9zM4 20h1.5V4H4v16z"></Path></SVG>,
		"center": <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: "90deg" }}><Path d="M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"></Path></SVG>,
		"bottom": <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: "90deg" }}><Path d="M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"></Path></SVG>,
		"stretch": <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: "90deg" }}><Path d="M4 4H5.5V20H4V4ZM7 10L17 10V14L7 14V10ZM20 4H18.5V20H20V4Z"></Path></SVG>,
	};

	const icon = value ? icons[ value ] : icons.left

	return <ToolbarGroup group="blocks">
		<ToolbarDropdownMenu
			icon={ icon }
			label={ __("Vertical control", "carbon-blocks") }
			controls={ [
				{
					title: __( "Top", 'carbon-blocks' ),
					icon: icons["top"],
					onClick: () => onChange( "top" ),
					isActive: 'top' === value,
				},
				{
					title: __( "Center", 'carbon-blocks' ),
					icon: icons["center"],
					onClick: () => onChange( "center" ),
					isActive: 'center' === value,
				},
				{
					title: __( "Bottom", 'carbon-blocks' ),
					icon: icons["bottom"],
					onClick: () => onChange( "bottom" ),
					isActive: 'bottom' === value,
				},
				allowStretch && {
					title: __( "Stretch", 'carbon-blocks' ),
					icon: icons["stretch"],
					onClick: () => onChange( "stretch" ),
					isActive: 'stretch' === value,
				},
			] }
		/>
	</ToolbarGroup>
}


export const AlignmentToolbar = ({ alignment, justification, onAlignmentChange, onJustificationChange, allowStretch = false, allowSpaceBetween = false }) => {
	const icons = {
		"top": <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: "90deg" }}><Path d="M9 9v6h11V9H9zM4 20h1.5V4H4v16z"></Path></SVG>,
		"center": <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: "90deg" }}><Path d="M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"></Path></SVG>,
		"bottom": <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: "90deg" }}><Path d="M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"></Path></SVG>,
		"stretch": <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style={{ rotate: "90deg" }}><Path d="M4 4H5.5V20H4V4ZM7 10L17 10V14L7 14V10ZM20 4H18.5V20H20V4Z"></Path></SVG>,
	};

	const icon = alignment ? icons[ alignment ] : icons.left;

	const allowedControls = [ 'left', 'center', 'right', ... allowSpaceBetween ? ['space-between'] : [], ];

	return <ToolbarGroup group="blocks">
		<JustifyContentControl
			value={ justification }
			allowedControls={ allowedControls }
			onChange={ onJustificationChange }
		/>
		<ToolbarDropdownMenu
			icon={ icon }
			label={ __("Vertical control", "carbon-blocks") }
			controls={ [
				{
					title: __( "Top", 'carbon-blocks' ),
					icon: icons["top"],
					onClick: () => onAlignmentChange( "top" ),
					isActive: 'top' === alignment,
				},
				{
					title: __( "Center", 'carbon-blocks' ),
					icon: icons["center"],
					onClick: () => onAlignmentChange( "center" ),
					isActive: 'center' === alignment,
				},
				{
					title: __( "Bottom", 'carbon-blocks' ),
					icon: icons["bottom"],
					onClick: () => onAlignmentChange( "bottom" ),
					isActive: 'bottom' === alignment,
				},
				allowStretch && {
					title: __( "Stretch", 'carbon-blocks' ),
					icon: icons["stretch"],
					onClick: () => onAlignmentChange( "stretch" ),
					isActive: 'stretch' === alignment,
				},
			] }
		/>
	</ToolbarGroup>
}
