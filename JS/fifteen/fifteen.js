let button = document.getElementById("btn");

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click", () =>{
    document.querySelector(".box").innerHTML = "I am changed";
})

button.addEventListener("contextmenu", () =>{
    alert("Right click is disabled on this button");
})

document.addEventListener("keydown", (event) => {
    console.log(event.key , event.code);
})