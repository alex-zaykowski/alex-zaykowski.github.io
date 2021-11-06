# My Personal Website
Hi, it seems you are looking at the repository for my personal website! There really isn't much to discuss but if you're interested in how I built it there is some information below.

# Tools
The following are the tools I used to build the page
## VSCode
- IDE to construct the website (super handy with the built in terminal)

## React
- React was included to make development easier and to allow for a more modern approach to web development
- If you're wondering how to include react in your own github pages website I'll include the instructions below
1. create a github pages repository (there are tons of tutorials on this)
2. clone that repository to whatever directory you use to contain your project folders
3. cd into the directory where your cloned repository is 
4. run "npm init react app [name of repository]
5. run "npm start" to confirm react is working correctly
6. kill the server with ^C
7. run "npm install gh-pages --save"
8. update the package.json
    * above the "name" attribute add "hompage": "link to your github page"
    * in scripts add "predeploy": "npm run build" and "deploy": "gh-pages -d build"
9. run "npm start" again to make sure everything is still working
    * if you get some warnings don't worry about it, as long as nothing is breaking the app you're good to go this is only github pages so don't freak out
10. kill the server again
11. run "npm run deploy" to clean up the build
12. commit and push all of the changes

- If you run into any issues it could be possible that you may need to change your source branch for the github page to the gh-pages branch. I also initially incorrectly installed gh-pages with "--save-dev" instead of "--save" which caused some issues, if you've done that and are getting your README.md instead of your App.js homepage, then reinstall gh-pages with --save. There is a lot of other information for trouble shooting online. Good luck!

## Javascript, HTML, CSS
The rest of the website was built using the normal tools. I will continue to work on this until I am satisfied and may add some other tools as I go along. 