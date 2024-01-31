import moongose from "mongoose"

const User = new moongose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    }
})

export default moongose.model('User',User)