// 01 HTML / CSS 디자인 구성
// 02 클릭한 카드 뒤집기
// 03 두 개의 카드를 뒤집어서 확인하기 (첫번째클릭, 두번째클릭 비교)

const memoryWrap = document.querySelector(".memory__wrap");
const memoryCards = document.querySelectorAll(".memory__card li");

const memory_score = document.querySelector(".memory__score > span");

let cardOne, cardTwo;
let disableDeck = false;
let matchedCard = 0;

let matchScore = 100;

let memorySound = [
    "../assets/audio/gameTrue01.mp3",
    "../assets/audio/gameFalse01.mp3",
    // "../assets/audio/up.mp3",
  ];
let soundMatch = new Audio(memorySound[0]);
let soundUnMatch = new Audio(memorySound[1]);
let soundSuccess = new Audio(memorySound[2]);
// console.log(soundMatch)

// function MemoryStart(){}

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
        soundMatch.play();

        if(matchedCard == 8){
            endGame();
        } 

        // 이미지가 맞았을 경우 일치 메세지가 다시 뜨지 않게.
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
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
        cardOne.classList.remove("shakeX", "flip");
        cardTwo.classList.remove("shakeX", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
        }, 1600);


        setTimeout(() => {
            soundUnMatch.play();
        },600)
        
        matchScore = matchScore - 10;


        if (matchScore == 0) {
            setTimeout(() => {
                endGame();
            },500)
        }

    }
    memory_score.innerText = matchScore;
}

//카드 섞기
function shuffledCard(){
    cardOne = cardTwo = "";
    disableDeck = false;
    matchedCard = 0;

    // score.innerText = matchScore;

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
    });

}

 // 01 카드 클릭 시 뒤집기 이벤트 실행
 memoryCards.forEach((card) => {
    card.addEventListener("click", flipCard);
});


const MemoryStartBtn = document.querySelector(".memory__start__btn");
const MemoryRule = document.querySelector(".memory__rule");
const MemoryGame = document.querySelector(".memoryGame");


//게임 시작 버튼 클릭시 셔플
MemoryStartBtn.addEventListener("click", () => {
    MemoryRule.style.display = "none";
    shuffledCard();
});

//게임성공
function clear() {
    if(matchScore > 0 ){
        alert("성공하셨습니다. 점수는" + matchScore + "점 입니다." );
        restart();
    }
}
memoryCards.forEach(el => {
    el.classList.contains("flip");
});

//게임 오버시
const memoryOver = document.querySelector(".memory__over");
const memoryMsg = document.querySelector(".gameOver__msg");
const memoryRestart = document.querySelector(".memory__re__btn");
function endGame(){
    memoryOver.style.display = "block";
    memoryMsg.innerHTML = `점수는 ${matchScore} 입니다.`;

    memoryCards.forEach((card) => {
        card.removeEventListener("click", flipCard);
    });

}
memoryRestart.addEventListener("click", restart);


//게임 리셋
function restart(){
    memoryOver.style.display = "none";
    // matchedCard = 0;
    matchScore = 100;
    memory_score.innerText = matchScore;
    setTimeout(() => {
        shuffledCard();
    }, 1000);
    memoryCards.forEach((card) => {
        card.addEventListener("click", flipCard);
    });
}