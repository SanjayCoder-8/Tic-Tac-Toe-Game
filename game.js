let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#s1");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turnO=true;
    for(let box of boxes)
    {
        box.innerText="";
        box.disabled=false;
    }
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.value="O";
            box.querySelector("img").src="./pngimg.com - letter_o_PNG93.png";
            turnO=false;
        }
        else
        {
            box.value="X";
            box.querySelector("img").src="./—Pngtree—letter x logo vector_6928618 - Copy.png";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const showWinner=(a)=>{
    document.querySelector("#s2").innerText=`Winner is ${a}`;
    document.querySelector(".c1").setAttribute("class","c2");
    reset.disabled=true;
};
let main=document.querySelector("main");
const checkWinner=()=>{
    for(let pattern of winPatterns)
    {
        let pos1Val=boxes[pattern[0]].value;
        let pos2Val=boxes[pattern[1]].value;
        let pos3Val=boxes[pattern[2]].value;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!="")
        {
            if(pos1Val==pos2Val&&pos2Val==pos3Val)
            {
                boxDisbled();
                main.style.visibility= "hidden";
                showWinner(pos1Val);
            }
        }
    }
};
const boxDisbled=()=>{
    for(let box of boxes)
    {
        box.disabled="true";
    }
};
let newBtn=document.querySelector("#s3");
reset.addEventListener("click",resetGame);
newBtn.addEventListener("click",()=>{
    resetGame();
    document.querySelector(".c2").setAttribute("class","c1");
    location.reload();
});