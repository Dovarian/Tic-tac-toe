for(let el of document.querySelectorAll(".settings-button")){
    el.addEventListener("click", () => {
        const settings = document.querySelector("#settings");
        if (settings.style.display == "block") {
            settings.style.display = "none";
        }
        else{
            settings.style.display = "block";
        }
    })
}
for(let el of document.querySelectorAll(".nav")){
el.addEventListener("click", () => {
    if (document.querySelector("#menu").style.display == "none") {
        document.querySelector("#game").style.display = "none";
        document.querySelector("#menu").style.display = "block";
    }
    else{
        document.querySelector("#game").style.display = "block";
        document.querySelector("#menu").style.display = "none";
    }
})}