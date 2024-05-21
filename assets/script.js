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

//eventListener des flèches
// flecheGauche.addEventListener ("click", () => {
// 	console.log ("Tourner les images vers la gauche")
// })

// flecheDroite.addEventListener ("click", () => {
// 	let compt = 0;
	
// 	if (div.classList.contains("point"+compt)) {
// 		div.classList.remove("dot_selected");
// 	} else {
// 		div.classList.add("dot_selected");
// 	}    
// 	console.log ("Tourner les images vers la droite")
// 	compt++
// })


let nextIndex = 0
flecheGauche.addEventListener('click', () => {
	// Sélectionner tous les éléments avec la classe 'dot'
	const dots = document.querySelectorAll('.dot');
	// Trouver l'index de l'élément actuellement sélectionné
	let currentIndex = -1;
	dots.forEach((dot, index) => {
		if (dot.classList.contains('dot_selected')) {
			currentIndex = index;
		}
	});

	// Enlever la classe 'dot_selected' de l'élément actuel
	if (currentIndex !== -1) {
		dots[currentIndex].classList.remove('dot_selected');
	}

	// Ajouter la classe 'dot_selected' à l'élément précédent
	let prevIndex = (currentIndex - 1 + dots.length) % dots.length;
	console.log(currentIndex,"currentindex")
	console.log(currentIndex - 1 + dots.length, "index")
	console.log(dots.length,"longueur tableau")
	console.log(prevIndex,"le reste")
	dots[prevIndex].classList.add('dot_selected');
});

flecheDroite.addEventListener('click', () => {
	// Sélectionner tous les éléments avec la classe 'dot'
	const dots = document.querySelectorAll('.dot');
	// Trouver l'index de l'élément actuellement sélectionné
	let currentIndex = -1;
	dots.forEach((dot, index) => {
		if (dot.classList.contains('dot_selected')) {
			currentIndex = index;
		}
	});

	// Enlever la classe 'dot_selected' de l'élément actuel
	if (currentIndex !== -1) {
		dots[currentIndex].classList.remove('dot_selected');
	}

	// Ajouter la classe 'dot_selected' à l'élément suivant
	let nextIndex = (currentIndex + 1) % dots.length;
	dots[nextIndex].classList.add('dot_selected');
});

//bullets points 

let divHtml = document.querySelector (".dots")

for (let i = 0; i < slides.length; i++) {
	const div = document.createElement("div");
	divHtml.appendChild(div);
	div.classList.add("dot");
	div.classList.add("point"+i);
	const point0 = document.querySelector(".point0")
	point0.classList.add("dot_selected")
}

