import moongose from "mongoose"

const Calendar = new moongose.Schema({
    userName:{
        type:String,
        require:true,
        trim:true,
    },
    day:{
        type:Date,
        require:true,
    }
})

export default moongose.model('Calendar',Calendar)