const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
// track is an unordered list
// slides is the list items within the track put into an array
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
// dotsNav is the dots at the bottom of the carousel
const prevButton = document.querySelector('.carousel__button--left');
const nextButton = document.querySelector('.carousel__button--right');

const slideWidth = slides[0].getBoundingClientRect().width;
// slideWidth selects the first slide's width. The width is dependant on the size of the
// viewport, so on mobile the width shall be small, but on fullscreen desktop it'll be large

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    // Move to the next slide
    track.style.transform = `translateX(-${targetSlide.style.left})`
    // Remove and add current-slide to correct slide
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

// When I click left, move slides to the left
prevButton.addEventListener('click', evt => {

    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    
    // if (prevSlide == null) prevSlide = slides[slides.length - 1];
    
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// window.addEventListener('keyup', evt => {
//     if (evt.code === "ArrowLeft") {
//         const currentSlide = track.querySelector('.current-slide');
//         let prevSlide = currentSlide.previousElementSibling;
//         const currentDot = dotsNav.querySelector('.current-slide');
//         const prevDot = currentDot.previousElementSibling;
//         const prevIndex = slides.findIndex(slide => slide === prevSlide);
    
//         if (prevSlide === null) prevSlide = slides[slides.length - 1];

//         moveToSlide(track, currentSlide, prevSlide);
//         updateDots(currentDot, prevDot);
//         hideShowArrows(slides, prevButton, nextButton, prevIndex);
//     }
// });

// When I click right, move slides to the right
nextButton.addEventListener('click', evt => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    // if (nextSlide === null) nextSlide = slides[0];

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// window.addEventListener('keyup', evt => {
//     if (evt.code === "ArrowRight") {
//         const currentSlide = track.querySelector('.current-slide');
//         let nextSlide = currentSlide.nextElementSibling;
//         const currentDot = dotsNav.querySelector('.current-slide');
//         const nextDot = currentDot.nextElementSibling;
//         const nextIndex = slides.findIndex(slide => slide === nextSlide);

//         if (nextSlide === null) nextSlide = slides[0];

//         moveToSlide(track, currentSlide, nextSlide);
//         updateDots(currentDot, nextDot);
//         hideShowArrows(slides, prevButton, nextButton, nextIndex);
//     }
// });

// When I click the nav indicators, move to that slide
dotsNav.addEventListener('click', evt => {
    // What indicator was clicked on?
    const targetDot = evt.target.closest('button');
    
    // If false (null) then return
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
});


// Add left and right arrow key functionality

// Add Loop Functionality

// Add touch screen functionality

// Add text captions