import edit from "./edit";

wp.hooks.addFilter(
	'editor.BlockEdit',
	'carbon-blocks/animation',
	edit
);
