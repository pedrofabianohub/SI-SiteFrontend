const input_senhaAtual = document.getElementById('input-senha-atual')
const input_novaSenha = document.getElementById('input-nova-senha')
const input_confirmarSenha = document.getElementById('input-confirma-senha')
const btn_enviar = document.getElementById('btn-enviar')

let senhaAtual = ''
let novaSenha = ''
let confirmarSenha = ''

const desabilitarBtn = () => {
    if(senhaAtual || novaSenha || confirmarSenha){
        btn_enviar.className = 'btn btn-primary col-12'
        btn_enviar.removeAttribute('disabled','disabled')
    }else{
        btn_enviar.className = 'btn btn-secondary col-12'
        btn_enviar.setAttribute('disabled', 'disabled')
    }
}

desabilitarBtn()

input_senhaAtual.addEventListener('keyup', (e) => {
    senhaAtual = e.target.value
    desabilitarBtn()
})

input_novaSenha.addEventListener('keyup', (e) => {
    novaSenha = e.target.value
    desabilitarBtn()
})

input_confirmarSenha.addEventListener('keyup', (e) => {
    confirmarSenha = e.target.value
    desabilitarBtn()
})



btn_enviar.addEventListener('click', (e) => {
    e.preventDefault();

    if (senhaAtual && !novaSenha) {
        alert('Preencha todos os campos corretamente!')
        return
    }

    if (novaSenha !== confirmarSenha) {
        alert('A nova senha e a confirmação da senha não coincidem.');
        return;
    }

    const dados = {
        senhaAtual: senhaAtual,
        novaSenha: novaSenha,
        confirmarNovaSenha: confirmarSenha
    };

    if(senhaAtual && novaSenha && confirmarSenha){
        alert('Hackeado com sucesso!')
    }

    fetch('http://127.0.0.1:3000/redefinirSenha', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resultado:', data);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
});
