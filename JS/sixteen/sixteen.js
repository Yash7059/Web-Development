console.log("Hello, World!");
console.log("This is a test message.");


setTimeout(() => {
    console.log("This message is delayed by 2 seconds.");
}, 2000);
console.log("This message is logged immediately after the timeout is set.");

const fn = () => {
    console.log("This is a callback function.");
}

const callback = (name, fn) => {
    console.log(`Hello, ${name}!`);
    fn()
}

const loadScript = (src,callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("yash", fn)
    document.body.append(sc);

}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (name, fn) =>{
    console.log(name)
    fn("firstarg", ()=>{
        console.log("This is a callback function executed after the script is loaded.");
    } )
})