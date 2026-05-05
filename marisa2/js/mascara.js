function mascaraData(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, ""); // Remove caracteres não numéricos (letras e outros); 
    if(valor.length > 8){
        valor = valor.slice(0, 8);              // Limita até 8 digitos.
    }

    // Aplicando formatação no padrão dd/mm/yyyy.
    if(valor.length >= 5){
        // Insere a segunda barra à partir da digitação do 5 digito.
        campo.value = valor.replace(/^(\d{2})(\d{2})(\d{1,4})$/, "$1/$2/$3"); 
    }else if(valor.length >= 3){
        // Insere a primeira barra à partir da digitação do 3 digito.
        campo.value = valor.replace(/^(\d{2})(\d{1,2})$/, "$1/$2"); 
    }else{
        campo.value = valor;
    }
}

function mascaraCpf(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, ""); // Remove caracteres não numéricos (letras e outros); 
    if(valor.length > 11){
        valor = valor.slice(0, 11);              // Limita até 11 digitos.
    }

    // Aplicando formatação no padrão 000.000.000-00
    if(valor.length >= 10){
        // Insere os 2 pontos e o traço à partir da digitação do 10 digito.
        campo.value = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4"); 
    }else if(valor.length >= 7){
        // Insere os pontos à partir da digitação do 7 digito.
        campo.value = valor.replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3"); 
     }else if(valor.length >= 4){
        // Insere o ponto à partir da digitação do 4 digito.
        campo.value = valor.replace(/^(\d{3})(\d{1,3})$/, "$1.$2"); 
    }else{
        campo.value = valor;
    }
}

function mascaraDdd(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, ""); // Remove caracteres não numéricos (letras e outros); 
    if(valor.length > 2){
        valor = valor.slice(0, 2);              // Limita até 2 digitos.
    }

    // Aplicando formatação no padrão (00)
    if(valor.length >= 2){
        // Insere os 2 parenteses à partir da digitação do 2 digito.
        campo.value = valor.replace(/^(\d{2})$/, "($1)"); 
    }else{
        campo.value = valor;
    }
}

function mascaraCel(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, ""); // Remove caracteres não numéricos (letras e outros); 
    if(valor.length > 9){
        valor = valor.slice(0, 9);              // Limita até 9 digitos.
    }

    // Aplicando formatação no padrão 00000-0000
    if(valor.length >= 6){
        // Insere oo traço à partir da digitação do 6 digito.
        campo.value = valor.replace(/^(\d{5})(\d{1,4})$/, "$1-$2"); 
    }else{
        campo.value = valor;
    }
}

function mascaraTel(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, ""); // Remove caracteres não numéricos (letras e outros); 
    if(valor.length > 8){
        valor = valor.slice(0, 8);              // Limita até 8 digitos.
    }

    // Aplicando formatação no padrão 0000-0000
    if(valor.length >= 5){
        // Insere oo traço à partir da digitação do 6 digito.
        campo.value = valor.replace(/^(\d{4})(\d{1,4})$/, "$1-$2"); 
    }else{
        campo.value = valor;
    }
}

function mascaraCnpj(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, ""); // Remove caracteres não numéricos (letras e outros); 
    if(valor.length > 14){
        valor = valor.slice(0, 14);              // Limita até 14 digitos.
    }

    // Aplicando formatação no padrão 00.000.000/0000-00
    if(valor.length >= 13){
        // Insere os 2 pontos, a barra e o traço à partir da digitação do 13° digito.
        campo.value = valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/, "$1.$2.$3/$4-$5"); 
    }else if(valor.length >= 9){
        // Insere os 2 pontos e a barra à partir da digitação do 9° digito.
        campo.value = valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/, "$1.$2.$3/$4");
     }else if(valor.length >= 6){
        // Insere os 2 pontos à partir da digitação do 6° digito.
        campo.value = valor.replace(/^(\d{2})(\d{3})(\d{1,3})$/, "$1.$2.$3");
    }else if(valor.length >= 3){
        // Insere os 1 ponto à partir da digitação do 3° digito.
        campo.value = valor.replace(/^(\d{2})(\d{1,3})$/, "$1.$2");
    }else{
        campo.value = valor;
    }
}