// External dependencies
import imagePlaceholder from '../../assets/images/carbon-placeholder.svg';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import {
	useBlockProps, MediaUpload,
	MediaUploadCheck, BlockControls
} from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { pencil } from '@wordpress/icons';

//Internal dependencies
import './editor.scss';
import Slide from '/src/assets/components/Slide.jsx';

export default function Edit( props ) {
	const { attributes, clientId, setAttributes } = props;
	const { image } = attributes;
	const blockProps = useBlockProps();

	return <Slide blockProps={ blockProps } clientId={ clientId } showSettingButton={ false } blockName={ props.name }>
		<BlockControls>
			<ToolbarGroup>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ image => setAttributes({ image }) }
						allowedTypes={ [ 'image' ] }
						multiple={ false }
						value={ image?.id }
						render={ ( { open } ) => (
							<ToolbarButton
								label={ image?.id ? __( "Change image", 'carbon-blocks' ) : __( "Pick an image", 'carbon-blocks' ) }
								icon={ pencil }
								onClick={ open }
							/>
						) }
					/>
				</MediaUploadCheck>
			</ToolbarGroup>
		</BlockControls>
		{
			image?.id
				? <img src={ image.url } alt={ image.caption } />
				: <img src={ imagePlaceholder } alt='Placeholder image' />
		}
	</Slide>
}
