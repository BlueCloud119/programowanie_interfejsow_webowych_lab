function hashCode(str) {
    let hash = 0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
};


const List = (props) => {
    const listElement = props.list;
    const listElements = listElement.map((element) =>
        <li key={hashCode(element.name)} style={{listStyleType: "none"}} className = "border">
            <picture style = {{float: "left"}} className = "imageBorder">
                <img src="default.jpg" style={{width: 190}}></img>
            </picture>
            <p className = "listElement">Imie i nazwisko: {element.name}</p>
            <p className = "listElement">Opis: {element.description}</p>
            <p className = "listElement">E-mail: {element.email}</p>
        </li>
    );
    return (
        <ul>
            {listElements}
        </ul>
    );
};

const ShowFound = (props) => {
    const searchedList = props.list;
    let number = 0;
    for(var i = 0; i < searchedList.length; i++) {
        number++;
    }
    return (
        <div>
            <p>Wyswietlone pozycje: {number}</p>
        </div>
    );
};


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

    handleClick = () => {
        this.setState({
            filteredDescriptions: this.props.filteredList
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
                    <button 
                    type="button"
                    name="RefreshButton"
                    onClick={this.handleClick}
                    className="btn btn-secondary buttonMargin"
                    >
                    Odśwież
                    </button>
                    <ShowFound list={this.state.filteredDescriptions}/>
                </div>
                <List list={this.state.filteredDescriptions}/>
                
            </>
        );
    }
};

class StudentAdding extends React.Component {

    state = {
        newList: [{
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
        newListElement: {
            name: "",
            description: "",
            email: ""
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
                newList: this.state.newList.concat(this.state.newListElement),
                newNameValue: "",
                newEmailValue: "",
                newDescriptionValue: "",
                warning: false
            });
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
                <br></br>
                <Search filteredList = {this.state.newList}/>
            </>
        );
    }
};

ReactDOM.render(
    <StudentAdding dummyText="Wyszukiwarka studentów"/>,
    document.getElementById('root')  
);