![Biscuits-Banner](/images/128-banner.png?raw=true)
# Biscuits
Bites of practice to have with your coffee in the morning.

## Table of Contents
1. [About](#about)
2. [Setup](#setup)
3. [Usage](#usage)
4. [Contributing](#contributing)

<a name="about"/>
## About
The purpose of this repo is to make practicing simple. Biscuits provides interview-style questions in the comfort of your terminal/text editor. No more hunting down interview questions or finagling with slow web IDEs. Just set everything up with `npm run setup`, hit `npm start` and start practicing.

**On Testing:** In order to practice coming up with your own test cases, Biscuits recommends that you **write your own tests**. To encourage this, a bare-bones test template is provided for you in the home directory. However, you can run `npm start -- spec` to preload some tests for your prompt if you wish to work with them.

<a name="setup"/>
## Setup
`npm run setup`

An interactive shell will prompt you for your editor of choice, set up a `remote upstream` and run `npm install` for you.

### Manual Setup
1. `npm install`
2. For random-prompt functionality: `brew install coreutils`. Biscuits uses GNU's `shuf` command.
3. Specify your editor using `npm config set biscuits:editor EDITORCOMMAND`. E.g: `subl` or `atom`. By default, it is `vim`.

<a name="usage"/>
## Using Biscuits 
1. `npm start` to work on a random prompt.
2. `npm start -- spec` will pre-load any prewritten tests for a chosen prompt before you start.
3. Write your tests in the test/ directory. Remember you have a template in the home directory if you need it.
4. The tests should require a `solution.js` in each prompt folder. Each test should be named after its prompt.
5. `npm test` to run all tests.
6. `npm run reset` to remove all solution files and test files, and retrieve prompts.
7. `npm run update` will update Biscuits by `stash`ing any unstaged changes, performing a `pull --rebase` to upstream, and reapplying stashed changes. **Remember to update before using.**
7. `npm run reprompt` to retrieve prompt files.
*NOTE: `solution.js` is included in .gitignore file. To save solutions, comment or remove this line.*

<a name="contributing"/>
## Contributing
*IMPORTANT: Please create a new branch for each new pull request you submit and submit it to the master branch*

1. New prompts should be in their own folder in the `prompts/` directory.
2. The prompt itself should be in a .js file named `prompt.js`. The function should be exported via CommonJS for testing purposes.
3. Write tests for a particular prompt in the `spec/` directory
