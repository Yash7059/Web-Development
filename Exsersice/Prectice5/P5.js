// function Fectorial(n){
//     if (n ==0 || n==1) {
//         return 1;
//     }
//     return n * Fectorial(n - 1);
// }

// console.log(Fectorial(5)); // Output: 120


let a = 6;

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c);
}
factorial(a);