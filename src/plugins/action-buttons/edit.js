import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { trash, group } from '@wordpress/icons';
import { select, dispatch } from '@wordpress/data';
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';

const actionButtons = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { name, clientId, attributes, setAttributes } = props;
		const { textAlign, showActions } = attributes;
		const parentId = select('core/block-editor').getBlockParents(clientId);
		const children = select('core/block-editor').getBlocksByClientId(parentId)[0]?.innerBlocks.length;
		const maxChildren = select('core/block-editor').getBlocksByClientId(parentId)[0]?.attributes?.maxChildren;
		const hasRoom = maxChildren ? children < maxChildren : true;
		const isCarbon = name.startsWith('carbon-blocks');

		const resetBlock = () => {
			dispatch('core/block-editor').resetBlocks( [ clientId ] );
			dispatch('core/notices').createNotice(
				'success',
				__('Block data copied to clipboard!', 'your-plugin')
			);
		}

		const copyBlockData = () => {
      const rootBlockClientId = select('core/block-editor').getBlockHierarchyRootClientId(clientId);
      const blockIndex = select('core/block-editor').getBlockIndex(clientId, rootBlockClientId);
      const blockMarkup = select('core/block-editor').getBlockListSettings(rootBlockClientId)[blockIndex].innerHTML;
      navigator.clipboard.writeText(blockMarkup).then(
        () => {
          dispatch('core/notices').createNotice(
            'success',
            __('Block data copied to clipboard!', 'your-plugin')
          );
        },
        () => {
          dispatch('core/notices').createNotice(
            'error',
            __('Failed to copy block data to clipboard.', 'your-plugin')
          );
        }
      );
    };

		if(showActions === undefined) {
			return <BlockEdit { ...props } />
		}

		if(!!showActions) {
			return <Fragment>
				{
					isCarbon && textAlign && <BlockControls group="block">
						<AlignmentToolbar
							value={ textAlign }
							onChange={ textAlign => setAttributes( { textAlign } ) }
						/>
					</BlockControls>
				}
				<BlockControls>
					<ToolbarGroup>
						{/* <ToolbarButton
							icon='admin-page'
							label={__('Copy Block', 'carbon-blocks' )}
							className={'trash-icon'}
							onClick={copyBlockData}
						/> */}
						{
							hasRoom
								? <ToolbarButton
									icon={group}
									label={__('Duplicate bloc', 'carbon-blocks' )}
									onClick={() => {
										const block_ids = select('core/block-editor').getSelectedBlockClientIds();
										dispatch('core/block-editor').duplicateBlocks(block_ids);
									}}
								/>
								: undefined
						}
						{/* <ToolbarButton
							icon={trash}
							label={__('Reset bloc', 'carbon-blocks' )}
							onClick={ resetBlock }
						/> */}
						<ToolbarButton
							icon={trash}
							label={__('Delete bloc', 'carbon-blocks' )}
							className={'trash-icon'}
							onClick={() => {
								const block_ids = select('core/block-editor').getSelectedBlockClientIds();
								dispatch('core/block-editor').removeBlocks(block_ids);
							}}
						/>
					</ToolbarGroup>
				</BlockControls>
				<BlockEdit { ...props } />
			</Fragment>
		}

		return <BlockEdit { ...props } />
	};
}, 'actionButtons' );

export default actionButtons;
