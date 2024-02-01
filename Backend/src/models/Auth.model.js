import moongose from "mongoose"

const Auth = new moongose.Schema({
    userName:{
        type:String,
        require:true,
        trim:true,
    },
    password:{
        type:String,
        require:true,
        trim:true
    }
})

export default moongose.model('Auth',Auth)