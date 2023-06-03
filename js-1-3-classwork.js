//Changing the array
const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
fruits[2]; //Strawberry
fruits[3]; //Kiwi
fruits[5]; //Orange
fruits[0]; //Banana

fruits[1] = "raspberry"; //Changes apple to raspberry
fruits[4] = "pineapple"; //Changes fig to pineapple

//Array checker
function secondMatchesAmy(array) {
    if (array[1] = 'Amy') {
        return "Second element matched!";
    } else {
        return "Second element not matched";
    }
}

//Array iteration
const traineesList = [
    "Jacob",
    "Lars",
    "James",
    "Mykyta",
    "Miles",
    "Janna",
    "Emily",
];

for (let i = 0; i < traineesList.length; i++) {
    const list = "User is: " + traineesList[i];
    console.log(list);
}



  