<?php
    class conexao{
        function conection(){
            $this -> server = "localhost";
            $this -> user = "root";
            $this -> pass = "";
            $this -> base = "bd_marisa";
            $this -> conectar = mysqli_connect($this->server, $this->user, $this->pass, $this->base);
        }
    }
?>
