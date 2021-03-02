/* Guardar en lista desde modal */

if (screen.width < 600) {
    let guardar = document.getElementById("guardarPc").addEventListener('click', function () {/* espera el click */
        var producto = document.getElementById("producto2").value/* guardamos el valor del id Producto */
        guardado("producto", producto)
    })
} else {
    let guardar = document.getElementById("guardarMovil").addEventListener('click', function () {/* espera el click */
        var producto = document.getElementById("producto").value/* guardamos el valor del id Producto */
        guardado("producto2", producto)
    })
}
function guardado(producoNombre, producto) {

    let nota = document.getElementById("Nota").value/* guardamos el valor del id Nota */
    let categoria = document.getElementById("Categoria").value/* guardardamos el valor de Categoria */
    if (producoNombre !== '') {
        /* agregar item a la lista */
        document.getElementById("ListaProductosItems").innerHTML += `<li class="list-group-item" data-producto="${producto}" data-nota="${nota}" data-categoria="${categoria}"><img src="img/categorias/${categoria}.svg" alt="${producto}
            class="listaProductosItems__icono">${producto}</li>`
        /* Limpiar campos */
        document.getElementById("Producto").value = ""
        document.getElementById("Nota").value = ""
        document.getElementById("Categoria").value = "Carnes"
        document.getElementById("ListaProductos").style.display = "flex"
        document.getElementById("BorrarTodo").style.display = "block"
        document.getElementById("ListaVacia").style.display = "none"
        document.getElementById("DetalleProducto").style.display = "none"
        document.getElementById("volver__button").style.display = "none"
    }
}
/* Mostrar detalle de productos */
let mas = document.getElementById("ListaProductosItems").addEventListener('click', function (e) {
    document.getElementById("ListaProductos").style.display = "none"
    document.getElementById("BorrarTodo").style.display = "none"
    document.getElementById("DetalleProducto").style.display = "flex"
    document.getElementById("volver__button").style.display = "block"
    let producto = e.target.getAttribute('data-producto')
    let categoria = e.target.getAttribute('data-categoria')
    let nota = e.target.getAttribute('data-nota')
    document.getElementById("DetalleProducto").innerHTML = `<img src="/img/categorias/${categoria}.svg" alt="${categoria}">
    <h1 class="mt-3">${producto}</h1>
    <p class="mt-2">${nota}</p>`

})

/* Mostrar lista de productos */
let menos = document.getElementById("volver__button").addEventListener('click', function () {
    document.getElementById("DetalleProducto").style.display = "none"
    document.getElementById("volver__button").style.display = "none"
    document.getElementById("ListaProductos").style.display = "flex"
    document.getElementById("BorrarTodo").style.display = "block"

})

/* Borrar todo */
document.getElementById("BorrarTodo").addEventListener('click', function () {
    document.getElementById("ListaProductosItems").innerHTML = ``
    document.getElementById("ListaProductos").style.display = "none"
    document.getElementById("BorrarTodo").style.display = "none"
    document.getElementById("ListaVacia").style.display = "flex"
})