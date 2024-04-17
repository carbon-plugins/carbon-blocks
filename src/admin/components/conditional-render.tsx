export const ConditionalRender = ({children, conditions}) => {
	if(!conditions) return;
	return children;
}
