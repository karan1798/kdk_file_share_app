require('dotenv').config();
const mongoose=require('mongoose');

function connectDB(){
    //DB CONNECTION
    // console.log("jii");
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology:
    true}).then( () => {
        
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
};
    

module.exports=connectDB;