(function() {
	let ken = document.querySelector('.ken'),
		box = document.querySelector('.box'),
		tamanioBox = getComputedStyle(box, null).width, acumBox = '',
		left = getComputedStyle(ken, null).left, estadoLeftRight = '',
		mover = 0, acumLeft = '', leftNumber = 0, templete = '', estado = false, id = '',
		bola = '', idBola = '', estadoInicialBola = false, finalBola = '';		
	
	for (x of tamanioBox) {
		if (!isNaN(x)) acumBox += x;
	}

	const moverLeftRight = (tecla, derIz) => {
		ken.classList.remove('kenAnimacionReposo');
		ken.classList.add('derechaIzquierda');
		id = document.querySelector('.derechaIzquierda');
		let estado1 = false, estado2 = false;
		estadoBola = true;
		estadoInicialBola = true;

		mover = 20;

		if (estado) derIz == 1 ? (estado1 = true) : (estado2 = true)
		
		if (estadoLeftRight == tecla || estado1) {
			templete = '';
			leftNumber += mover;
			derIz == 1 ? (estadoLeftRight = 'derecha') : (estadoLeftRight = 'izquierda')
		}

		else if (estadoLeftRight == tecla || estado2) {
			templete = '';
			leftNumber -= mover;
			derIz == 1 ? (estadoLeftRight = 'derecha') : (estadoLeftRight = 'izquierda')
		}

		else {
			for (x of left) {
				if (!isNaN(x)) acumLeft += x;
			}
			
			leftNumber = Number(acumLeft) - mover;
			acumLeft = '';
			derIz == 1 ? (estadoLeftRight = 'derecha') : (estadoLeftRight = 'izquierda')
			derIz == 1 ? (estado1 = true) : (estado2 = true)
			estado = true; 
		}
		
		templete = `
			--derechaIzquierda: ${leftNumber}px;
		`;

		id.setAttribute('style', templete);
	}
	const delagacionEventosDown = e => {
		switch (e.key) {
			case 'ArrowUp':
				ken.classList.remove('kenAnimacionReposo');
				ken.classList.add('saltar');
			break;

			case 'ArrowRight':
				moverLeftRight('izquierda', 1);
			break;

			case 'ArrowLeft':
				moverLeftRight('derecha', 0);
			break;

			case 'ArrowDown': 
				ken.classList.remove('kenAnimacionReposo');
				ken.classList.add('abajo');
			break;

			case 's':
				let cont = 0;
				ken.classList.remove('kenAnimacionReposo');
				ken.classList.add('kamekameah');

				ken.addEventListener('animationend', () => {
					cont++;
					if (cont == 1) {
						bola = document.createElement('div');
						ken.after(bola);
						bola.classList.add('bola');
						idBola = document.querySelector('.bola');
						estadoInicialBola
						? bola.setAttribute('style', `--moverBola: ${leftNumber + 100}px`)
						: null
						setTimeout(() => {
							idBola.classList.add('bolaMovimiento')
						}, 1);
					}
				});
			break;
		}
		
	}

	const delagacionEventosUp = e => {
		switch (e.key) {
			case 'ArrowUp':
				// setTimeout(() => {
				ken.addEventListener('animationend', () => {
					ken.classList.remove('saltar');
					ken.classList.add('kenAnimacionReposo')
				})
				// }, 800);

			case 'ArrowRight':
				ken.classList.remove('derechaIzquierda');
				ken.classList.add('kenAnimacionReposo')
			break;

			case 'ArrowLeft':
				ken.classList.remove('derechaIzquierda');
				ken.classList.add('kenAnimacionReposo')
			break;

			case 'ArrowDown': 
				ken.classList.remove('abajo');
				ken.classList.add('kenAnimacionReposo');
			break;

			case 's':
				let cont = 0;
				acumBola = '';

				setTimeout(() => ken.classList.remove('kamekameah'), 800);
				ken.classList.add('kenAnimacionReposo');
				ken.addEventListener('animationend', () => {
					cont++;
					if (cont == 1) {
						bola.addEventListener('transitionend', () => {
							box.removeChild(bola);
							finalBola = document.createElement('div');
							ken.after(finalBola);
							finalBola.classList.add('estallido');
							finalBola.setAttribute('style', `--posFinal: ${acumBox - 85}px`);
							finalBola.
							addEventListener('animationend', () => box.removeChild(finalBola));
						});
					}
				})
			break;
		}
	}

	addEventListener('keydown', delagacionEventosDown);
	addEventListener('keyup', delagacionEventosUp);
}());