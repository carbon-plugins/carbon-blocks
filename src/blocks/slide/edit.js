// WordPress dependencies
import { __ } from '@wordpress/i18n';
import {
	useBlockProps, useInnerBlocksProps
} from '@wordpress/block-editor';

//Internal dependencies
import './editor.scss';
import Slide from '/src/assets/components/Slide.jsx';

export default function Edit( props ) {
	const { clientId } = props;

	const blockProps = useBlockProps();
	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		template: [
			[ "core/paragraph" ],
		],
	} );

	return <Slide blockProps={ innerBlocksProps } clientId={ clientId } showSettingButton={ false } blockName={ props.name }>
		{ children }
	</Slide>
}
