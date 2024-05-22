/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const DEFAULT_ASPECT_RATIO_OPTIONS = [
	{
		label: __( 'Original', 'carbon-blocks' ),
		value: 'auto',
	},
	{
		label: __( 'Square - 1:1', 'carbon-blocks' ),
		value: '1',
	},
	{
		label: __( 'Standard - 4:3', 'carbon-blocks' ),
		value: '4/3',
	},
	{
		label: __( 'Portrait - 3:4', 'carbon-blocks' ),
		value: '3/4',
	},
	{
		label: __( 'Classic - 3:2', 'carbon-blocks' ),
		value: '3/2',
	},
	{
		label: __( 'Classic Portrait - 2:3', 'carbon-blocks' ),
		value: '2/3',
	},
	{
		label: __( 'Wide - 16:9', 'carbon-blocks' ),
		value: '16/9',
	},
	{
		label: __( 'Tall - 9:16', 'carbon-blocks' ),
		value: '9/16',
	},
	{
		label: __( 'Custom', 'carbon-blocks' ),
		value: 'custom',
		disabled: true,
		hidden: true,
	},
];

export default function AspectRatioTool( { value, onChange, options = DEFAULT_ASPECT_RATIO_OPTIONS } ) {
	const displayValue = value ?? 'auto';

	return  <SelectControl
		label={ __( 'Aspect ratio' ) }
		value={ displayValue }
		options={ options }
		onChange={ onChange }
		size={ '__unstable-large' }
		__nextHasNoMarginBottom
	/>
}
