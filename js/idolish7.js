let peticion = () => {
   fetch('data/datos.json')
  .then(response => response.json())
  .then(datos => {
    var datosi=datos["idolish7"]
    for(i in datosi){
      personaje=i
      imagen="images/idolish7/"+i+".jpg"
      cumple=datos["idolish7"][personaje]["cumpleaños"]
      
      let plantilla = `
    <div class="product product-container">
      <div class="inner-product">
        <div class="figure-image">
          <img src="${imagen}" alt="${personaje}" width=250></a>
        </div>
        <h3 class="product-title"><a href="#">${personaje}</a></h3>
        <small class="price">${cumple}</small>
      </div>
    </div> `

       document.getElementById("contenido").innerHTML += plantilla;





    }
  })
  .catch(console.error)
}

document.addEventListener("DOMContentLoaded", function(event) {
  peticion();
})
