// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

//let bonusPoints = 50;
//console.log(bonusPoints);

//bonusPoints = bonusPoints + 50;
//console.log(bonusPoints);

//bonusPoints = bonusPoints - 75;
//console.log(bonusPoints);

//bonusPoints = bonusPoints + 45;
//console.log(bonusPoints);

//-------------------------------------------------------
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

//function increment() {
//    console.log("The button was clicked");
//}

// -------------------------------------------------------
// document.getElementById("count").innerText = 5

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


