
// const empid = () => {
//     setTimeout(() => {
//         var empid = [10, 20, 30, 40, 50];
//         console.log(empid)
//         setTimeout((id) => {
//             console.log("Called id : " + id)
//         }, 2000, empid[1]);

//     }, 2000);
// }

// empid();


const empid = new Promise((resolve, reject) => {
    setTimeout(() => {
        var empid = [10, 20, 30, 40, 50];
        resolve(empid)
    }, 2000);
})


empid.then(result => {
    console.log(result)
})