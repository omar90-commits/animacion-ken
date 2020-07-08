(function() {
	let ken = document.querySelector('.ken');

	const controlDown = e => {
		let letra = e.key.toLowerCase();

		switch (letra) {
			case 'd':
				ken.classList.remove('kenAnimacionReposo');
				ken.classList.add('punioFuego');
			break;

			case 'a':
				ken.classList.remove('kenAnimacionReposo');
				ken.classList.add('patadaVoladora');
			break;
		}
	}

	const controlUp = e => {
		switch (e.key) {
			case 'd':
				ken.addEventListener('animationend', () => {
					ken.classList.remove('punioFuego');
					ken.classList.add('kenAnimacionReposo');
				})
			break;

			case 'a':
				setTimeout(() => {
					ken.classList.remove('patadaVoladora');
					ken.classList.add('kenAnimacionReposo');
				}, 1100);
			break;
		}
	}

	addEventListener('keydown', controlDown);
	addEventListener('keyup', controlUp);

}());