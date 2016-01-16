var prompt = require("request");

var userHealth = 100;
var foodRations = 50;
var axeDamage = 4;
var fifthSense = 0;

var zombieHP = 4;
var zombieDamage = 5;

var daysPassed =;

var hitZombieChance = Math.random() > 0.5;
var encounterZombieChance = Math.random() > 0.93;
var findFoodChance;
var findGunChance;


if (encounterZombieChance === true) {
   foodRations --;
}

if (foodRations === 0 && userHealth === 0) {
   console.log("Wrecked");
   return;
}

if (fifthSense < 5) {
   var findFoodChance = Math.random() > 0.99;
   var findGunChance = Math.random() > 0.99;
}

if (fifthSense < 7) {
   var findFoodChance = Math.random() > 0.95;
   var findGunChance = Math.random() > 0.95;
}

if (fifthSense < 10) {
   var findFoodChance = Math.random() > 0.93;
   var findGunChance = Math.random() > 0.93;
}

if (fifthSense === 10) {
   var findFoodChance = Math.random() > 0.90;
   var findGunChance = Math.random() > 0.90;
}



