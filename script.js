const myBox = document.getElementById("myBox");

function changeToImage(imageUrl) {
    myBox.style.backgroundImage = `url('${imageUrl}')`;
}

myBox.addEventListener("click", function(event) {
    event.target.style.backgroundColor = "white";
    event.target.textContent = "Ouch!";
    changeToImage("background_click.png");
});

myBox.addEventListener("mouseover", function(event) {
    myBox.style.backgroundColor = "white";
    myBox.textContent = "Don't do it";
    changeToImage("background_mouseover.png");
});

myBox.addEventListener("mouseout", function(event) {
    myBox.style.backgroundColor = "white";
    myBox.textContent = "Okay";
    changeToImage("background_default.png");
});
