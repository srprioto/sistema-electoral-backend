import { Request, Response } from "express";
import Resultados from "../models/resultados.model";

class ResultadosController {

    constructor(){ }

    async postResultados (req:Request, res:Response) { 
        const { body } = req;
        // const { nivel } = req.params;
        // const electores:any = await Candidatos.findAll({ where: { nivel: nivel } });
        console.log(body);
        
        res.json({
            success: true
            
        })
    }

}

export default new ResultadosController;
