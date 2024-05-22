export default function Slide({ children, blockProps }) {

	blockProps.className = 'swiper-slide ' + blockProps.className;

	return <li { ...blockProps }>
		{ children }
	</li>
}
