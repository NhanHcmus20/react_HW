console.log("bai 11")

function countSpace(str) {
    return str.split(" ").length -1;
}

console.log('bai 12');

function removeSpace(str) {
    return str.split(' ').join('');
}

console.log('bai 13')

function reverseStr(str) {
    return str.split(' ').reverse().join(' ');
}

console.log('bai 14')

function findS2(str1,str2) {
    let tmp = str1.split(' ');
    for (let index = 0; index < tmp.length; index++) {
        if(tmp[index] === str2) return index;
    }
    return -1;
}

let str1 = 'nHan bUi 21';

console.log('bai 15')

function normalizeName(name) {
    name = name.toLowerCase();
    for (let i = 0; i < name.length; i++) {
      if (i == 0 || name.charAt(i - 1) == " ") {     
        name = name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
      }
    }
    return name;
}

let newArray = ["hong", "tung", "xoan", "truong"];

newArray.splice(0, 0, 1, 2);

newArray.splice(3, 2, 3, 4);

newArray.splice(newArray.length, 0, 5);


// console.log(newArray);

let a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];

function countMax(a) {
    let count = [0,0,0,0,0,0,0,0,0,0]
    for (let index = 0; index < a.length; index++) {
        count[a[index]]++;
    }
    let max = count[0];
    let res = 0;
    for (let index = 1; index < count.length; index++) {
        if(count[index] > max) {
            max = count[index];
            res = index;
        }
    }
    return res;
}

console.log(countMax(a));