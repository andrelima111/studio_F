const mongoose = require('mongoose');
const URI = 'mongodb+srv://studioUser:R0lTYLeyROY8AD1y@clusterdev.ryrx4gp.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDev'; 

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
  .connect(URI, options)
  .then(() => console.log('DB is Up!'))
  .catch((err) => console.log(err));