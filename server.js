const express = require ('express');
const exphbs = require('express-handlebars');
const app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');



app.get('/', (req, res)=>{
    
       return res.render('index', {Products});
 
})

// app.get("/portfolio", function(req, res) {
//     db.Project1.findAll({}).then(function(data) {
//       res.render("portfolio", { Project1: data });
//     });
//   });
app.listen(8080, ()=> {
    console.log("Server is starting at port", 8080);
})