// WordPress dependencies
import { useBlockProps } from '@wordpress/block-editor';

//Internal dependencies
import Slide from '../../assets/components/public/Slide';
import imagePlaceholder from '../../assets/images/carbon-placeholder.svg';

export default function save( props ) {
	const { attributes } = props;
	const { image } = attributes;
	const blockProps = useBlockProps.save();

	return <Slide blockProps={ blockProps }>
		{
			image?.id
				? <img src={ image.url } alt={ image.caption } />
				: <img src={ imagePlaceholder } alt='Placeholder image' />
		}
	</Slide>
}
