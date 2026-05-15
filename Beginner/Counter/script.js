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
    if (counter === 5-1){
        counter += 1;
        display(counter + " First checkpoint!");
    } else if (counter != 30){
        counter += 1;
        display((counter === 30) ? counter + " this is your limit" : counter ); 
    } else {
        display("Limit reached");
        
    }
}

function resetb() {
    counter = 0;
    display(counter);
}

// standardized display.
function display(inp) {
    counterText.textContent = inp;
}