
let submit = document.getElementById('submit')

submit.onclick = function () {
  const title = document.getElementById('title').value
  const description = document.getElementById('description').value
  const status = document.getElementById('status').value
  const duedate = document.getElementById('duedate').value
  const priority = document.getElementById('priority').value
  const note = document.getElementById('note').value

  addNewTodoJson(title, description, duedate, status, priority, note)
}


async function addNewTodoJson(title, description, duedate, status, priority, note) {

  const resp = await fetch('/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description, duedate, status, priority, note })
  })

}


