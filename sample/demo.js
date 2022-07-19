
function demo() {

    var data = document.getElementById("uname").value;
    alert("function calling...." + data);
}

function add() {
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var result = document.getElementById("result");

    var sum = Number(v1) + Number(v2);
    result.innerHTML = sum;

}

function mul() {
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var result = document.getElementById("result");

    var sum = Number(v1) * Number(v2);
    result.innerHTML = sum;

}

function sub() {
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var result = document.getElementById("result");

    var sum = Number(v1) - Number(v2);
    result.innerHTML = sum;

}

function div() {
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var result = document.getElementById("result");

    var sum = Number(v1) / Number(v2);
    result.innerHTML = sum;

}

function validation() {

    var v1 = document.getElementById("n1");
    v1.style.backgroundColor = "red";
    v1.style.color = "white";


}