function validarData(id) {
  
    let data = document.getElementById(id).value;
  // Verifica o formato dd/mm/yyyy
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = data.match(regex);

  if (!match) return false;

  const dia = parseInt(match[1], 10);
  const mes = parseInt(match[2], 10) - 1; // mês começa em 0
  const ano = parseInt(match[3], 10);

  const dataObj = new Date(ano, mes, dia);

  // Verifica se a data realmente existe
  return (
    dataObj.getFullYear() === ano &&
    dataObj.getMonth() === mes &&
    dataObj.getDate() === dia
  );
}

function validarCPF(id) {
  
  let cpf = document.getElementById(id).value;
  // Verifica formato 000.000.000-00
  const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  if (!regex.test(cpf)) return false;

  // Remove caracteres não numéricos
  cpf = cpf.replace(/\D/g, "");

  // Elimina CPFs inválidos conhecidos (todos iguais)
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  let resto;

  // Validação do 1º dígito
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;

  // Validação do 2º dígito
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
}

function validarCNPJ(id) {

  let cnpj = document.getElementById(id).value;  
  // Verifica o formato 00.000.000/0000-00
  const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
  if (!regex.test(cnpj)) return false;

  // Remove caracteres não numéricos
  cnpj = cnpj.replace(/\D/g, "");

  // Elimina CNPJs inválidos (todos os dígitos iguais)
  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);

  let soma = 0;
  let pos = tamanho - 7;

  // Validação do 1º dígito verificador
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  // Validação do 2º dígito verificador
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
}

function validarEmail(id) {
  let email = document.getElementById(id).value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  return regex.test(email);
}

function validaGenero(){
  if(document.getElementById("pf_gen_m").checked == false 
      && document.getElementById("pf_gen_f").checked == false 
      && document.getElementById("pf_gen_nf").checked == false
  ){
    return false;
  }else{
    return true;
  }
}

function validaNomePf(id){
  let nome = document.getElementById(id).value;
  if(nome.length >= 5){
    return true;
  }else{
    return false;
  }
}

function validaToken(id){
  let token = document.getElementById(id).value;
  if(token.length >= 9){
    return true;
  }else{
    return false;
  }
}

function validaSenha(id){
  let senha = document.getElementById(id).value;
  if(senha.length >= 8){
    return true;
  }else{
    return false;
  }
}

function comparaSenhas(){
  let senha1 = document.getElementById("inp_pass1").value;
  let senha2 = document.getElementById("inp_pass2").value;
  if(senha1 === senha2){
    return true;
  }else{
    return false;
  }
}

function validaTermoPf(id){
  if(document.getElementById(id).checked == true){
    return true;
  }else{
    return false;
  }
}

function validaDdd(id){
  let ddd = document.getElementById(id).value;
  if(ddd.length == 4){
    return true;
  }else{
    return false;
  }
}

function validaCel(id){
  let cel = document.getElementById(id).value;
  if(cel.length == 10){
    return true;
  }else{
    return false;
  }
}

function validaTel(id){
  let tel = document.getElementById(id).value;
  if(tel.length == 9){
    return true;
  }else{
    return false;
  }
}