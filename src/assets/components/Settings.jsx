import { __, sprintf } from '@wordpress/i18n';
import { dispatch } from '@wordpress/data';
import { Icon } from '@iconify/react';

export default function Settings({ title = "block", icon = "fluent:settings-24-filled", position = "right" }) {

	function handleButtonClick() {
		dispatch( 'core/edit-post' ).openGeneralSidebar('edit-post/block');
	}

	const style = position === "left"
		? {  "left": 0 }
		: { "right": 0 }

	return <span aria-label={ sprintf(`Open %1$s settings`, title, 'carbon') } title={ __(`Open ${title} settings`, 'carbon') } className="carbon-setting" onClick={handleButtonClick} style={ style }>
		<Icon icon={ icon } />
	</span>
}
