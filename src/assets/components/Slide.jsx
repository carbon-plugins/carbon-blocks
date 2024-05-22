// External dependencies

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { Fragment, useState, useEffect } from '@wordpress/element';
import {BlockControls } from '@wordpress/block-editor';
import { PanelBody, ToolbarButton, ToolbarGroup, __experimentalConfirmDialog as ConfirmDialog } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { createBlock, cloneBlock } from "@wordpress/blocks";

//Internal dependencies
import Settings from '/src/assets/components/Settings.jsx';

export default function Slide({ children, blockProps, clientId, showSettingButton, blockName }) {
	blockProps.className = 'swiper-slide ' + blockProps.className;
  const [isDeleteModalOpen, setDeleteModalVisibilty] = useState(false);
  const [parentEl, setParentEl] = useState(false);

	const addIcon 			= <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2m-7 3H3V6h16v7h2V6c0-1.11-.89-2-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11v-2Z"/></svg>
	const removeIcon 		= <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41L20.41 19m-7.32-1H4V6h16v7.09c.72.12 1.39.37 2 .72V6c0-1.11-.89-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1c0-.34.04-.67.09-1Z"/></svg>
	const duplicateIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 16V6H7v10h14m0-12c.53 0 1.04.21 1.41.59c.38.37.59.88.59 1.41v10c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H7a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h14M3 20h15v2H3c-.53 0-1.04-.21-1.41-.59C1.21 21.04 1 20.53 1 20V9h2v11Z"/></svg>

	const parentId	= select("core/block-editor").getBlockRootClientId(clientId);
	const slider		= select("core/block-editor").getBlock(parentId);

	useEffect(() => {
		setParentEl(document.querySelector(`.editor-styles-wrapper [data-block="${parentId}"]`));
	}, [])

	const addSlide = () => {
		const index 				= slider.innerBlocks.findIndex(slide => slide.clientId === clientId) + 1;
		const block 				= createBlock(blockName, { isSlide: true });
		const addSlideEvent = new CustomEvent('addSlide', { detail: { index, clientId: block.clientId } });
		dispatch("core/block-editor").insertBlock(block, index, parentId, false);
		setTimeout(() => parentEl.dispatchEvent(addSlideEvent), 20);
	}

	const removeSlide = ( clientId ) => {
		dispatch( 'core/block-editor' ).removeBlock( clientId, false );
	}

	const duplicateSlide = () => {
		const index 							= slider.innerBlocks.findIndex(slide => slide.clientId === clientId) + 1;
		const block 							= select( 'core/block-editor' ).getBlock( clientId );
		const clonedBlock 				= cloneBlock(block);
		const duplicateSlideEvent = new CustomEvent('duplicateSlide', { detail: { index, clientId: clonedBlock.clientId } });
		dispatch("core/block-editor").insertBlock(clonedBlock, index, parentId, false);
		setTimeout(() => parentEl.dispatchEvent(duplicateSlideEvent), 20);
	}

	return <Fragment>
		<li { ...blockProps }>
			{ showSettingButton && <Settings title={ __( "slide", 'carbon-blocks' )} icon='mdi:card-outline' position="right"/> }
			{ children }
		</li>
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					label={ __( "Duplicate current slide", 'carbon-blocks' ) }
					icon={ duplicateIcon }
					onClick={ duplicateSlide }
				/>
				<ToolbarButton
					label={ __( "Add a slide", 'carbon-blocks' ) }
					icon={ addIcon }
					onClick={ addSlide }
				/>
				<ToolbarButton
					label={ __( "Remove current slide", 'carbon-blocks' ) }
					icon={ removeIcon }
					onClick={() => setDeleteModalVisibilty( true ) }
				/>
			</ToolbarGroup>
		</BlockControls>
		<ConfirmDialog
			isOpen={ isDeleteModalOpen }
			onConfirm={ () => {
				removeSlide( clientId );
				setDeleteModalVisibilty( false );
			} }
			onCancel={ () => setDeleteModalVisibilty( false ) }
			cancelButtonText={ __( "Cancel", 'carbon-blocks' ) }
			confirmButtonText={ __( "Yes, delete it", 'carbon-blocks' ) }
		>
			{ __( "Are you sure you want to delete this slide ?", 'carbon-blocks' ) }
		</ConfirmDialog>
	</Fragment>
}
