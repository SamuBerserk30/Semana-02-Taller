let saldoCliente = 500;
let precioProducto = 150;
let compra = saldoCliente-precioProducto;

if(saldoCliente>=precioProducto){
    console.log("Compra realizada con exito");
    console.log("El nuevo saldo:"+(saldoCliente-precioProducto));
}else{
    console.log("Saldo insuficiente");
}

console.log("2--------------------------------");

let categoriaProductos = "electrica";
let precioBase = 200;
let descuento;

if(categoriaProductos=="electrica"){
    console.log("El descuento es de 10%"+(precioBase-precioBase*0.10));
}else if(categoriaProductos=="ropa") {
    console.log("EL descuento es de 15%"+(precioBase-precioBase*0.15));
}else if(categoriaProductos=="libro") {
    console.log("El dsecuento es de 5%"+(precioBase-precioBase*0.05));
}else {
    console.log("Categoría no válida");
}

console.log("3--------------------------------");

let metodoPago = "tarjeta";

switch (metodoPago) { 

  case "tarjeta": 
    console.log("Procesando pago con tarjeta"); 
    break;
  case "paypal": 
    console.log("Redireccionando a PayPal"); 
    break; 
  case "efectivo": 
    console.log("Por favor, prepara el efectivo para la entrega"); 
    break; 
    default: 
    console.log("Método de pago no reconocido."); 
}