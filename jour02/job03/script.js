let nombre = 0
function addOne(event) {
    const button = document.getElementById("button");
    nombre++
    document.getElementById("compteur").innerText = nombre;
  }
  
  const button = document.getElementById("button");
  button.addEventListener("click", addOne)