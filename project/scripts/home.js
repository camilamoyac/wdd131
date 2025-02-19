// footer
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastmodified");
lastModified.textContent = `Last modified: ${document.lastModified}`;

// hamburger button
const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// cards
const topFilms = [
    {
        name: "Dune: Part 2",
        creator: "Denis Villeneuve",
        rating: 5,
        imgSrc: "images/dune_2.jpg"
    },
    {
        name: "The Wild Robot",
        creator: "Chris Sanders",
        rating: 4,
        imgSrc: "images/the_wild_robot.jpg"
    },
    {
        name: "How to Make Millions Before Grandma Dies",
        creator: "Pat Boonnitipat",
        rating: 4,
        imgSrc: "images/htmmbgd.jpg"
    },
]

const topBooks = [
    {
        name: "Just for the Summer",
        creator: "Abby Jimenez",
        rating: 4,
        imgSrc: "images/jfts.jpg"
    },
    {
        name: "Funny Story",
        creator: "Emily Henry",
        rating: 4,
        imgSrc: "images/funny_story.jpg"
    },
    {
        name: "James",
        creator: "Percival Everett",
        rating: 5,
        imgSrc: "images/james.jpg"
    },
]

function createMediaCard(topMediaArray, containerSelector){
    const container = document.querySelector(containerSelector);
	container.innerHTML = "";

    topMediaArray.forEach(item => {
        let card = document.createElement("section");
        let ratingImg = document.createElement("img");
		let poster = document.createElement("img");
		let name = document.createElement("h3");
		let creator = document.createElement("p");

        name.textContent = item.name;
        creator.textContent = item.creator;
        
		ratingImg.setAttribute("src", `images/${item.rating}-star.png`);
		ratingImg.setAttribute("alt", `${item.rating} yellow stars.`);
		ratingImg.setAttribute("width", "250");
		ratingImg.setAttribute("height", "50");
		ratingImg.setAttribute("loading", "lazy");
		ratingImg.setAttribute("referrerpolicy", "no-referrer");

        poster.setAttribute("src", item.imgSrc);
		poster.setAttribute("alt", `${item.name} poster.`);
		poster.setAttribute("width", "250");
		poster.setAttribute("height", "375");
		poster.setAttribute("loading", "lazy");
		poster.setAttribute("referrerpolicy", "no-referrer");
        poster.setAttribute("class", "poster")
	
		card.appendChild(ratingImg);
		card.appendChild(poster);
		card.appendChild(name);
		card.appendChild(creator);
        card.setAttribute("class", "card");
	
		container.appendChild(card);
    });
}

createMediaCard(topFilms, ".top-films");
createMediaCard(topBooks, ".top-books");