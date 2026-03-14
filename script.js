function login(){

let user = document.getElementById("username").value
let pass = document.getElementById("password").value

let query =
"SELECT * FROM users WHERE username='" +
user +
"' AND password='" +
pass +
"'"

console.log("Query:", query)

if(
user === "admin" && pass === "1234"
){
document.getElementById("result").innerHTML="Login Berhasil"
}
else if(user.includes("' OR '1'='1")){
document.getElementById("result").innerHTML="SQL Injection Berhasil!"
}
else{
document.getElementById("result").innerHTML="Login Gagal"
}

}
