let escolha = "email"
const user = {
    nome: "Anderson",
    email: "anderson.silva@exemplo.com",
    idade: 42,
    "sobre nome":"Silva" 
}
console.log(user.nome)
console.log(user["nome"])//Anderson Silva

console.log(user[escolha])

const props = {
    avatar: "https://github.com/ARiN010.png",
    name:"Anderson Silva",
    email:"anderson.silva@exemplo.com"
}

//const avatar = props.avatar
//const name = props.name
//const email = props.email

const {avatar, nome, email} = props

console.log(avatar)
console.log(nome)
console.log(email)
