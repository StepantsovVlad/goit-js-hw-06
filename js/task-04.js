const buttonDecrement = document.querySelector(`button[data-action="decrement"]`);
const buttonIncrement = document.querySelector(`button[data-action="increment"]`);
const buttonValue = document.querySelector(`#value`);

let counterValue = 0;

buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    buttonValue.textContent = counterValue;
})

buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    buttonValue.textContent = counterValue;
});