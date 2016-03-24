![Biscuits-Icon](/images/128.png?raw=true)

# Biscuits
Bites of practice to have with your coffee in the morning.

## Setup
1. `npm install`
2. For random-prompt functionality: `brew install coreutils`. Biscuits uses GNU's `shuf` command.
3. Specify your editor of choice by altering the `npm start` script in the `package.json`. By default, it is `vim`.

## Usage
1. To work on a random prompt, run `npm start`.
2. The tests will look for a `solution.js` in each prompt folder. You can rename `prompt.js` once complete or create a copy named `solution.js`. 

  *NOTE: it is preferred to simply rename `prompt.js` so that the `npm start` script will exclude it from random selection next time.*

  *NOTENOTE: `solution.js` is included in .gitignore file. To save solutions, comment or remove this line.*
3. `npm test` to run tests.

## Contributing
*IMPORTANT: Please create a new branch for each new prompt you submit*

1. New prompts should be in their own folder in the `prompts` directory.
2. The prompt itself should be in a .js file named `prompt.js`. The function should be exported via CommonJS for testing purposes.
3. Tests should be in the `test` directory, and each prompt in its corresponding folder.
4. Tests should `require` the `solution.js` from the prompt's folder.

