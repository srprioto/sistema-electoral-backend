import { Request, Response } from "express";
import Candidatos from "../models/candidatos.model";

class CandidatosController {

    constructor(){ }

    async getCandidatos (req:Request, res:Response) { 
        const { nivel } = req.params;
        const electores:any = await Candidatos.findAll({ where: { nivel: nivel } });
        res.json(electores)
    }

}

export default new CandidatosController;



