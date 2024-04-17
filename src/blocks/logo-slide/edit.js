// External dependencies
import logoPlaceholder from '../../assets/images/carbon-placeholder-logo.svg';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import {
	useBlockProps, MediaUpload, MediaUploadCheck, BlockControls
} from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { pencil } from '@wordpress/icons';

//Internal dependencies
import './editor.scss';
import Slide from '/src/assets/components/Slide.jsx';

export default function Edit( props ) {
	const { attributes, clientId, setAttributes } = props;
	const { logo } = attributes;
	const blockProps = useBlockProps();

	return <Slide blockProps={ blockProps } clientId={ clientId } showSettingButton={ false } blockName={ props.name }>
		<BlockControls>
			<ToolbarGroup>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ logo => setAttributes({ logo }) }
						allowedTypes={ [ 'image' ] }
						multiple={ false }
						value={ logo?.id }
						render={ ( { open } ) => (
							<ToolbarButton
								label={ logo?.id ? __( "Change logo", 'carbon-blocks' ) : __( "Pick a logo", 'carbon-blocks' ) }
								icon={ pencil }
								onClick={ open }
							/>
						) }
					/>
				</MediaUploadCheck>
			</ToolbarGroup>
		</BlockControls>
		{
			logo?.id
				? <img src={ logo.url } alt={ logo.caption } />
				: <img src={ logoPlaceholder } alt='Placeholder image for a logo' />
		}
	</Slide>
}
