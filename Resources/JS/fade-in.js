document.addEventListener('DOMContentLoaded', function() {
    var projectBox = document.getElementById('projects');
    projectBox.addEventListener('mouseover', function() {
        this.querySelector('.project-bg').style.opacity = 1;
    });
    projectBox.addEventListener('mouseout', function() {
        this.querySelector('.project-bg').style.opacity = 0;
    });
});
