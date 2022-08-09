
const textSize = document.getElementById("text");

const newSizeControl = document.getElementById("font-size-control");

newSizeControl.addEventListener("input", (a) => {
    const size = newSizeControl.value;


    textSize.style.fontSize = size + "px";
});
