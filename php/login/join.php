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
                    어떤 일이라도 <em>노력</em>하고 즐기면  그 결과는 <em>빛</em>을 바란다고 생각합니다.<br>
                    회원가입을 축하드립니다.
                </div>
            </div>
        </section>
        <!-- //banner -->

        <section id="join" class="container">
            <h2>회원가입</h2>
            <div class="join__inner">
                <form action="joinSave.php" name="join" method="post">
                    <fieldset>
                        <legend>회원가입</legend>
                        <div class="join__box">
                            <div>
                                <label for="youEmail">이메일</label>
                                <input type="email" name="youEmail" id="youEmail" placeholder="이메일을 적어주세요!" required>
                            </div>
                            <div>
                                <label for="youName">이름</label>
                                <input type="text" name="youName" id="youName" placeholder="이름을 적어주세요!" required>
                            </div>
                            <div>
                                <label for="youNickName">닉네임</label>
                                <input type="text" name="youNickName" id="youNickName" placeholder="닉네임을 적어주세요!" required>
                            </div>
                            <div>
                                <label for="youPass">비밀번호</label>
                                <input type="password" name="youPass" id="youPass" placeholder="비밀번호를 적어주세요!" required>
                            </div>
                            <div>
                                <label for="youPassC">비밀번호 확인</label>
                                <input type="password" name="youPassC" id="youPassC" placeholder="확인 비밀번호를 적어주세요!" required>
                            </div>
                            <div>
                                <label for="youPhone">휴대폰 번호</label>
                                <input type="text" name="youPhone" id="youPhone" placeholder="휴대폰 번호를 적어주세요!" required>
                            </div>
                        </div>
                        <button class="join__btn" type="submit">회원가입 완료</button>
                    </fieldset>
                </form>
            </div>
        </section>
        <!-- //join -->



    </main>
    <!-- //main -->
    
    <?php include "../include/footer.php" ?>
</body>
</html>