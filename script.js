var data = [];


function get(x) {
   return  document.getElementById(x);
}



function getData() {
    var name = get('name').value;
    var mobile = get('mobile').value;
    var email  = get('email').value

    var user_data ={
        name: name,
        mobile: mobile,
        email: email
    }
    data.push(user_data);

    appendData();
}


function appendData() {
    get('segments').innerHTML="";
    get('segments').innerHTML="<div id='d' class='details'><p>Name</p>"+"<p>Mob No.</p>"+"<p>Email Id</p></div>";
    data.forEach(user=>{
        var name = document.createElement('p');
        name.innerHTML=user.name;
        get('segments').appendChild(name);
        var mob = document.createElement('p');
        mob.innerHTML=user.mobile;
        get('segments').appendChild(mob);
        var email = document.createElement('p');
        email.innerHTML=user.email;
        get('segments').appendChild(email);
        var btn = document.createElement('button');
        btn.value = user.email;
        btn.innerHTML="Delete";
        btn.addEventListener('click',deleteElement);
        btn.myparam = user.email;
        get('segments').appendChild(btn);
    });
}

function deleteElement(evt) {
    console.log(evt.currentTarget.myparam);
    data = data.filter(task => task.email !=evt.currentTarget.myparam);
    console.log(data.length);
    appendData();
    if(data.length===0){
        console.log("runnig");
        get('segments').innerHTML="";
    }
}