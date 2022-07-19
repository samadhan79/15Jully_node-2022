
let display = (total) => {
    console.log("total is : " + total);
}

let calc = (n1, n2, mycall) => {
    mycall(n1 + n2);
}

let calc1 = (n1, n2, mycall) => {
    mycall(n1 * n2);
}

calc(10, 20, display)
calc1(10, 20, display)