// External dependencies
import DOMPurify from 'dompurify';
import heroiconLibrary from '@carbon-plugins/icon-libraries/dist/carbon-blocks/heroicons';
import dashiconLibrary from "@carbon-plugins/icon-libraries/dist/carbon-blocks/dashicons";
import { wordpress as wordpressLibrary }  			from './icons/wordpress';

// WordPress dependencies
import {
	InspectorControls, useBlockProps, BlockControls,
} from '@wordpress/block-editor';
import { useState, useRef, useEffect, useMemo } from '@wordpress/element';
import {
	PanelBody, TextareaControl, RangeControl,
	ToolbarGroup, ToolbarButton, Button, Popover,
	Modal, SearchControl, MenuItem, MenuGroup, Notice, SelectControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalNumberControl as NumberControl
} from "@wordpress/components";
import { __, _n, sprintf } from '@wordpress/i18n';
import {
	Icon, justifyLeft, justifyCenter, justifyRight,
	rotateRight, flipHorizontal, flipVertical
} from '@wordpress/icons';

//Internal dependencies
import '/src/assets/styles/icon-modal.scss';
import '/src/assets/styles/inserter-modal.scss';
import './editor.scss';
import { ConditionalRender } from "./../../assets/components/conditionals";
import { Link, LinkToolbarButton } from "./../../assets/components/Link";
import { getIconAlignment, getUnitLabel, rotateIcon } from './utils';

const heroicons	= heroiconLibrary( 'carbon-blocks' );
const dashicons	= dashiconLibrary( 'carbon-blocks' );
const wordpress	= wordpressLibrary;

