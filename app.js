'use strict';
var userName = prompt('Hello, welcome to my website! What is your name?')
  alert('Welcome, ' + userName + '! Glad you stopped by!')
var ca = 0
var workingInRain = prompt('Do I like working in the rain, yes or no?').toUpperCase()
if (workingInRain == 'YES' || workingInRain == 'Y'){
  // console.log('Sorry, that is not true')
  alert('Sorry, that is not true');
} else if (workingInRain == 'NO' || workingInRain == 'N'){
  // console.log('That\'s correct!')
  alert('That\'s correct!');
  ca++
  // console.log(ca)
}

var school = prompt('Did I attend Western Washington University, yes or no?').toUpperCase()
if (school == 'YES' || school == 'Y'){
  // console.log('That\'s correct!')
  alert('That\'s correct!');
  ca++;
} else if (school == 'NO' || school == 'N'){
  // console.log('Sorry, that is not true')
  alert('Sorry, that is not true');
}

var bike = prompt('Did I Ride the Divide, yes or no?').toUpperCase()
if (bike == 'YES' || bike == 'Y'){
  // console.log('That\'s correct!')
  alert('That\'s correct!');
  ca++;
} else if (bike == 'NO' || bike == 'N'){
  // console.log('Sorry, that is not true')
  alert('Sorry, that is not true');
}

var oyster = prompt('Did I farm oysters, yes or no?').toUpperCase()
if (oyster == 'YES' || oyster == 'Y'){
  // console.log('That\'s correct!')
  alert('That\'s correct!');
  ca++;
} else if (oyster == 'NO' || oyster == 'N'){
  // console.log('Sorry, that is not true')
  alert('Sorry, that is not true');
}

// var oyster = prompt('Did I farm oysters, yes or no?').toUpperCase()
// if (oyster == 'YES' || oyster == 'Y'){
//   // console.log('That\'s correct!')
//   alert('That\'s correct!');
//   ca++;
// } else if (oyster == 'NO' || oyster == 'N'){
//   // console.log('Sorry, that is not true')
//   alert('Sorry, that is not true');
// }

var ai = prompt('Did I want to get into the AI field, yes or no?').toUpperCase()
if (ai == 'YES' || ai == 'Y'){
  // console.log('That\'s correct!')
  alert('That\'s correct!');
  ca++
} else if (ai == 'NO' || ai == 'N'){
  // console.log('Sorry, that is not true')
  alert('Sorry, that is not true');
}

// for (var i = 0; i <=3; i++){
// let userInput = prompt('Guess a number between 1 and 100')
// let actualUserInput = parseInt(userInput)
// let correctAnswer = 51
//   while (actualUserInput < 1 || actualUserInput > 100 || actualUserInput == false){
//     if (actualUserInput < 1 || actualUserInput > 100){ 
//       userInput = prompt('Sorry, thats not a valid input for my small computer brain. Please guess a number between 1 and 100')
//       actualUserInput = parseInt(userInput)
//     }
//     else if (actualUserInput == false){
//      userInput = prompt('That was not a number. Please enter an actual number')
//      actualUserInput = parseInt(userInput)
//     }
    
//   }
// }
let answer = 51

for ( var i = 0; i <=3; i++){
 var userInput = prompt('Guess a number between 1 and 100')
  if (userInput < answer){
    alert('too low! Try again')
  } else if (userInput > answer){
    alert('Too High! Try again')
  } else if (userInput == answer){
    alert('Great job, thats the right answer!');
    ca++; break;
  }
}

let arrayOfAnswers = ['meshuggah', 'opeth', 'nick  drake', 'ahab', 'bathory', 'behemoth', 'bolt thrower', 'the contortionist', 'dead can dance', 'emperor', 'ennio morricone']
outerloop:
for (let i = 6; i >= 1; i--){
  var bandAnswer = prompt('What is one of my favorite bands? You have ' + i + ' guesses ramaining')
  for (let a = 0; a < arrayOfAnswers.length; a++){
    if (bandAnswer == arrayOfAnswers[a]){
      alert('you got it right');
      ca++;
      break outerloop;
    }
  }
  if (i == 1){
    alert('thats your last try! the correct answers were meshuggah, opeth, nick drake, ahab, bathory, behemoth, bolt thrower, the contortionist, dead can dance, emperor, and ennio morricone.')
  }
}
alert('You got ' + ca + ' answers correct!')
alert('Thanks again for stopping by, ' + userName + '! Hope to see you again soon!');