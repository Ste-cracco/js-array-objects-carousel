// console.log('slider')
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]

const arrowNextElement = document.querySelector('.arrow-next')
const arrowPrevElement = document.querySelector('.arrow-prev')
const liElement = document.querySelector('.slide');

const liSlides = []

let indiceCorrente = 0

for(key in slides) {
	liSlides.push(slides[key])
}

for(let i = 0; i < slides.length; i++) {
	
	if(i === 0) {
		liElement.classList.add('active')
	}
}

console.log(liSlides)


arrowNextElement.addEventListener('click', function() {
	
	const slideAttiva = liSlides[indiceCorrente];
	slideAttiva.classList.remove("active");

	if(indiceCorrente === 4) {
		const slideSuccessiva = liSlides[indiceCorrente = 0 - 1 ]
	}

	slideSuccessiva = liSlides[indiceCorrente + 1];
	slideSuccessiva.classList.add("active");
	indiceCorrente++;
})
