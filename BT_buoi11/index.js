console.log('bai 31')

function findSum_To_K(arr,k) {
    for (let index = 0; index < arr.length; index++) {
        for(let j = 1; j < arr.length;j++){
            for(let m = 2; m < arr.length;m++){
                if(arr[index] + arr[m] + arr[j] ===k) return true;
            }
        }
    }
    return false;
}

console.log('bai 32')

function input_K_InOrder(arr,k) {
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] <= k && arr[index+1] > k){
            arr.splice(index+1,0,k);
            break;
        }
    }
    return arr;
}

console.log('bai 33')

function insertionSort(arr) {
    let n = arr.length;
    for (let index = 0; index < arr.length; index++) {
        let cur = arr[index];
        let j = index - 1; 
        while((j > -1) && (cur < arr[j])){
            arr[j+1] = arr[j];
            j--
        }
        arr[j+1] = cur;
    }
    return arr;
}
// let arr = [8,2,9,3,6,1];
// console.log(arr)
// console.log(findSum_To_K(arr,1))