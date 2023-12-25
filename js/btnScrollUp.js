// Add an event listener for the scroll event
window.addEventListener('scroll', function() {
    // Get the distance scrolled from the top of the document
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Select the element with the ID 'goToTopButton'
    var goToTopButton = document.getElementById('goToTopButton');
});

// Add a click event listener to the 'goToTopButton' element
document.getElementById('goToTopButton').addEventListener('click', function() {
    // Scroll to the top of the document over 1000 milliseconds (1 second)
    scrollToTop(350);
});

// Function to smoothly scroll to the top of the document over a specified duration
function scrollToTop(duration) {
    var start = window.scrollY || document.documentElement.scrollTop;
    var startTime = performance.now();

    function scrollStep(timestamp) {
        var currentTime = timestamp || performance.now();
        var timeElapsed = currentTime - startTime;
        var progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, start * (1 - progress));

        if (timeElapsed < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}
