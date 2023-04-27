const cors = require('cors');
const express = require('express');
const routerApi = require('./routes/index');
const app = express();
const boom = require('@hapi/boom');
const port = process.env.PORT || 8080;

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const whiteList = ['http://127.0.0.1:5173'];

const corsOptions = {
    origin: (origin, callback) => {
        if (whiteList.includes(origin) || origin === undefined){
            callback(null, true);
        } else {
            callback(boom.unauthorized());
        }
    }
};

app.use(express.static(__dirname + '/public'));

require('./auth');
app.use(cors(corsOptions));
app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.info(`Listening at port ${port}`);
});