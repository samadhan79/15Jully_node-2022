const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/ecomm").then(() => {
    console.log("connection successfully !!!")
}).catch(err => {
    console.log(err);
})


const productScema = new mongoose.Schema({

    pname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        enum: ["tv", "fridge"],
        minlength: 2
    },
    price: Number,
    qty: Number,
    available: Boolean,
    date: {
        type: Date,
        default: Date.now
    }

})


const ProductList = mongoose.model("ProductList", productScema);


const addProduct = async () => {

    try {
        const tv = new ProductList({
            pname: "fridge",
            price: 5000,
            qty: 10,
            available: true
        })


        const result = await tv.save();
        console.log(result);
    } catch (error) {
        console.log(error);

    }

    // tv.save().then(data => {
    //     console.log(data)
    // }).catch(err => {
    //     console.log(err);
    // })

}

addProduct();

const addAllProduct = async () => {

    try {
        const Mobile = new ProductList({
            pname: "mobile",
            price: 50000,
            qty: 11,
            available: true
        })

        const fridge = new ProductList({
            pname: "fridge",
            price: 12000,
            qty: 05,
            available: true
        })

        const laptop = new ProductList({
            pname: "laptop",
            price: 5000,
            qty: 30,
            available: true
        })


        const result = await ProductList.insertMany([Mobile, fridge, laptop]);
        console.log(result);
    } catch (error) {
        console.log(error)
    }



}

//addAllProduct();


const viewData = async (_id) => {

    try {

        const result = await ProductList.find({ _id });
        console.log(result)
    } catch (error) {
        console.log(error)
    }

}

//viewData("6281dcb8ef9d7be93571709c");

const viewQueryData = async () => {

    try {

        const result = await ProductList.find({ qty: { $gte: 10 } })
            .select({ pname: 1, qty: 1 })
            .sort({ pname: -1 })
            .limit(10);
        console.log(result)
    } catch (error) {
        console.log(error)
    }

}

//viewQueryData();


const deleteData = async () => {

    try {
        //const result = await ProductList.deleteOne({ pname: "Tv" });
        //const result = await ProductList.deleteMany({ pname: "Tv" });
        const result = await ProductList.findByIdAndDelete("6281dcb8ef9d7be93571709b");

        console.log(result)
    } catch (error) {
        console.log(error);
    }

}

//deleteData();


const updateData = async () => {

    try {

        const result = await ProductList.updateOne({ pname: "fridge" }, { price: 150002 });
        console.log(result);


    } catch (error) {
        console.log(err);
    }
}


//pdateData();