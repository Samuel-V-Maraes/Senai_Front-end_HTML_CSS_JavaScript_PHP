<?php
    class cadastraUsuarioPf extends conexao{
        function __construct($nome, $dtnasc, $cpf, $genero, $dd1, $cel, $dd2, $tel, $email, $token, $senha1){
            parent:: conection();
            $this -> sql = "INSERT INTO usuario_pf(nome, dtnasc, cpf, genero, dd1, cel, dd2, tel, email, token, senha) VALUES('$nome', '$dtnasc', '$cpf', '$genero', '$dd1', '$cel', '$dd2', '$tel', '$email', '$token', '$senha1') ";
            $this -> executa = mysqli_query($this -> conectar, $this -> sql);
            $this -> error = mysqli_error($this -> conectar);
        }
    }
?>