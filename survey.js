const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? Nicknames are also acceptable: ', (answer1) => {
    rl.question("whats an activity you like doing?", (answer2) => {
        rl.question("What do you listen to while doing that?", (answer3) => {
            rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.)", (answer4) => {
                rl.question("Whats your favourite thing to eat for that meal?", (answer5) => {
                    rl.question("Which sport is your absolute favourite?", (answer6) => {
                        rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
                            console.log(`${answer1} likes ${answer2} and listening to ${answer3} while eating ${answer5} for ${answer4}\n and playing ${answer6} and is amazing at ${answer7}`);
                            rl.close();

                        })
                    })
                })
            })
        })
    })
    
});



            

