/* FADE EVENT LISTENERS ----------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    /* PROJECT LISTENERS */
    var projectBox = document.getElementById('projects');
    projectBox.addEventListener('mouseover', function() {
        this.querySelector('.project-bg').style.opacity = 1;
    });
    projectBox.addEventListener('mouseout', function() {
        this.querySelector('.project-bg').style.opacity = 0;
    });

    /* PROJECT LISTENERS */
    var projectBox = document.getElementById('about');
    projectBox.addEventListener('mouseover', function() {
        this.querySelector('.about-bg').style.opacity = 1;
    });
    projectBox.addEventListener('mouseout', function() {
        this.querySelector('.about-bg').style.opacity = 0;
    });

    /* PROJECT LISTENERS */
    var projectBox = document.getElementById('contact');
    projectBox.addEventListener('mouseover', function() {
        this.querySelector('.contact-bg').style.opacity = 1;
    });
    projectBox.addEventListener('mouseout', function() {
        this.querySelector('.contact-bg').style.opacity = 0;
    });

    /* PROJECT LISTENERS */
    var projectBox = document.getElementById('follow');
    projectBox.addEventListener('mouseover', function() {
        this.querySelector('.follow-bg').style.opacity = 1;
    });
    projectBox.addEventListener('mouseout', function() {
        this.querySelector('.follow-bg').style.opacity = 0;
    });
});
