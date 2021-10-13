//Algorithm: 

//Keep it simple.

//Two modes: Multiplayer, Computer. << Two types of comp: Easy AI, Hard AI. 
//Restart button.

//Players can choose what symbol they can use. No X's and O's!

//Make player modules/factories.
// ^^ Symbol, name from input.
// ^^ Comp gets 2 modules, easy and hard.

// I want confetti.

let gameBoard = {
    1: '', 2: '', 3: '',
    4: '', 5: '', 6: '',
    7: '', 8: '', 9: ''
}

//Event listeners, symbol chosen, and winning functions go in each.
//1. Function that checks symbol order each time the player clicks.
//2. Winning function.
//3. Function that changes its own name.
let player = (name) => {

}

//Template comp. Make sure the winning function of the comp has NO confetti.
let comp = (name) => {

}

//Possible combinations: 123. 456. 789. 159. 357. 147. 258. 369.
//Orders of the combs will not matter.