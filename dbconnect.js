import { connect } from 'mongoose';

const uri = "mongodb+srv://prashantsingh090798:84aZAjY7x4fRev5Y@tech-trend-datalake-clu.qpyfd55.mongodb.net/?retryWrites=true&w=majority";

const dbconnect = async()=> {
    await connect(uri);
    console.log('DB connected successfully...');
};

export default dbconnect;