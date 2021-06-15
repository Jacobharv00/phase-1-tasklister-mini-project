document.addEventListener("DOMContentLoaded", (e) => {

const text = document.getElementById("new-task-description")

document.querySelector('#create-task-form').addEventListener('submit', submit)


function submit(e) {
  e.preventDefault()
  const ul = document.getElementById('tasks')
  const li = document.createElement('li')
  li.textContent = text.value
  const deleteBtn = document.createElement('button')
  deleteBtn.innerHTML = `<button class="delete-btn">Delete</button>`
  ul.appendChild(li)
  li.appendChild(deleteBtn)
  }






}) // End of  DOMContentLoaded


// First way I did it before 2nd build 

// document.querySelector('#create-task-form').addEventListener('submit', submit)

// document.querySelector('ul').addEventListener('click', handleDelete)

// function submit(e) {
//   e.preventDefault()
//   let input = document.querySelector('#new-task-description')
//     if (input.value != '') {
//       addToDo(input.value)
//         input.value = ''
//     }
// }

// function handleDelete(e)  {
//   if (e.target.name === 'deleteButton') {
//     deleteToDo(e)
//   }
// }

// function addToDo(todo) {
//   let ul = document.querySelector('ul')
//   let li = document.createElement('li')
//   li.innerHTML = `<span class="todo-item">${todo}</span>
//                   <button class="button" name="deleteButton">Delete</button>`
//   li.classList.add('add-todo')           
//   ul.appendChild(li)
// }

// function deleteToDo(e) {
//   let item = e.target.parentNode
//   item.remove()
// }

