# Tweeter Project

Tweeter is simple one page full stack web app that allows users to post and see tweets real time. The app was built using HTML, CSS, jQuery, Ajax, Express, Node, MongoDB.

## Final Product

!["Screenshot of Tweeter page"]
!["Screenshot of Tweeter page with tweet textarea"]


## Dependencies

- Chance
- body-parser
- Express
- Node.js
- MD5
- MongoDB


## Getting Started

- Install all dependencies using 'npm install' command.
- Create tweeter database with MongoDB and create a collection called tweets inside of that database.
- Press the compose button to toggle down or up the 'compose tweet' box.

## Key Features

1. Press the compose button to toggle down the textarea and see that it autofocuses to the textbox.
!["Screenshot of Tweeter compose box"]

2. When the user tries to post a tweet that is empty it will flash an error message. The message dissapears once the user types any character.

3. Once the user tries to post anything longer than 140 characters, the character counter becomes red and won't allow to post.

4. When the user successfully posts a tweet, the list is the only part that refreshes not the whole page.