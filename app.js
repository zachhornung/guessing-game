'use strict';

var userName = prompt('Hello, welcome to my website! What is your name?')
  alert('Welcome, ' + userName + '! Glad you stopped by!')
var ca = 0

function workingInRain(){
  var workingInRain = prompt('Do I like working in the rain, yes or no?').toUpperCase()
if (workingInRain == 'YES' || workingInRain == 'Y'){
  // console.log('Sorry, that is not true')
  alert('Sorry, that is not true');
} else if (workingInRain == 'NO' || workingInRain == 'N'){
  // console.log('That\'s correct!')
  alert('That\'s correct!');
  ca++;
  return ca;
  // console.log(ca)
}

}
workingInRain()


function school(){
  var school = prompt('Did I attend Western Washington University, yes or no?').toUpperCase()
if (school == 'YES' || school == 'Y'){
  // console.log('That\'s correct!')
  alert('That\'s correct!');
  ca++;
  return ca;
} else if (school == 'NO' || school == 'N'){
  // console.log('Sorry, that is not true')
  alert('Sorry, that is not true');
}
}
school();

function bike(){
  var bike = prompt('Did I Ride the Divide, yes or no?').toUpperCase()
if (bike == 'YES' || bike == 'Y'){
  // console.log('That\'s correct!')
  alert('That\'s correct!');
  ca++;
  return ca;
} else if (bike == 'NO' || bike == 'N'){
  // console.log('Sorry, that is not true')
  alert('Sorry, that is not true');
}
}
bike();


function oyster(){
  var oyster = prompt('Did I farm oysters, yes or no?').toUpperCase()
if (oyster == 'YES' || oyster == 'Y'){
  // console.log('That\'s correct!')
  alert('That\'s correct!');
  ca++;
  return ca;
} else if (oyster == 'NO' || oyster == 'N'){
  // console.log('Sorry, that is not true')
  alert('Sorry, that is not true');
}
}
oyster();




function ai(){
  var ai = prompt('Did I want to get into the AI field, yes or no?').toUpperCase()
if (ai == 'YES' || ai == 'Y'){
  // console.log('That\'s correct!')
  alert('That\'s correct!');
  ca++;
  return ca;
} else if (ai == 'NO' || ai == 'N'){
  // console.log('Sorry, that is not true')
  alert('Sorry, that is not true');
}
}
ai();

function numberGame(){
  let answer = 51

for ( var i = 0; i <=3; i++){
 var userInput = prompt('Guess a number between 1 and 100')
  if (userInput < answer){
    alert('too low! Try again')
  } else if (userInput > answer){
    alert('Too High! Try again')
  } else if (userInput == answer){
    alert('Great job, thats the right answer!');
    ca++; 
    break;
  }
}return ca;
}
numberGame();

function bandGame(){
  let arrayOfAnswers = ['meshuggah', 'opeth', 'nick  drake', 'ahab', 'bathory', 'behemoth', 'bolt thrower', 'the contortionist', 'dead can dance', 'emperor', 'ennio morricone']

for (let i = 6; i >= 1; i--){
  var bandAnswer = prompt('What is one of my favorite bands? You have ' + i + ' guesses ramaining')
  for (let a = 0; a < arrayOfAnswers.length; a++){
    if (bandAnswer == arrayOfAnswers[a]){
      ca++;
      alert('you got it right');
      return ca;
      } 
    } 
  }
    if (i == 1){
    alert('thats your last try! the correct answers were meshuggah, opeth, nick drake, ahab, bathory, behemoth, bolt thrower, the contortionist, dead can dance, emperor, and ennio morricone.')
    }
  
  
}

bandGame();
alert('You got ' + ca + ' answers correct!')
alert('Thanks again for stopping by, ' + userName + '! Hope to see you again soon!');
