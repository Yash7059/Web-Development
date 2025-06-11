let random = Math.random(100)
// let b = Math.random(100)
let a = prompt("enter a number")
let b = prompt("enter a number")
let c = prompt("enter a opration")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


if(random > 0.1){
    alert(`the result is ${eval(`${a} ${c} ${b}`)} `)

}else{
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)} `)
}