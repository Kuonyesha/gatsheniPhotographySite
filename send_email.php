<?php



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);

    $to = "propertyresqmedia@gmail.com"; // Replace with your email
    $subject = "New Form Submission";
    $message = "Name: $name\nEmail: $email";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    echo "Email sent successfully!";

}


?>