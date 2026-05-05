<?php
    $nome = $_POST['nome'];
    $dtnasc = $_POST['dtnasc'];
    $cpf = $_POST['cpf'];
    $genero = $_POST['genero'];
    $dd1 = $_POST['dd1'];
    $cel = $_POST['cel'];
    $dd2 = $_POST['dd2'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $token = $_POST['token'];
    $senha1 = $_POST['senha1'];

    echo $nome." / ".$dtnasc." / ".$cpf." / ".$genero." / ".$dd1." / ".$cel." / ".$dd2." / ".$tel." / ".$email." / ".$token." / ".$senha1;
?>