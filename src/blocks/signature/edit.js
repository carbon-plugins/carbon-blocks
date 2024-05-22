// WordPress dependencies
import { __ } from '@wordpress/i18n';
import {
	RichText, InspectorControls, useInnerBlocksProps, useBlockProps
} from '@wordpress/block-editor';
import {
	PanelBody,
} from '@wordpress/components';
import { useMemo } from 'react'

//Internal dependencies
import './editor.scss';
import { ConditionalRender } from '../../assets/components/conditionals';
import { DirectionControl, HorizontalControl, getAlignment } from '../../assets/components/alignment';
import Toggle from '../../assets/components/Toggle';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const {
		name, position, showName, showPosition, alignment, showAvatar,
		direction
	} = attributes;

	const blockProps = useBlockProps({
		style: {
			justifyContent: direction === "row"
				? getAlignment( alignment )
				: "center",
			alignItems: direction === "column"
				? getAlignment( alignment )
				: "center",
			flexDirection: direction
		}
	});

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ "carbon-blocks/advanced-avatar" ],
		renderAppender: false,
		template: [
			[ "carbon-blocks/advanced-avatar", {
        isChild: true
      } ],
		],
		orientation: "horizontal"
	} );

  const isDisabled = useMemo(() => {
		const toCheck = [showAvatar, showName, showPosition];
		const enabledList = toCheck.filter(el => !!el);

		return enabledList.length === 1
	}, [showAvatar, showName, showPosition])

	return <>
		<InspectorControls>
			<PanelBody title={ __( "Settings", 'carbon-blocks-pro' ) }>
				<DirectionControl
					value={ direction }
					onChange={ direction => setAttributes({direction }) }
				/>
				<HorizontalControl
					value={ alignment }
					onChange={ alignment => setAttributes({ alignment }) }
				/>
				<Toggle
					label={ __( "Show avatar", 'carbon-blocks-pro' ) }
					value={ showAvatar }
          disabled={ isDisabled && showAvatar }
					onChange={ showAvatar => setAttributes({ showAvatar }) }
				/>
				<Toggle
					label={ __( "Show name", 'carbon-blocks-pro' ) }
					value={ showName }
          disabled={ isDisabled && showName }
					onChange={ showName => setAttributes({ showName }) }
				/>
				<Toggle
					label={ __( "Show position", 'carbon-blocks-pro' ) }
					value={ showPosition }
          disabled={ isDisabled && showPosition }
					onChange={ showPosition => setAttributes({ showPosition }) }
				/>
			</PanelBody>
		</InspectorControls>
		<section { ...innerBlocksProps }>
			<ConditionalRender conditions={ showAvatar }>
				{ children }
			</ConditionalRender>
			<section>
				<ConditionalRender conditions={ showName }>
					<RichText
						tagName="cite"
						value={ name }
						onChange={ name => { setAttributes( { name } ) } }
						placeholder={ __( "Name", 'carbon-blocks-pro' ) }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						style={{ textAlign: alignment }}
					/>
				</ConditionalRender>
				<ConditionalRender conditions={ showPosition }>
					<RichText
						tagName="cite"
						value={ position }
						onChange={ position => { setAttributes( { position } ) } }
						placeholder={ __( "Position", 'carbon-blocks-pro' ) }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						style={{ textAlign: alignment }}
					/>
				</ConditionalRender>
			</section>
		</section>
	</>
}
