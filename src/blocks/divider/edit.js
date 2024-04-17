// WordPress dependencies
import { __ } from '@wordpress/i18n';
import {
	RichText, BlockControls,
	InspectorControls, useBlockProps, PanelColorSettings
} from '@wordpress/block-editor';
import { PanelBody, ToolbarGroup, ToolbarButton, RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption
} from '@wordpress/components';
import { flipHorizontal, flipVertical } from '@wordpress/icons';

//Internal dependencies
import './editor.scss';
import { ConditionalRender } from '../../assets/components/conditionals';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
  const { isFlippedHorizontally, isFlippedVertically, shapeType,dividerColor, backgroundColor, dividerHeight } = attributes;
  const blockProps = useBlockProps({  style: {
		transform: `scale(${isFlippedHorizontally ? -1 : 1},
		${isFlippedVertically ? -1 : 1})`,
    "--divider-height": `${ dividerHeight }px`,
    backgroundColor: `${ backgroundColor }`
	} });
	return <>
    <InspectorControls group="styles">
      <PanelColorSettings
        enableAlpha
        __experimentalIsRenderedInSidebar
        title={ __( 'Colors', 'carbon-blocks' ) }
        className="carbon-blocks-color-panel"
        colorSettings={ [
          {
            value: dividerColor,
            onChange: dividerColor => setAttributes( { dividerColor } ),
            label: __( 'Divider', 'carbon-blocks' ),
          },
          {
            value: backgroundColor,
            onChange: backgroundColor => setAttributes( { backgroundColor } ),
            label: __( 'Background', 'carbon-blocks' ),
          }
        ] }
      />
    </InspectorControls>
		<InspectorControls>
			<PanelBody title={ __( "Settings", 'carbon-blocks' ) }>
        <ToggleGroupControl
            onChange={ shapeType => setAttributes({ shapeType }) }
            label={ __('Divider Type', 'carbon-blocks' ) }
            value={ shapeType }
            help={ __( "Divider render", 'carbon-blocks' ) }
            isBlock
            __nextHasNoMarginBottom
          >
            <ToggleGroupControlOption value="wave" label={ __( "Wave", 'carbon-blocks' ) } />
            <ToggleGroupControlOption value="triangle" label={ __( "Triangle", 'carbon-blocks' ) } />
            <ToggleGroupControlOption value="tilt" label={ __( "Tilt", 'carbon-blocks' ) } />
          </ToggleGroupControl>
          <RangeControl
            initialPosition={ dividerHeight }
            label={ __( "Divider height", 'carbon-blocks' ) }
            help={ __( "Height in pixels", 'carbon-blocks' ) }
            max={ 500 }
            min={ 1 }
            onChange={ dividerHeight => setAttributes({dividerHeight }) }
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            value={ dividerHeight }
          />
			</PanelBody>
		</InspectorControls>
		<section { ...blockProps }>
      <ConditionalRender conditions={ shapeType === "wave" }>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill= { dividerColor }>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </ConditionalRender>
      <ConditionalRender conditions={ shapeType === "triangle" }>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill= { dividerColor }>
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </ConditionalRender>
      <ConditionalRender conditions={ shapeType === "tilt" }>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill= { dividerColor }>
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
      </ConditionalRender>
		</section>
		<BlockControls>

      <ToolbarGroup>
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
      </ToolbarGroup>
		</BlockControls>
	</>
}
