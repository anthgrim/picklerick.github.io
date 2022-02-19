# Rick and Morty Random Phrase Picker

## Description

This is a git page that when clicking the button "Click here" returns an alert with a
Rick and Morty phrase. It also contains the link to the head image, and the original
quotes website. 

When the user first opens the page the background colors changes randomly, and it
stops when we click on the button.

## How it works?

The background color is possible when calling the **colorChange** function which
returns a random rgb cluster and sets it to the background color of the body document.
Then the an interval is set to call this function every second, and we capture the
id of the interval in a variable, to clear it when getting the random phrase.

The random phrase is possible by calling the **randomNumber** function inside the event listener, and it returns a random number between 0 and 30. Then a switch case is used to pick the random phrase based on the random number. 

### Future adds

A database will be created to store all this phrases, and possibly will evolved to get
random quotes from different cartoons and series.

### Get your random phrase here: https://anthgrim.github.io/picklerick.github.io/Index.html
