document.addEventListener('DOMContentLoaded', () => {
    // Carrusel
    const carruselImages = document.querySelectorAll('.carrusel img');
    let currentImage = 0;

    function showNextImage() {
        carruselImages[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % carruselImages.length;
        carruselImages[currentImage].classList.add('active');
    }

    setInterval(showNextImage, 5000);

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
const frases = [
    "En el espacio, nadie puede oir tus gritos. **'Alien: El octavo pasajero'.**",
    "Aún no habéis comprendido a qué os enfrentáis. Un perfecto organismo. Su perfección estructural sólo está igualada por su hostilidad. **'Alien: El octavo pasajero'.**",
    "Yo admiro su pureza, es un superviviente al que no afecta la conciencia, los remordimientos ni las fantasías de moralidad. **'Alien: El octavo pasajero'.**",
    "Es una interesante combinación de elementos que lo convierten en un feroz hijo de puta. -Ya... y tú le has dejado entrar. **'Alien: El octavo pasajero'.**",
    "No puedo mentiros sobre vuestras posibilidades, pero... os doy el pésame. **'Alien: El octavo pasajero'.**",
    "Esta es Ripley, última superviviente del Nostromo, fin de la transmisión. **'Alien: El octavo pasajero'.**",
    "Nunca debimos haber aterrizado aquí. Nunca debimos haber aterrizado en este planeta. **'Alien: El octavo pasajero'.**",
    "Cada comida es un banquete, cada sueldo una fortuna, cada formación un desfile. **'Alien: El regreso'**.",
    "Lo hiciste bien para ser humana. **'Alien: El regreso'**.",
    "En un mundo loco un hombre sano puede parecer loco. **'Alien 3'**.",
    "Nadie es perfecto, somos humanos. No conozco a un humano perfecto. **'Alien 3'**.",
    "Si queremos sobrevivir, deberemos permanecer juntos. ¿De acuerdo?. **'Alien: Resurrección'**.",
    "- Ripley. Pensé que estabas muerta. - Sí, la gente suele decírmelo. **'Alien: Resurrección'**.",
    "Es un mal momento para conocer gente agradable. **'Alien: Resurrección'**.",
    "- No me obligues a hacer esto. - No me hagas obligarte. **'Alien: Resurrección'**.",
    "Las cosas grandes tienen comienzos pequeños. **Prometheus**.",
    "¿Hasta dónde llegarías para obtener respuestas? ¿Qué estarías dispuesta a hacer?. **Prometheus**.",
    "A veces para crear se debe destruir. **Prometheus**."
];

const fraseBtn = document.getElementById('fraseBtn');
const fraseDisplay = document.getElementById('fraseDisplay');

fraseBtn.addEventListener('click', mostrarFraseAleatoria);

function mostrarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    fraseDisplay.innerHTML = frases[indiceAleatorio];
}