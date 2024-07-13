for(let el of document.querySelectorAll(".theme")){
    el.addEventListener("click", (event) => {
        const root = document.querySelector(":root");
        if (event.target.id == "dark-theme") {
            root.style.setProperty("--background-color", "#212529")
            root.style.setProperty("--grid-color", "#343a40")
            root.style.setProperty("--text-color", "#e9ecef")
            root.style.setProperty("--play-btn-color", "#206320")
            root.style.setProperty("--play-btn-hover-color", "#1f6b1f")
            root.style.setProperty("--settings-btn-color", "#495057")
            root.style.setProperty("--settings-btn-hover-color", "#565d64")
            root.style.setProperty("--settings-background-color", "#495057")
        }
        else{
            root.style.setProperty("--background-color", "#f8f9fa")
            root.style.setProperty("--grid-color", "#ced4da")
            root.style.setProperty("--text-color", "#212529")
            root.style.setProperty("--play-btn-color", "#55ff55")
            root.style.setProperty("--play-btn-hover-color", "#46e746")
            root.style.setProperty("--settings-btn-color", "#cfcfcf")
            root.style.setProperty("--settings-btn-hover-color", "#c0c0c0")
            root.style.setProperty("--settings-background-color", "#cfcfcf")
        }
    })
}
try {
    document.querySelector(`#${localStorage.getItem("theme")}`).click();
    document.querySelector("#volume").value = localStorage.getItem("volume");
    for(let el of document.querySelectorAll("audio")){
        el.volume = localStorage.getItem("volume") / 100
    }
    document.querySelector(`#${localStorage.getItem("language")}`).click();
  } catch (err) {
    console.log("Error");
  }
for(let el of document.querySelectorAll("#settings input")){
    el.addEventListener("change", (event) => {
        if (event.target.id == "volume") {
            localStorage.setItem("volume", event.target.value)
            for(let el of document.querySelectorAll("audio")){
                el.volume = localStorage.getItem("volume") / 100
            }
        }
        else{
            localStorage.setItem(event.target.className, event.target.id)
        }
    })
}
