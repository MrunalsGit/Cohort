list = [];
listContent = [];

let firstInput = document.querySelector("#listInput");
firstInput.addEventListener("keydown", (e)=>{
    if(e.key == "Enter")AddList();
})

function AddList(){
    let input = document.querySelector("#listInput").value;
    if(!input.trim()){
        alert("Enter list name first")
        return;
    }
    list.push(input);
    renderList();
}

function delList(ind){
    list.splice(ind,1);
    renderList();
}

function editList(ind){
    let parent = document.querySelector("#list"+ind);
    let ip = document.createElement("input");
    parent.children[1].children[0].innerHTML = "Confirm";
    ip.value = parent.children[0].textContent;
    parent.children[0].innerHTML = "";
    parent.children[0].appendChild(ip);

    parent.children[1].children[0].onclick = ()=>{
        let val = parent.children[0].children[0].value;
        list[ind] = val;
        renderList();
    }
}

function listElement(val,ind){
    let title = document.querySelector("#title");
    title.innerHTML = "";
    renderListElement(val,ind);
}

function listComponent(val, ind){
    let main = document.createElement("div");
    let buttons = document.createElement("div");
    let del = document.createElement("button");
    let content = document.createElement("div");
    let update = document.createElement("button");

    content.innerHTML = val;
    del.innerHTML = "⨯";
    update.innerHTML="Edit Name";

    buttons.append(update);
    buttons.append(del);
    main.append(content);
    main.append(buttons);

    main.classList.add("listElement");
    content.onclick = ()=>{
        listElement(val,ind);
    }
    buttons.classList.add("listButton")
    del.onclick= ()=>{
        delList(ind);
    }
    update.onclick = ()=>{
        editList(ind);
    }
    main.id = "list"+ind;
    return main;
}

function renderList(){
    document.querySelector("#title").innerHTML = "";
    for(let i = 0; i < list.length; i++){
        let listElem = listComponent(list[i], i);
        let parent = document.querySelector("#title");
        parent.appendChild(listElem);
    }
}

function renderListElement(val, ind){
    let main = document.createElement("div");
    let content = document.createElement("div");
    let back = document.createElement("button");
    let ip = document.createElement("input");
    let add = document.createElement("button");
    let ipDiv = document.createElement("div");
    
    content.innerHTML = val;
    back.innerHTML = "➝";

    main.classList.add("listElement");
    back.classList.add("lisTButton")
    back.onclick = renderList;
    ip.placeholder="Enter Task";
    add.innerHTML="Add";
    ipDiv.classList.add("taskInput");
    
    main.append(content);
    main.append(back);
    ipDiv.append(ip);
    ipDiv.append(add);
    document.querySelector("#title").appendChild(main);
    document.querySelector("#title").appendChild(ipDiv);

}