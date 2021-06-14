import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {getList} from '../firebase'


import Search from './Search.js'
import StudentAdding from './StudentAdding.js'
import Login from './Login.js'
import Register from './Register.js'

class Main extends Component {
  state = {
    list: getList()
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
          <section><Login/></section>
        </Route>
        <Route path="/lista">
          <section><Search filteredList = {this.state.list}/></section>
        </Route>
        <Route path="/dod">
          <section><StudentAdding main = {this.updateList}/></section>
        </Route>
        <Route path="/reg">
          <section><Register/></section>
        </Route>
        <Route>
          <section><h1>Error 404 - not found</h1></section>
        </Route>
      </Switch> 
    );
  }
}

export default Main;
