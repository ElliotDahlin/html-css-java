const studenturl = "http://localhost:1337/api/students";
const userurl = "http://localhost:1337/api/auth/local/";
document.getElementById("submit").addEventListener("click", sendData);
document.getElementById("btnfetchdata").addEventListener("click", fetchData);

async function sendData() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userData = {
        "identifier": username,
        "password": password
    };

    async function fetchData() {
        let studentResponse = await sendHTTPRequest(studenturl)
        console.log(studentResponse);
        let output = " ";
        
        studentResponse.data.array.array.forEach(element => {

            for(x in element.attributes){
                output += `<div>${x}: ${element.attributes[x]}</div>`;
            }
            
        });
       document.getElementById("studentsoutput", innerHTML = output);

    };

    let userResponse = await sendHTTPRequest(userurl, {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(userData)

    });

    if(!userResponse.jwt){
        alert("fel inlogg");
        return;
    };

    let firstname = document.getElementById("firtname").value;
    let lastname = document.getElementById("lastname").value;
    let age = parseInt( document.getElementById("age").value );

    let studentData ={
        "data": {
            "firstname": firstname,
            "lastname": lastname,
            "age": age
        }
    };

    let token = userResponse.jwt;

    let studentResponse = await sendHTTPRequest(studenturl, {
        method:"POST",
        headers:{
            "content-type":"application/json",
            "Authorization": "Bearer" + token


        },
        body: JSON.stringify(studentData)

    });

    alert(`${studentResponse.data.attributes}`)




};

async function sendHTTPRequest(url, payload = null) {
    let response = await fetch (url, payload);
    let jsobject = await response.json();

    return jsobject;

};






