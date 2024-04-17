// External dependencies

// WordPress dependencies
import { useBlockProps, RichText, useInnerBlocksProps } from '@wordpress/block-editor';
import { buttonPlaceholder } from '../../assets/components/placeholders';

//Internal dependencies
import { getAlignment } from '../../assets/components/alignment';
import { ConditionalRender } from '../../assets/components/conditionals';

export default function save( props ) {
	const { attributes } = props;
	const { text, alignment, post, width, showIcon } = attributes;

	const blockProps = useBlockProps.save({
		style: {
			justifyContent: getAlignment( alignment ),
			width
		}
	});
	const { children, ...innerBlocksProps } = useInnerBlocksProps.save( blockProps)

	return <a
		{ ...innerBlocksProps }
		href={ post?.url }
		target={ post?.opensInNewWindow ? '_blank' : '_self' }
		rel='noopener'
		onClick={ e => e.preventDefault() }
	>
		<RichText.Content
			tagName="span"
			value={ text || buttonPlaceholder }
		/>
		<ConditionalRender conditions={ showIcon }>
			{ children }
		</ConditionalRender>
	</a>
}
