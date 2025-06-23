console.log("harry")

// let bhupo = document.getElementsByClassName("box")
// console.log(bhupo)

// bhupo[2].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundcolor = "red"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "red"
})