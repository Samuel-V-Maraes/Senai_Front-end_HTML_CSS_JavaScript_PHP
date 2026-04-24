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

  // Remove pontos e traço
  cpf = cpf.replace(/[^\d]/g, '');

  // Elimina CPFs inválidos conhecidos (todos iguais)
  if (/^(\d)\1+$/.test(cpf)) return false;

  // Validação dos dígitos verificadores
  let soma = 0;
  let resto;

  // Primeiro dígito verificador
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  if (resto !== parseInt(cpf.charAt(9))) return false;

  // Segundo dígito verificador
  soma = 0;
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
  // Verifica formato 00.000.000/0000-00
  const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
  if (!regex.test(cnpj)) return false;

  // Remove caracteres não numéricos
  cnpj = cnpj.replace(/[^\d]/g, '');

  // Elimina CNPJs inválidos conhecidos (todos iguais)
  if (/^(\d)\1+$/.test(cnpj)) return false;

  // Função para calcular dígito verificador
  const calcularDigito = (base, pesos) => {
    let soma = 0;
    for (let i = 0; i < pesos.length; i++) {
      soma += parseInt(base.charAt(i)) * pesos[i];
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const base = cnpj.substring(0, 12);

  // Pesos para os dígitos verificadores
  const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const digito1 = calcularDigito(base, pesos1);
  const digito2 = calcularDigito(base + digito1, pesos2);

  // Verifica dígitos
  return (
    digito1 === parseInt(cnpj.charAt(12)) &&
    digito2 === parseInt(cnpj.charAt(13))
  );
}