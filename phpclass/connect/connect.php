<?php
    $host = "localhost";
    $user = "praise1109";
    $pw = "leehaeun3727!";
    $db = "praise1109";
    $connect = new mysqli($host, $user, $pw, $db);
    $connect -> set_charset("utf8");
    if(mysqli_connect_errno()){
        echo "database connect false";
    } else {
        echo "database connect true";
    }
?>