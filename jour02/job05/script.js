window.addEventListener("scroll", function () {
    var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / scrollHeight) * 100;
    var footer = document.querySelector("footer");

    
    var color;
    if (scrollPercent < 25) {
        color = "red";
    } else if (scrollPercent < 50) {
        color = "green";
    } else if (scrollPercent < 75) {
        color = "blue";
    } else {
        color = "yellow";
    }

    footer.style.backgroundColor = color;
});