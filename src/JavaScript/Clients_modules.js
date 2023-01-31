function saveCadastro(){
  for (let index = 0; index < 4; index++) {
  var el = document.getElementById('modalCadastro');
   var imputs = el.children[index].getElementsByClassName('form-control')[index];
   console.log(imputs.value )
  if(typeof imputs != 'undefined' && !imputs.value   ) {
    
    return Swal.fire({
        icon: 'warning',
        title: 'Aviso',
        text: `O campo "${imputs.id}" esta vazio `
      })
  } 
    
  }
}






function consultaCep() {
    var cep = document.getElementById('CEP').value;

    if (cep) {

        const validate_cep = (cep) => {
            cep = cep.replace(/[^0-9]/gi, "");
            if (cep.length == 8) {
                return cep;
            }
            return false;
        }


        if (!validate_cep(cep)){
          return Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: `CEP "${cep}" Formato invalido `
              })
        }

        var url = 'https://viacep.com.br/ws/' + cep.trim() + '/json/';
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {

            if (xml.readyState == 4 && xml.status == 200) {
                var dados = JSON.parse(xml.response);

                if(!dados.erro){
                    document.getElementById('CEP').value = dados.cep;
                    document.getElementById('Endereco').value = dados.logradouro;
                    document.getElementById('Bairro').value = dados.bairro;
                    document.getElementById('Cidade').value = dados.localidade;
                    document.getElementById('Estado').value = dados.uf;
                }else{
                    return Swal.fire({
                        icon: 'warning',
                        title: 'Aviso',
                        text: `Não foi posível encontrar o CEP "${validate_cep(cep)}" `
                      })
                }

            }
        }
        xml.open("GET", url, true);
        xml.send()
    }

}



