//declaring a type for object 
type User = {
    name: string,
    email:string,
    isActive:boolean
}

function createUser(user:User){
    return {name:'',email:'',isActive:0}
}