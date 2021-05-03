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

export default ShowFound;