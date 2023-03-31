let carro2 = document.querySelector('.carrito2');
localStorage.setItem('carrito', JSON.stringify(carrito));
baseDeDatosLs(productos);

function productosSeleccionados(productos) {
    carrito.forEach((prod) => {
        let {img: imagen, precio, id , nombre , cantidad } = prod;
        carro2.innerHTML += `<div class="col-md-2">
                   <div class="card border-0">
                    <img src="${"." + imagen}" alt="${nombre}" class="img-thumbnail">
                    <span>$${precio}</span>
                    <p>CANTIDAD: ${cantidad}</p>
                    <button id="borra" class="btn btn-dark delete-${id}">Borrar</button>
                   </div>
                   </div>
                   </div>`
    })
    borrarProducto();
}

productosSeleccionados();

function totalAcumulado(){
    let total = carrito.reduce((acc,ite)=>acc + ite.precio * ite.cantidad, 0)
}

function borrarProducto(){
    document.getElementById("borra").addEventListener('click', () => {localStorage.removeItem("carrito")})}
//  NO SE COMO HACER ACA PARA QUE BORRE SIN ACTUALIZAR
//  Y ME FALTARIA AGREGAR ATRAVES DE DOCUMENTBYID EL TOTAL ABONAR EN UN DIV 

