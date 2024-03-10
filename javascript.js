let incbut=document.querySelector(".add");
let debut=document.querySelector(".sub");
let para=document.querySelector(".quntity");
let cart=document.getElementById("#cart");
let left=document.querySelector(".left");
let right=document.querySelector(".right");
let product1=document.querySelector(".p1");
let price=document.querySelector(".pr1");
   
let count=0;

debut.addEventListener('click',function(){
    if(count>0){
        count--;
    para.innerText=count
    }
   
}) 

incbut.addEventListener('click',function(){
   
        count++;
        para.innerText=count
      left.innerText=count
    //   left.innerText=product1.value
    // console.log(count);
    // let div=document.createElement("div");
    // let p=document.createElement("p");
    // left.appendChild();
    //  console.log(left);
})

