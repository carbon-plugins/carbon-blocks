import { __ } from '@wordpress/i18n';
import { Fragment, useRef, useState } from '@wordpress/element';
import { PanelBody, ToggleControl, TabPanel, Button, RangeControl,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
	BaseControl, Modal
} from "@wordpress/components";
import { InspectorControls } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';

import { SVG, Path } from '@wordpress/primitives';

const animation = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { attributes, setAttributes } = props;
		const { animation } = attributes;
		const replayButtonRef = useRef();
		const test = useRef();
		const [ isModalOpen, setModalVisibilty ] = useState( false );

		const reset = () => {
			setAttributes( {
				animation: {
					...animation,
					delay: 0,
					duration: 500,
					repeat: false
				}
			} )
		}

		const easings = [
			{
				label: __( "Default", 'carbon-blocks' ),
				help: __( "", 'carbon-blocks' ),
				options: [
					{ label: __( "Linear", 'carbon-blocks' ), slug: "linear", path: "M1 84L124 0" },
					{ label: __( "Ease", 'carbon-blocks' ), slug: "ease", path: "M1 84C60 55 53.75 0 124 1" },
				]
			},
			{
				label: __( "Ease", 'carbon-blocks' ),
				options: [
					{ label: __( "In", 'carbon-blocks' ), slug: "ease-in", path: "M 1 84 c 43 -1 57 -2 123 -83" },
					{ label: __( "Out", 'carbon-blocks' ), slug: "ease-out", path: "M 0 84 C 64 8 73 4 123 0" },
					{ label: __( "In | Out", 'carbon-blocks' ), slug: "ease-in-out", path: "M 0 84 C 68 84 55 1 123 0" },
				]
			}
		]

		const previewAnimation = () => {
			setTimeout(() => {
				const tag = document.querySelector(`[data-block="${props.clientId}"]`)
				tag.classList.remove('anim');
				tag.classList.add('is-hidden');
				tag.removeAttribute('data-anim-delay');
				tag.setAttribute('data-anim', animation.type)
				tag.setAttribute('data-anim-duration', animation.duration)
				tag.setAttribute('data-anim-easing', animation.easing)
				setTimeout(() => {
					tag.classList.remove('is-hidden');
					tag.classList.add('anim');
					setTimeout(() => {
						tag.removeAttribute('data-anim');
					}, animation.duration)
				}, 100)
			}, 200)
		}


		if((!!animation)) {
			return <Fragment>
				<BlockEdit { ...props } ref={test}/>
				{ isModalOpen && <Modal
						className="carbon-blocks-animation-modal"
						title={__( "Preview block animation", 'carbon-blocks' )}
						onRequestClose={  () => setModalVisibilty( false )  }
					>
						<Button __next40pxDefaultSize
							isPrimary
							style={{ textAlign: "center", display: "block", width: "100%"}}
							onClick={ previewAnimation }
							ref={ replayButtonRef }
						>
							{ __('Replay animation', 'carbon-blocks' ) }
						</Button>
					</Modal>
				}
				<InspectorControls>
					<PanelBody
						title={ __( "Animation", "carbon" ) }
						initialOpen={ true }
						icon={"video-alt"}
					>
						<ToggleControl
							label={ __( 'Activate animation', 'carbon-blocks' ) }
							checked={ animation.isActive }
							onChange={ () => setAttributes( { animation: { ...animation, isActive: !animation.isActive } } ) }
							help={ __( 'Animate the block when he shows up on the screen.', 'carbon-blocks' ) }
						/>
						{
							animation.isActive &&  <BaseControl
								__nextHasNoMarginBottom
								help={ __('Delay and repeat are not visible in preview.', 'carbon-blocks' ) }
							>
								<Button __next40pxDefaultSize
									isPrimary
									style={{ textAlign: "center", display: "block", width: "100%"}}
									onClick={ previewAnimation }
								>
									{ __('Preview animation', 'carbon-blocks' ) }
								</Button>
							</BaseControl>
						}
						{
							animation.isActive && <TabPanel
								orientation="horizontal"
								initialTabName="type"
								__nextHasNoMarginBottom
								tabs={ [
									{
										name: 'type',
										title: 'Type'
									},
									{
										name: 'timing',
										title: 'Timing'
									},
									{
										name: 'easing',
										title: 'Easing'
									},
								] }>
								{
									tab => {
										switch(tab.name) {
											case 'type': return <PanelBody>
												<ToggleGroupControl
													isBlock
													label="Default"
													value={ animation.type }
													onChange={ type => setAttributes( { animation: { ...animation, type } } ) }
													__nextHasNoMarginBottom
												>
													<ToggleGroupControlOption
														label="Fade in"
														value="fade"
													/>
													<ToggleGroupControlOption
														label="Zoom in"
														value="zoom-in"
													/>
													<ToggleGroupControlOption
														label="Zoom out"
														value="zoom-out"
													/>
												</ToggleGroupControl>
												<ToggleGroupControl
													isBlock
													label="Slinding animation"
													value={ animation.type }
													onChange={ type => setAttributes( { animation: { ...animation, type } } ) }
													__nextHasNoMarginBottom
												>
													<ToggleGroupControlOption
														label="Up"
														value="slide-up"
													/>
													<ToggleGroupControlOption
														label="Down"
														value="slide-down"
													/>
													<ToggleGroupControlOption
														label="Left"
														value="slide-left"
													/>
													<ToggleGroupControlOption
														label="Right"
														value="slide-right"
													/>
												</ToggleGroupControl>
												<ToggleGroupControl
													isBlock
													label="Fliping animation"
													value={ animation.type }
													onChange={ type => setAttributes( { animation: { ...animation, type } } ) }
													__nextHasNoMarginBottom
												>
													<ToggleGroupControlOption
														label="Up"
														value="flip-up"
													/>
													<ToggleGroupControlOption
														label="Down"
														value="flip-down"
													/>
													<ToggleGroupControlOption
														label="Left"
														value="flip-left"
													/>
													<ToggleGroupControlOption
														label="Right"
														value="flip-right"
													/>
												</ToggleGroupControl>
											</PanelBody>
											case 'timing': return <PanelBody>
													<ToggleControl
														label={ __( 'Repeat animation', 'carbon-blocks' ) }
														checked={ animation.repeat }
														onChange={ () => setAttributes( { animation: { ...animation, repeat: !animation.repeat } } ) }
														help={ __( 'Defines if animation should repeat every time it appears on the screen.', 'carbon-blocks' ) }
													/>
												<RangeControl
													help={ __( "Time before the animation triggers (in ms).", 'carbon-blocks' ) }
													initialPosition={ animation.delay }
													label={ __( "Delay speed", 'carbon-blocks' ) }
													max={ 1000 }
													min={ 0 }
													step={ 100 }
													onChange={ delay => setAttributes( { animation: { ...animation, delay } } ) }
												/>
												<RangeControl
													help={ __( "Animation duration time (in ms).", 'carbon-blocks' ) }
													initialPosition={ animation.duration }
													label={ __( "Duration speed", 'carbon-blocks' ) }
													max={ 2000 }
													min={ 0 }
													step={ 100 }
													onChange={ duration => setAttributes( { animation: { ...animation, duration } } ) }
												/>
												<Button __next40pxDefaultSize isDestructive style={{ display:"block", textAlign: "center", width: "100%" }} onClick={ reset }>
													{ __( 'Reset timings to default', 'carbon-blocks' ) }
												</Button>
											</PanelBody>
											case 'easing': return <PanelBody>
												<BaseControl
													__nextHasNoMarginBottom
													help={ __('Easing controls how your animation will behave. Hover any label to see the Cubic Bezier Curve.', 'carbon-blocks' ) }
												/>
												{
													easings.map(easing => {
														return <ToggleGroupControl
															isBlock
															label={ easing.label }
															value={ animation.easing }
															onChange={ easing => setAttributes( { animation: { ...animation, easing } } ) }
															__nextHasNoMarginBottom
															help={ easing?.help }
														>
															{
																easing.options.map(option => {
																	return <ToggleGroupControlOption
																		label={ option.label }
																		value={ option.slug }
																		aria-label={  <SVG viewBox="0 0 125 85" xmlns="http://www.w3.org/2000/svg" width="100px" height="auto"><Path d={ option.path } fill="none" stroke="currentColor" strokeWidth="3px" strokeLinecap='round ' /></SVG> }
																		showTooltip
																	/>
																})
															}
														</ToggleGroupControl>
													})
												}
											</PanelBody>
										}
									}
								}
							</TabPanel>
						}
					</PanelBody>
				</InspectorControls>
			</Fragment>
		} else {
			return <BlockEdit { ...props } />
		}
	};
}, 'animation' );

export default animation;
