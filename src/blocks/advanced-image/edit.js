// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { Fragment, useState, useRef, useEffect } from '@wordpress/element';
import {
	ToolbarButton, ToolbarGroup, Placeholder, PanelBody, TextareaControl, Spinner,
	__experimentalUseCustomUnits as useCustomUnits, ExternalLink
} from '@wordpress/components';
import {
	MediaReplaceFlow, MediaPlaceholder, useBlockProps, BlockIcon, InspectorControls,
	BlockControls, RichText, store as blockEditorStore, __experimentalUseBorderProps as useBorderProps
} from '@wordpress/block-editor';
import { image as imageIcon, caption as captionIcon, rotateRight, flipHorizontal, flipVertical } from '@wordpress/icons';
import { store as noticesStore } from '@wordpress/notices';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect, useDispatch } from '@wordpress/data';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { getFilename } from '@wordpress/url';

//Internal dependencies
import './editor.scss';
import DimensionsTool from "./../../assets/components/dimensions-tool/index";
import ResolutionTool from "./../../assets/components/ResolutionTool";
import { Link, LinkToolbarButton } from "./../../assets/components/Link";
import Toggle from "../../assets/components/Toggle";
import {
	LINK_DESTINATION_ATTACHMENT, LINK_DESTINATION_CUSTOM, LINK_DESTINATION_MEDIA,
	LINK_DESTINATION_NONE, ALLOWED_MEDIA_TYPES, hasSize, pickRelevantMediaFiles
} from './helpers';
import { ConditionalLinkAsChild, ConditionalRender } from '../../assets/components/conditionals';

