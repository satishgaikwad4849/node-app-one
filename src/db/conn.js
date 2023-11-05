const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      await
       mongoose.connect(
       "mongodb://127.0.0.1:27017/node-app-one",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      ).then(()=>{
        console.log('MongoDB is Connected...');
      }).catch(
        (e)=>{
          console.log(e);
        }
      );
     
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;