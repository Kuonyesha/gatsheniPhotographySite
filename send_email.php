<?php




// $name = htmlspecialchars($_POST['name']);
// $email = htmlspecialchars($_POST['email']);
// $message = htmlspecialchars($_POST['message']);

$to = "info@mpikoko.co.za"; // Replace with your email

$subject = "New Form Submission";

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];



// $message = "Name: $name\nEmail: $email\nMessage: $message";
// $headers = "From: $email";

$body = "<h2>New Form Submission</h2><p>Name: $name</p><p>Email: $email</p><p>Message: $message</p>";

// Set headers to indicate HTML content
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $name <$email>\r\n";

if (mail($to, $subject, $message, $headers)) {
    ;
    echo "Email sent successfully!";
} else {
    echo "Error sending email.";
}

// if (mail($to, $subject, $message, $headers)) {
//     echo "Email sent successfully!";
// } else {
//     echo "Error sending email.";
// }

// if (mail($to, $subject, $message, $headers)) {
//     echo "Email sent successfully!";
// } else {
//     echo "Error sending email.";
// }




ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


