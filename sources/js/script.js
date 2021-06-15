// Cronometro
import Countdown from './dist/countdown.js';

const cronometro = document.querySelector('[data-time="chronometer"]');

const inicioProva = '26 May 2021 13:00:00 GMT-0300';
const finalProva = '26 May 2021 18:30:00 GMT-0300';

const countdown = new Countdown(inicioProva, finalProva);

let dayProva = new Date(inicioProva).getTime();
let endProva = new Date(finalProva).getTime();

if (cronometro) {
	const contador = setInterval(() => {
		let today = new Date().getTime();
		let hours = countdown.total.hours;
		let minutes = countdown.total.minutes;
		let seconds = countdown.total.seconds;

		if (today >= dayProva && today <= endProva) {
			cronometro.classList.remove('fs-3', 'mt-2');
			cronometro.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
		} else if (today >= dayProva && today > endProva) {
			cronometro.innerHTML = 'Tempo encerrado.';
			clearInterval(contador);
		} else if (today < dayProva) {
			cronometro.classList.add('fs-3', 'mt-2');
			cronometro.innerHTML = `A prova está marcada para<br>${new Date(inicioProva).toLocaleDateString()} às ${new Date(
				inicioProva
			).toLocaleTimeString()}`;
		}
	}, 1000);
}
