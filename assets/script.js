//slide data : 
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
let currentSlideN = 0
const tagLine = document.getElementById("tagline")
const slideImage = document.querySelector(".banner-img")
const dots = document.querySelector('.dots')

// un boucle qui permet de créer les balises <div class="dot"> en fonction de nombre slides
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div')
	dot.className='dot'
	dots.appendChild(dot)
}
let cancelTimeOut = null
// les éléments tout ce qu'on voit dans showslides
function showSlides(slideN) {

    if (slideN > slides.length -1) {
		currentSlideN = 0 
	} else if (slideN < 0){
		currentSlideN = slides.length -1
	} else {
		currentSlideN = slideN
	}

	// tagLine qui change en fonction de current slide
	tagLine.innerHTML = slides[currentSlideN].tagLine 

	//Pour ajouter et enlever la calsse "dot_selected" dans les balises <div class="dot">
	const dotAll = document.querySelectorAll(".dot")
	for (let i = 0; i < dotAll.length; i++) { 
		dotAll[i].classList.remove('dot_selected');
	  }
	dotAll[currentSlideN].classList.add('dot_selected')

	// Les images informations 
	slideImage.src = slides[currentSlideN].image 
	slideImage.alt = `banner image ${currentSlideN +1}`
	slideImage.classList.add('fade')

	if (cancelTimeOut) {
		clearTimeout (cancelTimeOut)
	}
	cancelTimeOut = setTimeout(function () {
		slideImage.classList.remove('fade') 
	}, 1000);
}

// les fonctions qui font passer slide après et slide avant. 
function nextSlide() {
	showSlides(currentSlideN + 1 )
}

function prevSlide() {
	showSlides(currentSlideN - 1 )
}

// récupérer les éléments du DOM pour les flèches
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector(".arrow_right")

// ajouter Event 'click' pour les fléches 
arrowLeft.addEventListener('click', prevSlide) 
arrowRight.addEventListener('click', nextSlide)

showSlides(currentSlideN)