import './productos.scss'

// export const getByCategories = (category) => console.log(Categories.filter ((prod) => (prod.category===category))) 

export const Productos = ({items}) => {
  return (
    <div className='boxProductos'>
      {items.map((menuItems) => {
        const{id, title, price,category,image} = menuItems;
        
        return (
        <div key={id}> 
          <div  className="boxProdUnidad" >
            <div className="boxDescripcionProd">
              <div  className="descripcionProd">
                <p>{title}</p>
                <p>S/{price}.00</p>
              </div>
              <div className="btnAgregar">
                <button>
                  Agregar
                </button>
              </div>
            </div>
            <div className="boxImagenProd">
              <img src={image} alt={title} />
            </div>
          </div>
        </div>)
      })}
     
      {/* <div className="boxProdUnidad">
        
      </div>
      <div className="boxProdUnidad">

      </div>
      <div className="boxProdUnidad">
        
      </div> */}
    </div>
  );
};