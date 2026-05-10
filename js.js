const arr = ["Raza", "Muhammad", "Taqy"];
const h1 = document.querySelector("h1");
const randomIndex = Math.floor(Math.random() * arr.length);
h1.textContent=arr[randomIndex]