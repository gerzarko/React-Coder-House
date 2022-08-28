
const producto = ({producto}) => {
    
    const {nombre,precio,tipo} = producto;



    return (
      <div>
  
      <h4>Nombre: {nombre}</h4>
      <h4>Precio: {precio} </h4>  
      <h4>Tipo: {tipo}</h4>
  
      </div>
    )
  }
  
  export default producto




