import hashCode from './hashCode';

const List = (props) => {
    const listElement = props.list;
    const listElements = listElement.map((element) =>
        <li key={hashCode(element.name)} style={{listStyleType: "none"}} className = "border">
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

export default List;