const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question("What's your name / nickname? ", (name) => {
  rl.question("What's an activity you enjoy? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favorite? (Breakfast, Lunch, Dinner?) ", (meal) => {
        rl.question("What's your favorite thing to eat for said meal? ", (food) => {
          rl.question("Which sport is your absolute favorite? ", (sport) => {
            rl.question("What are you good at? ", (talent) => {
  console.log(` \n - - - - - - - - - - - - - - - - - - - - - 
${name} likes ${activity}, especially while listening to ${music}. 
Of all the meals, ${name} prefers a ${meal} consisting of ${food}.
${name} loves watching ${sport}, and is extremely good at ${talent}! What a jerk!`);
  rl.close();
              })
            })
          })
        })
      })
    })
});