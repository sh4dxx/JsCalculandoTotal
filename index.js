const precio = 400000;
var cantidad = 1;
var total = precio * cantidad;

var precioBaseSpan = document.querySelector(".precio-base");
var valorTotalSpan = document.querySelector(".valor-total");
var cantidadSpan = document.querySelector(".cantidad");
var btnAgrega = document.querySelector(".btn-agrega");
var btnResta = document.querySelector(".btn-resta");

valorTotalSpan.style.color = 'blue';
precioBaseSpan.innerHTML = precio;
valorTotalSpan.innerHTML = total;
cantidadSpan.innerHTML = cantidad;

btnAgrega.addEventListener("click",()=>{
  cantidad = cantidad + 1;
  total = precio * cantidad;
  cantidadSpan.innerHTML = cantidad;
  valorTotalSpan.innerHTML = total;
});


btnResta.addEventListener("click",()=>{
  if(cantidad<=1){
    alert("La cantidad minima es 1")
    return;
  }
  
  cantidad = cantidad - 1;
  total = precio * cantidad;
  cantidadSpan.innerHTML = cantidad;
  valorTotalSpan.innerHTML = total;
});