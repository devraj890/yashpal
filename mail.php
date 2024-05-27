
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Set up email headers
    $to = "devraj7879213604@gmail.com"; // Change this to your recipient email address
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "we will contact you soon";
    } else {
        echo "Error sending email.";
    }
}
?>
