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

document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById('reviewForm');
    
    // recieve the data from the form
    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const type = document.querySelector('input[name="item"]:checked').value; 
        const title = document.getElementById("titleInput").value;
        const creator = document.getElementById("creator").value;
        const imgUrl = document.getElementById("imgUrl").value;
        const rating = document.querySelector('input[name="stars"]:checked')?.value;
        const reviewText = document.getElementById("review").value;
        const date = document.getElementById("logDate").value;
        const userName = document.getElementById("userName").value;

        saveReview(type, title, creator, imgUrl, rating, reviewText, date, userName);

        alert("Thank you for your rating! See your reviews on the My Content page.")

        reviewForm.reset();
    });

    // function to save review to local storage
    function saveReview(type, title, creator, imgUrl, rating, reviewText, date, userName) {
        let reviews = JSON.parse(localStorage.getItem("userReviews")) || [];

        const newReview = {
            type: type,
            title: title,
            creator: creator,
            imgUrl: imgUrl,
            rating: rating,
            reviewText: reviewText,
            date: date,
            userName: userName
        };

        reviews.push(newReview);

        localStorage.setItem("userReviews", JSON.stringify(reviews));
    }

});