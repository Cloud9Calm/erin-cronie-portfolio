document.addEventListener("DOMContentLoaded", function () {
    const mouseFollower = document.getElementById("mouse-follower");

    document.addEventListener("mousemove", function (event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        mouseFollower.style.left = mouseX + "px";
        mouseFollower.style.top = mouseY + "px";
    });
});
