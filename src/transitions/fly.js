import { cubicOut } from 'svelte/easing';

export default function fly(node, {
	delay = 0,
	duration = 2000,
	easing = cubicOut,
	x = 0,
	y = 0
}) {
	const style = getComputedStyle(node);
	const opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;

	return {
		delay,
		duration,
		easing,
		css: t => `
			transform: ${transform} translate(${(1 - t) * x}px, ${t * y}px);
			opacity: ${(1-t) * opacity}`
	};
}