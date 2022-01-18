document.addEventListener("DOMContentLoaded", () => {
  let form = document.forms[0]; // or document.getElementById('create-task-form')
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputText = document.getElementById('new-task-description').value;
    if (inputText !== '')
      createTodoItem(inputText);
    form.reset();
  });
});

function createTodoItem(todo) {
  let btnRemove = document.createElement('button');
  btnRemove.textContent = 'x';
  btnRemove.addEventListener('click', removeTodoItem);

  let li = document.createElement('li');
  li.textContent = `${todo}  `;
  li.appendChild(btnRemove); 
  document.getElementById('tasks').appendChild(li);
  
  showRemoveListBtn();
}

function removeTodoItem(todoItem) {
  todoItem.target.parentNode.remove();

  showRemoveListBtn();
}

function createRemoveListBtn() {
  if (document.getElementById('removeList') === null) {
    let btnRemoveList = document.createElement('button');
    btnRemoveList.textContent = "Remove List";
    btnRemoveList.id = 'removeList';
    styleOfRemoveListBtn(btnRemoveList);
    document.getElementById('list').appendChild(btnRemoveList);
  }
}

function styleOfRemoveListBtn(btn) {
  btn.style.height = '30px';
  btn.style.fontSize = '12px';
  btn.style.margin = '3px 20px 3px 23px';
}

function showRemoveListBtn() {
  let ul = document.querySelector('#tasks');
  if (ul.childElementCount > 0) {
    createRemoveListBtn();
    document.getElementById('removeList').addEventListener('click', removeTODOList);
  } else {
    deleteRemoveListBtn();
  }
}

function deleteRemoveListBtn() {
  let removeListBtn = document.getElementById('removeList');
  removeListBtn.parentNode.removeChild(removeListBtn);
}

function removeTODOList() {
  let arrOfLi = document.querySelectorAll('#tasks li');
  arrOfLi.forEach(li => li.remove());
  deleteRemoveListBtn();
}