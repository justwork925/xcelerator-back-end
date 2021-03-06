const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// mongoose.connect("mongodb://justwork925:tomatobox91!@ds159767.mlab.com:59767/xcelerator", { useNewUrlParser: true });
mongoose.connect("mongodb://justwork925:tomatobox91!@ds133256.mlab.com:33256/xcelerator", { useNewUrlParser: true });
const db = mongoose.connection; 

db.on('error', (err) => {
   console.log('failed to connect to database', err);
});

db.once('open', () => {
   console.log('connection to database successful');
})

module.exports = mongoose;