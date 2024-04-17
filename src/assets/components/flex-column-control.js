import {
	RangeControl
} from "@wordpress/components";
import { __ } from '@wordpress/i18n';

export function FlexColumnControl({ columns, setAttributes }) {
	return <RangeControl
		initialPosition={ columns }
		label={ __( "Max column number", 'carbon-blocks' ) }
		help={ __( "Select in how many columns you want to divide your content for max width.", 'carbon-blocks' ) }
		min={ 1 }
		max={ 5 }
		value={ columns }
		onChange={ columns => setAttributes({ columns }) }
		__next40pxDefaultSize
		__nextHasNoMarginBottom
	/>
}

export function getSize(columns, gap) {
	return `calc(100% / ${columns} - ${gap * (columns - 1)}px / ${columns})`
}

export function getGap(gap) {
	return gap && gap.replace(/[^0-9]/g, '')
}
