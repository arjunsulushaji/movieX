var db=require('../config/connection')
var collection=require('../config/collections')
module.exports={

    addCurrentMovie:(CurrentMovie,callback)=>{
        //console.log(CurrentMovie)
        db.get().collection('CurrentMovie').insertOne(CurrentMovie).then((data)=>{
            console.log(data)
            callback(data.insertedId)
        })
    },
    getCurrentMovie:()=>{
        return new Promise(async(resolve,reject)=>{
            let CurrentMovieData=await db.get().collection(collection.CURRENT_MOVIE).find().toArray()
            resolve(CurrentMovieData)
        })
    }
}