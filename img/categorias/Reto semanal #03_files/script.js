
let guardar = document.getElementById("guardar").addEventListener('Touch', function () {/* espera el Touch */
    let producto = document.getElementById("Producto").value/* guardamos el valor del id Producto */
    let nota = document.getElementById("Nota").value/* guardamos el valor del id Nota */
    let categoria = document.getElementById("Categoria").value/* guardardamos el valor de Categoria */
    if (producto !== '') {
        document.getElementById("ListaProductosItems").innerHTML += `<li class="list-group-item"><img src="img/categorias/${categoria}.svg" alt="${producto}
        class="listaProductosItems__icono">${producto}</li>`/* agregar item a la lista */
        alert(producto)
        producto, nota = ""
        categoria = 0
        document.getElementById("Producto").value = producto
        document.getElementById("Nota").value = nota
        alert(producto)
    }


})