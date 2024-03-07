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
const bannerSlides = document.querySelector(".banner-slides")
const dots = document.querySelector('.dots')

for (let i =0; i < slides.length; i++) {
	const dot = document.createElement('div')
	dot.className='dot'
	dots.appendChild(dot)
}
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
	
	if (slideN > slides.length -1) {
		currentSlideN = 0  /* 슬라이드넘버가 3을 넘어가면 슬라이드 넘버를 0으로 돌려주는 기능  */
	} else if (slideN < 0){
		currentSlideN = slides.length /* 슬라이드넘버가 0보다 작으면 슬라이드 넘버를 3으로 돌려주는 기능  */
	} else {
		currentSlideN = slideN  /* 현재 슬라이드는 슬라이드 넘버와 동일 */
	}
	
	tagLine.innerHTML = slides[currentSlideN].tagLine /* 태그를 해당 슬라이드 넘버에 맞게 수정 해줌 */

	const dots = document.querySelectorAll(".dot")/* HTML dot을 모두 선택  */ 
	for (let i = 0; i < dots.length; i++) { 
		dots[i].classList.remove('dot_selected'); /* 모든 닷에서 dot_selected를 지움  */
	  }

	const slideImage = document.createElement("img")
	slideImage.src = slides[currentSlideN].image /* 현재 슬라이드의 이미지 링크와 이미지 주석을 업데이트 해줌  */
	slideImage.alt = `banner image ${currentSlideN +1}`
	slideImage.classList.add('fade')
	bannerSlides.innerHTML = ''
	bannerSlides.appendChild(slideImage) /* ajoute <img> sous <div classe="banner-slides" */

	dots[currentSlideN].classList.add('dot_selected')/* 닷의 현재슬라이드에 있을때 클라스 dot_selected가 추가됨   */
}
/* 왼쪽버튼 클릭 기능  */
const arrowLeft = document.querySelector('.arrow_left')
arrowLeft.addEventListener('click', prevSlide)
/* 오른쪽 버튼 클릭 기능  */
const arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener('click', nextSlide)

showSlides(0)