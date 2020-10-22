import mongoose, { ConnectionOptions } from 'mongoose';

import config from './config/config';

const dbOptions: ConnectionOptions = {
    useNewUrlParser:  true,
    useUnifiedTopology: true,
    useCreateIndex: true
}  

mongoose.connect(config.DB.URI, dbOptions);

const connection = mongoose.connection;

connection.once('open', ( ) => {
    console.log('MongoDB connection stablished');
});

connection.on('error', error => {
    console.log(error);
    process.exit(0);
});