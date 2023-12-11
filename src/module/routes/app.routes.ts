import { Application } from 'express';
import padronRoutes from './padron.route';
import loginRoutes from './login.route';

export const routes = (app:Application) => {
    app.use( "/padron", padronRoutes )
    app.use( "/login", loginRoutes )


    
}

