function hideElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('hidden');
}
// set background color of keyboard alphabet

function setBackgroundColorById(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}

// generate random alphabets

function getRandomAlphabets(){
    const alphabetsString= 'abcdefghijklmnopqrstuvwxyz';
    const alphabets= alphabetsString.split('');
    
    // random index between 0 to 25
    const randomIndex= Math.random()*25;
    const index= Math.round(randomIndex);
    
    // find random alphabet
    const alphabet= alphabets[index];
    return alphabet;
}