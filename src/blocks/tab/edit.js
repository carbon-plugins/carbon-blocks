// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useInnerBlocksProps, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

//Internal dependencies
import './editor.scss';

export default function Edit( props ) {
	const { attributes, setAttributes, context } = props;
	const { className, id, active } = attributes;

	setAttributes( { active: context["carbon-blocks/active"] } )

	const classes = classnames( className, { 'is-active' : active === id ? true : false } );
	const blockProps = useBlockProps( { className: classes } );

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		renderAppender: InnerBlocks.ButtonBlockAppender
	} );

	return <section { ...innerBlocksProps } data-id={ id }>
		{ children }
	</section>
}
