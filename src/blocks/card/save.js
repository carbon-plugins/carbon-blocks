// WordPress dependencies
import { RichText, useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

// Internal dependencies
import { ConditionalRender } from "../../assets/components/conditionals";
import { linkPlaceholder } from '../../assets/components/placeholders';

export default function save( props ) {
	const { attributes } = props;
	const { seeMore, post, showSeeMore, linkColor, backgroundColor } = attributes;

	const blockProps = useBlockProps.save({
		style: {
			backgroundColor
		}
	});
	const { children, ...innerBlocksProps} = useInnerBlocksProps.save( blockProps )

	return <article { ...innerBlocksProps }>
		{ children }
		<ConditionalRender conditions={ post?.url && showSeeMore }>
      <RichText.Content
        tagName="span"
        value={ seeMore || linkPlaceholder }
        style={{ color: linkColor }}
      />
		</ConditionalRender>
    <ConditionalRender conditions={ post?.url }>
      <a href={ post?.url } />
    </ConditionalRender>
	</article>
}
