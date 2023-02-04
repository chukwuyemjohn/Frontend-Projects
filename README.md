Number Guesing Game project.

Variables

The following variables are declared:

    btn: A reference to the element with the id "btn". This is the button that will trigger the guessing game.
    input: A reference to the value of the first element with the class "input". This is the user's guess for the secret number.
    guesstext: A reference to the element with the id "guesstext". This is where the output of the guessing game will be displayed.

Functionality

An event listener is added to the button (btn) to trigger the guessing game when clicked. The following happens when the button is clicked:

    A random number is generated between 0 and 50 (randomNum).

    The user's guess (input) is compared to the generated number (randomNum).

    If the user's guess is equal to the generated number, the output text will be "YOU GUESSED RIGHT 🏆 [generated number]".

    If the user's guess is greater than the generated number, the output text will be "YOU GUESSED IS TOO HIGH, THE SECRET NUMBER IS [generated number]".

    If the user's guess is less than the generated number, the output text will be "YOU GUESSED IS TOO LOW, THE SECRET NUMBER IS [generated number]".

    The output text is displayed in the guesstext element.