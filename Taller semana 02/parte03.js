let productos =
[
    { nombre:"auriculares bluetooth", stock:5 },
    { nombre:"Webcan Full HD", stock:0 },
    { nombre:"Microfono USB", stock:12 },
]

nombreBuscar = "Microfono USB"

for(let i=0; i<productos.length; i++)
{
    if(productos[i].nombre == nombreBuscar)
    {
        console.log(`El producto ${nombreBuscar} se encuentra en nuestro catalogo`)
        if(productos[i].stock > 0)
        {
            console.log(`${productos[i].nombre} - Producto disponible en stock`)
        }
        else if (productos[i].stock == 0)
        {
            console.log(`Lo sentimos, el producto ${productos[i].nombre} no esta disponible`)
        }
        else 
        {
            console.log(`El producto ${nombreBuscar} no se encuentra en nuestro catalogo`)
        }
    }
   
}