// External dependencies

// WordPress dependencies
import { useBlockProps } from '@wordpress/block-editor';

//Internal dependencies
import Slide from '../../assets/components/public/Slide';
import logoPlaceholder from '../../assets/images/carbon-placeholder-logo.svg';

export default function save( props ) {
	const { attributes } = props;
	const { logo } = attributes;
	const blockProps = useBlockProps.save();

	return <Slide blockProps={ blockProps }>
		{
			logo?.id
				? <img src={ logo.url } alt={ logo.caption } />
				: <img src={ logoPlaceholder } alt='Placeholder image for a logo' />
		}
	</Slide>
}
