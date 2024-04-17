/**
 * WordPress dependencies
 */
import {
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';


export default function WidthHeightTool({ value = {}, onChange, units }) {
	const width = value.width === 'auto' ? '' : value.width ?? '';
	const height = value.height === 'auto' ? '' : value.height ?? '';

	const onDimensionChange = ( dimension ) => ( nextDimension ) => {
		const nextValue = { ...value };
		if ( ! nextDimension ) {
			delete nextValue[ dimension ];
		} else {
			nextValue[ dimension ] = nextDimension;
		}
		onChange( nextValue );
	};

	return <>
		<UnitControl
			label={ __( 'Width', 'carbon-blocks' ) }
			placeholder={ __( 'Auto', 'carbon-blocks' ) }
			labelPosition="top"
			units={ units }
			min={ 0 }
			value={ width }
			onChange={ onDimensionChange( 'width' ) }
			size={ '__unstable-large' }
		/>
		<UnitControl
			label={ __( 'Height', 'carbon-blocks' ) }
			placeholder={ __( 'Auto', 'carbon-blocks' ) }
			labelPosition="top"
			units={ units }
			min={ 0 }
			value={ height }
			onChange={ onDimensionChange( 'height' ) }
			size={ '__unstable-large' }
		/>
	</>
}
