import { ken } from './moverKen';

const contenedor = document.querySelector('.contenedor');

window.addEventListener('keydown', e => {
	// console.log(e.key);	

	switch (e.key) {
		case 's':
			let estadoManos = false;

			ken.classList.add('lanzar-bola');

			//Posicion donde va a salir la bola
			const numLeft = window.getComputedStyle(ken).left.split('').filter(num => !isNaN(Number(num)));
			// console.log(Number(numLeft.join('')));

			const bola = document.createElement('div');
			const estallido = document.createElement('div');

			bola.classList.add('bola');
			estallido.classList.add('estallido');
			
			//Le agrega la posicion de la bola
			bola.style.left = `${Number(numLeft.join('')) + 70}px`;
			
			//Evento que se encarga de saber cuando termina la animacion de la posocion de las manos
			ken.addEventListener('animationend', () => {
				if (estadoManos) return; //Evita que se ejecute mas de 1 vez

				contenedor.appendChild(bola);
				setTimeout(() => bola.style.left = 'calc(100% - 59px)', 1); //Le agrega efecto de desplazamiento

				estadoManos = true;
			} );
			
			//Cuando la bola choca contra la pared se elimina el elemento del dom y se agrega el estallido
			bola.addEventListener('transitionend', (e) => {
				bola.remove();
				contenedor.appendChild(estallido);
			});
			
			estallido.addEventListener('animationend', () => setTimeout(() => estallido.remove(), 200) );
		break;

		case 'q':
			ken.classList.add('puño');
		break;

		case 'w':
			ken.classList.add('patada');
		break;

		case 'e':
			ken.classList.add('patada-giratoria');
		break;

		case 'a':
			ken.classList.add('patada-voladora');
		break;

		case 'd':
			ken.classList.add('puño-fuego');
		break;
	}
});

window.addEventListener('keyup', e => {
	switch (e.key) {
		case 's':
			ken.addEventListener('animationend', () => ken.classList.remove('lanzar-bola') );
		break;

		case 'q':
			ken.addEventListener('animationend', () => ken.classList.remove('puño') );
		break;

		case 'w':
			ken.addEventListener('animationend', () => ken.classList.remove('patada') );
		break;

		case 'e':
			ken.addEventListener('animationend', () => ken.classList.remove('patada-giratoria') );
		break;

		case 'a':
			ken.addEventListener('animationend', () => ken.classList.remove('patada-voladora') );
		break;

		case 'd':
			ken.addEventListener('animationend', () => ken.classList.remove('puño-fuego') );
		break;
	}
});