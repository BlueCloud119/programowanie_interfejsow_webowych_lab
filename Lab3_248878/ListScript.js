"use strict"

let previousElement;
let lastList;
let number1 = 0;
let number2 = 0;

const addToList = () => {

    const toDoText = document.getElementById("text").value;
    const toDoList1 = document.getElementById("ToDoList1");
    const toDoList2 = document.getElementById("ToDoList2");
    
    const newListElementDiv = document.createElement("div");
    const newListElementLi = document.createElement("li");
    const date = document.createElement("p");
    const newListElementButton = document.createElement("button");
    newListElementButton.innerHTML = "X";
    newListElementButton.classList = "btn btn-dark";
    newListElementDiv.classList = "border";

    date.innerHTML = "";
    newListElementLi.classList = "elementLi";
    newListElementLi.addEventListener("click", checkItem);
    newListElementLi.innerText = toDoText;
    newListElementDiv.appendChild(newListElementLi);
    newListElementDiv.appendChild(date);
    $(newListElementDiv).append(newListElementButton);

    newListElementButton.addEventListener("click",function(){
        $("#modal").modal();
        previousElement = $(this).parent();
        lastList = $(this).parent().parent().attr("id");
    });

    $("#BinButton").click(function(){
        $("#" + lastList).append(previousElement);
    });

    let list = document.getElementsByName("list");
    if(toDoText !== ""){
        if(list[0].checked === true && number1%2 === 0)
		    toDoList1.appendChild(newListElementDiv);
	    if(list[1].checked === true && number2%2 === 0)
            toDoList2.appendChild(newListElementDiv);
    }

}

const checkItem = (e) => {
    const clicked = e.target;
    if(clicked.classList[0] === "elementLi"){
        if(clicked.style.color === ""){
            clicked.style.color = "grey";
            clicked.style.textDecoration = "line-through";
            clicked.parentElement.childNodes[1].innerHTML = new Date().toLocaleString();
        }
        else{
            clicked.style.color = "";
            clicked.style.textDecoration = "none";
            clicked.parentElement.childNodes[1].innerHTML = "";
        }
    }
}

const hide = (num) =>{
    let color = document.getElementById("color" + num);
	let list = document.getElementById("ToDoList" + num);
	let positions = list.getElementsByTagName("div");
	for (let i = 0; i < positions.length; i++){
		positions[i].classList.toggle("hide");
	}
    color.classList.toggle("grey");
    if(num===1){
        number1++;
    }
    else{
        number2++;
    }
}

const yesResponse = () => {
    const temporary = previousElement;
    temporary.remove();
}

