import express, { Application } from "express";

import { routes } from "../routes/app.routes";
import { middlewares } from "../../config/middleware";
import db from "../../config/database/connection";
import dbConnection from "../../config/database/connection";

class Server {

    private app:Application;
    private port:string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8000";

        dbConnection();
        middlewares(this.app, express);
        routes(this.app);
        
    }


    listen(){
        this.app.listen(this.port, () => { 
            console.log("server run in " + this.port);            
         })
    }

}

export default Server;