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
    <div id="skip">
        <a href="#header">헤더 영역 바로가기</a>
        <a href="#main">컨텐츠 영역 바로가기</a>
        <a href="#footer">푸터 영역 바로가기</a>
    </div>

    <?php include "../include/header.php" ?>

    <main id="main">
        <section id="banner">
            <h2 ciass>회원가입 페이지 입니다.</h2>
            <div class="banner__inner2 container">
                <div class="img">
                    <img src="../assets/img/banner_bg02.svg" alt="배너 이미지">
                </div>
                <div class="desc">
<?php
    include "../connect/connect.php";
    include "../connect/session.php";

    $youEmail = $_POST['youEmail'];
    $youPass = $_POST['youPass'];

    // echo $youEmail, $youPass;

    //여러분의 정보 --> 쿠키(3일 동안 보지 않기도 쿠키에 저장된 로그인 정보로 판단하는 것 그래서 쿠키 파일을 삭제하고 다시 들어가면 팝업창이 다시 뜬다.) / 세션 / 리덕스(리엑트 저장)
    
    function msg($alert){
        echo "<p class='alert'>($alert)</p>";
    }

    //이메일 검사
    if( !filter_var($youEmail, FILTER_VALIDATE_EMAIL)){
        msg("이메일이 잘못되었습니다. <br>올바른 이메일을 입력하세요");
        exit;
    }

    //비밀번호 
    if($youPass == null || $youPass == ''){
        msg("비밀번호를 입력해주세요!");
        exit;
    }

    //데이터 가져오기 --> 유효성 검사 --> 데이터 조회 --> 로그인
    // $sql = "SELECT myMemberID, youEmail, youName, youPass FROM myMember WHERE youEmail = '$youEmail' AND youPass = '$youPass'";
    // $result = $connect -> query($sql);    $result = $connect -> query($sql);

    // if($result){
    //     $count = $result -> num_rows;

    //     if($count == 0){
    //         msg("이메일 또는 비밀번호가 틀렸습니다.");
    //         exit;
    //     }else{
    //         $info = $result -> fetch_array(MYSQLI_ASSOC);//올림차순으로 데이터 가져오기
    //         echo "<pre>";
    //         var_dump($info);
    //         echo "</pre>";
    //     }
    // }else{
    //     msg("에러발생 - 관리자에게 문의하세요!");
    // }
    $sql = "SELECT myMemberID, youEmail, youName, youPass FROM myMember WHERE youEmail = '$youEmail' AND youPass = '$youPass'";
    $result = $connect -> query($sql);
    if($result){
        $count = $result -> num_rows;
        if($count == 0){
            msg("이메일 또는 비밀번호가 틀렸습니다!");
            // exit;
        }else{
            $info = $result -> fetch_array(MYSQLI_ASSOC);

            $_SESSION['myMemberID'] = $info['myMemberID'];
            $_SESSION['youEmail'] = $info['youEmail'];
            $_SESSION['youName'] = $info['youName'];

            // echo "<pre>";
            // var_dump($info);
            // echo "</pre>";

            Header("Location: ../main/main.php");
        }
    }else{
        msg("에러발생 - 관리자에게 문의해주세요:)");
    }
?>

                </div>
            </div>
        </section>
        <!-- //banner -->

    </main>
    <!-- //main -->
    
    <?php include "../include/footer.php" ?>

    <?php include "../login/login.php" ?>
    
    <script src="../assets/js/cutom.js"></script>
</body>
</html>