window.onload = init;

function init() {
    document.querySelector('.btn-secondary').addEventListener('click', function() {
        window.location.href = "signin.html";
    });
    document.querySelector('.btn-primary').addEventListener('click', login);
}

function login(){
    var mail = document.getElementById("input-mail").value;
    var pass = document.getElementById("input-password").value;
    
    axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
            pass: pass,
            mail: mail
        }
    }).then(res => {
        if(res.data.code == 0) {
            console.log(res.data);
            localStorage.setItem("token", res.data.message);
            window.location.href = "pokemon.html";
        }
        else {
            alert("Usuario y/o contraseña incorrectos");
        }
    }).catch(err => {
        console.log(err);
    });
}
