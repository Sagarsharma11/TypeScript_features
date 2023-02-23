let score : number | string = 33

score = 44
score = "55"

type User = {
    name:string,
    id:number
}

type Admin = {
    name:string,
    id:number
}

let myuser : User | Admin = {
    name:"sagar",
    id:23
}