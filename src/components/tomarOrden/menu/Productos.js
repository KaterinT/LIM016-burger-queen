import './productos.scss'

export const Productos = ({menuItems,moreClick}) => {

  return (
    <div className='boxProductos'>
      {menuItems.map((menuItem) => {
          
        const{id,descripcion,precio,imagen} = menuItem;

        return (
        <div key={id}> 
          <div  className="boxProdUnidad" >
            <div className="boxDescripcionProd">
              <div  className="descripcionProd">
                <p>{descripcion}</p>
                <p>S/{precio}.00</p>
              </div>
              <div className="btnAgregar">
                <button onClick={() => moreClick(menuItem)}>
                  Agregar
                </button>
              </div>
            </div>
            <div className="boxImagenProd">
              <img src={imagen} alt={descripcion} />
            </div>
          </div>
        </div>)
      })}
    </div>
  );
};