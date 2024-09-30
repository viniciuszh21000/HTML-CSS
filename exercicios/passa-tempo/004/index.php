<?php
    if(isseT($_POST['submit'])) {

        // print_r('Nome: ' .$_POST['nome']);
        // print_r('<br>')
        // print_r('E-mail: ' .$_POST['email']);
        // print_r('<br>')
        // print_r('Telefone: ' .$_POST['telefone']);
        // print_r('<br>')
        // print_r('Genero: ' .$_POST['genero']);
        // print_r('<br>')
        // print_r('Data de nascimento: ' .$_POST['data_nascimento']);

        include_once('formulario.php')

        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $genero = $_POST['genero'];
        $data_nasc = $_POST['data_nascimento'];

        $result = mysqli_query($conexao, "INSERT INTO usuarios(nome, email, telefone, genero, data_nasc) VALUES($nome,$email,$telefone,$genero,$data_nasc)")

    }
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilo/style.css">
</head>
<body>
    <div class="box">
        <form action="idex.php" method="post">
            <fieldset>
                <legend><b> Formulário do cliente </b></legend>
                <br>
                <div class="inputBox">
                    <input type="text" name="nome" id="inome" class="inputUser" required>
                    <label for="inome" class="labelInput">Nome Completo:</label>
                </div>

                <br><br>

                <div class="inputBox">   
                    <input type="email" name="email" id="iemail" class="inputUser" required>
                    <label for="iemail" class="labelInput">E-mail:</label>
                </div>

                <br><br>

                <div class="inputBox">
                    <input type="tel" name="tel" id="itel" class="inputUser" required>
                    <label for="itel" class="labelInput">Telefone:</label>
                </div>

                <br>

                <p>Sexo:</p>
                <input type="radio" name="genero" id="ifem" value="feminino">
                <label for="ifem">Feminino</label>

                <input type="radio" name="genero" id="imasc" value="masculino">
                <label for="imasc">Masculino</label>

                <input type="radio" name="genero" id="iout" value="outro">
                <label for="iout">Outro</label>
                <div class="inpuBox">

                <br><br>

                    <label for="data_nascimento"><b>Data de nascimento:</b></label>
                    <input type="date" name="data_nascimento" id="data_nascimento" required>
                    

                <br><br>

                <input type="submit" value="submit" id="submit">
            </fieldset>
        </form>
    </div>
</body>
</html>