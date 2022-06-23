const userList = document.getElementById("userlist");
const userEdit = document.getElementById("userediting");
const userEditTab = document.getElementById("UserEditing-tab");
const userListTab = document.getElementById("UserList-tab");
const submit = document.getElementById("submit");
const table = document.getElementById("table");


function AddActiveUserEdit() {
    if(userList.classList.contains("active")) {
        userList.classList.remove("active");
        userEdit.classList.add("active");
        userEditTab.style.color = "blue";
        userListTab.style.color = "#495057";
    }
    else if(!userList.classList.contains("active")){
        userEdit.classList.add("active");
        userEditTab.style.color = "blue";
        userListTab.style.color = "#495057";
    }
}
function AddActiveUserList() {
    if(userEdit.classList.contains("active")) {
        userEdit.classList.remove("active");
        userList.classList.add("active");
        userListTab.style.color = "blue";
        userEditTab.style.color = "#495057";
    }
    else if(!userEdit.classList.contains("active")){
        userList.classList.add("active");
        userListTab.style.color = "blue";
        userEditTab.style.color = "#495057";
    }
}

function AddNewUser() {
    let userName = document.getElementById("username").value
    let fullName = document.getElementById("fullname").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let row = table.insertRow(-1);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    cell0.innerHTML = userName;
    cell1.innerHTML = fullName;
    cell2.innerHTML = email;
    cell3.innerHTML = password;
    cell4.innerHTML = `<a href=""><i class="fa fa-edit" aria-hidden="true"></i>Edit</a>
                        <a href=""><i class="fa fa-trash" aria-hidden="true"></i>Delete</a>`;
}
