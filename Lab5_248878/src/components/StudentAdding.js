import React, { Component } from 'react';

class StudentAdding extends React.Component {
    state = {
        newListElement: {
            name: "",
            description: "",
            email: "",
        },
        newNameValue: "",
        newEmailValue: "",
        newDescriptionValue: "",
        warning: false
    }
    classText = "Dodaj nowego studenta:"
    nameText = "Proszę podać Imię:"
    descriptionText = "Proszę podać Opis:"
    emailText = "Proszę podać Email:"
    errorMessage = "Jedno, lub więcej pól są puste"

    handleNewEntryN = (event) => {
        this.setState({
            newNameValue: event.target.value
        });
    }

    handleNewEntryEm = (event) => {
        this.setState({
            newEmailValue: event.target.value
        });
    }

    handleNewEntryDesc = (event) => {
        this.setState({
            newDescriptionValue: event.target.value
        });
    }

    handleOnClick = () => {
        if(this.state.newNameValue === "" || this.state.newEmailValue === "" || this.state.newDescriptionValue === ""){
            this.setState({
                warning: true
            });
        }
        else{
            this.setState({
                newListElement: this.state.newListElement.name = this.state.newNameValue,
                newListElement: this.state.newListElement.description = this.state.newDescriptionValue,
                newListElement: this.state.newListElement.email = this.state.newEmailValue,
                newListElement: {},
                newNameValue: "",
                newEmailValue: "",
                newDescriptionValue: "",
                warning: false
            });
            this.props.main(this.state.newListElement)
        }
    }

    render() {
        return (
            <>
                <h2>{this.props.dummyText}</h2>
                {this.state.warning && <h2 className="borderWarning">{this.errorMessage}</h2> }
                <div className = "borderAdd">
                    <p>{this.classText}</p>
                    <p>{this.nameText}</p>
                    <input
                        type="text"
                        name="newNameValue"
                        value={this.state.newNameValue}
                        onChange={this.handleNewEntryN}
                    />
                    <br></br>
                    <p>{this.descriptionText}</p>
                    <input
                        type="text"
                        name="newDescriptionValue"
                        value={this.state.newDescriptionValue}
                        onChange={this.handleNewEntryDesc}
                    />
                    <br></br>
                    <p>{this.emailText}</p>
                    <input
                        type="text"
                        name="newEmailValue"
                        value={this.state.newEmailValue}
                        onChange={this.handleNewEntryEm}
                    />
                    <br></br>
                    <button
                        type="button"
                        name="Dodaj"
                        onClick={this.handleOnClick}
                        className="buttonMargin btn btn-success"
                    >Dodaj</button>
                </div>  
            </>
        );
    }
};
export default StudentAdding;
