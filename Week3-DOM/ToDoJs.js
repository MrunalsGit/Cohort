let cnt = 0;
function AddToDo(){
    let inputVal = document.getElementById("TaskIp");
    if(!inputVal.value.trim()){
        alert("No task entered");
        return;
    }
    let val = "> " + inputVal.value;

    let NewDiv = document.createElement("div");
    let NewDelete = document.createElement("button");
    let NewTask = document.createElement("div");

    NewTask.innerHTML = val;
    NewDelete.innerHTML = "Delete";
    NewDelete.setAttribute("onclick", "DeleteList("+cnt+")");

    NewDiv.classList.add("ListElement");
    NewTask.classList.add("ListContent");
    NewDelete.classList.add("ListDelete");
    
    NewDiv.setAttribute("id",cnt);

    NewDiv.append(NewTask);
    NewDiv.append(NewDelete);
    document.querySelector("#ListContainer").appendChild(NewDiv);

    // NewDiv.innerHTML = "<div class='ListContent'> "+ val+" </div> <button class='ListDelete' onclick='DeleteList("+cnt+")'> Delete </button>";
    // document.getElementById("ListContainer").appendChild(NewDiv);
    cnt++;
    inputVal.value = "";
}

let Input = document.getElementById("TaskIp");
Input.addEventListener("keydown", function(e){
    if(e.key == "Enter") AddToDo();
})

function DeleteList(cnt){
    const Child = document.getElementById(cnt);
    Child.parentNode.removeChild(Child);
}