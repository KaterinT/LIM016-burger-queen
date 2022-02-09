import './menuOptions.scss'

export const MenuOptions = ({categories,filterItems}) => {
  return (
    <div className="boxContenedorBtn">
      <nav className="boxBtn">
        {categories.map((category, index) => {
          return(   
          <button key={index} onClick={() => filterItems(category)} className="filter-btn">{category}</button>
          )})}
      </nav>
      <div className="linea"></div>
    </div>
  );
};