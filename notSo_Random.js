
// rndNumber

let num = process.argv[2]

function rndNum (num) {
    let newNum = Math.random() * num
    let round = Math.floor(newNum)
    console.log(round);
}

// rndNum(num); 

// rndLetter 

let word = process.argv[2]

function rndLetter(word) {
    let newLetter = Math.random() * word.length
    let rounded = Math.floor(newLetter)
    let sngletter = word[rounded]
    console.log(sngletter)
}

// rndLetter(word);

//MyGuy Concatanation

let phrase = "myGuy"

function myGuy (phrase) {
   
    console.log("Take it easy, " + phrase + "!")
}

myGuy(phrase);

// string_N_times
// I need to report the specified string the amount of times I say to with a parameter.




