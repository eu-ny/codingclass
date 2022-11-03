<?php
    include "../connect/connect.php";
    include "../connect/session.php";
    include "../connect/sessionCheck.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <?php include "../include/head.php" ?>
</head>
<body>
    <div id="skip">
        <a href="#header">헤더 영역 바로가기</a>
        <a href="#main">컨텐츠 영역 바로가기</a>
        <a href="#footer">푸터 영역 바로가기</a>
    </div>
    <!-- //skip -->
    
    <?php include "../include/header.php" ?>
    <!-- //header -->

    <main id="main">
        <section id="join" class="container section">
            <h2>회원정보</h2>
            <p>회원 정보를 수정할 수 있습니다. </p>
            <div class="join__inner">
                <div class="join__info">
                    <div class="img">
                        <img src="../assets/img/imgDefault.svg" alt="s">
                    </div>
                    <div class="intro">
                        웹과 코딩에 관심이 많은 웹스토리보이입니다.
                    </div>
                    <div class="info">
                        <ul>
                            <li>
                                <strong>이메일</strong>
                                <span>webstoryboy@naver.com</span>
                            </li>
                            <li>
                                <strong>이름</strong>
                                <span>황상연</span>
                            </li>
                            <li>
                                <strong>닉네임</strong>
                                <span>리치클럽</span>
                            </li>
                            <li>
                                <strong>생일</strong>
                                <span>1999-09-03</span>
                            </li>
                            <li>
                                <strong>연락처</strong>
                                <span>010-0333-0444</span>
                            </li>
                            <li>
                                <strong>성별</strong>
                                <span>남자</span>
                            </li>
                            <li>
                                <strong>웹 사이트</strong>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                    <div class="btn">
                        <a href="mypageModify.php">수정하기</a>   
                        <a href="mypageRemove.php">탈퇴하기</a>   
                        <a href="mypageRemove.php">로그아웃</a>   
                    </div>
                   
                </div>
            </div>
        </section>
        <!-- //joinInfo -->
    </main>
    <!-- //main -->

    <?php include "../include/footer.php" ?>
    <!-- //footer -->
</body>
</html>