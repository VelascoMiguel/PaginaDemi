<?php
// Verifica si el formulario fue enviado y si el correo electrónico no está vacío
if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST['email'])) {

  // Obtén el correo electrónico ingresado en el formulario
  $email = $_POST['email'];

  // Define el nombre del archivo de texto donde se guardarán los correos electrónicos
  $archivo = 'correos.txt';

  // Abre el archivo en modo de escritura y agrega el correo electrónico
  $contenido = file_get_contents($archivo);
  $contenido .= $email . "\n";
  file_put_contents($archivo, $contenido);

  if (file_put_contents($archivo, $contenido) === false) {
    echo "Error al escribir en el archivo";
  }
  

  error_reporting(E_ALL);
ini_set('display_errors', '1');

var_dump($_POST);

echo $contenido;

}
