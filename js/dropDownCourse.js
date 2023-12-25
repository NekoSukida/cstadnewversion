
document.addEventListener('DOMContentLoaded', function () {
    // Get all accordion headers
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Attach click event listener to each accordion header
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // Toggle the active class on the clicked header
            this.classList.toggle('active');

            // Toggle the 'open' class on the accordion content to show/hide it
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }

            // Toggle the arrow direction
            const arrowIcon = this.querySelector('::after');
            arrowIcon.style.transform = arrowIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });
});