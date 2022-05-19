import React from "react";

function CategoryFilter({ categories, handleFilter, category }) {

  function getCategory(event) {
    console.log('in nav = ', event.target.value)
    handleFilter(event.target.value)
  }

  const categoriesToDisplay = categories.map((cat, index) => {
    const selected = cat === category ? 'selected' : ""
    return (<button key={index} className={selected} value={cat} onClick={getCategory}>{cat}</button>)
  })


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoriesToDisplay}
    </div>
  );
}

export default CategoryFilter;
