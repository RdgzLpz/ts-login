import { Request, Response } from 'express';
import User, { IUser } from '../models/Users';
import jwt from 'jsonwebtoken';
import config from '../config/config';

function createToken( user: IUser ) {
	jwt.sign( { id: user.id, email: user.email }, config.jwtSecret, {   // jwt.sign( datos_a_guardar_con_el_token( carga útil ), clave_privada, expiracion ) --> crea un token
            expiresIn: 86400
	} )
}

export const signUp = async ( req: Request, res: Response ) => {
   if (!req.body.email || !req.body.password) {
       return res.status( 400 ).json( { msg: 'Please send your email and password' } )
   }
   const user = await User.findOne( { email: req.body.email } );

   if( user ) {
       return res.status( 400 ).json( { msg: 'The user already exist' } )
   }
   res.send( 'received' );
}

export const signIn = async ( req: Request, res: Response ) => {
   if ( !req.body.email || !req.body.password )
        res.status( 400 ).json( { msg: 'Please send email and password' } );
    const user = await User.findOne( { email: req.body.email } )
    if ( !user )
        return res.status( 400 ).json( 'The user does not exist.' );
    const isPassword = await user.comparePassword( req.body.password );
    if ( isPassword )
	return res.status( 200 ).json( { token: createToken( user) } );
    return res.status( 400 ).json( { msg: 'The email or password are incorrect.' } )	
}