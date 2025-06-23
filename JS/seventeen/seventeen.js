// settle means resolved or reject
// resolve means promise has settle successfully
// reject means promise has not settle successfully



// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 2000);
//     })
// }

async function getdata() {
   
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
   let data = await x.json()
   return data;
    //   console.log(data);
}


async function main(){


console.log("loding modals")
console.log('do somthing alse');
console.log('load data');

let data = await getdata();

console.log(data);
console.log('process data');
console.log('task 2');

}

main();
// data.then((v)=> {
// console.log(data);
// console.log('process data');
// console.log('task 2');
// })



