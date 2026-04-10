<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style type="text/css">@import url("css/config_ini.css");</style>
    <style type="text/css">@import url("css/cadastro.css");</style>

    <link rel="shortcut icon" type="image/x-icon" media="all" href="images/favicon.png" />

    <title>Marisa - Cadastro</title>
</head>
<body>
    <!-- Inicio - Importa Topo -->
    <?php include("includes/topo.php");?>
    <!-- Fim - Importa Topo -->

    <!-- Inicio - Cadastro -->




    <div class="container">
  <h2>Quer se cadastrar?</h2>
  <p>Por favor preencha os campos abaixo, vai ser rapidinho</p>

  <!-- RADIO -->
  <div class="radio-group">
    <label class="radio">
      <input type="radio" name="tipo" checked>
      <span></span>
      Pessoa Física
    </label>
    <label class="radio">
      <input type="radio" name="tipo">
      <span></span>
      Pessoa Jurídica
    </label>
  </div>

  <div class="grid">
    <!-- ESQUERDA -->
    <div>
      <label>Nome completo*</label>
      <input class="focus" type="text" placeholder="Informe seu nome">

      <div class="row">
        <div>
          <label>Data de nascimento*</label>
          <input type="text" placeholder="00/00/0000">
        </div>
        <div>
          <label>CPF*</label>
          <input type="text" placeholder="000.000.000-00">
        </div>
      </div>

      <label>Gênero*</label>
      <div class="radio-group">
        <label class="radio"><input type="radio" name="g" checked><span></span>Feminino</label>
        <label class="radio"><input type="radio" name="g"><span></span>Masculino</label>
        <label class="radio"><input type="radio" name="g"><span></span>Não informar</label>
      </div>

      <div class="row">
        <div><label>DDD*</label><input type="text" placeholder="(00)"></div>
        <div><label>Celular*</label><input type="text" placeholder="0000-0000"></div>
        <div><label>DDD</label><input type="text" placeholder="(00)"></div>
        <div><label>Telefone</label><input type="text" placeholder="0000-0000"></div>
      </div>
    </div>

    <!-- DIREITA -->
    <div>
      <label>E-mail*</label>
      <input type="email" placeholder="Informe o e-mail">

      <button class="btn">RECEBER TOKEN DE CADASTRO</button>
      <small>O token será enviado por e-mail/SMS*</small>

      <label>Token*</label>
      <input type="text" placeholder="Informe o seu token">

      <label>Senha*</label>
      <input type="password" placeholder="Insira a senha">

      <label>Confirmar Senha*</label>
      <input type="password" placeholder="Insira a senha novamente">
    </div>
  </div>

  <!-- TERMOS -->
  <div class="terms">
    <input type="checkbox">
    Li e concordo com as <a href="#">Condições Gerais</a> e <a href="#">Política de Privacidade</a>
  </div>

  <button class="btn finalizar">FINALIZAR CADASTRO</button>
</div>
    <!-- Fim - Cadastro -->

    <!-- Inicio - Importa Rodape -->
    <?php include("includes/rodape.php");?>
    <!-- Fim - Importa Rodape -->

</body>
</html>