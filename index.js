// Code your solutions in this file
/*for ([initialization]; [condition]; [iteration]) {
    [loop body]
} 
Initialization
Typically used to initialize a counter variable.
Condition
An expression evaluated before each pass through the loop. If this expression evaluates to true, the statements in the loop body are executed. If the expression evaluates to false, the loop exits.
Iteration
An expression executed at the end of each iteration. Typically, this will involve incrementing or decrementing a counter, bringing the loop ever closer to completion.
Loop body
Code that runs on each pass through the loop. 
for (let age = 30; age < 40 ; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
} 

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); */


function writeCards(names, event) {
  let newArr = [];
  for (let i = 0; i < names.length; i++) {
      newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      debugger;
  }
return newArr;
} 
/*
while ([condtioin]){
  [loop body]
}

function plantGarden() {
  let keepWorking = true;
  while (keepWorking) {
    chooseSeedLocation();
    plantSeed();
    waterSeed();
    keepWorking = checkForMoreSeeds();
  } */


function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
      console.log(countDown--);
    }
};
