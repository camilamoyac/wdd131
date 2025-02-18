const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastmodified");
lastModified.textContent = `Last modified: ${document.lastModified}`;

const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Rome Italy",
		location: "Rome, Italy",
		dedicated: "2019, March, 10",
		area: 41010,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
	},
	{
		templeName: "Preston England",
	  	location: "Preston, England",
		dedicated: "1998, June, 7",
		area: 69630,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-45357-main.jpg"
	},
	{
		templeName: "Concepción Chile",
		location: "Concepción, Chile",
		dedicated: "2018, October, 28",
		area: 23095,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg"
	}
    ];

function createTempleCard(filteredTemples) {
	const container = document.querySelector(".card-grid");
	container.innerHTML = "";
	
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let photo = document.createElement("img");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
	
		name.textContent = temple.templeName;
		location.innerHTML = `<span>Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span>Dedication:</span> ${temple.dedicated}`;
		area.innerHTML = `<span>Size:</span> ${temple.area} sq ft`;
	
		photo.setAttribute("src", temple.imageUrl);
		photo.setAttribute("alt", `Beautiful photo of ${temple.templeName} temple.`);
		photo.setAttribute("width", "350");
		photo.setAttribute("height", "200");
		photo.setAttribute("loading", "lazy");
		photo.setAttribute("referrerpolicy", "no-referrer");
	
		card.appendChild(photo);
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
	
		container.appendChild(card);
	});
}

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

function getTempleYear(temple) {
    return parseInt(temple.dedicated.split(",")[0]); 
}

homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples);
});

oldLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => getTempleYear(temple) < 1900));
});

newLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => getTempleYear(temple) >= 2000));
});

largeLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.area <= 10000));
});
