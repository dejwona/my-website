<?php
error_reporting(E_ALL);
require 'external/PHPMailer/PHPMailerAutoload.php';
ini_set('display_errors',1);

//var_dump($_POST);

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = "Wiadomość ze strony";

$body = "
	<p><b>Nadawca: {$name}</b></p>
	<p><b>Email: {$email}</b></p>
	<p>".nl2br($message)."</p>
";
//Create a new PHPMailer instance
$mail = new PHPMailer();
$mail->CharSet = "UTF-8";
$mail->isSMTP();
$mail->IsHTML(true);
$mail->SMTPDebug = 0;
$mail->Host = "mail.lukomska.eu";
$mail->Port = "587";
$mail->SMTPSecure = "tls";
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->SMTPAuth = true;
$mail->Username = "iwona@lukomska.eu";
$mail->Password = "L^XFtxv6!DWo";
$mail->setFrom('iwona@lukomska.eu', "iwonalukomska.eu GOŚĆ");
$mail->addReplyTo($email, $name);
$mail->addAddress('iwograf@gmail.com', "Iwona");
$mail->Subject = $subject;
$mail->msgHTML($body);
$mail->AltBody = $message;

if (!$mail->send()) 
{
    //echo "Mailer Error: " . $mail->ErrorInfo;
	echo false;
} 
else 
{
    echo true;
}
exit();
?>