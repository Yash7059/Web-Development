let a = prompt(" enter first number")

let b = prompt(" enter second number")

if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not a number")
}
function main(){

    let x = 1
    let sum = parseInt(a) + parseInt(b)
    try{
        console.log("the sum is ",sum*x)
        return true
    }catch (error) {
        console.log("Error aa gaya bhai")
        return false
    }
        console.log("this is finally block")
    
}

let c = main()
