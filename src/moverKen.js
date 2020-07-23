export const ken = document.querySelector('.ken');
let mover = (window.innerWidth / 2) - 49;

window.addEventListener('keydown', e => {
	switch (e.key) {
		case 'ArrowLeft':
			mover -= 10;
			mover > -20 ? ken.style.left = `${mover}px` : mover = -5;
		break;

		case 'ArrowRight':
			mover += 10;
			mover < (window.innerWidth - 88) ? ken.style.left = `${mover}px` : mover = (window.innerWidth - 90);
		break;

		case 'ArrowDown':
			ken.classList.remove('moverIzquierdDerecha');
			ken.classList.add('agacharse');
		break;

		case 'ArrowUp':
			ken.classList.remove('moverIzquierdDerecha');
			ken.classList.remove('agacharse');
			ken.classList.add('saltar');
		break;
	}
});

window.addEventListener('keyup', e => {
	switch (e.key) {
		case 'ArrowDown':
			ken.classList.remove('agacharse');
			ken.classList.add('moverIzquierdDerecha');
		break;

		case 'ArrowUp':
			ken.addEventListener('animationend', () => {
				ken.classList.remove('saltar');
				ken.classList.add('moverIzquierdDerecha');
			} );
		break;
	}
});