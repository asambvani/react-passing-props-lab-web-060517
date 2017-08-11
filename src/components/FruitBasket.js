import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket =(props) =>
  <div className="fruit-basket">
    <Filter handleChange={props.onFilterChange} filters={props.filters}/>
    <FilteredFruitList
      filter={props.currentFilter} fruit={props.fruit}/>
  </div>

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: 'All',
  updateFilterCallback: null
}

export default FruitBasket;
