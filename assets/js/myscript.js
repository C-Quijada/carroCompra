var ElementoMenu = function (id,nombre, descripcion, precio) {
  this.id = id
    this.nombre = nombre
    this.descripcion = descripcion
    this.precio = precio
  }
var carro = []

var menu = [
    martini = new ElementoMenu("martini","martini", "", 2550),
    cappucciino = new ElementoMenu("cappucciino","cappucciino", "", 1370),
    late = new ElementoMenu("late","late", "", 1350),
    mojito = new ElementoMenu("mojito","mojito", "", 2290),
    riso    = new ElementoMenu("riso",
      "Insalata di riso",
      `L'insalata di riso é un classico delle ricette estive. Veloce e facile da preparare l'insalata di riso si puó insaporire con glli ingredienti piú vari.`,
      6750
    ),
    cipolle    = new ElementoMenu("cipolle",
      "Insalata di cipoliotti",
      `Piú delicati delle cipolle, i cipollotti sono perfetti in insalata, sul pesce e suila carne.`,
      5990
    ),
    capresse = new ElementoMenu("capresse",
      "Insalata di caprese",
      `Questa piatto é un cuprotagonista di moltissimi íatti.`,
      8250
    )
  ]



var listaInput = document.getElementsByTagName("input")


for (input of listaInput) {
  input.addEventListener("change", function (){
    reconocer(this)
  })
}


//funcion que me permite ingresar o borrar los elementos que agregamos o quitamos al carr
function reconocer(elemento){

  if(elemento.checked){
    
    carro.push(menu.find((elementoMenu) => elementoMenu.id == elemento.value))
    
   
  }else{
    
    
    carro.splice(carro.findIndex((elementoMenuDos) => elementoMenuDos.id == elemento.value), 1)
   
  }
  imprimirCarro(carro)
  
}



//funcion que me permite inyectar la info en carro

function imprimirCarro (elemento){
  tbody = document.getElementById('tbody')
  
  let aImprimir=''  
  elemento.forEach((fila) => {
    aImprimir += `<tr>
    <td>${fila.nombre}</td>
    <td> $${fila.precio}</td>
  </tr>`
  })
  tbody.innerHTML = aImprimir
  sumar(carro)
}

function sumar(elemento){
   let valorTotal = 0;

   elemento.forEach((elementoMenu)=> valorTotal +=elementoMenu.precio )

   let caja = document.getElementById('valorTotal')
   caja.textContent=`$${valorTotal}`
}