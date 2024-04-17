// External dependencies

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { 
	useBlockProps, RichText, useInnerBlocksProps
} from '@wordpress/block-editor';
import { titlePlaceholder } from '../../assets/components/placeholders';

//Internal dependencies

export default function save( props ) {
	const { attributes } = props;
	const { showContent, name } = attributes;
	const summary = attributes.summary?.length > 0 ? attributes.summary : titlePlaceholder;

	const blockProps = useBlockProps.save();

	const { children, ...innerBlocksProps } = useInnerBlocksProps.save( blockProps );

	return <details { ...innerBlocksProps } open={ showContent } name={ name }>
		<summary>
			<RichText.Content value={ summary } />
		</summary>
		{ children }
	</details>
}
