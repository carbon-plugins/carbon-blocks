// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import {
	RichText, useBlockProps,
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
} from '@wordpress/block-editor';
import { ConditionalLinkRenderAsChild, ConditionalRender } from '../../assets/components/conditionals';

//Internal dependencies

export default function save( props ) {
	const { attributes } = props;
  const {
		url, alt, caption, align, width, height, aspectRatio, scale, id, sizeSlug, title,
		showCaption, focalPoint, rotation, uid, isFlippedVertically, isFlippedHorizontally, allowZoom, post
	} = attributes;

	const borderProps = getBorderClassesAndStyles( attributes );
	const classes = classnames( {
		[ `align${ align }` ]: align,
		[ `size-${ sizeSlug }` ]: sizeSlug,
		'is-resized': width || height,
		'has-custom-border':
			!! borderProps.className ||
			( borderProps.style &&
				Object.keys( borderProps.style ).length > 0 ),
	} );

	const blockProps = useBlockProps.save({ className: classes })

	//srcSet={Object.values(image?.sizes).map((size) => `${size.url} ${size.width}w`).join(', ')}
	return <figure { ...blockProps }>
		{
			allowZoom
				? <a
					href={ url }
					title={ title }
					rel="noopener"
					className="lightbox"
					data-single-lightbox={ uid }
					data-description={ caption }
					data-rotation={ rotation }
					data-flip-vertically={ isFlippedVertically }
					data-flip-horizontally={ isFlippedHorizontally }
					onClick={ e => e.preventDefault() }
				>
					<img
						src={ url || "" }
						alt={ alt }
						style={{
							...borderProps.style,
							width: width,
							height: height,
							aspectRatio: aspectRatio,
							objectFit: scale,
							objectPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
							transform: `rotate(${rotation}deg) scale(${isFlippedHorizontally ? -1 : 1}, ${isFlippedVertically ? -1 : 1})`
						}}
					/>
				</a>
				: <ConditionalLinkRenderAsChild
					post={ post }
					title={ title }
				>
					<img
						src={ url || "" }
						alt={ alt }
						style={ {
							...borderProps.style,
							width: width,
							height: height,
							aspectRatio: aspectRatio,
							objectFit: scale,
							objectPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
							transform: `rotate(${rotation}deg) scale(${isFlippedHorizontally ? -1 : 1}, ${isFlippedVertically ? -1 : 1})`
						} }
					/>
				</ConditionalLinkRenderAsChild>
		}
		<ConditionalRender conditions={ showCaption && caption }>
			<RichText.Content
				tagName="figcaption"
				value={ caption }
			/>
		</ConditionalRender>
	</figure>
};

