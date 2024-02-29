//slide data : 
//Un tableau "slides": contenant une source d'image et un slogan
const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// HTML Elements :
const bannerSlides = document.querySelector(".banner-slides");
//bannerSlides :  le conteneur du diaporama(slideshow) 
const tagLine = document.getElementById("tagline");
//tagLine : l'élément où le slogan sera affiché
const dotsContainer = document.querySelector(".dots")
//dotsContainer : le conteneur des points(dots) de navigation

let currentIndex = 0;
// Garde la trace de l'index de la diapositive actuelle
// keep track of the current slide index

function showSlide(index) {
// Met à jour le diaporama en fonction de l'index fourni.
	bannerSlides.style.transform = 'translateX(${-index * 100}%)';
	// Modifie la propriété 'transform' de 'bannerSlides' pour 
	// faire glisser vers l'image correspondante
	tagLine.innerHTML = slides[index].tagLine;
	// Met à jour le slogan avec le contenu de la diapositive actuelle (current slide)

	// Met en surbrilliance le point correspondant pour indiquer la diapositive actuelle
	const dots = dotsContainer.querySelectorAll(".dot");
	//permet de recupérer tous les éléments HTML qui ont la classe "dot"
	dots.forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === index);
	});
	// 'forEach' : itère (repeat) sur chaque élément de la collection 'dots'
	// et pour chaque élément, elle exécute la fonction fléchée. 
	// 'dot' est l'élément actuel, 'i' est son index dans la collection
	//'toggle' : ajouter ou supprimer la classe "dot_selected" à chaque élément 'dot'
	// 'i === index' : vérifie si l'index de l'élément actuel dans la boucle 'forEach'correspond à l'index 
	// si oui, la classe 'dot_selected" est ajoutée, sinon elle est supprimée
}   

// passe à la diapositive suivante
function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
}
//incrément 'currentIndex' de 1
//'% slides.length' assure que si 'currentIndex +1' dépasse la longueur du tableau 'slides'
// il fait revenir au début. 
// crée un effet de bouclage, le diaporama continue de manière cyclique. 

// Après avoir mis à jour 'currentIndex' appelle la fonction 'showslide' en lui passant le nouvel index en tant qu'argument.
// 'currentIndex'를 업데이트 한 후 'showslide' 호출하며 업데이트된 인덱스를 인수로 전달함

//passe à la dispositive précédente
function prevSlide() {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	showSlide(currentIndex);
}
// décrémente 'currentIndex' de 1
// '(currentIndex - 1 + slides.length) % slides.length' assure que  'currentIndex - 1' devienrt négatif, 
// cela reste dans les limites du tableau 'slides.
// créer un effet de bouclage pour passer à la dernière diapositive lorsque sur la première slide

//Début de slide
document.addEventListener("DOMContentLoaded", function () {
// Assure que le script est exécuté une fois que le document HTML est entièrement chargé
// C'est utile pour s'assurer que le script n'essaie pas de manipuler des élément HTML qui n'existent pas encore.

	slides.forEach((slide,index) => {
	// Cela répète sur chaque élément du tableau 'slides'
		const img = document.createElement("img");
		//Pour chaque élément, il crée une nouvelle balise <img> à l'aide de 'document.createElement("img")'
		img.classList.add("banner-img", "slide");
		//Ajoute les calsses "banner-img" et "slide" à cette balise
		img.src = slide.image;
		img.alt = 'banner image${index + 1}';
		//Configure les attributs 'src' et 'alt' de l'image en fonction des propriétés de l'élement 'slide' dans le tableau
		bannerSlides.appendChild(img);
		// appendChile : un methode pour ajouter un neoud à la fin de la liste des enfants d'un neoud parant
		// Dans mon code : signfie que j'ai ajouté l'élément 'img' 
		//à la fin de la liste des enfants de l'élément avec la calsse 'bannerSlides'
	});
	
	showSlide(currentIndex); 
 	// Une fois que toutes les images ont été créées et ajoutées, 
	// cette ligne appelle 'showSlide' pour afficher la diapositive initiale

	const arrowLeft = document.querySelector(".arrow_left");
	arrowLeft.addEventListener('click', prevSlide);
	
	const arrowRight = document.querySelector(".arrow_right");
	arrowRight.addEventListener('click',nextSlide);

	// ajoutent des écouteur d'évenements pour les clics sur les flèches gauche et droit. 
	// Lorsqu'une flèche est cliqué, la fonction correspondante est appelée pour navigateur dans le diaparama

});
