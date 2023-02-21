type User = {
    readonly id: string,
    name: string,
    email: string,
    isActive?:boolean // optional no need to declare the variable
}

let user: User = {
    id: '1234',
    name: 'sagar',
    email: 'sg@g.com'
}
user.email = "sagar@mail.com"
// user.id="123*" //  Cannot assign to 'id' because it is a read-only property

type cardNum ={
    cardNumber:string
}
type cardName = {
    cardHolder:string
}

// merging the two types 
type cardDetails = cardName&cardNum&{
    cvv:string    
}
