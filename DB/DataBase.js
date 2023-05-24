import mongoose from "mongoose";

export const DB = async()=>{
    try {
        const {connection} =await  mongoose.connect("mongodb+srv://Learner:rBN1uoxsBdSc0Gzg@cluster0.jgv6fou.mongodb.net/ToDo?retrywrites=true&w=majority" , { useNewUrlParser: true, useUnifiedTopology: true } );
        console.log(`coneection ${connection.host}`)
    } catch (error) {
        
    }
}