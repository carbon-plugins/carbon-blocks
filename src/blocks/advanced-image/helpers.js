export function hasSize( image, size ) {
	return (
		'url' in ( image?.sizes?.[ size ] ?? {} ) ||
		'source_url' in ( image?.media_details?.sizes?.[ size ] ?? {} )
	);
}

export const pickRelevantMediaFiles = ( image, size ) => {
	const imageProps = Object.fromEntries(
		Object.entries( image ?? {} ).filter( ( [ key ] ) =>
			[ 'alt', 'id', 'link', 'caption' ].includes( key )
		)
	);
	imageProps.url =
		image?.sizes?.[ size ]?.url ||
		image?.media_details?.sizes?.[ size ]?.source_url ||
		image.url;

	return imageProps;
};

export const MIN_SIZE = 20;
export const LINK_DESTINATION_NONE = 'none';
export const LINK_DESTINATION_MEDIA = 'media';
export const LINK_DESTINATION_ATTACHMENT = 'attachment';
export const LINK_DESTINATION_CUSTOM = 'custom';
export const NEW_TAB_REL = [ 'noreferrer', 'noopener' ];
export const ALLOWED_MEDIA_TYPES = [ 'image' ];
export const MEDIA_ID_NO_FEATURED_IMAGE_SET = 0;
