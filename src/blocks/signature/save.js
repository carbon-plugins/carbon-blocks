// External dependencies

// WordPress dependencies
import {
	useBlockProps, RichText, useInnerBlocksProps
} from '@wordpress/block-editor';

//Internal dependencies
import { ConditionalRender } from '../../assets/components/conditionals';
import { getAlignment } from '../../assets/components/alignment';

export default function save( props ) {
	const { attributes } = props;
	const {
		name, position, showName, showPosition, alignment, showAvatar,
		direction
	} = attributes;

	const blockProps = useBlockProps.save({
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
	const { children, ...innerBlocksProps} = useInnerBlocksProps.save( blockProps )

	return <section { ...innerBlocksProps }>
	<ConditionalRender conditions={ showAvatar }>
		{ children }
	</ConditionalRender>
		<section>
			<ConditionalRender conditions={ showName }>
				<RichText.Content
					tagName="cite"
					value={ name || "name" }
					style={{ textAlign: alignment }}
				/>
			</ConditionalRender>
			<ConditionalRender conditions={ showPosition }>
				<RichText.Content
					tagName="cite"
					value={ position || "position" }
					style={{ textAlign: alignment }}
				/>
			</ConditionalRender>
		</section>
	</section>
}
