# Code Quiz

JavaScript code fundamentals quiz web page

# Description
* Using JavaScript and jQuery create a site for a short JavaScript code quiz
* Generate a count down timer for the quiz
* Present next question after answering 
* If question answered incorrectly subtract time from timer
* Show results when timer ends or quiz ends
* Ability to input initials at end of quiz with the score
* Maintain the stored scores in local storage
* Ability to clear highscores if wanted
* Abiltiy to restart new quiz

# Mockup animation of Code Quiz functionality

* <img src="Assets/04-web-apis-homework-demo.gif" width="400px" >

# Code Quiz

* Timed quiz on JavaScript fundamentals that stores high scores
* Check saved scores at the end of quiz
* Input your initials with your score
* Try it again
* Link to deployed site: https://victorsc45.github.io/Code-Quiz/

## Spec Criteria
* Splash screen to explain rules of quiz
* Main criteria:
    * Click to start quiz button and also starts timer
    * Timer start when first question presented
    * Answer the question presented and if quessed wrong delimit the timer by 5 seconds
    * Give feedback on answer wrong or correct
    * When timer ends quiz ends
    * When all questions answered quiz ends
    * Show final score
    * Ability to see previous highscores or any scores saved with initials of player
    * Ability to maintain saved scores in local storage
    * Ability to clear saved scores if wanted
    * Start quiz again if play wants to try again

## Minimum Requirements
* Code Quiz site with count down timer, and local storage for saved scores
* Functional, deployed application
* GitHub repository with Readme describing project
* Use bootstrap and powered by JavaScript/jQuery

# Instulation
N/A at this time simply follow the url Select start quiz button from the splash screen

# Review
Ensure that JavaScript/jQuery is functioning to set and reset DOM elements. Use local storage to create a saved score area. Ensure count down timer ends game and produces a score. 

# Credits

The following links were used as reference as research.

''' https://developer.mozilla.org/en-US/docs/Web/HTML

''' https://www.w3.org/standards/webdesign/accessibility

''' ''' bootstrap components link starting 'A' and descending '''

''' https://getbootstrap.com/docs/4.5/components/alerts/

''' local storage - Clearing localStorage in javascript? - Stack Overflow
''' stackoverflow.com

''' Events | jQuery API Documentation  api.jquery.com

''' Challenge: https://thecodingtrain.com/CodingChal...

'''Special thanks to @iarcones from trilobot for help with project :)

# License
Open too the public website for JavaScript Code Quiz

# Tests
* test by accessing URL above and take quiz
* enter player initials in saved scores and clear the local storage / check local storage in console > application > Localstorage