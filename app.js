let boxes = document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let rst=document.querySelector("#rst");
let newGame=document.querySelector("#newGame");
let turn=true;
const winPatterns =[
[0,1,2],
[0,3,6],
[3,4,5],
[6,7,8],
[1,4,7],
[2,5,8],
[0,4,8],
[6,4,2],
];
const resetGame = ()=>{
turn=true;
enableboxes();
msg.classList.add("hide");
};
boxes.forEach((box)=>{
box.addEventListener("click",() =>{
console.log("box was clicked");
if(turn){
box.innerText="x";
turn=false;
}
else{
box.innerText="O";
turn=true;
}
box.disabled=true;
checkWinner();
});
}
);
const disableboxes = () =>{
for(let box of boxes){
box.disabled=true;
}
};
const enableboxes=() =>{
for(let box of boxes){
box.disabled=false;
box.innerText="" ;
}
};
const showWinner=(win) => {
msg.innerText=`winner is ${win}`;
msg.classList.remove("hide");
disableboxes();
};
const checkWinner = () => {
for(let pattern of winPatterns)
{
let pos1=boxes[pattern[0]].innerText;
let pos2=boxes[pattern[1]].innerText;
let pos3=boxes[pattern[2]].innerText;
if(pos1!="" && pos2!="" && pos3!="")
{
if(pos1===pos2 && pos2===pos3){
console.log("winner",pos1); 
showWinner(pos1);
}
}
};
};
newGame.addEventListener("click",resetGame);
rst.addEventListener("click",resetGame);