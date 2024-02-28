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

//les variables
const bannerSlides = document.querySelector(".banner-slides");
const tagLine = document.getElementById("tagline");
const dotsContainer = document.querySelector(".dots")

let currentIndex = 0;

function showSlide(index) {
	bannerSlides.style.transform = 'translateX(${-index * 100}%)';
	tagLine.innerHTML = slides[index].tagLine;
	
	// active les dots
	const dots = dotsContainer.querySelectorAll(".dot");
	dots.forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === index);
	});
}

function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
}

function prevSlide() {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	showSlide(currentIndex);
}

//début de slide
document.addEventListener("DOMContentLoaded", function () {
	slides.forEach((slide,index) => {
		const img = document.createElement("img");
		img.classList.add("banner-img", "slide");
		img.src = slide.image;
		img.alt = 'banner image${index + 1}';
		bannerSlides.appendChild(img);
	});
	
	//초기 슬라이드 표시
	showSlide(currentIndex); 

	const arrowLeft = document.querySelector(".arrow_left");
	arrowLeft.addEventListener('click', prevSlide);

	const arrowRight = document.querySelector(".arrow_right");
	arrowRight.addEventListener('click',nextSlide);
});
