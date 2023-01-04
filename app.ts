import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import routes from './src/routes/users';

const app = express();
const port = 8000;

dotenv.config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Example wwwapp listening qweqweon port ${port}`);
});
