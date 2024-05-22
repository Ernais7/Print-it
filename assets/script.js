const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//variable des flèches
let flecheGauche = document.querySelector (".arrow_left")
let flecheDroite = document.querySelector (".arrow_right")

//curseur des flèches en pointeur 
document.querySelector(".arrow_left").style.cursor = "pointer";
document.querySelector(".arrow_right").style.cursor = "pointer";

const mainImage = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
let divHtml = document.querySelector (".dots")

//bullets points 

for (let i = 0; i < slides.length; i++) {
	const div = document.createElement("div");
	divHtml.appendChild(div);
	div.classList.add("dot");
	div.classList.add("point"+i);
	const point0 = document.querySelector(".point0")
	point0.classList.add("dot_selected")
}

//Flèche de gauche 
flecheGauche.addEventListener('click', () => {
	const dots = document.querySelectorAll('.dot');
	// Trouver l'index de l'élément actuellement sélectionné
	let currentIndex = -1;
	for (let i = 0; i < dots.length; i++) {
	const dot = dots[i];
	if (dot.classList.contains('dot_selected')) {
		currentIndex = i;
		break;
	}
	}
	
	if (currentIndex !== -1) {
		dots[currentIndex].classList.remove('dot_selected');
	}
	
	let prevIndex = (currentIndex - 1 + dots.length) % dots.length;
	dots[prevIndex].classList.add('dot_selected');
	//Image et Tagline tableau 
	mainImage.src = slides[prevIndex].image;
    tagLine.innerHTML = slides[prevIndex].tagLine;
});

//Flèche de droite
flecheDroite.addEventListener('click', () => {
	const dots = document.querySelectorAll('.dot');
	const imageHtml = document.getElementById("banner-img");
	// Trouver l'index de l'élément actuellement sélectionné
	let currentIndex = -1;
	for (let i = 0; i < dots.length; i++) {
		const dot = dots[i];
		const imageSlides = slides[i];
		imageSlides.src = slides[i].src;
		console.log(slides[i])
		if (dot.classList.contains('dot_selected')) {
			currentIndex = i;
			break;
		}
		}

	if (currentIndex !== -1) {
		dots[currentIndex].classList.remove('dot_selected');
	}

	let nextIndex = (currentIndex + 1) % dots.length;
	dots[nextIndex].classList.add('dot_selected');
	//Image et Tagline tableau 
	mainImage.src = slides[nextIndex].image;
    tagLine.innerHTML = slides[nextIndex].tagLine;
});




