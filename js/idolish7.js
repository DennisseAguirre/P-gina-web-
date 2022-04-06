let peticion = () => {
  fetch("/datos.json")
  .then(response => response.json())
  .then(data => console.log(data));
}

document.addEventListener("DOMContentLoaded", function(event) {
  peticion();
})
