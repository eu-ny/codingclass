<?php
    include "../connect/connect.php";
    include "../connect/session.php";
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP 사이트 만들기</title>

    <?php include "../include/link.php" ?>

</head>
<body>
   
<?php
    $myMemberID = $_SESSION['myMemberID'];
    $blogAuthor = $_SESSION['youName'];
    $blogCate = $_POST['blogCate'];
    $blogTitle = $_POST['blogTitle'];
    $blogContents = nl2br($_POST['blogContents']);
    $blogView = 1;
    $blogLike = 0;
    $regTime = time();

    $blogImgFile = $_FILES['blogFile'];
    $blogImgSize = $_FILES['blogFile']['size'];
    $blogImgType = $_FILES['blogFile']['type'];
    $blogImgName = $_FILES['blogFile']['name'];
    $blogImgTmp = $_FILES['blogFile']['tmp_name'];

    //이미지 파일 명 확인
    $fileTypeExtension = explode("/", $blogImgType);
    $fileType = $fileTypeExtension[0]; //image
    $fileExtension = $fileTypeExtension[1]; //png

    //이미지 사이즈 확인
    if($blogImgSize > 1000000) {
        echo "<script>alert('이미지 용량이 1메가를 초과했습니다.'); history.back(1)</script>";


    }

    //이미지 타입 확인
    if($fileType == "image"){
        if($fileExtension == "jpg" || $fileExtension == "jpeg" || $fileExtension == "png" || $fileExtension == "gif"){
            $blogImgDir = "../assets/img/blog/";
            $blogImgName = "Img_".time().rand(1,99999)."."."{$fileExtension}";
            echo "<script>alert('굿굿 ;)')</script>";
            //
        }else {
            echo "<script>alert('지원하는 이미지 파일이 아닙니다.'); history.back(1)</script>";
        }
    }else if ($fileType == "" || $fileType == null){
        echo "이미지를 첨부하지 않았습니다.";
    }else {
        echo "이미지를 지원하는 파일 형식이 아닙니다.";
    }

?>

</body>
</html>