import { __ } from '@wordpress/i18n';
import { justifyLeft, justifyCenter, justifyRight } from '@wordpress/icons';

export const getIconAlignment = alignment => {
	switch (alignment) {
		case "flex-start":
			return justifyLeft
		case "center":
			return justifyCenter
		case "flex-end":
			return justifyRight
	}
}

export const getUnitLabel = (unit) => {
	switch (unit) {
		case "px":
			return __( "pixels", 'carbon-blocks' )
		case "%":
			return __( "container percent", 'carbon-blocks' )
		case "vw":
			return __( "page view width", 'carbon-blocks' )
	}
}

export const rotateIcon = rotation => {
	if(rotation + 90 >= 360) {
		return 0
	} else {
		return rotation + 90
	}
}
