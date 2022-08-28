import Producto from "./producto"

const contenedorProductos = () => {
  
  const productos = [
    {
        nombre:'Rutini Malbec',
        tipo:'vino',
        precio: 350 
    },
    {
        nombre:'Gran Medalla',
        tipo:'vino',
        precio: 350 
    },
    {
        nombre:'Rutini Blanco',
        tipo:'vino',
        precio: 350 
    },
  ]

  
  
    return (
    <div>
      


     <Producto producto = {productos[0]}/> 
     <Producto producto = {productos[1]}/>
     <Producto producto = {productos[2]}/>

    </div>
  )

}

export default contenedorProductos
