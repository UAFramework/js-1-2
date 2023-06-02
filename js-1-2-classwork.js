
//Change FILL_ME_IN (EXcercise 2)
const mentorCount = 20;
const traineeCount = 50;
checkIsTrue(mentorCount < traineeCount);

const capacity = 60;
const people = 40;
checkIsTrue(capacity > people);

const organisation = "Code your Future!";
checkIsTrue(typeof organisation === "string");
checkIsTrue(organisation.startsWith("Code"));
checkIsTrue(organisation.includes(" your "));
checkIsTrue(organisation.endsWith("Future!"));

const mystery = false;
checkIsTrue(typeof mystery === "boolean");
checkIsTrue(!mystery);

// Don't change anything below this point
var value1;
function checkIsTrue(value1) {
  if (value1) {
    // "\x1b[32m%s\x1b[0m" will change console output to green
    console.log(
      "\x1b[32m%s\x1b[0m",
      "Yes, this expression evaluates to true! ✅"
    );
  } else {
    // "\x1b[31m%s\x1b[0m" will change console output to red
    console.log(
      "\x1b[31m%s\x1b[0m",
      "Sorry, this expression evaluates to false! ❌"
    );
  }
}

// isEven Fuction (Excercise 3)
function isEven (number) {
    if (number % 2 === 0){
        return true;
    }
    else if (number % 2 !== 0){
        return false;
    }
}

//Describe function (Excercise 4)
function numberChecker(num) {                   // Gives basic values to the function
    if (num > 20) {                             // Checks, whether num is bigger than 20
      return `${num} is greater than 20`;       // If true, returns given string
    } else if (num === 20) {                    // If first statement was false, checks, whether num equals 20     
      return `${num} is equal to 20`;           // If true, returns given string
    } else if (num < 20) {                      // If both statements were false, checks, whether num is less than 20
      return `${num} is less than 20`;          // If true, returns given string
    } else {                                    // If all the statements are false, gives this output
      return `${num} isn't even a number :(`;   // Returns given string
    }
  }

//Mood function (Excercise 5)
function moodChecker(mood) {
    if (mood === "happy") {
        return "Good job, you're doing great!";
    }
    else if(mood === "sad") {
        return "Every cloud has a silver lining";
    }
    else if(!isNaN(mood)) {
        return "Beep beep boop";
    }
    else {
        return "I'm sorry, I'm still learning about feelings!";
    }
}

//Username function (Excercise 7)
function checkUser(username, usertype) {
    let firstChar = username.charAt(0);
    if(usertype === "admin" || usertype === "manager") {
      return "Username is valid";
    } else if (username.length >= 5 && username.length <= 10 && firstChar === firstChar.toUpperCase()) {
      return "Username is valid";
    } else {
      return "Username is invalid";
    }
}



//While loop (Excercise 8)
function sumOfNumbersW(n) {
    let i = 0;
    let answer = 0;
    while (i < n) {
        i++;
        answer += i;
    }
    return answer;
}

//For loop (Excercise 9)
function sumOfNumbersF(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
        answer += i;
    }
    return answer;
}