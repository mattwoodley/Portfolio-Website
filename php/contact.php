<?php

if(isset($_POST['submit'])) {
    if(isset($_POST['email']) && $_POST['email'] != ''){
        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
            
            $email_name = $_POST['name'];
            $email_subject = $_POST['subject'];
            $email_address = $_POST['email'];
            $email_message = $_POST['message'];

                 
            if(isset($_POST['name'])) {
                $email_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
            }

            if(isset($_POST['subject'])) {
                $email_subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
            }

            if(isset($_POST['email'])) {
                $email_address = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
                $email_address = filter_var($email_address, FILTER_VALIDATE_EMAIL);
            }
              
            if(isset($_POST['message'])) {
                $email_message = htmlspecialchars($_POST['message']);
            }
            
            $recipient = "contact@mattwoodley.net";
            $header = "From: ".$email_address;
            $body = "";
            
            $body .= "From: ".$email_name. "\r\n";
            $body .= "Email: ".$email_address. "\r\n";
            $body .= "Subject: ".$email_subject. "\r\n";
            $body .= "Message: ".$email_message. "\r\n";
            
            
            mail($recipient, $email_subject, $body, $header);
            header("Location: ../index.html?mailsent");
        } else {
            header("Location: ../index.html?mailnotsent");
        }
    }
}

?>