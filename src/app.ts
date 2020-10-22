/* En este archivo sólo configuramos el servidor */  
import express, { urlencoded, json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

import authRoutes from './routes/auth.routes';
import specialRoutes from './routes/special.routes';

// initialization
const app = express();

// settings
app.set('port', process.env.PORT || 3007);

// middlewares
app.use(morgan( 'dev' ));
app.use(cors( ) );
app.use(urlencoded( { extended: false } ));
app.use(json( ) );
app.use( passport.initialize( ) );  //  inicializa passport
passport.use( passportMiddleware );

// routes 
app.get('/', (req, res) => {
    res.send(`The api is at http://localhost:${ app.get( 'port' ) }`);
});
app.use( authRoutes );
app.use( specialRoutes );

export default app;