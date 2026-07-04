function toggleSenha() {
    const input = document.getElementById("senha");
    const botao = document.querySelector(".btn-olho");
    if (input.type === "password") {
        input.type = "text";
        botao.textContent = "";
    } else {
        input.type = "password";
        botao.textContent = "";
    }
}

const realizarLogin = (event) => {
    event.preventDefault();

    const usuario = document.getElementById("email");
    const senhaUser = document.getElementById("senha");

    const listaLoginsValidos = JSON.parse(localStorage.getItem('usuariosParaLogin')) || [];

    const usuarioValidado = listaLoginsValidos.find((item) =>
        item.login === usuario.value && item.senha === senhaUser.value
    );

    if (usuarioValidado) {
        alert("Acesso autorizado!");
        window.location.href = "../index.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
}

