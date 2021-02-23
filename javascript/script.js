let categoria = document.getElementById("menusito")
categoria.addEventListener('click', function () {
    categoria = categoria.getAttribute("id")
})
alert(categoria)
let guardar = document.getElementById('guardar').addEventListener('click', function () {
    let producto = document.getElementById("Producto").value
    let nota = document.getElementById("Nota").value



    console.log(`Nombre del producto: ${producto}, Categoria: ${categoria}, Nota: ${nota}`)
})