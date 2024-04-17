import actionButtons from './edit';

wp.hooks.addFilter(
	'editor.BlockEdit',
	'carbon-plugins/action-buttons',
	actionButtons
);
