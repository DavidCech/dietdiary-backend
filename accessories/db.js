let mongoose = require('mongoose');
let uri = 'mongodb+srv://admin:admin@dietdiary-jqruf.mongodb.net/test?retryWrites=true&w=majority\n';

const connectToDB = async () => {
    await mongoose.connect(uri, {useNewUrlParser:true, useFindAndModify: false})
        .then(()=>{
            console.log('Connected to DB...');
        })
        .catch(err=>{
            console.log(err)
        });
};

module.exports = connectToDB;