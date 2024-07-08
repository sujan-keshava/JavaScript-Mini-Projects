let todoList = [{ item : null, duedate: null}];
showItem()

function addTodo(){
    let a =0
    let inputElement = document.querySelector('#input-text');
    let inputDate = document.querySelector('#input-date');
    let textItem = inputElement.value;
    let dueDate = inputDate.value;
    todoList.push({item : textItem, duedate : dueDate});
    inputElement.value = '';
    inputDate.value = '';
    showItem()
}

function showItem(){
    let show = document.querySelector('#display-item');
    let newHtml = '';
        for(let i=0; i<todoList.length; i++)
            {
            let {item , duedate} = todoList[i];
            newHtml += `
            <div>
                <span>${item}</span>
                <span>${duedate}</span>
                <button onClick="todoList.splice(${i},1);
                showItem()">Delete</button>
            </div>
            `;
            }
    show.innerHTML = newHtml;
}