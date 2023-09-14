<?php
// PHP Documentation

// Retrieve form data from POST request
$yourName = $_POST['yourName'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$socialMedia = $_POST['socialMedia'];

// Check if email and message fields are not empty
if (!empty($email) && !empty($message)) {
    // Validate the email address using FILTER_VALIDATE_EMAIL
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Define recipient email address, subject, email body, and sender info
        $receiver = "regala.johnraymond20@gmail.com";
        $subject = "From: $yourName <$email>";
        $body = "Name: $yourName\nEmail: $email\nPhone: $phoneNumber\nSocial Media Link: $socialMedia\nMessage: $message\n\nRegards, \n$yourName ";
        $sender = "From: $email";
        
        // Attempt to send the email using the mail() function
        if (mail($receiver, $subject, $body, $sender)) {
            echo "Your message has been sent";
        } else {
            echo "Sorry, failed to send your message!";
        }
    } else {
        echo "Enter a valid email address!";
    }
} else {
    echo "Email and password fields are required";
}
?>
