import * as wordpresIcons from '@wordpress/icons';
import { __ } from '@wordpress/i18n';


const { Icon, ...availableIcons } = wordpresIcons;

function camelToKebab(camelCase) {
  return camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function camelToPhrase(camelCase) {
  const phrase = camelCase.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}

export const wordpress = Object.entries(availableIcons).map(([key, value]) => {
	return {
		category: __( 'Miscellaneous', 'carbon-blocks' ),
		name: camelToPhrase(key),
		slug: camelToKebab(key),
		svg: value,
		isJsx: true
	}
});
