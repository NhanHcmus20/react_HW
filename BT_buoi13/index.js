console.log('call back test');

const addition = (a,b,cb) => {
    console.log("addition is calculating in 3s");
    setTimeout(()=>{
        let additionRes = a + b;
        console.log("addition result: ",additionRes)
        cb(additionRes);
    },3000)
}

const multiplication = (a,b,cb) => {
    console.log("multiplication is calculating in 2s");
    setTimeout(()=>{
        let multiplicationRes = a + b;
        console.log("multiplication result: ",multiplicationRes)
        cb(multiplicationRes);
    },2000)
}

const division = (a,b,cb) => {
    console.log("division is calculating in 2s");
    setTimeout(()=>{
        let divisionRes = a + b;
        console.log("divisionn result: ",divisionRes)
        cb(divisionRes);
    },4000)
}

const result = (a,b,c,d,e) => {
    addition(a,b, (additionRes) => {
        division(additionRes, c, (divisionRes) => {
            multiplication(divisionRes, d, (multiplicationRes) => {
                addition(multiplicationRes, 8, (additionRes) => {
                    multiplication(additionRes, e, (lastresult) => {
                        console.log("last result is: " ,lastresult);
                    })
                })
            })
        })
    })
}

result(1,2,3,8,8);