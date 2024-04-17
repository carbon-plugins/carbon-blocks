// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { PanelBody, Placeholder, ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck, MediaPlaceholder, useBlockProps, InspectorControls, BlockIcon, BlockControls } from '@wordpress/block-editor';
import { image as imageLogo, caption as captionIcon } from '@wordpress/icons';
import { useDispatch } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';
import { ConditionalRender } from '@carbon-plugins/components';

//Internal dependencies
import './editor.scss';
import { FlexColumnControl, getGap } from '../../assets/components/flex-column-control';
import Toggle from '../../assets/components/Toggle';
import { ConditionalImageZoomable } from '../../assets/components/conditionals';

export default function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;
	const { images, columns, showCaption, uid, allowZoom, style } = attributes;

	const gap = getGap(style.spacing.blockGap);

  const blockProps = useBlockProps({
		style: {
			"--masonry-columns-sm": `${columns}` < "2" ? `${columns}` : "2",
			"--masonry-columns-md": `${columns}` < "3" ? `${columns}` : "3",
			"--masonry-columns-lg": `${columns}` < "4" ? `${columns}` : "4",
			"--masonry-columns-xl": `${columns}` < "5" ? `${columns}` : "5",
			gap: `${gap}px`
	 	}
	});

	const { createErrorNotice } = useDispatch( noticesStore );

	function onUploadError( message ) {
		createErrorNotice( message, { type: 'snackbar' } );
	}

	if(!uid) { setAttributes({ uid: clientId }) }

	const placeholder = ( content ) => {
		return (
			<Placeholder
				className="block-editor-media-placeholder"
				withIllustration={ true }
				icon={ imageLogo }
				label={ __( 'Masonry', 'carbon-blocks' ) }
				instructions={ __( 'Upload multiple images to create the gallery.', 'carbon-blocks' ) }
			>
				{ content }
			</Placeholder>
		);
	};

	if(images.length === 0) {
		return <div { ...blockProps }>
			<MediaPlaceholder
				icon={ <BlockIcon icon={ imageLogo } /> }
				title={ __("Create a PDF gallery", 'carbon-blocks' ) }
				onError={ onUploadError }
				placeholder={ placeholder }
				onSelect={ images => { setAttributes( { images } ) } }
				multiple={ true }
				gallery={ true }
				allowedTypes={ ['image'] }
				value={ images.map( ( image ) => image.id ) }
			/>
		</div>
	}

	return <>
		<InspectorControls>
			<PanelBody title={ __( "Settings", 'carbon-blocks' ) }>
				<FlexColumnControl
					columns={ columns }
					setAttributes={ setAttributes }
				/>
				<Toggle
					label={ __( "Allow image zoom", 'carbon-blocks' ) }
					value={ allowZoom }
					onChange={ () => setAttributes( { allowZoom: !allowZoom } ) }
				/>
			</PanelBody>
		</InspectorControls>
		<section { ...blockProps } >
			{
				images.map( ( image ) => {
					return <figure>
						<ConditionalImageZoomable
							image={ image }
							allowZoom={ allowZoom }
							uid={ uid }
						>
							<img
								src={ image.url || placeholder[i].src }
								alt={ image?.alt || '' }
								height={image?.url ? "" : placeholder[i].height}
								width={image?.url ? "" : placeholder[i].width}
								srcSet={image?.sizes && Object.values(image.sizes).map((size) => `${size.url} ${size.width}w`).join(', ')}
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</ConditionalImageZoomable>
						<ConditionalRender conditions={ showCaption && image?.caption }>
							<figcaption>{ image?.caption || '' }</figcaption>
						</ConditionalRender>
					</figure>
				})
			}
		</section>
		<BlockControls>
			<ToolbarGroup group="blocks">
				<ToolbarButton
					label={ showCaption ? __( 'Hide images caption', 'carbon-blocks' ) : __( 'Show images caption', 'carbon-blocks' ) }
					onClick={ () => setAttributes({ showCaption: !showCaption }) }
					className={`components-icon-button components-toolbar__control ${showCaption ? 'is-active' : ''}`}
					icon={ captionIcon }
					isActive={ showCaption }
				/>
			</ToolbarGroup>
			<ToolbarGroup>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ images => { setAttributes( { images } ) } }
						multiple={ true }
						allowedTypes={ ['image'] }
						value={ images.map( ( image ) => image.id ) }
						gallery={ true }
						title={ __("Create a masonry gallery", 'carbon-blocks' ) }
						render={ ( { open } ) => {
							return <ToolbarButton
								onClick={ open }
								style={ { border: 'none' } }
								>
									{ __( "Edit gallery", 'carbon-blocks' ) }
								</ToolbarButton>
						} }
					/>
				</MediaUploadCheck>
			</ToolbarGroup>
		</BlockControls>
	</>
}
