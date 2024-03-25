
// app.js file
const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const mydb = require('./config/db');
const rout = require('./routes/router');
const path=require("path")
const  projectRoutes = require('./routes/routerProject');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(rout);

app.use ("/allproject/skills/projectID/picture/ofCompletaion" ,express.static(path.join(__dirname,"images")));  //localhost:3001allproject/skills/projectID/picture/ofCompletaion/tat.jpg
app.use("/allproject/skills/projectID/picture/ofMaterial" ,express.static(path.join(__dirname,"images"))); //localhost:3001allproject/skills/projectID/picture/ofCompletaion/tat.jpg
app.use("/allproject/skills/addpicture" ,require("./routes/upload")); // to upload in postman

app.use(projectRoutes);                                //allproject/skills to chooice or show all proj

app.listen(3001, () => {
    console.log('Server is  running now');
});