import './menuOptions.scss'

export const MenuOptions = ({ setCurrentCategory}) => {
  
  const categories = ["Desayuno", "Hamburguesas", "Bebidas"];
 /*  console.log(categories) */
  return (
    <div className="boxContenedorBtn">
      <nav className="boxBtn">
        {categories.map((category, index) => {
          return(   
          <button type='button' key={index} onClick={() => setCurrentCategory(category)} className="filter-btn">{category}</button>
          )})}
      </nav>
      <div className="linea"></div>
    </div>
  );
};