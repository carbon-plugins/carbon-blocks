import Slide from './Slide.jsx';

export default function SlideWrapper({ children, isSlide, ...props }) {

	return isSlide
		? <Slide { ...props }>
			{ children }
		</Slide>
		: children;
}
