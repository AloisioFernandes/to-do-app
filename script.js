const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let total = 0
let unchecked = 0

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function uncheck(e) {
  e.target.checked === true ? unchecked-- : unchecked++
  uncheckedCountSpan.innerHTML = unchecked
}

function deleteTodo(e) {
  const todo = e.target.parentElement
  total--
  itemCountSpan.innerHTML = total
  todo.getElementsByClassName('todo-checkbox')[0].checked === false ? unchecked-- : ''
  uncheckedCountSpan.innerHTML = unchecked
  list.removeChild(todo)
}

function checkBox(element) {
  const check = document.createElement('input')
  check.setAttribute("type", "checkbox")
  check.setAttribute("class", classNames.TODO_CHECKBOX)
  check.addEventListener('click', uncheck)
  element.appendChild(check)
}

function deleteButton(element) {
  const deletebtn = document.createElement('button')
  deletebtn.innerHTML = "Delete"
  deletebtn.setAttribute("class", classNames.TODO_DELETE)
  deletebtn.addEventListener('click', deleteTodo)
  element.appendChild(deletebtn)
}

function newTodo() {
  const li = document.createElement('li')
  li.setAttribute("class", classNames.TODO_ITEM)
  li.innerHTML = "New TODO"

  checkBox(li)
  deleteButton(li)
  
  list.appendChild(li)
  total++
  itemCountSpan.innerHTML = total
  unchecked++
  uncheckedCountSpan.innerHTML = unchecked
}
