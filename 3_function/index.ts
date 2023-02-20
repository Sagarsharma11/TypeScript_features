//return type strict

function takingTwo(num:number):number{
    return 3*num
}
console.log(takingTwo(5))

//arrow function 

const arrowFunc =(num:number):number=>{
    return num
}
console.log(arrowFunc(14))

//void return type

const returnVoid=(num:number):void=>{
    console.log(`this num ${num}`)
}

//never 

const returnErr=(msg:string):never=>{
    throw new Error(msg)
}

export {}