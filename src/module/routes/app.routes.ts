import { Application } from 'express';
import padronRoutes from './padron.routes';
import loginRoutes from './login.routes';
import candidatosRoutes from './candidatos.routes';
import resultadosRoutes from './resultados.routes';

export const routes = (app:Application) => {
    app.use( "/padron", padronRoutes );
    app.use( "/login", loginRoutes );
    app.use( "/candidatos", candidatosRoutes );
    app.use( "/resultados", resultadosRoutes );
    
}
