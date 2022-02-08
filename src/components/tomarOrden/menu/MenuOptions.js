import './menuOptions.scss'
// import {Productos} from './Productos'
// import {getByCategories} from './Productos'
// import {items} from '../../../data/listaProductos'

export const MenuOptions = ({filterItems}) => {
  return (
    <div className="boxContenedorBtn">
      <nav className="boxBtn">
        {/* {categories.map((category, index) => {
          return(   
          <button type='button' key={index} onClick={() => filterItems(category)} className="filter-btn">{category}</button>
          )})} */}
            return (
              <><button type='button'  onClick={() => filterItems('Desayuno')} className="filter-btn">
                DESAYUNO
              </button>
              <button type='button'  onClick={() => filterItems('Kids')} className="filter-btn">
                  KIDS
                </button>
                <button type='button'  onClick={() => filterItems('Bebidas')} className="filter-btn">
                  BEBIDAS
                </button></>
            )
      </nav>
      <div className="linea"></div>
    </div>
  );
};