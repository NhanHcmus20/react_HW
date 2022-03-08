// var readlineSync = require();

const { keyInSelect } = require('readline-sync/lib/readline-sync');

 
// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

let data = [
    {
        id : 0,
        name: 'Nhan',
        age: 20,
        sex: 'male'
    },
    {
        id : 0,
        name: 'Bao',
        age: 25,
        sex: 'male'
    }
]

var showMenu = function () {
    console.log("               Student Managerment                  ");
    console.log("====================================================");
    console.log(" 1. Show all student ");
    console.log(" 2.Create student and return Menu");
    console.log(" 3.Delete student");
    console.log(" 4.Edit student");
    console.log(" 5.Find student by name");
    console.log(" 6.Sort student by name ascending");
    console.log(" 7.Sort student by age ascending");
    console.log(" 8.Delete all student");
    console.log(" 9. Sum student age");
    console.log(" 10.Exit");
  };
 
let showAllStudent = function(arr){
    console.log(arr);
}

let createStudent = function (arr) {
    let newStudent={
        id : 0,
        name: 'none',
        age: 0,
        sex: 'male'
    }
    var getInput = require('readline-sync')
    var new_name = getInput.question('New student\'name is: ')
    newStudent.name = new_name;
    var new_age = getInput.question('New student\'s age is: ')
    newStudent.age = new_age - '0';
    let sex = ['male','female','unknown']
    var new_sex = getInput.keyInSelect(sex,'New student\'s sex is: ')
    newStudent.sex = sex[new_sex];

    arr.push(newStudent);
    return arr;
}

let deleteStudent_by_Name = function (arr,name){
    let check = -1;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].name === name) check = index;
    }
    if(check === -1) {
        console.log('there\'s no data to delete')
        return arr;
    }
    arr.splice(check,1,);
    return arr;
}

let editStudent = function(arr){
    showAllStudent(arr);
    let name_list = [];
    for (let index = 0; index < arr.length; index++) {
        name_list.push(arr[index].name);
    }
    console.log(name_list)
    let student_index = keyInSelect(name_list,'Student that you want to edit: ')
    console.log(arr[student_index].name);
    let properties_list = Object.keys(arr[0]);
    console.log(properties_list)
    let property_index = keyInSelect(properties_list,'what you want to change: ')
    var getInput = require('readline-sync')
    let new_input = getInput.question('New student\'s is: ')
    switch(property_index){
        case 1: 
            arr[student_index].id = new_input+'';
            break;
        case 2: 
            arr[student_index].name = new_input;
            break;
        case 3: 
            arr[student_index].age = new_input+'';
            break;
        case 4: 
            arr[student_index].sex = new_input;
            break;
    }
    

    console.log(arr[student_index]);
}


let findStudentByName = function(arr,name){
    let mark = -1;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].name === name) {
            mark = index;
            console.log('Your student found: ' + arr[index].name);
        };
    }
    return arr[mark];
}

let compare_Name = function(a,b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    if(a.name === b.name) return 0;
}

let sortByName = function(arr){
    arr.sort(compare_Name);
    return arr;
}

let compare_Age = function(a,b){
    if(a.age < b.age) return -1;
    if(a.age > b.age) return 1;
    if(a.age === b.age) return 0;
}

let sortByAge= function(arr){
    arr.sort(compare_Age);
    return arr;
}

let deleteAllStudent = function(arr){
    for (let index = 0; index <= arr.length; index++) {
        arr.pop();
    }
    return arr
}

let sumStudentAge = function(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length;i++){
        sum += arr[i].age;
    }
    return sum;
}

let choice = -1;
while(choice!= 0){
    showMenu();
    var input = require('readline-sync');
    let user_input = input.question('Enter your choice: ')
    choice = user_input;
    switch (user_input) {
        case 1:
            showAllStudent(data);
            break;
        case 2:
            createStudent(data);
            break;
        default:
            break;
    }
}