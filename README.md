# FizzBuzz

This is our first programming exercise in the bootcamp. We will write some code to play the game "FizzBuzz". The requirements for this game can be found [here](FizzBuzzSpec.md).

## Setup Steps

1. Fork this repo
    - Click "Fork" in the top-right of the page - this will create a copy of this repo in *your own GitHub account*
2. Clone (download) the repo
    - Go to your newly-created fork of the repo (on GitHub).
    - Click `Clone or download` (the green button on the right).
    - Make a note of the URL. For this you can clone with either HTTPS or SSH.
    - Clone your repo into a folder by running `git clone <your-url-here>` in your terminal of choice

3. "Cloning the repo" will create a folder on your computer with the files from this repo. Open this folder in WebStorm (or your preferred IDE).

4. Open a command-prompt in this same folder. Your trainer can show you how to do this, if you need any help.

5. Run this command to run your code:
```shell
npx ts-node fizzbuzz.ts
```
What does this command do?
`npx` is a tool that allows you to run node packages from the command line.
`ts-node` is a tool that allows you to run typescript code from the command line.
So we are using npx to run ts-node to run our typescript file