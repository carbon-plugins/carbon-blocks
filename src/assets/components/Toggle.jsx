// WordPress dependencies
import {
	BaseControl, __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Toggle({ value, onChange, disabledHelp = __("This setting is disabled. You must have at least one active property.", "carbon-blocks"), label = "", help = "", disabled = false }) {
	return <ToggleGroupControl
		onChange={ onChange }
    className={ disabled ? "is-disabled" : "" }
		label={ label }
		value={ value }
		help={ disabled ? disabledHelp : help }
		isBlock
		__nextHasNoMarginBottom
	>
		<ToggleGroupControlOption value={ true } label={ __( "Yes", 'carbon-blocks' ) } />
		<ToggleGroupControlOption value={ false } label={ __( "No", 'carbon-blocks' ) } />
	</ToggleGroupControl>
}
