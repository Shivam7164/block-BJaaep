let div1=document.querySelector(".div1")
let div2=document.querySelector(".div2")
 for(let i=1;i<=12;i++){
     let box = document.createElement("div")
      box.className="box"
       div1.append(box)
box.addEventListener("click",function(){
    box.innerText=i 
    setTimeout(() => {
        box.innerText=""; 
  }, 5000);
})
}

 for(let i=1;i<=12;i++){
     let box1 = document.createElement("div")
      box1.className="box"
       div2.append(box1) 
       box1.addEventListener("click",function(Event){
        box1.innerText=i 
        setTimeout(() => {
            box1.innerText=""; 
      }, 5000);
    })
    }