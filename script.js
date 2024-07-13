 const sound = () => {
    document.querySelector("#btn-sound").play()
 }
 
 for(let el of document.querySelectorAll("button")){
    el.addEventListener("click", sound)
   }
   for(let el of document.querySelectorAll("label")){
    el.addEventListener("click", sound)
   }
   