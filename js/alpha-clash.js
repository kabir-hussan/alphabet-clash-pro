// direct way
// function playNow(){
//     //get home screen and hide it
//     const homeSection= document.getElementById('home-screen'); 
//     // hide home screen by click playNow
//     homeSection.classList.add('hidden');

//     // get playground section and show it
//     const playGroundSection= document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');


// }

// function for continue the game
function continueGame(){

    // find random alphabet
    const randomAlphabet= getRandomAlphabets();
    // show random alphabet on the screen
    const currentScreenAlphabet= document.getElementById('screen-alphabet');
    currentScreenAlphabet.innerText= randomAlphabet;

    // call set backgroundColor of alphabet function
    setBackgroundColorById(randomAlphabet);

}

// Indirect way just calling function
function playNow(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();

}
