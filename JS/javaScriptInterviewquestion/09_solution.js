function placeOrder(orderId) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; // Random delay between 1000–3000 ms
    setTimeout(() => {
      resolve(`Order ${orderId} confirmed! ✅ (Processed in ${delay} ms)`);
    }, delay);
  });
}


async function simulateOrders() {
  console.log("Placing orders...");

  const confirmation1 = await placeOrder(101);
  console.log(confirmation1);

  const confirmation2 = await placeOrder(102);
  console.log(confirmation2);

  const confirmation3 = await placeOrder(103);
  console.log(confirmation3);
}

simulateOrders();
