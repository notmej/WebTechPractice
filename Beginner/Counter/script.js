const counterText = document.getElementById("toChange");
const add = document.getElementById("add");
const reset = document.getElementById("reset");
let counter = 0;

// No parentheses on onClock call.
// onClick --> reference
// onClick() --> execution
add.addEventListener("click", onClick);
reset.addEventListener("click", resetb)

//functions
function onClick() {
    counter += 1;
    display(counter);
}

function resetb() {
    counter = 0;
    display(counter);
}

// standardized display.
function display(counter) {
    counterText.textContent = counter;
}