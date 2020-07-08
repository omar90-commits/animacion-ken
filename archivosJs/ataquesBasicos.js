(function() {
	let ken = document.querySelector('.ken');

	const delagacionEventosDown = e => {
		switch (e.key) {
			case 'q':
				ken.classList.remove('kenAnimacionReposo');
				ken.classList.add('puño');
			break;

			case 'w':
				ken.classList.remove('kenAnimacionReposo');
				ken.classList.add('patada');
			break;

			case 'e':
				ken.classList.remove('kenAnimacionReposo');
				ken.classList.add('patadaFuerte');
			break;
		}
	}

	const delagacionEventosUp = e => {
		switch (e.key) {
			case 'q':
				ken.addEventListener('animationend', () => {
					ken.classList.remove('puño');
					ken.classList.add('kenAnimacionReposo');
				});
			break;

			case 'w':
				ken.addEventListener('animationend', () => {
					ken.classList.remove('patada');
					ken.classList.add('kenAnimacionReposo');
				});
			break;

			case 'e':
				ken.addEventListener('animationend', () => {
					ken.classList.remove('patadaFuerte');
					ken.classList.add('kenAnimacionReposo');
				});
			break;
		}
	}

	addEventListener('keydown', delagacionEventosDown);
	addEventListener('keyup', delagacionEventosUp);
}());