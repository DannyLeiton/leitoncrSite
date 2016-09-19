<?php
date_default_timezone_set('Etc/UTC');

require '../PHPMailer-master/PHPMailerAutoload.php';

// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

//Create a new PHPMailer instance
$mail = new PHPMailer;

$mail->isSMTP();

$mail->SMTPDebug = 2;

$mail->Debugoutput = 'html';

$mail->Host = 'smtp.gmail.com';

$mail->Port = 587;

$mail->SMTPSecure = 'tls';

$mail->SMTPAuth = true;

$mail->Username = "dleitonrivera@gmail.com";

$mail->Password = "GugoloDanilo2016++";

//Set who the message is to be sent from
$mail->setFrom('dleitonrivera@gmail.com', 'CodeRoasters');

//Set an alternative reply-to address
$mail->addReplyTo($email_address, $name);

//Set who the message is to be sent to
$mail->addAddress('dleitonrivera@gmail.com', 'CodeRoasters');

//Set the subject line
$mail->Subject = "Website Contact Form:  $name";

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML("You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message");

//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
    return false;
} else {
    echo "Message sent!";
    return true;
}
   
?>
