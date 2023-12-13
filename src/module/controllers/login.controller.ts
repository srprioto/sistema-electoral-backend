import { Request, Response } from "express";
import Padron from "../models/padron.model";

class LoginController {

    constructor(){ }

    async loginElector (req:Request, res:Response) { 
        const { body } = req;

        const dni:string = body.dni;
        
        const elector:any = await Padron.findOne({ where: { dni: dni } })

        // estados
        // 1 - conectar
        // 2 - voto listo
        // 3 - no existe

        if (!!elector) {
            res.json({
                success: !elector.voto_estado ? "conectar" : "voto listo",
                state: !elector.voto_estado ? 1 : 2,
                elector: elector
            })
        } else { 
            // usuario no existe
            res.json({
                success: "no existe",
                state: 3,
                elector: elector
            })
        }

    }

}

export default new LoginController;