document.addEventListener("DOMContentLoaded", function() {
    let topics = document.querySelectorAll('.topic');
    topics.forEach(topic => {
        topic.addEventListener('mouseover', () => {
            topic.style.transform = "scale(1.05)";
            topic.style.transition = "0.3s";
        });

        topic.addEventListener('mouseout', () => {
            topic.style.transform = "scale(1)";
        });
    });
});
