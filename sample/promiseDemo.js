

const empid = new Promise((resolve, reject) => {

    setTimeout(() => {
        var eid = [10, 20, 30, 40, 50];
        resolve(eid);
        //reject("err");
    }, 2000);

})

const empdetails = (getId) => {

    return new Promise((resolve, reject) => {

        setTimeout((empid) => {
            var empd = {
                name: "Tops",
                email: 'tops@gmail.com'
            }
            // resolve(`my id is ${empid} and name is ${empd.name} and email is ${empd.email}`)
            reject("error");
        }, 2000, getId);
    })
}





// empid.then((data) => {
//     console.log(data)
//     return empdetails(data[1])
// }).then((edata) => {
//     console.log(edata);
// }).catch((err) => {
//     console.log(err)
// })

empdetails(10).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})