let nameOfElement;
nameOfElement = "demo";
const person = {
  firstName: "John",
  lastName: "Doe"
};

function changeText(){
  document.getElementById(nameOfElement).innerHTML = "This is a bucket.";
  console.log(nameOfElement);
}

function printToConsole(input) {
    //window.alert(input);
    window.alert(person);
}

