//node vars
let rangeCheck=document.querySelector(`[type="range"]`);
let charLengthDiv=document.querySelector(".character-count");
let generateBtn=document.querySelector(".Generator");
let passwordLevel=document.querySelector(".password-level");
let allCheck=document.querySelectorAll(".check");
let allLabels=document.querySelectorAll(".filter label")
let passwordDiv=document.getElementById("password");
let copyText=document.querySelector("i.fa-copy")
let allChars='1234567890abcdefghijklmnopqrstuvxyz*%$#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
let arrOfLower='abcdefghijklmnopqrstuvxyz'.split("");
let arrOfUpper=arrOfLower.map(ele => ele.toUpperCase());
let arrOfSymbole='#@%$*'.split("");
let arrOfNumbers='1234567890'.split("");
let arr=[];

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
      for(let i=0;i<password.length;i++){
         endPassword.push(arr[Math.floor(Math.random()*arr.length)])
      }
      passwordDiv.innerHTML=endPassword.join("");
      passwordLevel.innerText=passwordStrength()
  }else{
    arr=[];
    if(password.uppercase){
      arr=arr.concat(arrOfUpper)
    }
    if(password.lowercase){
       arr=arr.concat(arrOfLower)
    }
    if(password.symbole){
       arr=arr.concat(arrOfSymbole)
    }
    if(password.numbers){
       arr=arr.concat(arrOfNumbers)
    }

    for(let i=0;i<password.length;i++){
       endPassword.push(arr[Math.floor(Math.random()*arr.length)])
    }
    passwordDiv.innerHTML=endPassword.join("");
    passwordLevel.innerText=passwordStrength()
  }
}

//all label clicks
allLabels.forEach(ele =>{
   ele.onclick=function(){
      ele.previousElementSibling.click();
   }
})


function passwordStrength() {
   let count=0;
   for(let prop in password){
      if(password[prop] == true){
          count++;
      }
   }

    if(password.length > 8){
       count++;
    }

    if(count <= 2){
        return 'WEAK';
    }else if(count >2 && count <3){
       return "MEDIUM"
    }else{
      return 'HARD'
    }


}




copyText.onclick=function(){
    document.execCommand("Copy");
    console.log(true);
}
