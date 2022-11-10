// 선택자
const tetrisWrap = document.querySelector(".tetris__wrap");
const playGround = tetrisWrap.querySelector(".playground > ul");
const tetriScore = tetrisWrap.querySelector(".tetris__score > span");

const tetrisRuls = document.querySelector(".tetris___ruls");
const tetrisStrat = document.querySelector(".tetris___start");
const tetrisEnd = document.querySelector(".tetris___result");
const tetrisRestart = document.querySelector(".tetris___restart");

// 변수 설정
let rows = 17;
let cols = 12;
let tscore = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

// 블록 정보 설정
const movingItem = {
    type: "Tmino",
    direction: 0, //블록 모양 설정
    top: 2,
    left: 4,
};

// 블럭 좌표 값 설정
const blocks = {
    Tmino: [
        [
            [2, 1],
            [0, 1],
            [1, 0],
            [1, 1],
        ], // Tmino 기본모양 : 객체안에 배열배열배열...
        [
            [1, 2],
            [0, 1],
            [1, 0],
            [1, 1],
        ], // Tmino 기본모양2
        [
            [1, 2],
            [0, 1],
            [2, 1],
            [1, 1],
        ], // Tmino 기본모양3
        [
            [2, 1],
            [1, 2],
            [1, 0],
            [1, 1],
        ], // Tmino 기본모양4
    ],    
    Imino : [
        [[0,0],[0,1],[0,2],[0,3]],
        [[0,0],[1,0],[2,0],[3,0]],
        [[0,0],[0,1],[0,2],[0,3]],
        [[0,0],[1,0],[2,0],[3,0]],
    ],
    Omino : [
        [[0,0],[0,1],[1,0],[1,1]],
        [[0,0],[0,1],[1,0],[1,1]],
        [[0,0],[0,1],[1,0],[1,1]],
        [[0,0],[0,1],[1,0],[1,1]],
    ],
    Zmino : [
        [[0,0],[1,0],[1,1],[2,1]],
        [[1,0],[0,1],[1,1],[0,2]],
        [[0,0],[1,0],[1,1],[2,1]],
        [[1,0],[0,1],[1,1],[0,2]],
    ],
    Smino : [
        [[1,0],[2,0],[0,1],[1,1]],
        [[0,0],[0,1],[1,1],[1,2]],
        [[1,0],[2,0],[0,1],[1,1]],
        [[0,0],[0,1],[1,1],[1,2]],
    ],
    Jmino : [
        [[0,2],[1,0],[1,1],[1,2]],
        [[0,0],[0,1],[1,1],[2,1]],
        [[0,0],[1,0],[0,1],[0,2]],
        [[0,0],[1,0],[2,0],[2,1]],
    ],
    Lmino : [
        [[0,0],[0,1],[0,2],[1,2]],
        [[0,0],[1,0],[2,0],[0,1]],
        [[0,0],[1,0],[1,1],[1,2]],
        [[0,1],[1,1],[2,0],[2,1]],
    ]
};

function startTetris(){
    tetrisRuls.classList.add("hide");
    tetrisEnd.classList.add("hide");
    tetrisMusic();
    generateNewBlock(); //블럭 만들기
}

// 시작하기
function init() {
    // 무빙아이템 정보 넣기
    tempMovingItem = { ...movingItem };

    for (let i = 0; i < rows; i++) {
        prependNewLine(); //블록 라인 만들기
    }

    // renderBlocks(); // 블럭 출력 하기
}

// function prependBlcoks() {
//     // 첫번째 li 갯수 뿌려주기
//         const li = document.createElement("li");
//         const ul = document.createElement("ul");

//         for (let j = 0; j < cols; j++) {
//             const matrix = document.createElement("li");
//             // prepend : 요소의 마지막에 넣어줌
//             ul.prepend(matrix);
//         }
//         li.prepend(ul);
//         playGround.prepend(li);
// }


// 블록 만들기 : cols * rows
function prependNewLine() {
    // createElement : HTML 태그를 만듦
  const li = document.createElement("li");
  const ul = document.createElement("ul");
  for (let j = 0; j < cols; j++) {
      const matrix = document.createElement("li");
      ul.prepend(matrix);
  }
  // prepend : 가장 마지막에 넣음
  li.prepend(ul);
  playGround.prepend(li);
}

// 블럭 출력하기
// function renderBlocks(){
//     // const ty =  tempMovingItem.type;
//     // const di =  tempMovingItem.direction;
//     // const to =  tempMovingItem.top;
//     // const le =  tempMovingItem.left;

//     // 변수를 선언하지 않고 바로 한번에 설정 (위의 변수 선언과 같은 값이다.)
//     const {type, direction, top, left} = tempMovingItem;

//     const movieBlock = document.queryCommandAll(".moving")
//     movieBlock.forEach((moving) => {
//         moving.classList.remove(type,"moving");
//     })

//     // console.log(blocks[type][direction])
//     blocks[type][direction].forEach(block => {
//         const x = block[0] + left; // 2 0 1 1
//         const y = block[1] + top; // 1 1 0 1

