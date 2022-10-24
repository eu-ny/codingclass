hljs.highlightAll();

//버튼
const modalBtn = document.querySelector(".source__btn"); 
const modalClose = document.querySelector(".title-bar .close"); 
const modalCont = document.querySelector(".window");


//모달버튼을 클릭했을 때 이벤트 실행시키기
modalBtn.addEventListener("click", () => {
    modalCont.classList.add("show"); // 요소를 안보이게하는 css속성은 애니메이션을 넣기 불가. 때문에 클래스 리스트.에드를 사용하여 클래스로 쇼를 붙여서 애니메이션 처리를 가능하게 해준다. 
    modalCont.classList.remove("hide");
});

modalClose.addEventListener("click", () => {
    modalCont.classList.add("hide"); // close박스 클릭하면 cont창 사라지게 실행.
});


//탭 메뉴
const tabBtn = document.querySelectorAll(".window .menu-bar > div"); 
const tabCont = document.querySelectorAll(".window .main > div");

tabBtn.forEach((element, index) => {
    //엘리먼트 요소인 버튼을 클릭함
    element.addEventListener("click", (event) => {  //클릭한 값이 이벤트에 저장된다.
        event.preventDefault();   //클릭을 해도 반응되지 않도록 함. (기본값은 맨 위로 이동)

        //클래스의 active를 모두 제거시킨다.
        tabBtn.forEach(li => {
            li.classList.remove("active");  //엑티브를 지워준다.
        });
        //내가 클릭한 버튼에 active 추가하기
        element.classList.add("active");
        
        //버튼을 클릭하면 모든 자식 박스(컨텐츠)를 숨긴다.
        tabCont.forEach(div => {
            div.style.display = "none";
        });

        //클릭한 버튼과 관련된 콘텐츠 박스(div)를 보이게 한다.
        //[i]클릭한 버튼과 [i]콘텐츠 박스를 보이게 한다. (첫번째 버튼 - 첫번째 콘텐츠)
        tabCont[index].style.display = "block";
    });
});