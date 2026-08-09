let users = [];
cnt = 0;
id = 0;
async function upload(username,password){
    const response = await fetch("http://localhost:3111/signup",{
        method: "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            username,
            password
        })
    })
    const data = await response.json();
    return data;
}

async function check (username,password){
    const response = await fetch("http://localhost:3111/signin",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    const data = await response.json();
    return data;
}

function display(val){
    let elem = document.createElement("div");
    elem.innerHTML = val;

    const parent = document.querySelector("#parent");
    parent.append(elem);
}

async function SignUp(){
    const username = document.querySelector("#user1").value;
    const password = document.querySelector("#pass1").value;

    console.log(username);
    const update = await upload(username,password);
    console.log(update);
    if(update.message == "Account created"){
        display("Account created")
        console.log("SignUp done")
    }
    else{
        display("Username already taken")
        console.log("signup failed");
    }
}

async function SignIn(){
    const username = document.querySelector("#user2").value;
    const password = document.querySelector("#pass2").value;

    const update = await check(username,password);
    console.log(update.message);

    if(update.token) {
        cnt++;
        const user = users.find(u => u.username == username)
        display("Your JWT token : "+update.token);

        if(user){
            user.token = update.token;
            user.current = cnt;
            localStorage.setItem(user.id+"token",update.token);
        }
        else{
            id++;
            localStorage.setItem(id+"token", update.token);
            users.push({
            username,
            "token" : update.token,
            "id":id,
            "current":cnt
            })
        }
        console.log(users);
    }
    else display("Wrong username or password");
}

function Logout(){
    const user = users.findIndex(u => u.current == cnt);
    if(user != -1) {
        localStorage.removeItem(users[user].id+"token")
        users.splice(user,1);
        display("Logged out successfully");
        display(JSON.stringify(users));
        display(JSON.stringify(localStorage));
        cnt--;
    }
}
