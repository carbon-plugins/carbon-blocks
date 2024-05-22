// External dependencies
import Avatar from "boring-avatars";
import { v4 as uuidv4 } from 'uuid';
import palettes from 'nice-color-palettes';
// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useRef, useState } from '@wordpress/element';
import {
	MediaUpload, MediaUploadCheck, BlockControls,

	InspectorControls, useBlockProps, useSettings, PanelColorSettings
} from '@wordpress/block-editor';
import {
	PanelBody, FocalPointPicker, Button, Popover, ColorIndicator,
	__experimentalInputControl as InputControl, ColorPicker,
  __experimentalToggleGroupControl as ToggleGroupControl, ToolbarGroup,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	__experimentalBorderBoxControl as BorderBoxControl
} from '@wordpress/components';

//Internal dependencies
import './editor.scss';
import getInitials from './initials';
import { ConditionalRender } from '../../assets/components/conditionals';
import { HorizontalAlignmentToolbar, HorizontalControl, getAlignment } from '../../assets/components/alignment';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const {
		type, size, image, focalPoint, initials, uuid, border,
		variant, palette, alignment, showAlignment, isChild
	} = attributes;
	const { radius } = attributes?.style?.border

	const defaultPalette = useSettings( 'color.palette' ) || [];
	const colorPalette = defaultPalette.filter(color => color.slug != "base" && color.slug != "contrast")
	const avatarColors = colorPalette.map(paletteItem => paletteItem.color);

	const isFlatBorder = border?.color || border?.style || border?.width;
	let borderStyles;

	const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	if(isFlatBorder){
		borderStyles = {
			borderWidth: border?.width,
			borderStyle: border?.style,
			borderColor: border?.color
		}
	} else {
		borderStyles = {};
		const props = [ "color", "style", "width" ];
		Object.keys(border).map(key => {
			const keyName = capitalizeFirstLetter(key);
			props.map(prop => {
				const propName = capitalizeFirstLetter(prop);
				borderStyles[`border${keyName}${propName}`] = border[key][prop];
			})
		})
	}

	const dataAttributes = {
		"data-type": type,
		"data-size": size,
		"data-name": uuid,
		"data-variant": variant,
		"data-border": JSON.stringify({
			styles: borderStyles,
			radius: radius,
		}),
		"data-colors": JSON.stringify(avatarColors),
	};

  const blockProps = useBlockProps({
		style: {
			justifyContent: getAlignment( alignment ),
			border: "none",
			borderRadius: 0
		},
		...dataAttributes
	});

	const colorPickerPopover = useRef();
	const [ currentId, setCurrentId ] = useState( false );
	const [ currentColor, setCurrentColor ] = useState( false );
	const [ isPickerVisible, setPickerVisibility ] = useState( false );

	if( palette.length === 0 ) {
		setAttributes({ palette: avatarColors });
	}

	const generateRandomPalette = () => {
		const randomNumber = Math.floor(Math.random() * 101);
		setAttributes({ palette: palettes[randomNumber] })
	}

	const pickColor = (id, color) => {
		setCurrentId( id );
		setCurrentColor( color );
		setPickerVisibility( true );
	}

	const resetPalette = () => {
		setAttributes({ palette: avatarColors })
	}

	const hasImage = image?.sizes?.medium?.url || image?.url;

	return <>
		<InspectorControls>
			<PanelBody title={ __( "Settings", 'carbon-blocks-pro' ) }>
				<ToggleGroupControl
					isBlock
					label={ __( "Avatar size", "carbon-blocks-pro" ) }
					value={ size }
					onChange={ size => setAttributes({ size }) }
					__nextHasNoMarginBottom
				>
					<ToggleGroupControlOption
						label={ __( "Small", "carbon-blocks-pro" ) }
						value={ 40 }
					/>
					<ToggleGroupControlOption
						label={ __( "Medium", "carbon-blocks-pro" ) }
						value={ 60 }
					/>
					<ToggleGroupControlOption
						label={ __( "Large", "carbon-blocks-pro" ) }
						value={ 80 }
					/>
				</ToggleGroupControl>
				<ToggleGroupControl
					isBlock
					label={ __( "Avatar type", "carbon-blocks-pro" ) }
					value={ type }
					onChange={ type => setAttributes({ type }) }
					__nextHasNoMarginBottom
				>
					<ToggleGroupControlOption
						label={ __( "Shape", "carbon-blocks-pro" ) }
						value="shape"
					/>
					<ToggleGroupControlOption
						label={ __( "Image", "carbon-blocks-pro" ) }
						value="image"
					/>
					<ToggleGroupControlOption
						label={ __( "Initials", "carbon-blocks-pro" ) }
						value="initials"
					/>
				</ToggleGroupControl>
        <ConditionalRender conditions={ showAlignment && !isChild }>
          <HorizontalControl
            value={ alignment }
            onChange={ alignment => setAttributes({ alignment }) }
          />
        </ConditionalRender>
				<ConditionalRender conditions={ type === "shape"}>
					<ToggleGroupControl
						isBlock
						label={ __( "Shape variant", "carbon-blocks-pro" ) }
						value={ variant }
						onChange={ variant => setAttributes({
							variant,
							uuid: uuidv4()
						}) }
						__nextHasNoMarginBottom
						className="carbon-shape-picker"
					>
						<ToggleGroupControlOptionIcon
							icon={ <Avatar
								name="Maud Nathan"
								variant="beam"
								colors={ palette }
							/> }
							value="beam"
						/>
						<ToggleGroupControlOptionIcon
							icon={ <Avatar
								name="Mahalia Jackson"
								variant="marble"
								colors={ palette }
							/> }
							value="marble"
						/>
						<ToggleGroupControlOptionIcon
							icon={ <Avatar
								name="Maria Mitchell"
								variant="pixel"
								colors={ palette }
							/> }
							value="pixel"
						/>
						<ToggleGroupControlOptionIcon
							icon={ <Avatar
								name="Carrie Chapman"
								variant="sunset"
								colors={ palette }
							/> }
							value="sunset"
						/>
						<ToggleGroupControlOptionIcon
							icon={ <Avatar
								name="Julia Ward"
								variant="ring"
								colors={ palette }
							/> }
							value="ring"
						/>
						<ToggleGroupControlOptionIcon
							icon={ <Avatar
								name="Sally Ride"
								variant="bauhaus"
								colors={ palette }
							/> }
							value="bauhaus"
						/>
					</ToggleGroupControl>
					<Button __next40pxDefaultSize style={{  width: '100%', marginTop: '-10px', marginBottom: '20px', display: "flex", justifyContent: "center" }} isPrimary onClick={ () => setAttributes({ uuid: uuidv4()}) }>{ __( "Generate a shape", 'carbon-blocks-pro' ) }</Button>
					<section style={{ display: "flex", gap: "10px", flexWrap: "wrap" }} ref={ colorPickerPopover }>
						<ColorIndicator colorValue={ palette[0] } onClick={ () => pickColor(0, palette[0]) } className="carbon-palette-picker"/>
						<ColorIndicator colorValue={ palette[1] } onClick={ () => pickColor(1, palette[1]) } className="carbon-palette-picker"/>
						<ColorIndicator colorValue={ palette[2] } onClick={ () => pickColor(2, palette[2]) } className="carbon-palette-picker"/>
						<ColorIndicator colorValue={ palette[3] } onClick={ () => pickColor(3, palette[3]) } className="carbon-palette-picker"/>
						<ColorIndicator colorValue={ palette[4] } onClick={ () => pickColor(4, palette[4]) } className="carbon-palette-picker"/>
					</section>
					<ConditionalRender conditions={ isPickerVisible }>
						<Popover
							anchor={ colorPickerPopover.current }
							focusOnMount="firstElement"
							onClose={ () => setPickerVisibility(false) }
						>
							<ColorPicker
								onChange={ newColor => {
									const newPalette = palette;
									setCurrentColor( newColor );
									newPalette[ currentId ] = newColor;
									setAttributes({ palette: newPalette });
								}}
								color={ currentColor }
								copyFormat="hex"
								enableAlpha={ false }
							/>
						</Popover>
					</ConditionalRender>
					<Button __next40pxDefaultSize style={{  width: '100%', marginTop: '10px', display: "flex", justifyContent: "center" }} isPrimary onClick={() => generateRandomPalette() }>{ __( "Generate a palette", 'carbon-blocks-pro' ) }</Button>
					<Button __next40pxDefaultSize style={{  width: '100%', marginTop: '10px', display: "flex", justifyContent: "center" }} isSecondary onClick={ () => resetPalette() }>{ __( "Reset to default", 'carbon-blocks-pro' ) }</Button>
				</ConditionalRender>
				<ConditionalRender conditions={ type === "image"}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ image => { setAttributes({ image }) } }
							allowedTypes={ ['image'] }
							value={ image }
							title={ __( "Add an avatar", 'carbon-blocks-pro' ) }
							render={ ( { open } ) => (
								<Button __next40pxDefaultSize style={{  width: '100%', marginTop: '20px', marginBottom: '20px', display: "flex", justifyContent: "center" }} class="galleryEditor imageButton" isSecondary onClick={ open }>{ hasImage ? __("Edit avatar", 'carbon-blocks-pro' ) : __("Add an avatar", 'carbon-blocks-pro' ) }</Button>
							) }
						/>
					</MediaUploadCheck>
				</ConditionalRender>
				<ConditionalRender conditions={ type === "initials"}>
					<InputControl
						value={ initials.value }
						onChange={ value => {
							setAttributes( { initials: {
								...initials, value
							} } )
						} }
						type="text"
						label={ __( "Author name", "carbon-blocks-pro" ) }
						__next40pxDefaultSize
						__unstableInputWidth
					/>
					<PanelColorSettings
						enableAlpha
						__experimentalIsRenderedInSidebar
						className="carbon-blocks-color-panel carbon-blocks-color-panel__is-child"
						colorSettings={ [
							{
								value: initials.color,
								onChange: color => setAttributes( { initials: {
									...initials, color
								} } ),
								label: __( 'Initials color', 'carbon-blocks-pro' ),
							},
							{
								value: initials.background,
								onChange: background => setAttributes( { initials: {
									...initials, background
								} } ),
								label: __( 'Initials background', 'carbon-blocks-pro' ),
							},
						] }
					/>
				</ConditionalRender>
				<ConditionalRender conditions={ hasImage && (image?.height != image?.width) }>
					<FocalPointPicker
						url={ image?.url }
						value={ focalPoint }
						onDragStart={ focalPoint => setAttributes({ focalPoint }) }
						onDrag={ focalPoint => setAttributes({ focalPoint }) }
						onChange={ focalPoint => setAttributes({ focalPoint }) }
					/>
				</ConditionalRender>
			</PanelBody>
		</InspectorControls>
		<InspectorControls group="styles">
			<div style={{ padding: "0 16px 16px 16px"}}>
				<BorderBoxControl
					colors={ defaultPalette }
					label={ __( 'Border', "carbon-blocks" ) }
					onChange={ border => setAttributes({ border }) }
					value={ border }
					withSlider
					enableAlpha
					size="__unstable-large"
				/>
			</div>
		</InspectorControls>
    <BlockControls>
      <ConditionalRender conditions={ showAlignment && !isChild }>
        <ToolbarGroup>
            <HorizontalAlignmentToolbar
              value={ alignment }
              onChange={ alignment => setAttributes({ alignment }) }
            />
        </ToolbarGroup>
      </ConditionalRender>
    </BlockControls>
		<section { ...blockProps }>
			<ConditionalRender conditions={ type === "shape" }>
				<div style={{
					...borderStyles,
					borderRadius: radius,
					height: size,
					width: size,
					overflow: "hidden"
				}}>
					<Avatar
						size={ size }
						name={ uuid }
						variant={ variant }
						colors={ palette }
						square={ true }
						style={{ ...borderStyles }}
					/>
				</div>
			</ConditionalRender>
			<ConditionalRender conditions={ type === "image" }>
				<img
					src={ hasImage || "" }
					height={ size }
					width={ size }
					style={{
						...borderStyles,
						borderRadius: radius,
						objectPosition: `${ focalPoint.x * 100 }% ${ focalPoint.y * 100 }%`
					}}
				/>
			</ConditionalRender>
			<ConditionalRender conditions={ type === "initials" }>
				<img
					src={ getInitials(initials, size) }
					height={ size }
					width={ size }
					style={{
						...borderStyles,
						borderRadius: radius
					}}
				/>
			</ConditionalRender>
		</section>
	</>
}
