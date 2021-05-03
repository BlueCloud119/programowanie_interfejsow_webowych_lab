import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from './Search.js'
import StudentAdding from './StudentAdding.js'

class Main extends Component {
  state = {
    list: [{
      name: "Marek Kurek",
      description: "student",
      email: "@@"
    },
    {
      name: "Jacek Jackowski",
      description: "c++ docker java",
      email: "@@"
    },
    {
      name: "Joanna Nowak",
      description: "pracowita sumienna programistka",
      email: "@@"
    },
    {
      name: "Paweł Piotrowicz",
      description: "informatyk",
      email: "@@"
    }],
  }

  updateList = (element) => {
    this.setState({
      list: this.state.list.concat({name: element.name, description: element.description, email: element.email})
    })
  }

  render() {
    console.log(this.state.list);
    return (
      <Switch>
        <Route path="/" exact>
          <section><Search filteredList = {this.state.list}/></section>
        </Route>
        <Route path="/dod">
          <section><StudentAdding main = {this.updateList}/></section>
        </Route>
        <Route>
          <section><h1>Error 404 - not found</h1></section>
        </Route>
      </Switch> 
    );
  }
}

export default Main;
