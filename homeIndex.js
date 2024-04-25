
//Slider
const slider = document.querySelector('.slider');
const sliding = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
const slideWidth = sliding[0].clientWidth; // Get width of the first slide

// Function to move to the next slide
function moveToSlide(slideIndex) {
    // Check if slideIndex exceeds the last slide index
    if (slideIndex >= sliding.length) {
        slideIndex = 0; // Reset to the first slide
    }
    
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    currentSlide = slideIndex;
    resetTimer();
    updateButtonVisibility();
}

// Function to move to the next slide automatically after 3 seconds
let timer = setTimeout(() => {
    moveToSlide(currentSlide + 1);
}, 3000);

// Function to reset the timer
function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        moveToSlide(currentSlide + 1);
    }, 3000);
}

// Function to update button visibility based on current slide
function updateButtonVisibility() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === sliding.length - 1;
}

// Move to the next slide on "Next" button click
nextBtn.addEventListener('click', () => {
    if (currentSlide < sliding.length - 1) {
        moveToSlide(currentSlide + 1);
    }
});

// Move to the previous slide on "Previous" button click
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        moveToSlide(currentSlide - 1);
    }
});

// Set initial slide position (optional, uncomment if needed)
// moveToSlide(0);


// Location Dropdown Toggle
const locationsLink = document.querySelector('.Locations');
const locationsDropdown = document.querySelector('.locations-dropdown');

locationsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior (navigation)
    locationsDropdown.classList.toggle('active'); // Toggle dropdown visibility
});


// Get the image element

function reloadHomepage(){
const logoImage = document.querySelector('.Top-Title-Image');

// Add event listener to handle click
logoImage.addEventListener('click', function() {
    // Redirect to home.html
    window.location.href = './index.html';
});
}
