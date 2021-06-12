// document.addEventListener("DOMContentLoaded", (e) => {
//    console.log(e.target)
   
// })

document.querySelector('#create-task-form').addEventListener('submit', submit)

function submit(e) {
  e.preventDefault()
  let input = document.querySelector('#new-task-description')
    if (input.value != '') {
      addToDo(input.value)
        input.value = ''
    }
}

const addToDo = () => {
  let ul = document.querySelector('ul')
  let li = document.createElement('li')
  li.textContent = 
  ul.appendChild(li)
}


// const deleteTodo = () => {
// const deleteBtn = document.createElement('button')
// deleteBtn.textContent = "Delete"
// document.querySelector('#list').appendChild(deleteBtn)
// }



