# [My Personal Website](https://alex-zaykowski.github.io/)
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
5. cd into the repository
6. run "npm start" to confirm react is working correctly
7. kill the server with ^C
8. run "npm install gh-pages --save"
9. update the package.json
    * above the "name" attribute add "hompage": "link to your github page"
    * in scripts add "predeploy": "npm run build" and "deploy": "gh-pages -d build"
10. run "npm start" again to make sure everything is still working
    * if you get some warnings don't worry about it, as long as nothing is breaking the app you're good to go this is only github pages so don't freak out
11. kill the server again
12. run "npm run deploy" to clean up the build
13. commit and push all of the changes

## [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- This is a fantastic framework, I seriously cannot reccomend this enough if you're looking to use Three.js with React. It makes it significantly easier to implement Three.js objects in general.
- [Documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)

## [Drei](https://github.com/pmndrs/drei)
- Drei is a framework to supplemnt R3F, again this makes the process even simpler with adding textures and a camera as well as rendering.
- [Documentation](https://docs.pmnd.rs/drei/introduction)


## Troubleshooting
- I initially incorrectly installed gh-pages with "--save-dev" instead of "--save" which caused some issues, if you've done that and are getting your README.md instead of your App.js homepage, then reinstall gh-pages with --save. 
- If you are still getting your README.md file instead of the homepage you created in your App.js file, then you should switch the source branch to gh-pages in the settings of your repo. It may take a few minutes for you to see the changes, so change the source and just wait a little to see if anything has changed. If it's been over 10 minutes there is likely something else wrong or you may need to hard refresh the page. React can be tricky to use if you're new to it, and deploying to github pages doesn't make it any easier. Good luck and remember there are plenty of other resources online if you're still having issues.
## Javascript, HTML, CSS
The rest of the website was built using the normal tools. I will continue to work on this until I am satisfied and may add some other tools as I go along. 
