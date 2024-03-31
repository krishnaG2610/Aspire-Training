document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.pic');

    function slide() {
        slides.forEach(function(slide, index) {
            setTimeout(function() {
                slide.classList.toggle('show');
            }, index * 2000); // Change time delay as needed
        });
    }

    slide();
});

