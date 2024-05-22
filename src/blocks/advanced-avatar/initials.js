export default function getInitials (initials, size) {

	const { value, color, background } = initials;

	let nameSplit = String(value).toUpperCase().split(' '), canvas, context, dataURI;


	if (nameSplit.length == 1) {
		initials = nameSplit[0] ? nameSplit[0].charAt(0):'?';
	} else {
		initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
	}

	if (window.devicePixelRatio) {
		size = (size * window.devicePixelRatio);
	}

	canvas        = document.createElement('canvas');
	canvas.width  = size;
	canvas.height = size;
	context       = canvas.getContext("2d");

	context.fillStyle = background;
	context.fillRect (0, 0, canvas.width, canvas.height);
	context.font = Math.round(canvas.width/2.5)+"px Arial";
	context.textAlign = "center";
	context.fillStyle = color;
	context.fillText(initials, size / 2, size / 1.5);

	dataURI = canvas.toDataURL();
	canvas  = null;

	return dataURI;
}
