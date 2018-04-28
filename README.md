# Tweeter Project

Tweeter is simple one page full stack web app that allows users to post and see tweets real time. The app was built using HTML, CSS, jQuery, Ajax, Express, Node, MongoDB.

## Final Product

!["Screenshot of Tweeter page"](https://github.com/benyoo5222/tweeter/blob/master/docs/Homepage.png?raw=true)
!["Screenshot of Tweeter page with tweet textarea"](https://github.com/benyoo5222/tweeter/blob/master/docs/Homepagewithcomposebox.png?raw=true)


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
!["Screenshot of Tweeter compose box"](https://github.com/benyoo5222/tweeter/blob/master/docs/Autofocus.png?raw=true)

2. When the user tries to post a tweet that is empty it will flash an error message. The message dissapears once the user types any character.

!["Screenshot of Error Message"](https://github.com/benyoo5222/tweeter/blob/master/docs/emptytextarea.png?raw=true)


3. Once the user tries to post anything longer than 140 characters, the character counter becomes red and won't allow to post.

!["Screenshot of character counter"](https://github.com/benyoo5222/tweeter/blob/master/docs/charactercounter.png?raw=true)
!["Screenshot of Error Message"](https://github.com/benyoo5222/tweeter/blob/master/docs/overcharacterlimit.png?raw=true)

4. When the user successfully posts a tweet, the list is the only part that refreshes not the whole page.

!["Screenshot of Before posting"](https://github.com/benyoo5222/tweeter/blob/master/docs/Beforeposting.png?raw=true)
!["Screenshot of After posting"](https://github.com/benyoo5222/tweeter/blob/master/docs/afterposting.png?raw=true)