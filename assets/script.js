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
/* 슬라이드 넘버 0에서 시작*/
let currentSlideN = 0
/* 테그 수정하려고 노드한 것 */
const tagLine = document.getElementById("tagline")

/* 이미지 발리지 추가한 것 */
const slideImage = document.createElement("img")
let bannerSlides = document.querySelector(".banner-slides")
bannerSlides.appendChild(slideImage)/* j'ajoute <img> sous banner-slides */
slideImage.src = slides[currentSlideN].image
slideImage.alt = `banner image ${currentSlideN +1}`

/* 다음 이미지 */
function nextSlide() {
	showSlides(currentSlideN + 1 )
}
/* 이전 이미지로 돌려주는 코드  */
function prevSlide() {
	showSlides(currentSlideN - 1 )
}
/* 보여지는 슬라이드 이미지 */
function showSlides(slideN) {
	if (slideN > slides.length) {
		currentSlideN = 0  /* 슬라이드넘버가 3을 넘어가면 슬라이드 넘버를 0으로 돌려주는 기능  */
	} else if (slideN < 0){
		currentSlideN = slides.length /* 슬라이드넘버가 0보다 작으면 슬라이드 넘버를 3으로 돌려주는 기능  */
	} else {
		currentSlideN = slideN  /* 현재 슬라이드는 슬라이드 넘버와 동일 */
	}
	
	tagLine.innerHTML = slides[currentSlideN].tagLine /* 태그를 해당 슬라이드 넘버에 맞게 수정 해줌 */
	bannerSlides.style.transform = 'translateX(${-currentSlideN * 100}%' 
	/* 슬라이드가 바뀔때마다 이미지를 수평으로 이동시켜줌 
	 ex) currentSlideN =2 ${-currentSlideN * 100}% = -200% */

	const dots = document.querySelectorAll(".dot")/* HTML dot을 모두 선택  */
	for (let i = 0; i < slides.length; i++) { 
		dots[i].classList.remove('dot_selected'); /* 닷의 값을 지날때 클라스 dot_selected가 지워지는 코드  */
	  }

	slideImage.src = slides[currentSlideN].image /* 현재 슬라이드의 이미지 링크와 이미지 주석을 업데이트 해줌  */
	slideImage.alt = `banner image ${currentSlideN +1}`

	/* add animatioin fade pour chaque passage de slide*/
	const addFade = document.querySelectorAll('.banner-slides img')
	addFade.forEach(img => {
		img.classList.add('fade')
	})
	
	dots[currentSlideN].classList.add('dot_selected')/* 닷의 현재슬라이드에 있을때 클라스 dot_selected가 추가됨   */
}
/* 왼쪽버튼 클릭 기능  */
const arrowLeft = document.querySelector('.arrow_left')
	arrowLeft.addEventListener('click', prevSlide)
/* 오른쪽 버튼 클릭 기능  */
const arrowRight = document.querySelector(".arrow_right")
	arrowRight.addEventListener('click', nextSlide)

