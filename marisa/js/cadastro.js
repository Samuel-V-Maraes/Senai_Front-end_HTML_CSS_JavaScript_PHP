function mostraPj(id){
    // $(".form1").hide(); // Oculta o elemento sem uso de efeito. 
    // $(".form1").show();  // Mostra o elemento sem uso de efeito.
    // $(".form1, .termo_cpf").fadeOut("slow"); // Oculta o elemento com uso de efeito.
    // $(".form1_1, .termo_cnpj").fadeIn("slow"); // Mostra o elemento com uso de efeito.
    $(".form1, .termo_cpf").hide();
    $(".form1_1, .termo_cnpj").fadeIn("slow");
}

function mostraPf(id){
    $(".form1_1, .termo_cnpj").hide();
    $(".form1, .termo_cpf").fadeIn("slow");
    
}
function enviarDados(){
    var nome = document.getElementById("nome_id").value;
    var data_nasc = document.getElementById("dataNasc").value;
    var cpf = document.getElementById("cpf").value;
    var ddd = document.getElementById("ddd").value;
    var celular = document.getElementById("celular").value;
    var ddd2 = document.getElementById("ddd2").value;
    var tel = document.getElementById("tel").value;
    var sexo = "";
    if (document.getElementById("masc").checked) {
        sexo = "Masculino";
    } else if (document.getElementById("fem").checked) {
        sexo = "Feminino";
    } else {
        sexo = "Não informado";
    }

    var nome_emp = document.getElementById("nome_emp").value;
    var nome_resp = document.getElementById("nome_resp").value;
    var cnpj = document.getElementById("cnpj").value;
    var uf = document.getElementById("uf").value;
    var icms = document.getElementById("icms").value;
    var ie = document.getElementById("ie").value;
    var ddd1_1 = document.getElementById("ddd1_1").value;
    var celular1 = document.getElementById("celular1").value;
    var ddd2_1 = document.getElementById("ddd2_1").value;
    var tel1 = document.getElementById("tel1").value;
    var email = document.getElementById("email").value;
    var token = document.getElementById("token").value;
    var senha = document.getElementById("senha").value;
    var senha1 = document.getElementById("senha1").value;
    var termo = document.getElementById("termo").value;
    var pemail = document.getElementById("pemail").value;
    var pcelular = document.getElementById("pcelular").value;
    alert(nome + "/" + data_nasc + "/" + cpf + "/" +  ddd + "/" + celular + "/" + ddd2 + "/" + tel + "/" + sexo + "/" + nome_emp + "/" + nome_resp + "/" +
        cnpj + "/" + uf + "/" + icms + "/" + ie + "/" + ddd1_1 + "/" + celular1 + "/" + ddd2_1 + "/" + tel1 + "/" + email + "/" + token + "/" + senha + "/" + senha1 + "/" +
        termo + "/" + pemail + "/" + pcelular );
}
