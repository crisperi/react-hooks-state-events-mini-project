import React,{useState} from "react";

function CategoryFilter({CATEGORIES,categorySelect}) {
const [selectedCategory,setSelectedCategory]= useState(null)

  function categoryClick(e,category){
  e.preventDefault();
    setSelectedCategory (()=>category)
    categorySelect(category)
}



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {CATEGORIES.map((category)=>{
return( <button key={category} onClick={(e)=>categoryClick(e,category)}  className={selectedCategory === category ? "selected" : ""}>
  {category}
  </button>)
      })}
    </div>
  );
}

export default CategoryFilter;
