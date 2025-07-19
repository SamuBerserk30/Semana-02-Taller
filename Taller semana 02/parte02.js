let productos= ["laptop Gamer", "Mouse RGB","Teclado Mecanico", "Monitor 144Hz"]

for (let i=0; i < productos.length ; i++)
{
   console.log(`Oferta del dia: ${productos[i]}`)
}

console.log("2--------------------------------");

let productosCargados=0
let TotalProductosCargar= 5

while (productosCargados < TotalProductosCargar)
{
   console.log(`Cargando producto ${productosCargados + 1}`)
   productosCargados++
}

console.log("3--------------------------------");

let datosConfirmados= false
do
{
    console.log("Son tus datos correctos? (si/no)")
    let respuestaUsuario = "si";
    if (respuestaUsuario.toLowerCase() === "si")
    {
        datosConfirmados = true;
        console.log("Datos confirmados correctamente.")
    }
    else
    {
        console.log("Por favor, revisa tus datos.")
    }
}while (datosConfirmados !== true)