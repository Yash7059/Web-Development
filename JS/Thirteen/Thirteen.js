 function getRandomColor() {
      // Generate a random hex color
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

console.log(getRandomColor()); // Example usage

document.querySelectorAll(".box")
    .forEach((e) => {
        e.style.backgroundColor = getRandomColor();
    })