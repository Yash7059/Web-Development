const additem = async (item) => {
    await randomdelay();
    const div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
}
const randomdelay = () => {
    return new Promise((resolve, reject) => {
        delay = 1 + 6 * Math.random(); // Random delay between 500ms and 1500ms
        setTimeout(() => {
            resolve();
        }, delay * 1000);
    })
}

async function main() {
    setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]; // Get the last div
        if(last.innerHTML.endsWith("....")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-4)// Remove the last dot
        }else{
            last.innerHTML += ".";
        }
    }, 100); // Keep the page alive

    let text = ["Initialized Hacking now reading your data",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"]

    for (const item of text) {
        await additem(item);
    }
    await randomdelay();
    clearInterval(t)
}
main()