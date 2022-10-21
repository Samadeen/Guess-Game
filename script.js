let username, stage, score, min, max, randomNumber;

//Prompt to get username
username = prompt('Hello There, What Username would you like to play with?');

//Check if username is valid
if (+username.trim() === 0) {
  username = prompt('You need a username to play. Kindly enter a username.');
}

guessGame();

function guessGame() {
  stage = 1;
  score = 0;
  min = 1;
  max = 2;
  randomNumber = generateRandomNumber();
  results();
  checker();

  function checker() {
    //Collect user number
    let userNumber = prompt(`Take a guess between ${min} and ${max}`);

    if (+userNumber === +randomNumber) {
      console.log(`Yay!!!, You Guessed correctly. Let's go again`);
      score++; //Increase score by 1
      stage++; //Increase stage by 1
      max++; //Increase range by 1
      randomNumber = generateRandomNumber();
      results();
      checker();
    } else {
      console.log(
        `That was so close, The correct answer is ${randomNumber} You wanna try again?`
      );
    }
  }

  //Generate Random Number.
  function generateRandomNumber() {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //Display Results.
  function results() {
    console.log(
      `Your Current Score is ${score}'\n' Your Current Stage is ${stage}`
    );
  }
}
