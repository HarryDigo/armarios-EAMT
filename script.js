function checkLoggedIn() {
    if (localStorage.getItem("current_user") == null) window.location.replace("login.html");
}

function locateUser(rm) {
    let aux = localStorage.getItem("user_amount");
    for (let i = 0; i < aux; i++) if (rm == localStorage.getItem("user_rm["+i+"]")) return i;
    return false;
}

function createUser() {
    let rm = document.getElementById("rm_usuario").value;
    let password = document.getElementById("senha_usuario").value;
    let aux = localStorage.getItem("user_amount");
    if (aux == null) {
        localStorage.setItem("user_amount", 0);
        aux = 0;
    }
    if (rm.length == 0 || password.length == 0) {
        document.getElementById("mensagem_erro").innerHTML = "RM e/ou senha inválido, tente novamente";
        document.getElementById("mensagem_erro").style.visibility = "visible";
        return;
    }
    if (password.length < 4) {
        document.getElementById("mensagem_erro").innerHTML = "Senha deve ter mais de 3 caracteres";
        document.getElementById("mensagem_erro").style.visibility = "visible";
        return;
    }
    if (locateUser(rm) === false) {
        localStorage.setItem("user_rm["+aux+"]", rm);
        localStorage.setItem("user_password["+aux+"]", password);
        localStorage.setItem("current_user", aux)
        aux++;
        localStorage.setItem("user_amount", aux);
        window.location.replace("index.html")
    } else {
        document.getElementById("mensagem_erro").innerHTML = "Conta já existe, tente novamente";
        document.getElementById("mensagem_erro").style.visibility = "visible";
    }
}

function logIn() {
    let rm = document.getElementById("rm_usuario").value;
    let password = document.getElementById("senha_usuario").value;
    let current_user = locateUser(rm);
    if (rm.length == 0 || password.length == 0) {
        document.getElementById("mensagem_erro").innerHTML = "RM e/ou senha inválido, tente novamente";
        document.getElementById("mensagem_erro").style.visibility = "visible";
        return;
    }
    if (current_user === false) {;
        document.getElementById("mensagem_erro").innerHTML = "Usuário não existe, tente novamente";
        document.getElementById("mensagem_erro").style.visibility = "visible";
        return;
    } else if (password == localStorage.getItem("user_password["+current_user+"]")) {
        localStorage.setItem("current_user", current_user);
        window.location.replace("index.html");
    } else {    
        document.getElementById("mensagem_erro").innerHTML = "Senha incorreta, tente novamente";
        document.getElementById("mensagem_erro").style.visibility = "visible";
        return;
    }
}

function logOut() {
    localStorage.setItem("current_user", null);
    window.location.replace("login.html");
}