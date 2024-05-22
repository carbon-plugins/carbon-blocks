/**
 * WordPress dependencies
 */
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const DEFAULT_SCALE_OPTIONS = [
	{
		value: 'fill',
		label: __( 'Fill', 'carbon-blocks' ),
		help: __( 'Fill the space by stretching the content.', 'carbon-blocks' ),
	},
	{
		value: 'contain',
		label: __( 'Contain', 'carbon-blocks' ),
		help: __( 'Fit the content to the space without clipping.', 'carbon-blocks' ),
	},
	{
		value: 'cover',
		label: __( 'Cover', 'carbon-blocks' ),
		help: __( "Fill the space by clipping what doesn't fit.", 'carbon-blocks' ),
	},
	{
		value: 'none',
		label: __( 'None', 'carbon-blocks' ),
		help: __( 'Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.', 'carbon-blocks' ),
	},
	{
		value: 'scale-down',
		label: __( 'Scale down', 'carbon-blocks' ),
		help: __( 'Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.', 'carbon-blocks' ),
	},
];

export default function ScaleTool({ value, onChange, options = DEFAULT_SCALE_OPTIONS }) {
	const displayValue = value ?? 'fill';

	const scaleHelp = useMemo( () => {
		return options.reduce( ( acc, option ) => {
			acc[ option.value ] = option.help;
			return acc;
		}, {} );
	}, [ options ] );

	return <ToggleGroupControl
		label={ __( 'Scale', 'carbon-blocks' ) }
		isBlock
		help={ scaleHelp[ displayValue ] }
		value={ displayValue }
		onChange={ onChange }
		__nextHasNoMarginBottom
	>
		{ options.map( ( option ) => (
			<ToggleGroupControlOption
				key={ option.value }
				{ ...option }
			/>
		) ) }
	</ToggleGroupControl>
}
