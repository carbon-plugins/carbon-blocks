const textAlign = BlockListBlock => {
  return props => {
		const { name, clientId, attributes } = props;
		const { textAlign } = attributes;
		const isCarbon = name.startsWith('carbon-blocks');

    if (!isCarbon) {
      return <BlockListBlock {...props} />;
    }

		const wrapperProps = { ...props.wrapperProps }

		if(textAlign) wrapperProps["data-textAlign"] = textAlign;

    return (
      <BlockListBlock {...props} wrapperProps={ wrapperProps } />
    );
  };
}

wp.hooks.addFilter(
  'editor.BlockListBlock',
	'carbon-plugins/text-align',
  textAlign
);

const textAnimation = BlockListBlock => {
  return props => {
		const { name, clientId, attributes } = props;
		const { textAnimation } = attributes;
		const isValid = name.startsWith('carbon-blocks/') || name.startsWith('core/');

    if (!isValid) {
      return <BlockListBlock {...props} />;
    }

		const wrapperProps = { ...props.wrapperProps }

		if(textAnimation) {
			wrapperProps["text-anim"] = textAnimation.animation;
			wrapperProps["text-anim-speed"] = textAnimation.speed;
			wrapperProps["text-anim-delay"] = textAnimation.delay;
		}

    return (
      <BlockListBlock {...props} wrapperProps={ wrapperProps } />
    );
  };
}

wp.hooks.addFilter(
  'editor.BlockListBlock',
	'carbon-plugins/text-animation',
  textAnimation
);
