import React, { Component } from 'react';
import ShowFound from './ShowFound';
import List from './List';

class Search extends React.Component {
    state = {
        filteredDescriptions: this.props.filteredList
    }
    h2Text = "Wyszukiwanie studentów po opisach"

    getFilteredContent = (search) => {
        return this.props.filteredList.filter(element => element.description.toLowerCase().includes(search.toLowerCase()));
    }

    handleNewEntry = (event) => {
        const search = event.currentTarget.value;
        const filteredDescriptions = this.getFilteredContent(search);
        this.setState({
            filteredDescriptions
        });
    }
    
    render() {
        return (
           <>
                <div className = "borderSearch">
                    <p>{this.h2Text}</p>
                    <input
                    type="search"
                    name="newSearchValue"
                    value={this.state.newSearchValue}
                    onChange={this.handleNewEntry}
                    />
                    <ShowFound list={this.state.filteredDescriptions}/>
                </div>
                <List list={this.state.filteredDescriptions}/>
            </>
        );
    }
};


export default Search;