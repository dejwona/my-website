<?php
// tutaj sprawdź czy formularz został wysłany i przygotuj dane w zmiennej
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) ) {
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $message = trim($_POST['message']);
        $msg = 'Witaj'. ' ' . $name;
    }
}

?>