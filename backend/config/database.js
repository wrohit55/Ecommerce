const mongoose = require("mongoose");




const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: false
    }).then((data) => {
        console.log(`Mongodb vonnect with server: ${data.connection.host}`);
    })

}



module.exports = connectDatabase