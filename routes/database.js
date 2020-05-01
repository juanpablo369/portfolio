var mongoose = require("mongoose");



// database//
const  database  = {
    URI: 'mongodb+srv://thordevman:uGrRyuEp8,g$4jK@cluster0-e1gsp.mongodb.net/test?retryWrites=true&w=majority'
}
  
mongoose.connect(database.URI, {
  useNewUrlParser: true    
})
  .then(db => console.log('base de datos conectada'))
  .catch(err => console.log(err));

