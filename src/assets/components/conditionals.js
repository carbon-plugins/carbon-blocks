export const ConditionalRender = ({children, conditions}) => {
	if(!conditions) return;
	return children;
}

export const ConditionalLink = ({ children, post, title = "", props, Tag, otherProps }) => {
	if(props.style) {
		props.style.textDecoration = post?.underline ? "underline" : "none";
	} else {
		props.style = {
			textDecoration: post?.underline ? "underline" : "none"
		}
	}
	if(post?.url) {
		return <a
			href={ post.url }
			target={ post?.opensInNewWindow ? '_blank' : '_self' }
			onClick={ e => e.preventDefault() }
			title={ title }
			data-is-underline={ post.underline }
			rel="noopener"
			{ ...props }
			{ ...otherProps }
		>
			{ children }
		</a>
	}
	return <Tag { ...props } { ...otherProps }>
	{ children }
	</Tag>
}

export const ConditionalLinkRender = ({ children, post, title = "", props, Tag, otherProps }) => {
	if(props.style) {
		props.style.textDecoration = post?.underline ? "underline" : "none";
	} else {
		props.style = {
			textDecoration: post?.underline ? "underline" : "none"
		}
	}
	if(post?.url) {
		return <a
			href={ post.url }
			target={ post?.opensInNewWindow ? '_blank' : '_self' }
			title={ title }
			data-is-underline={ post.underline }
			rel="noopener"
			{ ...props }
			{ ...otherProps }
		>
			{ children }
		</a>
	}
	return <Tag { ...props } { ...otherProps }>
	{ children }
	</Tag>
}

export const ConditionalLinkAsChild = ({ children, post, title = "", otherProps }) => {
	if(post?.url) {
		return <a
			href={ post.url }
			target={ post?.opensInNewWindow ? '_blank' : '_self' }
			title={ title }
			data-is-underline={ post?.underline }
			rel="noopener"
			onClick={ e => e.preventDefault() }
			{ ...otherProps }
		>
			{ children }
		</a>
	}
	return children
}

export const ConditionalLinkRenderAsChild = ({ children, post, title = "", otherProps }) => {
	if(post?.url) {
		return <a
			href={ post.url }
			target={ post?.opensInNewWindow ? '_blank' : '_self' }
			title={ title }
			data-is-underline={ post?.underline }
			rel="noopener"
			{ ...otherProps }
		>
			{ children }
		</a>
	}
	return children
}

export const ConditionalImageZoomable = ({ children, image, allowZoom, uid }) => {
	if(allowZoom) {
		return <a 
			href={image.url} 
			class="lightbox" 
			data-masonry={`masonry-${uid}`} 
			data-description={image.caption ? image.caption : false}
			onClick={ e => e.preventDefault() }
		>
			{ children }
		</a>
	}

	return children;
}

export const ConditionalImageZoomableRender = ({ children, image, allowZoom, uid }) => {
	if(allowZoom) {
		return <a 
			href={image.url} 
			class="lightbox" 
			data-masonry={`masonry-${uid}`} 
			data-description={image.caption ? image.caption : false}
		>
			{ children }
		</a>
	}

	return children;
}