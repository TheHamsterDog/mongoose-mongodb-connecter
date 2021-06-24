const connect = async (mongoose, uri)=>{
    try{
        const connection = await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
        console.log("Successfully connected to the database!!!");
    }
    catch(err){
        console.log(`Can't connect to the mongoose server: ${err.message}`);
    }
}
module.exports = connect;