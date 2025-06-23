function brewCoffee(){
    return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; // Random delay between 1000–3000 ms

        console.log("Brewing coffee...");
        setTimeout(() => {
            resolve("Coffee is ready!");
        }, delay);
    });
}

async function serveCoffee() {
    console.log("Serving coffee...");

    const coffee = await brewCoffee();
    console.log(coffee);
}
serveCoffee();