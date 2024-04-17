// WordPress dependencies
import { Icon } from '@wordpress/icons';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;
	const { 
		size, unit, rotation, post, icon, 
		alignment, isFlippedHorizontally, isFlippedVertically 
	} = attributes;

	const blockProps = useBlockProps.save({ style: {
		transform: `rotate(${rotation}deg) scale(${isFlippedHorizontally ? -1 : 1},
		${isFlippedVertically ? -1 : 1})`,
		width: icon?.svg ? `${size}${unit}` : "fit-content"
	} });

	const ConditionalLink = () => {
		if(icon.isJsx) {
			return <a
				{ ...blockProps }
				href={ post.url }
				target={ post.opensInNewWindow ? '_blank' : '_self' }
				title={ icon.name }
				rel="noopener"
			>
				<Icon icon={icon.svg}/>
			</a>
		}
		return <a
			{ ...blockProps }
			href={ post.url }
			title={ icon.name }
			target={ post.opensInNewWindow ? '_blank' : '_self' }
			dangerouslySetInnerHTML={{ __html: icon.svg }}
			rel="noopener"
		/>
	}
	const ConditionalRender = () => {
		if(icon.isJsx){
			return <span { ...blockProps }>
				<Icon icon={icon.svg}/>
			</span>
		}
		return <span
			{ ...blockProps }
			dangerouslySetInnerHTML={{ __html: icon.svg }}
		/>
	}


	return <section style={{ display: "flex", justifyContent: alignment }} >
		{
			post.url
			? <ConditionalLink />
			: <ConditionalRender />
		}
	</section>
}
