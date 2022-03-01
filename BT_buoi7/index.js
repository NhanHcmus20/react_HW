let n = 10;
console.log("bài 0");

function checkPrime(n) {
    if (n < 2){
        return false;
    }
    for (let index = 2; index < n; index++) {
        if(n % index == 0){
            return false;
        }
        
    }
    return true
}

function checkN(n){
    if (checkPrime(n)) {
        console.log(true);
    }else{
        console.log(false);
    }
}

console.log('bài 1');

function print1ToN(n) {
    for (let index = 0; index < n; index++) {
        console.log(index);
    }
}

console.log('bài 2')

function printOdd(n) {
    for (let index = 0; index < n; index++) {
        if(index % 2 == 1){
            console.log(i);
        }
    }
}

console.log('Bài 3')

function printEven(n) {
    for (let index = 0; index < n; index++) {
        if(index % 2 == 0){
            console.log(i);
        }
    }
}

console.log('Bài 4')

function printPrime(n) {
    for (let index = 0; index < n; index++) {
        if(checkPrime(index)){
            console.log(index);
        }
    }
}

console.log('Bài 5')

function getSum(n) {
    let sum = 0;
    for (let index = 0; index < n; index++) {
        sum += index;
    }
    return sum;
}