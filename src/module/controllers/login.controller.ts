import { Request, Response } from "express";
import Padron from "../models/padron.model";

class LoginController {

    constructor(){ }

    async loginElector (req:Request, res:Response) { 
        const { body } = req;
        const dni:string = body.dni;

        const elector:any = await Padron.findOne({ where: { dni: dni } })

        if (!!elector) {

            res.json({
                success: "ok",
                resto: elector.voto_estado,
                dni: body.dni
            })
            
        } else {
            res.json({
                success: "fail",
            })
        }

    }

}

export default new LoginController;