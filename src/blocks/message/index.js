// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { registerBlockVariation } from '@wordpress/blocks';
import { createBlock } from '@wordpress/blocks';
import { Icon } from '@wordpress/icons';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgMessage from '/src/assets/block-icons/Message';

registerBlockType( 'carbon-blocks/message', {
	icon: SvgMessage,
	title: __( "Message", 'carbon-blocks' ),
	description: __( "Create multiple types of messages to highlight your informations.", 'carbon-blocks' ),
	example: {
		attributes: {
			content: __('Becareful ! Risk of avalanche in the coming days.', 'carbon-blocks'),
			icon: {
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'/></svg>"
      },
			title: __( "Alert message", 'carbon-blocks' ),
			slug:"message-alert",
			backgroundColor:"vivid-red"
		}
	},
	transforms: {
    to: [
			{
				type: 'block',
				blocks: [ 'carbon-blocks/message' ],
				transform: ( attributes, innerBlocks ) => {
					const newAttributes = {
						...attributes,
						backgroundColor: "vivid-red",
						icon: {
							svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg>'
						},
					}
					return createBlock( 'carbon-blocks/message',
						newAttributes,
						innerBlocks
					);
				},
			},
		]
	},
	edit,
	save,
} );

registerBlockVariation( 'carbon-blocks/message', [{
	name: 'message-info',
	title: __( 'Info message', 'carbon-blocks' ),
	description: __( 'Shows an informative message.', 'carbon-blocks' ),
	scope: [ 'block' ],
	icon: <Icon icon={ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg> } />,
	isDefault : true,
	attributes: {
		icon: {
			svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>'
		},
		title:  __( "Info message", 'carbon-blocks' ),
		slug: 'message-info',
		placeholder:  __( "Write your info message", 'carbon-blocks' ),
		backgroundColor: "vivid-cyan-blue",
		color: "white"
	},
},{
	name: 'message-alert',
	title: __( 'Alert message', 'carbon-blocks' ),
	description: __( 'Shows an important message.', 'carbon-blocks' ),
	scope: [ 'block' ],
	icon: <Icon icon={ <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg> } />,
	attributes: {
		icon: {
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg>'
		},
		title:  __( "Alert message", 'carbon-blocks' ),
		slug: 'message-alert',
		placeholder:  __( "Write your alert message", 'carbon-blocks' ),
		backgroundColor: "vivid-red"
	}
},{
	name: 'message-custom',
	title: __( 'Custom message', 'carbon-blocks' ),
	description: __( 'Shows a custom message.', 'carbon-blocks' ),
	scope: [ 'block' ],
	icon: <Icon icon={ <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8l.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path></svg> } />,
	attributes: {
		icon: "",
		title:  __( "Custom message", 'carbon-blocks' ),
		slug: 'message-custom',
		placeholder:  __( "Write your message", 'carbon-blocks' ),
		backgroundColor: "black"
	}
}] );
