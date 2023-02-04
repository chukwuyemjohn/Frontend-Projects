// selecting the variables
const btn = document.getElementById('btn')
const input = document.querySelector('.input').value
const guesstext = document.getElementById('guesstext')

// adding an event listner

btn.addEventListener('click',function(){
    const randomNum = Math.trunc(Math.random() * 50)
    // console.log(randomNum);
    if( input === randomNum){
    guesstext.textContent = `YOU GUESSED RIGHT 🏆 ${randomNum}`
}else if (input > randomNum){
    guesstext.textContent = `YOU GUESSED IS TOO HEIGH,THE SECRET NUMBER IS ${randomNum}` 
}else{
    guesstext.textContent = `YOU GUESSED IS TOO LOW, THE SECRET NUMBER IS ${randomNum}`
}

})


