import cors from "cors";
import { Application } from "express";

export const middlewares = (app:Application, express:any) => {
    // cors
    app.use( cors() );

    // lectura del body
    app.use( express.json() )

    // carpeta publica
    app.use( express.static("public") );

}