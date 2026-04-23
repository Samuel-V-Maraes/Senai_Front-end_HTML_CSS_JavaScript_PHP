function mascaraData(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, "");// remove caaracteres não numericos (letras)
    if(valor.length > 8){
        valor = valor.slide(0, 8); //não permite onumero de caracteres digitados
    }



    if(valor.length >= 5){
        campo.value = valor.replace(/^(\d{2})(\d{2})(\d{1,4})$/, "$1/$2/$3");
    }else if(valor.length >= 3){
        campo.value = valor.replace(/^(\d{2})(\d{1,2})$/, "$1/$2");
    }else{
        campo.value = valor
    }
    
}
function mascaraCPF(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, "");// remove caaracteres não numericos (letras)
    if(valor.length > 11){
        valor = valor.slide(0, 11); //não permite onumero de caracteres digitados
    }
    
    
    if(valor.length >= 10){
        campo.value = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4");
    }else if(valor.length >= 7){
        campo.value = valor.replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
    }else if(valor.length >= 4 ){
        campo.value = valor.replace(/^(\d{3})(\d{1,3})$/, "$1.$2");
    }else{
        campo.value = valor;
    }
}
function mascaraDDD(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, "");// remove caaracteres não numericos (letras)
    if(valor.length > 2){
        valor = valor.slide(0, 2); //não permite onumero de caracteres digitados
    }


    if(valor.length >= 3){
        campo.value = valor.replace(/^(\d{1,2})$/, "($1)");
    }else if(valor.length >= 1){
        campo.value = valor.replace(/^(\d{1,2})$/, "($1)");
    }else{
        campo.value = valor;
    }
}
function mascaraCel(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, "");// remove caaracteres não numericos (letras)
    if(valor.length > 9){
        valor = valor.slide(0, 9); //não permite onumero de caracteres digitados
    }


    if(valor.length >= 5){
        campo.value = valor.replace(/^(\d{5})(\d{1,4})$/, "$1-");
    }else{
        campo.value = valor;
    }
}
function mascaraTel(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, "");// remove caaracteres não numericos (letras)
    if(valor.length > 8){
        valor = valor.slide(0, 8); //não permite onumero de caracteres digitados
    }


    if(valor.length >= 4){
        campo.value = valor.replace(/^(\d{4})(\d{1,4})$/, "$1-$2");
    }else{
        campo.value = valor;
    }
}