<?php
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = strip_tags(trim($_POST['name'] ?? ''));
    $contact = strip_tags(trim($_POST['contact'] ?? ''));
    $message = strip_tags(trim($_POST['message'] ?? ''));

    if(!$name || !$contact || !$message){
        header("Location: iletisim.html?status=error");
        exit;
    }

    $to = "destek@bytedestek.com";
    $subject = "Yeni iletişim talebi: $name";
    $body = "İsim: $name\nİletişim: $contact\n\nMesaj:\n$message\n";
    $headers = "From: webmaster@bytedestek.com\r\nReply-To: $contact";

    $sent = mail($to, $subject, $body, $headers);

    if($sent){
        header("Location: iletisim.html?status=ok");
    } else {
        header("Location: iletisim.html?status=error");
    }
    exit;
}
header("Location: index.html");
exit;
?>
