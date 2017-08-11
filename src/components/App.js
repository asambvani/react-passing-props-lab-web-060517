import React from 'react';

import FruitBasket from './FruitBasket';
import FilteredFruitList from './FruitBasket';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      originalFruit: [],
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }
  componentWillMount(){
    this.fetchFilters()
    this.fetchFruit()
  }

  fetchFruit(){
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit =>
        this.setState({
          fruit: fruit,
          originalFruit: fruit })
      );
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value }, this.updateFruit);
    console.log(this.state)
  }

  fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
  }

  updateFruit(){
    const newFruit = this.state.currentFilter ? this.state.originalFruit.filter((fruit) => fruit.fruit_type === this.state.currentFilter) : this.state.fruit
    this.setState({
      fruit: newFruit
    })
  }
  render(){
    return (
      <div>
        <FruitBasket filters={this.state.filters} onFilterChange={this.handleFilterChange} currentFilter = {this.state.currentFilter} fruit={this.state.fruit}/>
      </div>
    )
  }

}

export default App;