//         const target = playGround.childNodes[y].childNodes[0].childNodes[x];
//         target.classList.add(type, "moving")

//         // console.log({playGround})
//     });

//     movingItem.left = left;
//     movingItem.top = top;
//     movingItem.direction = direction;
// }
// 블록 출력하기
function renderBlocks(moveType = "") {
    // const ty = tempMovingItem.type;
    // const di = tempMovingItem.directioin;
    // const to = tempMovingItem.top;
    // const le = tempMovingItem.left;

     // 1. 블록 모양잡기  변수를 선언하지 않고 바로 한번에 설정 (위의 변수 선언과 같은 값이다.)
    const { type, direction, top, left } = tempMovingItem;

    const movingBlocks = document.querySelectorAll(".moving");

    movingBlocks.forEach((moving) => {
        moving.classList.remove(type, "moving");
    });

    // console.log(blocks[type][directioin]);
    // 4개를 가져와야해서 forEach로 x,y 값을 가져옴
    blocks[type][direction].some((block) => {
        const x = block[0] + left; // 2 0 1 1
        const y = block[1] + top; // 1 1 0 1

        const target = playGround.childNodes[y] ? playGround.childNodes[y].childNodes[0].childNodes[x] : null;
        const isAvailable = checkEmpty(target);

        // isAvailable에 값이 있을 경우 moving을 추가합니다.
        if(isAvailable){
            target.classList.add(type, "moving");
        }else {
            // 값이 없을 경우 전으로 초기화시키기 : 영역밖으로 넘어가지 않도록 setTimeout을 통해 제어
            tempMovingItem = {...movingItem}

            setTimeout(() => {
                renderBlocks();
                if(moveType === "top"){
                    seizeBlock();
                }
            },0)
            return true;
        }

        // console.log({ playground }); //배열에 있는 childNodes,children 등을 이용
    });

    movingItem.left = left;
    movingItem.top = top;
    movingItem.direction = direction;
}

// 블럭 영역 감지하기
function seizeBlock(){
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach(moving => {
        moving.classList.remove("moving");
        moving.classList.add("seized");
    });
    // generateNewBlock();
    checkMatch();
}

// 한 줄 제거하기
function checkMatch(){
    const childNodes = playGround.childNodes;
    childNodes.forEach(child => {
        let matched = true;
        child.children[0].childNodes.forEach(li => {
            if(!li.classList.contains("seized")){
                matched = false;
            }
        });

        if(matched){
            child.remove();
            prependNewLine();
            tscore++;
        }
    });

    tetriScore.innerHTML = tscore;

    generateNewBlock();
}

// 새로운 블럭 만들기
function generateNewBlock() {
    
    clearInterval(downInterval);

    downInterval = setInterval(() => {
        moveBlock("top", 1)
    }, duration);

    const blockArray = Object.entries(blocks);
    const randomIndex = Math.floor(Math.random() * blockArray.length);

    movingItem.type = blockArray[randomIndex][0];

    movingItem.top = 0;
    movingItem.left = 6;
    movingItem.direction = 0;
    tempMovingItem = { ...movingItem };

    renderBlocks();
}

// 빈칸 값 확인하기
function checkEmpty(target){
    if(!target || target.classList.contains("seized")){
        return false;
    }
    return true;
}

// 블록 모양 바꾸기
function changeDiretion(){
    const direction = tempMovingItem.direction;

    direction === 3 ? tempMovingItem.direction = 0 : tempMovingItem.direction += 1;
    renderBlocks();
}

// 블록 빨리 내리기
function dropBlock(){
    clearInterval(downInterval);
    downInterval = setInterval(()=> {
        moveBlock("top", 1)
    }, 50)
}

// 블록 움직이기
function moveBlock(moveType, amount) {
    tempMovingItem[moveType] += amount;
    renderBlocks(moveType);
}

// 이벤트
document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 39:
            moveBlock("left", 1);
            break;
        case 37:
            moveBlock("left", -1);
            break;
        case 40:
            moveBlock("top", 1);
            break;
        case 38:
            changeDiretion("top", 1);
            break;
        case 32:
            dropBlock("top", 1);
            break;

        default:
            break;
    }
});

// 음악재생
function tetrisMusic(){
    const tetrisAudio = document.querySelector("#tetrisAudio");

    tetrisAudio.play();
}

init();



tetrisStrat.addEventListener("click", startTetris);
tetrisRestart.addEventListener("click", () => {
    reStartTetrisGame();
});

function endTetrisGame(){
    tetrisEnd.classList.remove("hide");
    document.querySelector(".tetris___result__desc").innerHTML = `점수는 ${tscore}점 입니다 :)`;
    tetrisAudio.pause();
}

function reStartTetrisGame(){
    tetrisEnd.classList.add("hide");
    let tscore = 0;
    tetriScore.innerHTML = tscore;
    tetrisAudio.play();
    prependNewLine();
}
