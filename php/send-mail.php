<?php
  if (isset($_POST['submit'])) {

    $to = "nest2wings@hotmail.com";
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['body'];

    $body = "From: $name\n E-Mail: $email\n Message: $message";

    echo("Your message has been sent!");
    mail($to, $subject, $body);
  } else {

    echo("Blarg!");

  }
?>