export default function Edit( props ) {
	const { attributes, setAttributes, clientId, className, isSelected } = props;
	const {
		showCaption, focalPoint, rotation, isChild, uid, isFlippedVertically, isFlippedHorizontally,
		post, url = '', alt, caption, id,title, width, height, aspectRatio, scale, sizeSlug, allowZoom
	} = attributes;

	const { createErrorNotice } = useDispatch( noticesStore );

	const [ isPopoverOpen, setPopoverVisibility ] = useState( false );
	const [ temporaryURL, setTemporaryURL ] = useState();

	const altRef 						= useRef();
	const captionRef 				= useRef();
	const imageRef 					= useRef();

	const isExternalImage 	= ( id, url ) => url && ! id && ! isBlobURL( url );
	const isTemporaryImage 	= ( id, url ) => ! id && isBlobURL( url );
	let isTemp 							= isTemporaryImage( id, url );
	const filename 					 = getFilename( url );
	const borderProps 			= useBorderProps( attributes );
	const mediaPreview = !! url && (
		<img
			alt={ __( 'Edit image' ) }
			title={ __( 'Edit image' ) }
			className={ 'edit-image-preview' }
			src={ url || "" }
		/>
	);

	const popoverRef 			= useRef();
	const blockProps 			= useBlockProps( {
		ref: imageRef,
		className: classnames( className, {
			'is-transient': temporaryURL,
			'is-resized': !! width || !! height,
			[ `size-${ sizeSlug }` ]: sizeSlug,
			'has-custom-border':
				!! borderProps.className ||
				( borderProps.style &&
					Object.keys( borderProps.style ).length > 0 ),
		} )
	} );
	const isExternal 			= isExternalImage( id, url );
	const src 						= isExternal ? url : undefined;

	useEffect( () => { altRef.current = alt; }, [ alt ] );
	useEffect( () => { captionRef.current = caption; }, [ caption ] );
	useEffect( () => {
		if ( isTemp ) {
			setTemporaryURL( url );
			return;
		}
		revokeBlobURL( temporaryURL );
	}, [ isTemp, url ] );

	if(!uid) { setAttributes({ uid: clientId }) }

	const { image } = useSelect(
		( select ) => {
			const { getMedia } = select( coreStore );

			return {
				image: id && isSelected
					? getMedia( id, { context: 'view' } )
					: null
			};
		},
		[ id, isSelected ]
	);

	const { imageSizes, imageDefaultSize } = useSelect(
		( select ) => {
			const { getSettings } = select( blockEditorStore );
			const settings = getSettings();

			return {
				imageSizes: settings.imageSizes,
				imageDefaultSize: settings.imageDefaultSize
			};
		},
		[ clientId ]
	);

	const imageSizeOptions = imageSizes.filter(
		( { slug } ) => image?.media_details?.sizes?.[ slug ]?.source_url
	).map( ( { name, slug } ) => ( { value: slug, label: name } ) );

	function onSelectURL( newURL ) {
		if ( newURL !== url ) {
			setAttributes( {
				url: newURL,
				id: undefined,
				sizeSlug: imageDefaultSize,
			} );
		}
	}

	function onSelectImage( media ) {
		if ( ! media || ! media.url ) {
			setAttributes( {
				url: undefined,
				alt: undefined,
				id: undefined,
				title: undefined,
				caption: undefined,
				widthType: "custom",
				rotation: 0,
				focalPoint: { x: 0.5, y: 0.5 }
			} );

			return;
		}

		if ( isBlobURL( media.url ) ) {
			setTemporaryURL( media.url );
			return;
		}

		setTemporaryURL();

		// Try to use the previous selected image size if its available
		// otherwise try the default image size or fallback to "full"
		let newSize = 'full';
		if ( sizeSlug && hasSize( media, sizeSlug ) ) {
			newSize = sizeSlug;
		} else if ( hasSize( media, imageDefaultSize ) ) {
			newSize = imageDefaultSize;
		}

		let mediaAttributes = pickRelevantMediaFiles( media, newSize );

		// If a caption text was meanwhile written by the user,
		// make sure the text is not overwritten by empty captions.
		if ( captionRef.current && ! mediaAttributes.caption ) {
			const { caption: omittedCaption, ...restMediaAttributes } =
				mediaAttributes;
			mediaAttributes = restMediaAttributes;
		}

		let additionalAttributes;
		// Reset the dimension attributes if changing to a different image.
		if ( ! media.id || media.id !== id ) {
			additionalAttributes = {
				sizeSlug: newSize,
			};
		} else {
			// Keep the same url when selecting the same file, so "Resolution"
			// option is not changed.
			additionalAttributes = { url };
		}

		// Check if default link setting should be used.
		let linkDestination = attributes.linkDestination;
		if ( ! linkDestination ) {
			// Use the WordPress option to determine the proper default.
			switch (
				window?.wp?.media?.view?.settings?.defaultProps?.link ||
				LINK_DESTINATION_NONE
			) {
				case 'file':
				case LINK_DESTINATION_MEDIA:
					linkDestination = LINK_DESTINATION_MEDIA;
					break;
				case 'post':
				case LINK_DESTINATION_ATTACHMENT:
					linkDestination = LINK_DESTINATION_ATTACHMENT;
					break;
				case LINK_DESTINATION_CUSTOM:
					linkDestination = LINK_DESTINATION_CUSTOM;
					break;
				case LINK_DESTINATION_NONE:
					linkDestination = LINK_DESTINATION_NONE;
					break;
			}
		}

		// Check if the image is linked to it's media.
		let href;
		switch ( linkDestination ) {
			case LINK_DESTINATION_MEDIA:
				href = media.url;
				break;
			case LINK_DESTINATION_ATTACHMENT:
				href = media.link;
				break;
		}
		mediaAttributes.href = href;

		setAttributes( {
			...mediaAttributes,
			...additionalAttributes,
			linkDestination,
			widthType: "custom",
			rotation: 0,
			focalPoint: { x: 0.5, y: 0.5 }
		} );

	}

	function onUploadError( message ) {
		createErrorNotice( message, { type: 'snackbar' } );
	}

	const onChangeCaption 		= caption => setAttributes({ caption });
  const onToggleCaption 		= () => setAttributes({ showCaption: !showCaption });
  const onFocalPointChange 	= newFocalPoint => setAttributes({ focalPoint: newFocalPoint });
	const rotateImage 				= () => rotation + 90 >= 360 ? setAttributes( { rotation: 0 } ) : setAttributes( { rotation: rotation + 90 } );

	function updateImage( newSizeSlug ) {
		const newUrl = image?.media_details?.sizes?.[ newSizeSlug ]?.source_url;
		if ( ! newUrl ) {
			return null;
		}

		setAttributes( {
			url: newUrl,
			sizeSlug: newSizeSlug,
		} );
	}

	let defaultedAlt;
	if ( alt ) {
		defaultedAlt = alt;
	} else if ( filename ) {
		defaultedAlt = __( sprintf(
			/* translators: %s: file name */
			__( 'This image has an empty alt attribute; its file name is %s' ),
			filename
		), 'carbon-blocks' );
	} else {
		defaultedAlt = __( 'This image has an empty alt attribute', 'carbon-blocks' );
	}

	const placeholder = ( content ) => {
		return (
			<Placeholder
				className={ classnames( 'block-editor-media-placeholder', {
					[ borderProps.className ]:
						!! borderProps.className && ! isSelected,
				} ) }
				withIllustration={ true }
				icon={ imageIcon }
				label={ __( 'Advanced image', 'carbon-blocks' ) }
				instructions={ __( 'Upload an image file, pick one from your media library, or add one with a URL.', 'carbon-blocks' ) }
				style={ {
					aspectRatio:
						! ( width && height ) && aspectRatio
							? aspectRatio
							: undefined,
					width: height && aspectRatio ? '100%' : width,
					height: width && aspectRatio ? '100%' : height,
					objectFit: scale,
					...borderProps.style,
				} }
			>
				{ content }
			</Placeholder>
		);
	};

  return <Fragment>
		<InspectorControls>
			<ConditionalRender conditions={ url || temporaryURL }>
				<PanelBody title="Image Settings" initialOpen={true}>
					<TextareaControl
						label={ __("Alternative text", 'carbon-blocks' ) }
						help={
							<>
								<ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree">
									{ __( 'Describe the purpose of the image.', 'carbon-blocks' ) }
								</ExternalLink>
								<br />
								{ __( 'Leave empty if decorative.' ) }
							</>
						}
						rows={ 3 }
						value={ alt }
						onChange={ alt => setAttributes({ alt }) }
						__nextHasNoMarginBottom
					/>
					<DimensionsTool
						value={ { width, height, scale, aspectRatio } }
						onChange={ ( {
							width: newWidth,
							height: newHeight,
							scale: newScale,
							aspectRatio: newAspectRatio,
						} ) => {
							setAttributes( {
								width: ! newWidth && newHeight ? 'auto' : newWidth,
								height: newHeight,
								scale: newScale,
								aspectRatio: newAspectRatio,
							} );
						} }
						defaultScale="cover"
						defaultAspectRatio="auto"
						scaleOptions={ [
							{
								value: 'cover',
								label: __( 'Cover', 'carbon-blocks' ),
								help: __( 'Image covers the space evenly.', 'carbon-blocks' ),
							},
							{
								value: 'contain',
								label: __( 'Contain', 'carbon-blocks' ),
								help: __( 'Image is contained without distortion.', 'carbon-blocks' ),
							},
						] }
						unitsOptions={ useCustomUnits( {
							availableUnits: [ 'px' ],
						} ) }
					/>
					<ResolutionTool
						value={ sizeSlug }
						onChange={ updateImage }
						options={ imageSizeOptions }
						defaultValue={ imageDefaultSize }
					/>
					<Toggle
						label={ __( "Allow image zoom", 'carbon-blocks' ) }
						value={ post?.url ? false : allowZoom }
						onChange={ () => setAttributes( { allowZoom: !allowZoom } ) }
						disabled={ post?.url }
						disabledMessage={ __( "Image zoom is disabled because there is a clickable link set.", 'carbon-blocks' ) }
					/>
				</PanelBody>
			</ConditionalRender>
		</InspectorControls>
		<figure { ...blockProps }>
			<ConditionalRender conditions={ temporaryURL }>
				<Spinner />
			</ConditionalRender>
			<ConditionalRender conditions={ url || temporaryURL }>
				{
					allowZoom
					? <a
						href={ url || temporaryURL }
						title={ title }
						rel="noopener"
						className={ 'lightbox' }
						data-single-lightbox={ uid }
						data-description={ caption }
						data-rotation={ rotation }
						data-flip-vertically={ isFlippedVertically }
						data-flip-horizontally={ isFlippedHorizontally }
						onClick={ e => e.preventDefault() }
					>
						<img
							src={ temporaryURL || url }
							alt={ defaultedAlt }
							ref={ imageRef }
							style={{
								width: width,
								height: height,
								aspectRatio: aspectRatio,
								objectFit: scale,
								objectPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
								transform: `rotate(${rotation}deg) scale(${isFlippedHorizontally ? -1 : 1}, ${isFlippedVertically ? -1 : 1})`
							}}
						/>
					</a>
					: <ConditionalLinkAsChild
						post={ post }
						title={ title }
					>
						<img
							src={ temporaryURL || url }
							alt={ defaultedAlt }
							ref={ imageRef }
							style={{
								width: width,
								height: height,
								objectFit: scale,
								aspectRatio: aspectRatio,
								objectPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
								transform: `rotate(${rotation}deg) scale(${isFlippedHorizontally ? -1 : 1}, ${isFlippedVertically ? -1 : 1})`
							}}
						/>
					</ConditionalLinkAsChild>
				}
			</ConditionalRender>
			<ConditionalRender conditions={ !temporaryURL }>
				<BlockControls>
					<ToolbarGroup group="blocks">
						<ConditionalRender conditions={ !isChild }>
							<LinkToolbarButton
								isActive={ post?.url }
								popoverRef={ popoverRef }
								isPopoverOpen={ isPopoverOpen }
								setPopoverVisibility={setPopoverVisibility }
							/>
						</ConditionalRender>
						<ToolbarButton
							label={ showCaption ? __( 'Remove caption', 'carbon-blocks' ) : __( 'Add caption', 'carbon-blocks' ) }
							onClick={onToggleCaption}
							className={`components-icon-button components-toolbar__control ${showCaption ? 'is-active' : ''}`}
							icon={captionIcon}
							isActive={ showCaption }
						/>
						<ToolbarButton
							label={ __( "Rotate image", 'carbon-blocks' )}
							icon={ rotateRight }
							onClick={ rotateImage }
						/>
						<ToolbarButton
							label={ __( "Flip horizontally", 'carbon-blocks' )}
							icon={ flipHorizontal }
							onClick={ () => setAttributes({ isFlippedHorizontally: !isFlippedHorizontally}) }
							isActive={ isFlippedHorizontally }
						/>
						<ToolbarButton
							label={ __( "Flip vertically", 'carbon-blocks' )}
							icon={ flipVertical }
							onClick={ () => setAttributes({ isFlippedVertically: !isFlippedVertically }) }
							isActive={ isFlippedVertically }
						/>
					</ToolbarGroup>
					<ToolbarGroup>
						<MediaReplaceFlow
							mediaId={ id }
							mediaURL={ url }
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							accept="image/*"
							onSelect={ onSelectImage }
							onSelectURL={ onSelectURL }
							onError={ onUploadError }
						/>
					</ToolbarGroup>
				</BlockControls>
			</ConditionalRender>
			<ConditionalRender conditions={ showCaption }>
				<RichText
					tagName="figcaption"
					value={ caption }
					onChange={ content => onChangeCaption(content) }
					placeholder={ __( "Caption", 'carbon-blocks' ) }
					multiline={ false }
					allowedFormats={ [ 'core/bold', 'core/italic', 'carbon-blocks/animate-text' ] }
				/>
			</ConditionalRender>
			<MediaPlaceholder
				icon={ <BlockIcon icon={ imageIcon } /> }
				onSelect={ onSelectImage }
				onSelectURL={ onSelectURL }
				onError={ onUploadError }
				placeholder={ placeholder }
				accept="image/*"
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				value={ { id, src } }
				mediaPreview={ mediaPreview }
				disableMediaButtons={ temporaryURL || url }
				title={ __( "Add an advanced image", 'carbon-blocks' ) }
			/>
		</figure>
		<Link
			post={ post }
			popoverRef={ popoverRef }
			setAttributes={ setAttributes }
			isPopoverOpen={ isPopoverOpen }
			setPopoverVisibility={ setPopoverVisibility }
		/>
	</Fragment>
};
