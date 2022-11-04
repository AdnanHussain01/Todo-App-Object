// window.addEventListener('load' , () =>{
//     const form = document.querySelector("#new-task-form");
//     const list_el = document.querySelector("#tasks");

//     form.addEventListener('submit', (e) =>{
//         e.preventDefault();

//         const task = input.value

//         if (!task){
//             alert("Please fill out the task");
//             return;
//         }

//         const task_el = document.createElement("div");
//         task_el.classList.add("task");

//         const task_content_el = document.createElement("div");
//         task_content_el.classList.add("content");

//         task_el.appendChild(task_content_el)

//         const task_input_el = document.createElement("input");
//         task_input_el.classList.addw("text");
//         task_input_el.type = "text";
//         task_input_el.value = task;
//         task_input_el.setAttribute("readonly" , "readonly");

//         task_content_el.appendChild(task_input_el)

//         const task_actions_el = document.createElement("div");
//         task_actions_el.classList.add("actions");

//         const task_edit_el = document.createElement("button");
//         task_edit_el.classList.add("edit");
//         task_edit_el.innerHTML = "Edit"

//         const task_delete_el = document.createElement("button");
//         task_delete_el.classList.add("delete");
//         task_delete_el.innerHTML = "Delete"

//         task_actions_el.appendChild(task_edit_el);
//         task_actions_el.appendChild(task_delete_el);

//         task_el.appendChild(task_actions_el);

//         list_el.appendChild(task_el);

//         input.value = "";

//         task_edit_el.addEventListener('click' , () => {
//             if (task_edit_el.innerText.toLowerCase() == "edit"){
//                 task_input_el.removeAttribute("readonly");
//                 task_input_el.focus();
//                 task_edit_el.innerText = "Save";
//             }else {
//                 task_input_el.setAttribute("readonly" , "readonly");
//                 task_edit_el.innerText = "Edit"

//             }
//         })

//         task_delete_el.addEventListener('click' , () =>{
//             list_el.removeChild(task_el);
//         });
//     });
// });

var list = [];

const input = document.querySelector("#new-task-input");
const lists = document.getElementById("lists");
function add(e) {
  if (input.value == "") {
    alert("Please fill out the task");
    return;
  }

  lists.innerHTML = "";
  var task = {
    input1: input.value,
  };
  list.push(task);
  getData();

  input.value = "";
}

function getData() {
  lists.innerHTML = "";
  list.map(function (item , index) {
    lists.innerHTML += `<div id="tasks"><div class="task"><div class="content"><input type="text" id="editinput" class="text" value= "${item.input1}" readonly/></div><div class="actions"><button onclick="Edit(${index})" class="edit">Edit</button><button onclick="Delete(${index})" class="delete">Delete</button></div></div></div>`;
  });
}

function Delete(ind){
  list.splice(ind,1);
  getData()
}


function Edit(ind , e){
    var updatedValue = prompt("Edit Value")
    var updatedObject = {
      input1 : updatedValue
    }
    list.splice(ind , 1 , updatedObject);
    getData();
}