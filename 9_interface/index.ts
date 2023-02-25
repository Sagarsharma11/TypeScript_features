interface User{
    email:string,
    userId:number,
    googleId?: string,
    startTrail: () => string
}

const hitesh: User = {email:"sagra@mail.com",userId:999,
    startTrail: ()=>{
        return "hello"
    }
}