import React from 'react';

const Categories = ({toggle}) => {
  return(
    <div class="btn-container">
            <button type="button" class="filter-btn" onClick={()=>toggle("all")}>
              all
            </button>
            <button type="button" class="filter-btn" onClick={()=>toggle("breakfast")}>
              breakfast
            </button>
            <button type="button" class="filter-btn" onClick={()=>toggle("lunch")}>
              lunch
            </button>
            <button type="button" class="filter-btn" onClick={()=>toggle("shakes")}>
              shakes
            </button>
          </div>
  )
};

export default Categories;
