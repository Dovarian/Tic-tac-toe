document.querySelector("#play-again").addEventListener("click", () => {
    for(let el of document.querySelectorAll("td")){
        el.textContent = ""
        el.classList.add("empy")
        el.classList.remove("cross")
        el.classList.remove("zero")
        el.classList.remove("win-cell")
        document.querySelector("table").classList.remove("win")
    }
})
const combs = ['012', '345', '678', '036', '258', '147', '246', '048']
for(let el of document.querySelectorAll(".empy")){
    el.addEventListener("click", (event) => {
        if (event.target.classList.contains("empy") && !document.querySelector("table").classList.contains("win")) {
            document.querySelector("#tap-sound").play()
            event.target.textContent = document.querySelectorAll("td:not(.empy)").length % 2 == 0 ? "x" : "o";
            event.target.classList.remove("empy")
            event.target.classList.add(document.querySelectorAll("td:not(.empy)").length % 2 == 0 ? "cross" : "zero")
            let cells = document.querySelectorAll("td")
            for(let comb of combs){
                if (
                    cells[comb[0]].textContent == cells[comb[1]].textContent && cells[comb[1]].textContent == cells[comb[2]].textContent && cells[comb[0]].textContent != ""
                ) {
                    for(let el of comb.split("")){
                        cells[el].classList.add("win-cell")
                        document.querySelector("table").classList.add("win")
                        document.querySelector("#win-sound").play()
                    }
                }
            }
        }
    })
    el.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("empy")) {
            event.target.textContent = document.querySelectorAll("td:not(.empy)").length % 2 == 0 ? "x" : "o";
        }
    })
    el.addEventListener("mouseout", (event) => {
        if (event.target.classList.contains("empy")) {
            event.target.textContent = "";
        }
    })
}