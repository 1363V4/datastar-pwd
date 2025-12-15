import { waapi } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

window.expand = function (el) {
	waapi.animate(el, {
		rotateZ: '100deg',
		duration: 1000,
	});
}
