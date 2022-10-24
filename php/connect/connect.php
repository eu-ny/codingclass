<?php
    // 기본 설정
    $host = "localhost";
    $user = "root";
    $pass = "root";
    $db = "phpclass";
    $connect = new mysqli($host, $user, $pass, $db);
    $connect -> set_charset("utf8");
    
    // $host = "localhost";
    // $user = "root";
    // $pass = "root";
    // $db = "phpclass";
    // $connect = new mysqli($host, $user, $pass, $db);
    // $connect -> set_charset("utf8");
    
    // 잘 접속했는지 확인하는 방법
    // if(mysqli_connect_errno()){
    //     echo "Database Connect False";
    // } else {
    //     echo "Database Connect True";
    // }
?>