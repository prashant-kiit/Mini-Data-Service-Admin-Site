import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import router from './routes.js';
import dbconnect from './dbconnect.js';

const app = express();
const port = process.env.PORT || 3000;

dbconnect();

app.use(json());
app.use('/user-api', router);

app.listen(port, () => {
  console.log(`Our Server is running on port ${port}`);
});
