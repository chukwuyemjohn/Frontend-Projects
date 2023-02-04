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


/* 
-------GIT----------
# ADDING FILES TO YOUR GIT
# steps to using git in the trminal 
# git init--- to initialize it
# git config --global user.name ----add your username
# git config --global user.email ----add your email
# git status --- this give you an untracked files, you have to add them to the staging area
# git add -A this is use to add files. the A means add all files
# git commit

# TO REVERSE TO THE PREVIOUS COMMIT
# git reset --hard HEAD
# TO DELETE FILE THAT HAS BEEN ALREADY COMMITED
# git log ----shows you all the log that you did
# copy the ID
# type q for quit or :q
# git reset hard and paste in the ID of the commit

It is mor advisable to create a new branch rather than move inbetween different commit. lets see how.

> git branch ---- this will list all the branches we corrently have.

creating new branch will mean having a copy of the master branch into another branch and we can edit it without affecting the original branch.

> git branch ----branch name (to create new branch)
>git checkout ----name of the branch(to switch to the new branch)



*/