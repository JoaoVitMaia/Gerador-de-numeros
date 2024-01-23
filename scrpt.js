
// Pegando as variaveis

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@"
let newPassword = "";

// Pegar o valor do slider
sizePassword.innerHTML = sliderElement.value;

// Mudar o valor do slider
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){      //generatePassword ta lá no OnClick
    let pass = "";  //variavel da senha
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){     //começa em 0 e o n vai pegar o tamanho de caracteres, enquanto o i for menor q o slider ele vai adicionar
        pass += charset.charAt(Math.floor(Math.random() * n)) //gerar um numero aleatorio que no caso se for 1 vai pegar a letra a  no tamnaho de caracteres
    }  
    
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;  //vai colocar lá no negocio do html a senha
}
