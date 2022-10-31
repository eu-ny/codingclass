// 01 HTML / CSS 디자인 구성
// 02 클릭한 카드 뒤집기
// 03 두 개의 카드를 뒤집어서 확인하기 (첫번째클릭, 두번째클릭 비교)

const memoryWrap = document.querySelector(".memory__wrap");
const memoryCards = document.querySelectorAll(".memory__card li");

let cardOne, cardTwo;
let disableDeck = false;
let matchedCard = 0;

let memorySound = [
    "../assets/audio/gameTrue01.mp3",
    "../assets/audio/gameFalse01.mp3",
    "../assets/audio/up.mp3",
  ];
let soundMatch = new Audio(memorySound[0]);
let soundUnMatch = new Audio(memorySound[1]);
let soundSuccess = new Audio(memorySound[2]);
console.log(soundMatch)
// 01 카드 뒤집기 이벤트 설정
function flipCard(e){
    //카드 뒤집기
    let clickedCard  = e.target;
    
    // 클릭한 카드가 카드원과 일치하지 않을 때.
    if(clickedCard !== cardOne && !disableDeck){
        clickedCard.classList.add("flip");

        // console.log(clickedCard);

        // 두개의 카드 정보 가져오기 (카드 원과 투의 정보 순서대로 들어가게 하기)
        if(!cardOne){
            return cardOne = clickedCard; 
            // 카드원이 아닌 경우 카드 투를 출력 이때 카드원 정보도 함께 출력시키기
            // cardOne = clickedCard;
            // return;
        }
        cardTwo = clickedCard
        disableDeck = true;

        let cardOneImg = cardOne.querySelector(".back img").src;
        let cardTwoImg = cardTwo.querySelector(".back img").src;

        matchCards(cardOneImg, cardTwoImg);

        // console.log(cardOneImg);
        // console.log(cardTwoImg);
    }
}

// 02 카드 확인 (두개의 이미지 비교하기)
function matchCards(img1, img2){
    if(img1 == img2){
        //카드원과 투의 이미지 정보가 같을 경우 
        matchedCard++;
        // alert("성공!");

        if(matchedCard == 8){
            alert("게임 오버ㅜㅜ");
        }
        soundMatch.play();

        // 이미지가 맞았을 경우 일치 메세지가 다시 뜨지 않게.
        cardOne.removeEventListener("clikc", flipCard);
        cardTwo.removeEventListener("clikc", flipCard);
        cardOne = cardTwo = "";
        disableDeck = false;

    } else {
        // alert("이미지가 일치하지 않습니다.");
        // 일치하지 않는 경우(틀린 효과음, 이미지가 좌우로 흔들리도록!)
        setTimeout(() => {
            cardOne.classList.add("shakeX");
            cardTwo.classList.add("shakeX");
          }, 500);

        setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
        }, 1600);

        setTimeout(() => {
            soundUnMatch.play();
        },600)
      }
}

//카드 섞기
function shuffledCard(){
    cardOne = cardTwo = "";
    disableDeck = false;
    matchedCard = 0;

    let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    let result = arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

    memoryCards.forEach((card, index) => {
        card.classList.remove("flip");

        setTimeout(() => {
            card.classList.add("flip")
        }, 200 * index);

        setTimeout(() => {
            card.classList.remove("flip");
        }, 4000);

        let imgTag = card.querySelector(".back img");
        imgTag.src = `../assets/img/memoryCard0${arr[index]}.png`;
    })
}
shuffledCard();


// 01 카드 클릭 시 뒤집기 이벤트 실행
memoryCards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });