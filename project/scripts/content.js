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

// populate my content page
function displayReviews() {
    let reviews = JSON.parse(localStorage.getItem("userReviews")) || [];
    const container = document.querySelector(".card-grid");

    if (reviews.length === 0) {
        container.innerHTML = "<p class='paragraph'>No reviews yet. Add a review to see it here.</p>";
        return;
    }

    container.innerHTML = "";

    reviews.forEach(review => {
        // Create elements for each review property
        let card = document.createElement("section");
        let ratingImg = document.createElement("img");
		let poster = document.createElement("img");
		let title = document.createElement("h3");
		let creator = document.createElement("p");
        let reviewBlock = document.createElement("div");
        let reviewText = document.createElement("p");
        let by = document.createElement("h4");
        
		ratingImg.setAttribute("src", `images/${review.rating}-star.png`);
		ratingImg.setAttribute("alt", `${review.rating} yellow stars.`);
		ratingImg.setAttribute("width", "250");
		ratingImg.setAttribute("height", "50");
		ratingImg.setAttribute("loading", "lazy");
		ratingImg.setAttribute("referrerpolicy", "no-referrer");

        poster.setAttribute("src", review.imgUrl);
		poster.setAttribute("alt", `${review.title} poster.`);
		poster.setAttribute("width", "250");
		poster.setAttribute("height", "375");
		poster.setAttribute("loading", "lazy");
		poster.setAttribute("referrerpolicy", "no-referrer");
        poster.setAttribute("class", "poster")
	
        title.textContent = review.title;
        creator.textContent = review.creator;

        reviewText.textContent = review.reviewText;
        by.innerHTML = `Review by ${review.userName} on ${review.date}.`

        reviewBlock.appendChild(reviewText);
        reviewBlock.appendChild(by);
        reviewBlock.setAttribute("class", "block")

		card.appendChild(ratingImg);
		card.appendChild(poster);
		card.appendChild(title);
		card.appendChild(creator);
        card.appendChild(reviewBlock);
        card.setAttribute("class", "card rev");
	
		container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", displayReviews);