const mongoose = require("mongoose");

var db = "mongodb://localhost:27017/StudentDB";
mongoose.connect(db,

     { useNewUrlParser: true, useUnifiedTopology: true},
     (err) => {
        if(!err) {
            console.log("Connection Succeeded");
        } else {
            console.log("Error in Connection" +err);
        };
    }
     
     );



require("./student.model")