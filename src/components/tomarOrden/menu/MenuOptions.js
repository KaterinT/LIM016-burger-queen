import './menuOptions.scss'

export const MenuOptions = ({categories,filterItems}) => {
  console.log(categories)
  return (
    <div className="boxContenedorBtn">
      <nav className="boxBtn">
        {categories.map((category, index) => {
          return(   
          <button type='button' key={index} onClick={() => filterItems(category)} className="filter-btn">{category}</button>
          )})}
      </nav>
      <div className="linea"></div>
    </div>
  );
};