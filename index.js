require("./models/db");
const express = require("express");
const path =  require("path");
const handlebars = require("handlebars");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access");

const studentController = require("./controllers/studentController")

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send(`
    <h2>Welcome to Students Database</h2>
    <h3>Click here to access the <b> <a href="/student/list">Database</a></b></h3>
    `)
});

app.set("views", path.join(__dirname, "/views/"));
app.engine("hbs", engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "hbs",
    defaultLayout: "MainLayout",
    layoutsDir: __dirname + "/views/layout/"
}));
 
app.set("view engine", "hbs");




//set the server to listen to the port.
app.listen(port, () => console.log(`server listening at port ${port}`));
app.use("/student", studentController);

