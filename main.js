//node vars
let rangeCheck=document.querySelector(`[type="range"]`);
let charLengthDiv=document.querySelector(".character-count");
let generateBtn=document.querySelector(".Generator");
let passwordLevel=document.querySelector(".password-level");
let allCheck=document.querySelectorAll(".check");
let passwordDiv=document.getElementById("password");
let copyText=document.querySelector("i.fa-copy")
let allChars='1234567890abcdefghijklmnopqrstuvxyz*%$#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
let arrOfLower='abcdefghijklmnopqrstuvxyz'.split("");
let arrOfUpper=arrOfLower.map(ele => ele.toUpperCase());
let arrOfSymbole='#@%$*'.split("");
let arrOfNumbers='1234567890'.split("");
let arr=[];

//vars
let password={
   content:"89394895",
   length:10,
   uppercase:false,
   lowercase:false,
   numbers:false,
   symbole:false
}


//clicks
rangeCheck.onchange=function(){
   password.length=parseInt(this.value/6.5);
   charLengthDiv.innerHTML=password.length;
}
generateBtn.addEventListener("click",generatePassword)


function check() {
   allCheck.forEach(check =>{
       check.onclick=function(){
           this.classList.toggle("checked");
           let allChecked=document.querySelectorAll(".checked");
           let allUnChecked=[];

           for(let i=0;i<allCheck.length;i++){
              if(!allCheck[i].classList.contains("checked")){
                 allUnChecked.push(allCheck[i]);
              }
           }

          allChecked.forEach((ele) => {
               password[ele.dataset.target] = true;

          });

          allUnChecked.forEach(ele =>{
             password[ele.dataset.target]=false;
          })


       }
   })
}

check();

function generatePassword() {
     let endPassword=[];
    if((password.uppercase == true && password.lowercase == true && password.numbers == true && password.symbole == true) || (password.uppercase == false && password.lowercase == false && password.numbers == false && password.symbole == false)){
        arr=allChars;
        console.log(arr);
        for(let i=0;i<password.length;i++){
           endPassword.push(arr[Math.floor(Math.random()*arr.length)])
        }

    }else{
       if(password.uppercase == true){
           arr=arr.concat(arrOfUpper)
       }
       if(password.lowercase == true){
           arr=arr.concat(arrOfLower)
       }
       if(password.numbers == true){
           arr=arr.concat(arrOfNumbers)
       }
       if(password.symbole == true){
           arr=arr.concat(arrOfSymbole)
       }

    }

  for(let i=0;i<password.length;i++){
     endPassword.push(arr[Math.floor(Math.random()*arr.length)])
  }

  passwordDiv.innerHTML=endPassword.join("");
}
