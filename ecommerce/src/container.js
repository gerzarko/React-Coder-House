import Producto from "./producto"



const container = ({usuario}) => {
  
  const productos = [
    {
        nombre : 'germn',
        apellido: 'zarkovich'
    }
  ]

  
  
    return (
    <div>

      <Producto producto = {productos[0]}/>

    </div>
  )
}

export default usuario
