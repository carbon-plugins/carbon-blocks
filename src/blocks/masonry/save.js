// WordPress dependencies
import { useBlockProps } from '@wordpress/block-editor';
import { getGap } from '../../assets/components/flex-column-control';
import { ConditionalRender } from '@carbon-plugins/components';

// Internal dependencies  
import { ConditionalImageZoomableRender } from '../../assets/components/conditionals';

export default function save( props ) {
	const { attributes } = props;
	const { images, columns, showCaption, uid, allowZoom, style } = attributes;
	const gap = getGap(style.spacing.blockGap);
	const blockProps = useBlockProps.save({
		style: {
			"--masonry-columns-sm": `${columns}` < "2" ? `${columns}` : "2",
			"--masonry-columns-md": `${columns}` < "3" ? `${columns}` : "3",
			"--masonry-columns-lg": `${columns}` < "4" ? `${columns}` : "4",
			"--masonry-columns-xl": `${columns}` < "5" ? `${columns}` : "5",
			gap: `${gap}px`
	 	}
	});

	return <section { ...blockProps } >
		{
			images.length >= 1 && images.map( ( image ) => {
				return <figure>
					<ConditionalImageZoomableRender
						image={ image }
						allowZoom={ allowZoom }
						uid={ uid }
					>
						<img
							src={ image.url }
							alt={ image?.alt || '' }
							srcSet={Object.values(image.sizes).map((size) => `${size.url} ${size.width}w`).join(', ')}
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</ConditionalImageZoomableRender>
					<ConditionalRender conditions={ showCaption && image?.caption }>
						<figcaption>{ image?.caption }</figcaption>
					</ConditionalRender>
				</figure>
			})
		}
	</section>
}
