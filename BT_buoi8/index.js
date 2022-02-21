
console.log('bai 7');

function getSumOfOdd(n) {
    let sum = 0;
    for (let index = 0; index < n; index++) {
        if(index % 2 != 0) sum += index;
    }
    return sum;
}

console.log('bai 8');

function checkAllOddInNumber(n) {
    while (true) {
        if((n<10) && (n%2)!=0) return true;
        if((n % 10) % 2 === 0) return false;
        n /= 10;
        n = Math.floor(n);  
    }
    
}

console.log('bai 9')

function getReverse(n){
    n.toString();
    return n.split("").reverse().join(""); 
}

function checkPalindrome(n) {
    if(getReverse(n) == n) return true;
    else return false;
}

console.log('bai 10')

function printxTable(){
    let tmp = 0;
    for (let index = 1; index <= 9; index++) {
        for (let m = 1; m <= 9; m++) {
            tmp = m*index;
            console.log(m,'x',index,'=',tmp)
        }
    }
}

printxTable();