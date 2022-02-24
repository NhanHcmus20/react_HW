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
console.log(normalizeName(str1))
