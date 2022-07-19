
function mydate() {
    var date = document.getElementById("date");
    var dt = new Date();
    date.innerHTML = dt;
}


//setTimeout(mydate, 2000);

setTimeout(() => {
    var date = document.getElementById("date");
    date.style.backgroundColor = "black";
    date.style.color = "white";
}, 3000);


setInterval(mydate, 1000);