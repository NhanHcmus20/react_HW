// selector all element

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const pendingTask = document.querySelector(".pendingTask");
const clearAll = document.querySelector(".footer button");
// local storage
showTask();
addBtn.onclick = () => {
    let userEnterValue = inputBox.value;
    let getLocalStorage = localStorage.getItem("Newtodo");
    if (!getLocalStorage) {
      listArray = [];
    } else {
      listArray = JSON.parse(getLocalStorage);
    }
    console.log(listArray);
    listArray.push(userEnterValue);
    localStorage.setItem("Newtodo", JSON.stringify(listArray));
    showTask();
};
clearAll.onclick = deleteAll;
function showTask() {
    let getLocalStorage = localStorage.getItem("Newtodo");
    if (!getLocalStorage) {
      listArray = [];
    } else {
      listArray = JSON.parse(getLocalStorage);
    }
    let newTask = "";
    listArray.forEach((item, index) => {
      newTask += `<li><input type="checkbox" name="check_finish" id="check_finish"> ${item} <span onclick="deleteTask(${index})" class="icon"><i class="fa-solid fa-trash"></i></span>  </li>`;
    });
    todoList.innerHTML = newTask;
    inputBox.value = "";
    pendingTask.textContent = listArray.length;
}
function deleteAll() {
    listArray = [];
    localStorage.setItem("Newtodo", JSON.stringify(listArray));
    showTask();
}
function deleteTask(index) {
    listArray.splice(index, 1);
    localStorage.setItem("Newtodo", JSON.stringify(listArray));
    showTask();
  }
// bài tạp về nhà hoàn thiện các chức năng todo app
// - validate ô input có kí tự mới được phép add task, click enter cũng add được task
// - double click -> xuất hiện ô input để edit 
// - có ô checkbox để check task đã hoàn thành hay chưa