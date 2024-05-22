// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useRef, createRef, useState } from '@wordpress/element';
import { useSelect, dispatch, select } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import { pencil } from '@wordpress/icons';
import {
	BlockControls, PanelColorSettings, InspectorControls,
	useInnerBlocksProps, useBlockProps
} from '@wordpress/block-editor';
import {
	ToolbarButton, ToolbarGroup, Popover,
	Button, __experimentalInputControl as InputControl,
	Modal
} from "@wordpress/components";

//Internal dependencies
import './editor.scss';
import { ConditionalRender } from "../../assets/components/conditionals";

export default function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;
	const { className, tabLabels, id, active, textColor, backgroundColor, borderColor, inactiveTextColor, inactiveBackgroundColor } = attributes;

	const editTabRef 	= useRef();
	const addTabRef 	= useRef();
	const addIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3m0 2h10v4h8v10H3V5m7 5v3H7v2h3v3h2v-3h3v-2h-3v-3h-2Z"/></svg>
	const removeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3m0 2h10v4h8v10H3V5m4 8v2h8v-2H7Z"/></svg>

	const [ editTabVisibility, setEditTabVisibility ] = useState( false );
	const [ AddTabVisibility, setAddTabVisibility] 		= useState( false );
	const toggleEditTabVisibility = () => setEditTabVisibility( () => !editTabVisibility );
	const toggleAddTabVisibility 	= () => setAddTabVisibility( 	() => !AddTabVisibility );

	const [ tabLabel, setTabLabel ] 					= useState( tabLabels[active] )
	const [ newTabLabel, setNewTabLabel ] 		= useState( "" )
	const [ oldTabLabel, setOldTabLabel ] 		= useState( "" )
	const [ isModalOpen, setModalVisibilty ] 	= useState( false );

	const classes = classnames( className, { } );
	const blockProps = useBlockProps( { className: classes } );

	const innerBlockData = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getBlock( clientId ).innerBlocks
	}, [] );

	const focusTabs = () => dispatch('core/block-editor').selectBlock( clientId );
	const tabRefs = useRef([]);
	tabRefs.current = innerBlockData.map((_, i) => tabRefs.current[i] ?? createRef());

	const resetClasses = () => {
		tabRefs.current.map(tab => {
			tab.current.classList.remove('is-active')
		})
	}

	const setActive = id => {
		resetClasses();
		tabRefs.current[id].current.classList.add('is-active');
		setTabLabel( tabLabels[id] )
		setAttributes( { active: id } )
	}

	const addTab = () => {
		const newId = id + 1;
		setAttributes( { id: newId } )
		const tab = createBlock( "carbon-blocks/tab", { id: active + 1 } )
		resetClasses();
		innerBlockData.map((item, i) => {
			if( i === active ) {
				dispatch('core/block-editor').insertBlock( tab, active + 1, clientId )
			} else if( i > active ) {
				dispatch( 'core/block-editor' ).updateBlockAttributes(item.clientId, { ...item.attributes, id: item.attributes.id + 1 })
			}
		});
		tabLabels.splice( active + 1, 0, newTabLabel );
		setAttributes( {
			active: active + 1,
			tabLabels: [ ...tabLabels ]
		} );
		focusTabs();
	}

	const removeTab = active => {
		let newTabLabels = tabLabels.slice(0, active).concat(tabLabels.slice(active + 1, tabLabels.length))
		dispatch( 'core/block-editor' ).removeBlock( innerBlockData[active].clientId );
		select( 'core/block-editor' ).getBlock(clientId).innerBlocks.map((item, i) => {
			if( i >= active ) {
				dispatch( 'core/block-editor' ).updateBlockAttributes(item.clientId, { ...item.attributes, id: item.attributes.id - 1 })
			}
		})
		const hasNextBlock = innerBlockData[active + 1];
		setAttributes( {
			tabLabels: newTabLabels,
			id: id - 1
		} );
		setActive( hasNextBlock ? active : active - 1 );
		dispatch( 'core/block-editor' ).selectBlock(clientId)
	}

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: ["carbon-blocks/tab"],
		renderAppender:false,
		template: [
			[ "carbon-blocks/tab", { id: 0 } ],
		]
	} );

	const TabHeaders = () => {
		return (
			innerBlockData.map((innerBlock, i) => {
				const isActive = active === i;
				return <div class="tabHead" key={i}>
					<p
						onClick={ e => {
							e.preventDefault
							setActive(i)
						} }
						data-id={i}
						ref={ tabRefs.current[i] }
						className={ isActive && "is-active" }
						style={{
							backgroundColor: isActive ? backgroundColor : inactiveBackgroundColor,
							color: isActive ? textColor : inactiveTextColor,
							borderBottom: `2px solid ${ isActive ? borderColor : "transparent" }`
						}}
					>
						{ tabLabels[i] }
					</p>
				</div>
			})
		)
	}

	return <>
		<InspectorControls group="styles">
			<PanelColorSettings
				title={ __( 'Active tab colors', 'carbon-blocks' ) }
				__experimentalIsRenderedInSidebar
				enableAlpha={true}
				className="carbon-blocks-color-panel"
				colorSettings={ [
					{
						value: textColor,
						onChange: textColor => setAttributes( { textColor } ),
						label: __( 'Color', 'carbon-blocks' ),
					},
					{
						value: backgroundColor,
						onChange: backgroundColor => setAttributes( { backgroundColor } ),
						label: __( 'Background', 'carbon-blocks' ),
					},
					{
						value: borderColor,
						onChange: borderColor => setAttributes( { borderColor } ),
						label: __( 'Border', 'carbon-blocks' ),
					},
				] }
			/>
			<PanelColorSettings
				title={ __( 'Inactive tabs colors', 'carbon-blocks' ) }
				__experimentalIsRenderedInSidebar
				enableAlpha={true}
				className="carbon-blocks-color-panel"
				colorSettings={ [
					{
						value: inactiveTextColor,
						onChange: inactiveTextColor => setAttributes( { inactiveTextColor } ),
						label: __( 'Color', 'carbon-blocks' ),
					},
					{
						value: inactiveBackgroundColor,
						onChange: inactiveBackgroundColor => setAttributes( { inactiveBackgroundColor } ),
						label: __( 'Background', 'carbon-blocks' ),
					},
				] }
			/>
		</InspectorControls>
		<ConditionalRender conditions={ isModalOpen }>
			<Modal
				className="carbon-blocks-delete-modal"
				title={__( "Delete tab", 'carbon-blocks' )}
				onRequestClose={ () => setModalVisibilty( false ) }
			>
				<section>
					<p>{ __( "Are you sure you want to delete this tab ?", 'carbon-blocks' ) }</p>
					<Button __next40pxDefaultSize isDestructive onClick={ () => {
						removeTab( active )
						setModalVisibilty( false )
					} }>{ __( "Yes, I am sure", 'carbon-blocks' ) }</Button>
					<Button __next40pxDefaultSize isSecondary onClick={ () => setModalVisibilty( false ) }>{ __( "Cancel", 'carbon-blocks' ) }</Button>
				</section>
			</Modal>
		</ConditionalRender>
		<section { ...innerBlocksProps }>
			<header>
				<TabHeaders />
			</header>
			{ children }
			<ConditionalRender conditions={ editTabVisibility }>
				<Popover
					anchor={ editTabRef.current }
					focusOnMount="firstElement"
					animate
					onClose={ () => {
						if(!tabLabel) {
							setTabLabel( tabLabels[active] );
							setEditTabVisibility( false );
							return
						}
						const newTabLabels = [...tabLabels];
						newTabLabels[active] = tabLabel;
						setEditTabVisibility( false );
						setAttributes( {
							tabLabels: [ ...newTabLabels ]
						} )
					} }
				>
					<section style={{display:"flex",gap:"10px",padding:"20px",flexDirection:"column"}} className='tab-name-input'>
						<p style={{margin:0}}>{ __( "Edit tab name", 'carbon-blocks' ) }</p>
						<section style={{display:"flex",gap:"10px",alignItems:"center"}} className='tab-name-input'>
							<InputControl
								value={ tabLabel }
								type='text'
								size="__unstable-large"
								onChange={ value => {
									setTabLabel(value)
								} }
								__next40pxDefaultSize
							/>
							<Button __next40pxDefaultSize variant="primary" disabled={ !tabLabel } onClick={ () => {
								tabLabels[active] = tabLabel;
								setEditTabVisibility( false )
							} }>
								{ __( "Change", 'carbon-blocks' ) }
							</Button>
						</section>
					</section>
				</Popover>
			</ConditionalRender>
			<ConditionalRender conditions={ AddTabVisibility }>
				<Popover
					anchor={ addTabRef.current }
					focusOnMount="firstElement"
					animate
					onClose={ toggleAddTabVisibility }
				>
					<section style={{display:"flex",flexDirection:"column",gap:"10px",padding:"20px"}}>
						<p style={{margin:0}}>{ __( "New tab name", 'carbon-blocks' ) }</p>
						<section style={{display:"flex",gap:"10px",alignItems:"center"}} className='tab-name-input'>
							<InputControl
								value={ newTabLabel }
								type='text'
								size="__unstable-large"
								onChange={ value => {
									setNewTabLabel(value)
								} }
								__next40pxDefaultSize
							/>
							<Button __next40pxDefaultSize variant="primary" disabled={ !newTabLabel } onClick={ () => {
								addTab();
								toggleAddTabVisibility();
								setNewTabLabel( "" );
							} }>
								{ __( "Add", 'carbon-blocks' ) }
							</Button>
						</section>
					</section>
				</Popover>
			</ConditionalRender>
		</section>
		<BlockControls>
			<ToolbarGroup group="blocks">
				<ToolbarButton
					icon={ pencil }
					label={__('Edit current tab name', 'carbon')}
					onClick={ () => {
						toggleEditTabVisibility();
						setOldTabLabel(tabLabels[active])
					} }
					ref={ editTabRef }
				/>
				<ToolbarButton
					icon={ addIcon }
					label={__('Add a tab', 'carbon')}
					ref={ addTabRef }
					onClick={ toggleAddTabVisibility }
				/>
				<ConditionalRender conditions={ innerBlockData.length > 1 }>
					<ToolbarButton
						icon={ removeIcon }
						label={__('Remove current tab', 'carbon')}
						onClick={ () => setModalVisibilty( true ) }
					/>
				</ConditionalRender>
			</ToolbarGroup>
		</BlockControls>
	</>
}
