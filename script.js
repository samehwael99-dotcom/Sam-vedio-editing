// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Pause other videos when one starts playing

const videos = document.querySelectorAll("video");

videos.forEach(video => {

    video.addEventListener("play", () => {

        videos.forEach(otherVideo => {

            if (otherVideo !== video) {
                otherVideo.pause();
            }

        });

    });

});