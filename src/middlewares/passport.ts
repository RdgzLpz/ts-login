import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import config from '../config/config';
import User from '../models/Users';

const options: StrategyOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken( ), // Indica de donde passport va a extraer el token
	secretOrKey: config.jwtSecret   // Firma
}

export default new Strategy( options, async ( payload /* contenido dentro del token */, done  ) => {
    try { 
	const user = await User.findById( payload.id );
    	if ( user )
            return done( null /*error*/, user /*usuario*/ );
    	else
            return done( null, false )
    } catch( error ) {
            console.log( error );
}
} );

