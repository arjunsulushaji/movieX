var db=require('../config/connection')

module.exports={

    addCurrentMovie:(CurrentMovie,callback)=>{
        //console.log(CurrentMovie)
        db.get().collection('CurrentMovie').insertOne(CurrentMovie).then((data)=>{
            console.log(data)
            callback(data.insertedId)
        })
    }
}