const iconLibraries = {
	heroicons,
	dashicons,
	wordpress
};

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { strokeWidth, unit, size, rotation, post, widthType, iconLibrary, icon, alignment, isFlippedHorizontally, isFlippedVertically, showAlignment, isChild } = attributes;

	const URLPopoverRef 																= useRef();
	const popoverRef 																		= useRef();
  const scrollContainerRef 														= useRef(null);
  const previewRef 																		= useRef(null);
	const [ showURLPopover, setURLPopoverVisibility ] 	= useState( false );
	const [ isModalOpen, setModalVisibilty ] 						= useState( false );
	const [ isPopoverOpen, setPopoverVisibility ] 			= useState( false );
	const [ isInserterVisible, setInserterVisibility ] 	= useState( false );
	const [ hasPreviewed, setHasPreviewed ] 						= useState( false );
	const [ searchInput, setSearchInput ] 							= useState( '' );
	const [ icons, setIcons ] 													= useState( iconLibraries[iconLibrary] );
  const [ loadedIcons, setLoadedIcons ] 							= useState( [] );
	const [ svgString, setSvgString ] 									= useState('');
	const [ errorMessage, setErrorMessage ] 						= useState('');
	const [ tempSvg, setTempSvg ] 											= useState('');
	const [ previewSize, setPreviewSize ] 							= useState( 40 );

	const blockProps = useBlockProps({ style: {
		transform: `rotate(${rotation}deg) scale(${isFlippedHorizontally ? -1 : 1},
		${isFlippedVertically ? -1 : 1})`,
		width: icon?.svg ? `${size}${unit}` : "fit-content"
	} });

	const categories = useMemo(() => {
		const cat = [];
		for (const item of icons) {
			if (!cat.includes(item.category)) {
				cat.push(item.category);
			}
		}
		return cat.sort();
	}, [iconLibrary]);

	const [ currentCategory, setCurrentCategory ] = useState( categories[0] );

	useEffect(() => {
		setCurrentCategory( categories[0] )
	}, [categories])

	useEffect(() => {
		if (scrollContainerRef.current){
			scrollContainerRef.current.scrollTop = 0;
		}
 }, [isModalOpen, currentCategory]);

	useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slug = entry.target.dataset.slug;
            const icon = currentIcons.find((item) => item.slug === slug);

            if (icon && !loadedIcons.includes(slug)) {
              setLoadedIcons((prevLoadedIcons) => [...prevLoadedIcons, slug]);
            }
          }
        });
      },
      { rootMargin: `${previewSize * 2}px`}
    );

    const scrollContainer = scrollContainerRef.current;
    const iconElements = scrollContainer?.querySelectorAll('[data-slug]');

    iconElements?.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [isModalOpen, currentCategory, iconLibrary, searchInput]);

	const changeLibrary = iconLibrary => {
		setAttributes( { iconLibrary } )
		setIcons( iconLibraries[iconLibrary] )
	}

	const getCurrentIcons = () => {
		if(searchInput.length >= 3) {
			return icons.filter(icon => {
				const keywords = icon?.keywords && icon.keywords.length > 0 ? icon.keywords : [];
				const searchTerms = [ ...keywords, icon.name.toLowerCase()];
				return searchTerms.find(term => {
					return term.includes(searchInput);
				})
			})
		} else {
			return icons.filter( icon =>  icon.category === currentCategory );
		}
	}

	const handleIconAdd = (icon, strokeWidth, size) => {
		setAttributes({ icon: { ...icon }, strokeWidth, size, rotation: 0 })
		setModalVisibilty( false )
	}

	const currentIcons = useMemo(() => {
		return getCurrentIcons()
	}, [searchInput, currentCategory, iconLibrary, icons]);

	const renderCategories = () => {
		return <MenuGroup>
			{
				categories.map(category => {
					const categoryIcons = icons.filter(icon => {
						return category === "all"
							? true
							: icon.category === category
					});
					return <MenuItem
						key={ category }
						className={{ 'is-active': currentCategory === category }}
						onClick={ () => {
							setCurrentCategory( category )
							setSearchInput( "" )
						} }
						isPressed={ currentCategory === category }
					>
						{ category.charAt(0).toUpperCase() + category.slice(1) }
						<span>
							{ categoryIcons?.length }
						</span>
					</MenuItem>
				})
			}
		</MenuGroup>
	}

	const handleModalClose = () => {
		setSearchInput( "" );
		setModalVisibilty( false )
	}

	const createSecureSVG = svgString => {
		const svgContainer = document.createElement('div');
		svgContainer.innerHTML = DOMPurify.sanitize(svgString, { USE_PROFILES: { svg: true } });
		const svgElement = svgContainer.querySelector('svg');
		if (!svgElement) {
			throw new Error('Invalid SVG');
		}
		setTempSvg( svgElement.outerHTML );
		return svgElement;
	};

	const handleInserterPreview = event => {
		event.preventDefault();
		if (!svgString) {
			setErrorMessage( __( 'Please enter an SVG string', 'carbon-blocks' ) );
			return;
		}
		try {
			renderPreview(svgString);
			setErrorMessage('');
			setHasPreviewed( true );
		} catch (error) {
			setErrorMessage(error.message);
			setHasPreviewed( false );
		}
	};

	const handleInserterAdd = () => {
		setAttributes({ icon: {
			svg: tempSvg,
			isCustom: true
		} })
		closeInserterModal();
	}

	const renderPreview = (svgString) => {
		const modalPreview = previewRef.current;
		modalPreview.innerHTML = '';

		if (svgString) {
			const svgElement = createSecureSVG(svgString);
			modalPreview.appendChild(svgElement);
		}
	};

	const closeInserterModal = () => {
		setSvgString('');
		setInserterVisibility( false );
		setHasPreviewed( false );
	}

	const handleWidthTypeChange = ( widthType ) => {
		setAttributes({ widthType });
		switch (widthType) {
			case "full":
				setAttributes({
					size: 100,
					unit: "%"
				 });
				break;
			case "custom":
				setAttributes({
					size: 40,
					unit: "px"
				});
				break;
		}
	}

	const ConditionalIconLink = () => {
		if(icon.isJsx) {
			return <a
				{ ...blockProps }
				href={ post.url }
				target={ post.opensInNewWindow ? '_blank' : '_self' }
				onClick={ ( e ) => e.preventDefault() }
				title={ icon.name }
				rel="noopener"
			>
				<Icon icon={icon.svg}/>
			</a>
		}
		return <a
			{ ...blockProps }
			dangerouslySetInnerHTML={{ __html: icon.svg }}
			title={ icon.name }
			href={ post.url }
			target={ post.opensInNewWindow ? '_blank' : '_self' }
			onClick={ e => e.preventDefault() }
			rel="noopener"
		/>
	}

	const ConditionalIconRender = () => {
		if(icon.isJsx){
			return <span { ...blockProps }>
				<Icon icon={icon.svg}/>
			</span>
		}
		return <span
			{ ...blockProps }
			dangerouslySetInnerHTML={{ __html: icon.svg }}
		/>
	}

	return <>
		<InspectorControls>
			<ConditionalRender conditions={ icon?.svg }>
				<PanelBody title={ __( "Settings", 'carbon-blocks' ) } initialOpen={ true }>
					<ToggleGroupControl
						__nextHasNoMarginBottom
						isBlock
						label={ __( "Width", 'carbon-blocks' ) }
						onChange={ widthType => handleWidthTypeChange( widthType ) }
						value={ widthType }
					>
						<ToggleGroupControlOption
							label={ __( "Full", 'carbon-blocks' ) }
							value="full"
						/>
						<ToggleGroupControlOption
							label={ __( "Custom", 'carbon-blocks' ) }
							value="custom"
						/>
					</ToggleGroupControl>
					<ConditionalRender conditions={ widthType === "custom"}>
						<ConditionalRender conditions={ unit !== "px"}>
							<RangeControl
								label={ __( `Icon size (in ${getUnitLabel(unit)})`, 'carbon-blocks' ) }
								value={ size }
								onChange={ size => setAttributes({ size }) }
								min={1}
								max={100}
								__nextHasNoMarginBottom
							/>
						</ConditionalRender>
						<ConditionalRender conditions={ unit === "px"}>
							<NumberControl
								label={ __( `Icon size (in ${getUnitLabel(unit)})`, 'carbon-blocks' ) }
								value={ size }
								min={10}
								onChange={ size => setAttributes({ size: Number(size) }) }
							/>
						</ConditionalRender>
					</ConditionalRender>
					<ConditionalRender conditions={ widthType === "custom"}>
						<ToggleGroupControl
							__nextHasNoMarginBottom
							isBlock
							label={ __( "Unit", 'carbon-blocks' ) }
							value={ unit }
							onChange={ unit => setAttributes({ unit }) }
						>
							<ToggleGroupControlOption
								label={ __( "px", 'carbon-blocks' ) }
								value="px"
							/>
							<ToggleGroupControlOption
								label={ __( "%", 'carbon-blocks' ) }
								value="%"
							/>
							<ToggleGroupControlOption
								label={ __( "vw", 'carbon-blocks' ) }
								value="vw"
							/>
						</ToggleGroupControl>
					</ConditionalRender>
				</PanelBody>
			</ConditionalRender>
		</InspectorControls>
		{
			icon?.svg
				? <>
					<BlockControls>
						<ToolbarGroup>
							<ConditionalRender conditions={ !isChild }>
								<LinkToolbarButton
									isActive={ post?.url }
									popoverRef={ URLPopoverRef }
									isPopoverOpen={ showURLPopover }
									setPopoverVisibility={ setURLPopoverVisibility }
								/>
							</ConditionalRender>
							<ToolbarButton
								label={ __( "Rotate icon", 'carbon-blocks' )}
								icon={ rotateRight }
								onClick={ () => setAttributes( { rotation: rotateIcon(rotation) } ) }
							/>
							<ToolbarButton
								label={ __( "Flip horizontally", 'carbon-blocks' )}
								icon={ flipHorizontal }
								onClick={ () => setAttributes({ isFlippedHorizontally: !isFlippedHorizontally }) }
								isActive={ isFlippedHorizontally }
							/>
							<ToolbarButton
								label={ __( "Flip vertically", 'carbon-blocks' )}
								icon={ flipVertical }
								onClick={ () => setAttributes({ isFlippedVertically: !isFlippedVertically }) }
								isActive={ isFlippedVertically }
							/>
							<ConditionalRender conditions={ showAlignment && !isChild }>
								<ToolbarButton
									icon={ () => getIconAlignment(alignment) }
									label={ __( "Alignment", 'carbon-blocks' )}
									onClick={ () => setPopoverVisibility(true) }
									ref={ popoverRef }
								/>
							</ConditionalRender>
						</ToolbarGroup>
						<ToolbarGroup>
							<ToolbarButton
								onClick={ () => setModalVisibilty( true ) }
								label={ __( "Change icon", 'carbon-blocks' ) }
							>
								{ __( "Change", 'carbon-blocks' ) }
								</ToolbarButton>
						</ToolbarGroup>
					</BlockControls>
					<ConditionalRender conditions={ isPopoverOpen }>
						<Popover
							anchor={ popoverRef.current }
							focusOnMount="firstElement"
							position="bottom right"
							headerTitle={ __( "Alignment settings", 'carbon-blocks' ) }
							onClose={ () => setPopoverVisibility(false) }
						>
							<div style={{ padding: '10px', display: "flex" }}>
								<ToolbarButton
									icon={ justifyLeft }
									title={ __( "Left alignment", 'carbon-blocks' ) }
									isActive={alignment === 'flex-start'}
									onClick={() => {
										setAttributes({ alignment: 'flex-start' });
										setPopoverVisibility(false);
									}}
								/>
								<ToolbarButton
									icon={ justifyCenter }
									title={ __( "Center alignment", 'carbon-blocks' ) }
									isActive={alignment === 'center'}
									onClick={() => {
										setAttributes({ alignment: 'center' });
										setPopoverVisibility(false);
									}}
								/>
								<ToolbarButton
									icon={ justifyRight }
									title={ __( "Right alignment", 'carbon-blocks' ) }
									isActive={alignment === 'flex-end'}
									onClick={() => {
										setAttributes({ alignment: 'flex-end' });
										setPopoverVisibility(false);
									}}
								/>
							</div>
						</Popover>
					</ConditionalRender>
					<section style={{ display: "flex", justifyContent: alignment }}>
						{
							post.url
							? <ConditionalIconLink />
							: <ConditionalIconRender />
						}
					</section>
					<Link
						post={ post }
						popoverRef={ URLPopoverRef }
						setAttributes={ setAttributes }
						isPopoverOpen={ showURLPopover }
						setPopoverVisibility={ setURLPopoverVisibility }
					/>
				</>
				: <div { ...blockProps } style={{ display: "flex", justifyContent: alignment }}>
					<button onClick={ () => setModalVisibilty( true ) } type="button" class="components-button block-editor-button-block-appender" aria-label={ __("Add an icon", 'carbon-blocks' ) } style={{ width: "fit-content" }}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"></path></svg>
					</button>
				</div>
		}
		<ConditionalRender conditions={ isModalOpen }>
			<Modal
				className="carbon-blocks-icon-modal"
				title={ __( "Add an icon", 'carbon-blocks' ) }
				onRequestClose={ handleModalClose }
				isFullScreen
			>
				<section>
					<aside className="carbon-blocks-icon-modal__sidebar">
						<section>
							<SearchControl
								value={ searchInput }
								onChange={ setSearchInput }
							/>
							{
								<ConditionalRender conditions={ searchInput && currentIcons?.length > 0 }>
									<Notice status="info" isDismissible={ false } className='carbon-blocks-icon-modal__notice'>
										{
											searchInput.length >= 3
												? sprintf(
													/* translators: %1$s is replaced with the number of results */
													/* translators: %2$s is replaced with the string searched */
													_n( '%1$s result for "%2$s"', '%1$s results for "%2$s"', currentIcons?.length, 'carbon-blocks' ),
													currentIcons?.length,
													searchInput,
													'carbon-blocks'
												)
												/* translators: %1$s is replaced with the number of results */
												: sprintf( '%1$s more letters before search', 3 - searchInput.length, 'carbon-blocks' )
										}
									</Notice>
								</ConditionalRender>
							}
							{
								renderCategories()
							}
						</section>
					</aside>
					<main className='carbon-blocks-icon-modal__content'>
						<header className="carbon-blocks-icon-modal__header">
							<SelectControl
								label={ __( 'Select an icon library', 'carbon-blocks' ) }
								value={ iconLibrary }
								onChange={ iconLibrary => changeLibrary( iconLibrary ) }
								options={ [
									{ value: 'heroicons', label: __( 'Classic Icons', 'carbon-blocks' ) },
									{ value: 'dashicons', label: __( 'Dashicons', 'carbon-blocks' ) },
									{ value: 'wordpress', label: __( 'Wordpress icons', 'carbon-blocks' ) }
								] }
							/>
							<RangeControl
                label={ __( "Size", 'carbon-blocks' ) }
                value={ previewSize }
                onChange={ previewSize => {
									setPreviewSize( previewSize )
									setAttributes({
										size: previewSize,
										unit: "px"
									})
									if(widthType != "custom") {
										setAttributes({ widthType: "custom" });
									}
								}}
                min={40}
                max={100}
								__nextHasNoMarginBottom
								className='carbon-blocks-icon-modal__preview'
              />
							<Button isSecondary onClick={ () => setInserterVisibility(true) }>{ icon.isCustom ? __( "Edit custom SVG", 'carbon-blocks' ) : __( "Insert custom SVG", 'carbon-blocks' ) }</Button>
						</header>

						<ul className="carbon-blocks-icon-modal__icons" ref={scrollContainerRef}>
							{
								currentIcons?.length === 0
									?	<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17c.85-.63 1.885-1 3-1s2.15.37 3 1"/><ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"/><ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"/><path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/></g></svg>
										{ __("Sorry, no icons were found for your search.", 'carbon-blocks' ) }
									</div>
									: currentIcons.map((icon, index) => (
										<li key={index} data-slug={icon.slug}>
											{
												loadedIcons.includes(icon.slug)
													? <button onClick={() => handleIconAdd(icon, strokeWidth, size)}>
														{
															icon?.isJsx
																?	<span style={{ width: `${previewSize}px` }} >
																	<Icon icon={icon.svg} />
																</span>
																: <span dangerouslySetInnerHTML={{ __html: icon.svg }} style={{ width: `${previewSize}px` }}/>
														}
														{icon.name}
													</button>
													: <div>
														<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"/></svg>
													</div>
											}
										</li>
									))
							}
						</ul>

					</main>
				</section>
			</Modal>
		</ConditionalRender>
		<ConditionalRender conditions={ isInserterVisible }>
			<Modal
				className="carbon-blocks-inserter-modal"
				title={__( "Insert an SVG tag", 'carbon-blocks' )}
				onRequestClose={ () => closeInserterModal() }
				isFullScreen
			>
				<Button isSecondary onClick={ () => { closeInserterModal(); setModalVisibilty(true) } } type="submit" className='carbon-blocks-inserter-modal__return'>{ __( "Return to icon list", "carbon-blocks") }</Button>
				<section className="carbon-blocks-inserter-modal__content">
					<section className="carbon-blocks-inserter-modal__inserter">
						<TextareaControl
							label={ __( "SVG tag", 'carbon-blocks' ) }
							value={ icon.isCustom ? icon.svg : svgString}
							onChange={ setSvgString }
						/>
					</section>
					<section className="carbon-blocks-inserter-modal__render">
						<label>
							{ __( "Preview", 'carbon-blocks' ) }
						</label>
						<div>
							<div className="carbon-blocks-inserter-modal__preview" ref={ previewRef }/>
						</div>
						<ConditionalRender conditions={ errorMessage }>
							<Notice status="error" className="carbon-blocks-inserter-modal__error" onDismiss={() => setErrorMessage("")}>
								{errorMessage}
							</Notice>
						</ConditionalRender>
						<footer>
							<section className="carbon-blocks-inserter-modal__buttons">
								<ConditionalRender conditions={ svgString }>
									<Button isSecondary disabled={ !svgString } onClick={ handleInserterPreview } type="submit">{ __( "Preview", 'carbon-blocks' ) }</Button>
									<Button isPrimary disabled={ !hasPreviewed } onClick={ handleInserterAdd } type="submit">{ __( "Add", 'carbon-blocks' ) }</Button>
								</ConditionalRender>
							</section>
						</footer>
					</section>
				</section>
			</Modal>
		</ConditionalRender>
	</>
};
