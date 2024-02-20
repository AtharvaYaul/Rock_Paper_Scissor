let buttons = document.querySelectorAll(".btn");
let res=document.querySelector(".status");
let output=document.querySelector(".msg");
let user=document.querySelector(".user");
let computer=document.querySelector(".computer");
let mode=document.querySelector(".darkMode");

let count1=0;
let count2=0;

const choices=["stone","paper","scissor"];
const random=Math.floor(Math.random()*3);
const compMove=choices[random];
console.log(compMove);

let userChoice;
buttons.forEach((box)=>{
  box.addEventListener("click",()=>{
    userChoice=(box.getAttribute("id"));
    answer();
  })

});
 answer=()=>{
if(compMove===userChoice){
  // console.log("Match has drawn");
  res.innerText="Match has drawn";
}
else{
  if(compMove==="scissor"){
    if(userChoice==="paper"){
      // console.log("Loser");
      count1++;
      res.innerText="Loser";
      res.style.backgroundColor="Red";
      computer.innerText=count1;
    }
    else{
      // console.log("Winner");
      res.innerText="Winner";
      res.style.backgroundColor="Green";
      // user.innerText=
      count2++;
      user.innerText=count2;
    }
  }
  if(compMove==="paper"){
    if(userChoice==="scissor"){
      // console.log("Winner");
      count2++;
      res.innerText="Winner";
      res.style.backgroundColor="Green";
      user.innerText=count2;
    }
    else{
      // console.log("Loser");
      count1++;
      res.innerText="Loser";
        res.style.backgroundColor="Red";
      computer.innerText=count1;
    }
  }
  if(compMove==="stone"){
    if(userChoice==="scissor"){
      // console.log("Loser");
      count1++;
      res.innerText="Loser";
      res.style.backgroundColor="Red";
      computer.innerText=count1;
      // res.str
    }
    else{
      // console.log("Winner");
      count2++;
      res.innerText="Winner";
      res.style.backgroundColor="Green";
      user.innerText=count2;
    }
  }
}
};
