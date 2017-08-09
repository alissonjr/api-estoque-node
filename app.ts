import express from 'express';
import bodyParser from 'body-parser';
import authorization from './auth';
import config from './config/config';
import datasource from './config/datasource';
import productsRouter from './routes/products';
import usersRouter from './routes/users';
import authRouter from './routes/auth';

const app = express();

app.config = config;
app.datasource = datasource(app);

app.set('port', 7000);
app.use(bodyParser.json());

const auth = authorization(app);

app.use(auth.initialize());
app.auth = auth;

productsRouter(app);
usersRouter(app);
authRouter(app);

export default app;