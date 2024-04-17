// WordPress dependencies
import { useBlockProps } from '@wordpress/block-editor';

//Internal dependencies
import { ConditionalRender } from '../../assets/components/conditionals';

export default function save( props ) {
	const { attributes } = props;
  const { 
		isFlippedHorizontally, isFlippedVertically, shapeType, 
		backgroundColor, dividerHeight, dividerColor 
	} = attributes;
	
  const blockProps = useBlockProps.save({  style: {
		transform: `scale(${isFlippedHorizontally ? -1 : 1},
		${isFlippedVertically ? -1 : 1})`,
    "--divider-height": `${ dividerHeight }px`,
    backgroundColor: `${ backgroundColor }`
	} });

	return (
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
	);
}
