function saveCadastro() {

    var campo_obrigatorios =
        [
            document.getElementById('Cliente').value,
            document.getElementById('Empresa').value,
            document.getElementById('Contato').value,
            document.getElementById('date').value
        ];
    var nm_campos = ['Cliente', 'Empresa', 'Contato','Dt. Criação']  ;  

 for (let index = 0; index < campo_obrigatorios.length; index++) {
  
    if (!campo_obrigatorios[index]) {
        return Swal.fire({
            icon: 'warning',
            title: 'Aviso',
            html: `O campo <b>${nm_campos[index]}</b> esta vazio`
        });
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


        if (!validate_cep(cep)) {
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

                if (!dados.erro) {
                    document.getElementById('CEP').value = dados.cep;
                    document.getElementById('Endereco').value = dados.logradouro;
                    document.getElementById('Bairro').value = dados.bairro;
                    document.getElementById('Cidade').value = dados.localidade;
                    document.getElementById('Estado').value = dados.uf;
                } else {
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



function comboBox(params) {
    document.getElementById('title_modal_combBox').innerHTML = params[0].toUpperCase() + params.substr(1);
}

function saveCategoriasComboBox(){
   var tipo = document.getElementById('title_modal_combBox').innerHTML;
   
 

   if ( tipo == "Categoria" ) {
    }

    if( tipo == "Situacao"){
    }
   
}
