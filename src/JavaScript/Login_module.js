

function alertErro(msg){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O campo é '+msg+' obrigatorio',
        })    
}

function Login() {
    let email = document.querySelector('#email').value
    let senha = document.querySelector('#pwd').value
    
    if (!email) {
      return alertErro('email');
    }

    if (!senha) {
    return alertErro('senha');
    }

    window.location.replace('./main.html');
}


