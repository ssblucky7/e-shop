import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address_line : {
        type : String,
        defult : ""
    },
    city : {
        type : String,
        default : ""
    },
    state : {
        type : String,
        default : ""
    },
    pincode : {
        type : String,
        default : null
    },
    country : {
        type : String,
        default : ""
    },
    mobile : {
        type : String,
        default : null
    },
    status : {
        type : Boolean,
        default : true
    }
},{
    timestamps : true
})

const AddressModel = mongoose.model('address',addressSchema)

export default AddressModel;