let yearsOfExperience = 1;
let salary;
let bonus;

if (yearsOfExperience<0.5){
    salary = 0;
    bonus = 0;
}else if (yearsOfExperience>=0.5 && yearsOfExperience<1){
    salary = 100;
    bonus = salary * 0.01;
}else if (yearsOfExperience>=1 && yearsOfExperience<2){
    salary = 333;
    bonus = salary * 0.03;
}else if (yearsOfExperience>=2 && yearsOfExperience<4){
    salary = 555;
    bonus = salary * 0.04;
}else {
    salary = 666;
    bonus = yearsOfExperience * salary;
}
console.log("Years of experience: " + yearsOfExperience);
console.log("Salary: " + salary);
console.log("Bonus: " + bonus);

//------------------2

let month = "september";
let todayMonth;

switch (month){
    case "January":
        todayMonth = "Today is January";
        break;
    case "February":
        todayMonth = "Today is February";
        break;
    case "March":
        todayMonth = "Today is March";
        break;
    case "April":
        todayMonth = "Today is April";
        break;
    case "May":
        todayMonth = "Today is March";
        break;
    case "June":
        todayMonth = "Today is June";
        break;
    case "July":
        todayMonth = "Today is July";
        break;
    case "August":
        todayMonth = "Today is August";
        break;
    case "September":
        todayMonth = "Today is September";
        break;
    case "October":
        todayMonth = "Today is October";
        break;
    case "November":
        todayMonth = "Today is November";
        break;
    case "December":
        todayMonth = "Today is December";
        break;
    default:
        todayMonth = "Invalid month"
}
console.log(todayMonth);


// ----------3

for (let i= 0; i<30; i+=2) {
    if (i === 0 || i === 22) {
        continue;
    }
    console.log(i);
}

//--------4

let numA = 12;
let numB = 12;
let compare =
    numA > numB
        ? numA + " більше " + numB
        : numA<numB
            ? numB + " більше " + numA
            : numA === numB
                ? numA + " дорівнює " + numB
                : "Error"
console.log(compare);


//--------5

let text = "Javascript is fun";
let i = 0;

while (i < text.length) {
    let currentChar = text[i];
    if (currentChar === 'a') {
        i++;
        continue;
    }
    if (currentChar === 'n') {
        break;
    }
    console.log(currentChar);
    i++;
}