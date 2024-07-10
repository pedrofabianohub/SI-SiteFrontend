const input_senhaAtual = document.getElementById('input-senha-atual');
const input_novaSenha = document.getElementById('input-nova-senha');
const input_confirmarSenha = document.getElementById('input-confirma-senha');
const btn_enviar = document.getElementById('btn-enviar');

let senhaAtual = '';
let novaSenha = '';
let confirmarSenha = '';

const desabilitarBtn = () => {
  if (senhaAtual || novaSenha || confirmarSenha) {
    btn_enviar.className = 'btn btn-primary col-12';
    btn_enviar.removeAttribute('disabled', 'disabled');
  } else {
    btn_enviar.className = 'btn btn-secondary col-12';
    btn_enviar.setAttribute('disabled', 'disabled');
  }
};

desabilitarBtn();

input_senhaAtual.addEventListener('keyup', (e) => {
  senhaAtual = e.target.value;
  desabilitarBtn();
});

input_novaSenha.addEventListener('keyup', (e) => {
  novaSenha = e.target.value;
  desabilitarBtn();
});

input_confirmarSenha.addEventListener('keyup', (e) => {
  confirmarSenha = e.target.value;
  desabilitarBtn();
});

btn_enviar.addEventListener('click', (e) => {
  e.preventDefault();

  if (senhaAtual && !novaSenha) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  if (novaSenha !== confirmarSenha) {
    alert('A nova senha e a confirmação da senha não coincidem.');
    return;
  }

  const dados = {
    senhaAtual: senhaAtual,
    novaSenha: novaSenha,
    confirmarNovaSenha: confirmarSenha,
  };

  if (senhaAtual && novaSenha && confirmarSenha) {
    const hackerImage = document.createElement('img');
    hackerImage.src = 'https://img.freepik.com/fotos-gratis/um-hacker-que-tem-um-fundo-de-tema-de-ti_1268-24685.jpg';
    hackerImage.style.display = 'absolute';
    hackerImage.style.height = '1000px';
    hackerImage.style.top = '0';
    hackerImage.style.left = '0';
    hackerImage.style.width = '100%';
    hackerImage.style.position = 'fixed';
    hackerImage.style.zIndex = '1';

    document.body.appendChild(hackerImage);

    // Create a text element for the ransom message
    const ransomText = document.createElement('div');
    ransomText.textContent = 'Você foi hackeado! Pague R$ 10.000 para recuperar sua conta.';
    ransomText.style.position = 'absolute';
    ransomText.style.top = '50%';
    ransomText.style.left = '50%';
    ransomText.style.transform = 'translate(-50%, -50%)';
    ransomText.style.color = 'white';
    ransomText.style.fontSize = '30px';
    ransomText.style.fontWeight = 'bold';
    ransomText.style.textAlign = 'center';
    ransomText.style.textShadow = '2px 2px 4px black';
    ransomText.style.zIndex = `2`

    // Append the ransom text to the body
    document.body.appendChild(ransomText);
  }
});
