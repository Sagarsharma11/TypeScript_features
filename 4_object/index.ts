const user = {
    name:"sagar",
    email:"sagar@mail.com",
    isActive:true
}

function createUser({name:string,age:number,isPaid:boolean}):void{
    console.log(arguments)
}
createUser({name:'sagar',age:24,isPaid:true})

//return type is also a object same params
function course({courseName:string, price:number}): {courseName:string, price:number}{
    return {courseName:string, price:number}
}

console.log(course({courseName:"React Js ",price:399}))

export {}