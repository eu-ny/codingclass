 // const modalBtn = document.querySelector("#header .login__btn"); 
// const modalClose = document.querySelector(".btn-close"); 
// const modalCont = document.querySelector(".login__popup");


// //버튼을 클릭했을 때 이벤트 실행시키기
// modalBtn.addEventListener("click", () => {
//     modalCont.classList.add("open");
// });

// modalClose.addEventListener("click", () => {
//     modalCont.classList.remove("open");
// });

const loginbtn = document.querySelector(".loginBtn");
const loginPopup = document.querySelector(".login__popup");
const loginClose = document.querySelector(".btn-close");

loginbtn.addEventListener("click", () => {
    loginPopup.classList.add("open");
});
loginClose.addEventListener("click", () => {
    loginPopup.classList.remove("open");
});