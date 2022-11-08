interface IUser {
    name : string,
    surname : string,
    login : string,
    password : string
}

let user : IUser  = { 
    name : "Sunnat",
    surname : "Qarshiboyev",
    login : "Sunnat",
    password : "password"
}
interface IAdmin {
    name : string; 
    role : "admin" | "user"    
}

let admin : IAdmin = {
    ...user,
    role : "admin"

}


console.log(admin)



