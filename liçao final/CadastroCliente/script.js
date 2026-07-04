//exemplo de busca em lista
// const listaExemplo = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

// console.log(listaExemplo.includes(2048));

// let podeEntrar = false;
// listaExemplo.forEach((item) => {
//     if (item == 15) {
//      podeEntrar = true;   
//     }
// })
// console.log(podeEntrar)

//copia daqui pra baixo
// const testeLoginValido = [{
//     login: 'admin', senha: '1234'
// }]

// const loginTeste = { login: 'ze', senha: 'manga' };

// loginValido.push(testeLoginValido);
// console.log(testeLoginValido);

// console.log(testeLoginValido.includes(loginTeste))
function toggleSenha(inputId, botao) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        botao.textContent = "🙈";
    } else {
        input.type = "password";
        botao.textContent = "👁️";
    }
}

const realizarCadastro = (event) => {
    event.preventDefault();

    const loginInputValue = document.getElementById("email");
    const senhaInputValue = document.getElementById("senha");
    const nomeInputValue = document.getElementById("nome");
    const celularInputValue = document.getElementById("telefone");
    const confsenhaInputValue = document.getElementById("confirma-senha");
    const termosInputchecked = document.getElementById("termos");

    if (senhaInputValue.value !== confsenhaInputValue.value) {
        alert("As senhas não coincidem!");
        return;
    }

    const usuarioASerSalvo = { 
        login: loginInputValue.value, 
        senha: senhaInputValue.value, 
        nome: nomeInputValue.value, 
        celular: celularInputValue.value, 
        confsenha: confsenhaInputValue.value, 
        termos: termosInputchecked.checked 
    };

    let valoresJaSalvos = JSON.parse(localStorage.getItem('usuariosParaLogin'));
    
    if (!valoresJaSalvos) {
        valoresJaSalvos = [];
    }

    valoresJaSalvos.push(usuarioASerSalvo);
    localStorage.setItem('usuariosParaLogin', JSON.stringify(valoresJaSalvos));

    window.location.href = "../login/index.html";
}
