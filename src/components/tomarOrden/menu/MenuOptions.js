import './menuOptions.scss'

export const MenuOptions = ({categorias,filterItems}) => {
  console.log(categorias)
  return (
    <div className="boxContenedorBtn">
      <nav className="boxBtn">
        {categorias.map((category, index) => {
          return(   
          <button type='button' key={index} onClick={() => filterItems(category)} className="filter-btn">{category}</button>
          )})}
      </nav>
      <div className="linea"></div>
    </div>
  );
};