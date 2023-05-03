let persons = [];

document.getElementById("submit").addEventListener("click",() =>{
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;

    persons.push (new Person(firstname, lastname) );

    console.log(persons[persons.length - 1])



})