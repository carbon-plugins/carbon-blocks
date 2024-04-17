// External dependencies
import { titlePlaceholder } from './../../assets/components/placeholders';

// WordPress dependencies
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;
	const { 
		tabLabels, textColor, borderColor, backgroundColor, 
		inactiveTextColor, inactiveBackgroundColor 
	} = attributes;
	const blockProps = useBlockProps.save()

	return <section { ...blockProps } data-colors={`{"border":"${borderColor}","text":"${textColor}","inactiveText":"${inactiveTextColor}","background":"${backgroundColor}","inactiveBackground":"${inactiveBackgroundColor}"}`}>
		<header>
			{
				tabLabels.map((tabLabel, i) => (
					<button
						key={i}
						data-id={i}
					>
						{ tabLabel || titlePlaceholder }
					</button>
				))
			}
		</header>
		<InnerBlocks.Content />
	</section>
}
