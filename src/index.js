document.addEventListener("DOMContentLoaded", (e) => {

document.querySelector('#create-task-form').addEventListener('submit', submit)
document.querySelector('ul').addEventListener('click', handleDelete)

function submit(e) {
  e.preventDefault()
  let input = document.querySelector('#new-task-description')
    if (input.value != '') {
      addToDo(input.value)
        input.value = ''
    }
}

function handleDelete(e)  {
  if (e.target.name === 'deleteButton') {
    deleteToDo(e)
  }
}

function addToDo(todo) {
  let ul = document.querySelector('ul')
  let li = document.createElement('li')
  li.innerHTML = `<span class="todo-item">${todo}</span>
                  <button class="button" name="deleteButton">Delete</button>`
  li.classList.add('add-todo')           
  ul.appendChild(li)
}

function deleteToDo(e) {
  let item = e.target.parentNode
  item.remove()
}

}) // End of  DOMContentLoaded




