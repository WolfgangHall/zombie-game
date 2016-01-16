var prompt = require("request");

 var prompt = require("prompt");
 
  // 
  // Setting these properties customizes the prompt. 
  // 
  prompt.message = "Question!";
  prompt.delimiter = "><".green;
 
  prompt.start();
 
  prompt.get({
    properties: {
      name: {
        description: "Choose a number between 1-10".black
      }
    }
  }, function (err, result) {
    console.log("You picked: ".blue + result.name.blue);
  });
// var userHealth = 100;

// var zombieHP = 20;
// var zombieDamage = 5;

// var daysPassed = 1;

// var hitZombieChance = Math.random() > 0.5;

// var findFoodChance;
// var findGunChance;


// if (encounterZombieChance === true) {
//    foodRations --;
// }

// if (foodRations === 0 && userHealth === 0) {
//    console.log("Wrecked");
//    return;
// }





