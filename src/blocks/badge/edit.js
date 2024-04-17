// External dependencies

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import {
	RichText, InspectorControls, useBlockProps, useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon
} from '@wordpress/components';
import { arrowLeft, arrowRight } from '@wordpress/icons';

//Internal dependencies
import './editor.scss';
import { ConditionalRender } from '../../assets/components/conditionals';
import { wordPlaceholder } from '../../assets/components/placeholders';
import Toggle from '../../assets/components/Toggle';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { badgeContent, showIcon, orientation } = attributes;

	const getOrientation = () => {
		switch (orientation) {
			case "left": 	return "row-reverse"
			case "right": return "row"
		}
	}

	const blockProps = useBlockProps({
		style: {
			flexDirection: getOrientation(),
		}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'carbon-blocks/icons' ],
		templateLock: "all",
		template: [
			[ "carbon-blocks/icons", {
				size: 20,
				showActions: false,
				isChild: true
			} ]
		]
	} );

	return <>
		<InspectorControls>
			<PanelBody title={ __( 'Settings', 'carbon-blocks' ) }  initialOpen={true}>
				<ConditionalRender conditions={ showIcon }>
					<ToggleGroupControl
						__nextHasNoMarginBottom
						label={ __( "Orientation", 'carbon-blocks' ) }
						value={ orientation }
						onChange={orientation => setAttributes({ orientation })}
					>
						<ToggleGroupControlOptionIcon
							icon={ arrowLeft }
							label={ __( "Left", 'carbon-blocks' ) }
							value="left"
						/>
						<ToggleGroupControlOptionIcon
							icon={ arrowRight }
							label={ __( "Right", 'carbon-blocks' ) }
							value="right"
						/>
					</ToggleGroupControl>
				</ConditionalRender>
				<Toggle
					onChange={ showIcon => setAttributes({ showIcon }) }
					label={ __( "Show icon", 'carbon-blocks' ) }
					value={ showIcon }
				/>
			</PanelBody>
		</InspectorControls>
		<li { ...innerBlocksProps }>
			<ConditionalRender conditions={ showIcon }>
				{ children }
			</ConditionalRender>
			<RichText
				tagName="span"
				value={ badgeContent }
				onChange={ badgeContent => setAttributes({badgeContent}) }
				placeholder={ wordPlaceholder }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
		</li>
	</>
}
