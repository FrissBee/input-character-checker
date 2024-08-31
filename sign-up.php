<?php

session_start();

if (!$_POST) {
  $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
}

if ($_POST) {
  
  if(isset($_SESSION['csrf_token']) && isset($_POST["csrf_token"]) && $_POST['csrf_token'] === $_SESSION['csrf_token']) {

    if (isset($_POST['email-hidden']) && isset($_POST['password-hidden'])) {

      var_dump($_POST['email-hidden']);
      echo "<br>======================<br>";
      var_dump($_POST['password-hidden']);


    } else {
      header("Location: ./");
    }

  } else {
    header("Location: ./");
  }

}

require_once './tbl/sign-up.tbl.php';