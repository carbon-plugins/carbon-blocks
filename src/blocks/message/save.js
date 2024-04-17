// WordPress dependencies
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import { ConditionalRender, ConditionalLinkRender } from '../../assets/components/conditionals';
import { titlePlaceholder } from '../../assets/components/placeholders';

export default function save( props ) {
	const { attributes } = props;
	const { showIcon, content, slug, post } = attributes;

	return <ConditionalLinkRender conditions={ showIcon } post={ post } props={ useBlockProps.save() } data-slug={ slug } Tag="section">
			<ConditionalRender conditions={ showIcon }>
				<InnerBlocks.Content />
			</ConditionalRender>
			<RichText.Content
				tagName="p"
				value={ content || titlePlaceholder }
			/>
	</ConditionalLinkRender>
}
