/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const DEFAULT_SIZE_OPTIONS = [
	{
		label: __( 'Thumbnail', 'carbon-blocks' ),
		value: 'thumbnail',
	},
	{
		label: __( 'Medium', 'carbon-blocks' ),
		value: 'medium',
	},
	{
		label: __( 'Large', 'carbon-blocks' ),
		value: 'large',
	},
	{
		label: __( 'Full size', 'carbon-blocks' ),
		value: 'full',
	},
];

export default function ResolutionTool({ value, onChange, options = DEFAULT_SIZE_OPTIONS, defaultValue = DEFAULT_SIZE_OPTIONS[ 0 ].value }) {
	const displayValue = value ?? defaultValue;
	return <SelectControl
		label={ __( 'Resolution' ) }
		value={ displayValue }
		options={ options }
		onChange={ onChange }
		help={ __( 'Select the size of the source image.' ) }
		size={ '__unstable-large' }
	/>
}
