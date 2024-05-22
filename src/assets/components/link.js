
import { ToolbarButton, Popover } from '@wordpress/components';
import { link } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';


export function Link({ setAttributes, popoverRef, post = {}, isPopoverOpen, setPopoverVisibility }) {
	return isPopoverOpen && <Popover
		anchor={ popoverRef.current }
		focusOnMount="firstElement"
		position="bottom right"
		headerTitle={ __( "Link settings", 'carbon-blocks' ) }
		onClose={ () => setPopoverVisibility(false) }
	>
		<LinkControl
			searchInputPlaceholder={ __( "Enter a page or a URL", 'carbon-blocks' ) }
			value={ post }
			showSuggestions={ true }
			showInitialSuggestions={ true }
			settings={[
				{
					id: 'opensInNewWindow',
					title: __( "Open in a new tab", 'carbon-blocks' ),
				},
				{
					id: 'underline',
					title: __( "Underline text", 'carbon-blocks' ),
				}
			]}
			onChange={ newPost => {
				newPost.title = undefined;
				setAttributes( { post: { ...newPost } } )
			} }
			onRemove={ () => {
				setAttributes( { post: {} } )
			}}
		>
		</LinkControl>
	</Popover>
}

export function LinkToolbarButton({ popoverRef, setPopoverVisibility, isActive }) {
	return <ToolbarButton
		label={ __( "Add a link", 'carbon-blocks' ) }
		icon={ link }
		onClick={ () => setPopoverVisibility( true ) }
		ref={ popoverRef }
		isActive={ isActive }
	/>
}
