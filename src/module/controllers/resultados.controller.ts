import { Request, Response } from "express";
import Resultados from "../models/resultados.model";
import Padron from "../models/padron.model";


class ResultadosController {

    constructor(){ }

    async postResultados (req:Request, res:Response) { 
        const { body } = req;

        // const elector:any = await Padron.findOne({ where: { id: body.padronId } });
        const elector:any = await Padron.findByPk(body.padronId);

        if (!elector.voto_estado) {
            
            await Resultados.create(body);
            // await Padron.update({ voto_estado: true }, { where: { id: body.padronId } });

            res.json({
                success: true,
                msg: "voto registrado correctamente"
            })
        } else {
            res.json({
                success: false,
                msg: "el elector ya votó"
            })
        }
        
    }

}

export default new ResultadosController;
