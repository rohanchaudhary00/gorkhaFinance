
let currentImageIndex = 0;
const images = [
    "/Home_Page/images/1.png",
    "/Home_Page/images/2.png",
    "/Home_Page/images/3.png",
    "/Home_Page/images/4.png"
];

function changeImage(step) {
    currentImageIndex = (currentImageIndex + step + images.length) % images.length;
    const sliderContent = document.querySelector('.slider-content');
    sliderContent.style.backgroundImage = `url("${images[currentImageIndex]}")`;
}

function autoChangeImage() {
    changeImage(1); // Change to the next image
    setTimeout(autoChangeImage, 6000); // Change image every 10 seconds
}

// change with arrow 
// document.querySelector('.prev-arrow').addEventListener('click', function () {
//     changeImage(-1);
// });

// document.querySelector('.next-arrow').addEventListener('click', function () {
//     changeImage(1);
// });

// Initialize the slider with the first image and start automatic image change
changeImage(0);
autoChangeImage();


// Get the button element
var backToTopButton = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top of the document when the button is clicked
backToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});


