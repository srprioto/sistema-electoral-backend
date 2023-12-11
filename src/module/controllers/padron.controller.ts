import { Request, Response } from "express";
import Padron from "../models/padron.model";

class PadronController {

    constructor(){ }


    async getElectores(req:Request, res:Response) {
        const padron = await Padron.findAll();
        res.json(padron)
    }    


    async getElector (req:Request, res:Response) { 
        const { id } = req.params;
        const elector:any = await Padron.findByPk(id);

        if (elector) {
            res.json(elector)
        } else {
            res.status(404).json({
                mgs: "No se encontro el usuario"
            })
        }

    }


    async postElector (req:Request, res:Response) { 

        const { body } = req;

        const existeElector:any = await Padron.findOne({
            where: {
                dni: body.dni
            }
        })

        if (!!existeElector) {
            return res.status(400).json({
                msg: "el elector ya esta registrado"
            })
        } else {
            const electro:any = await Padron.create(body);
            res.json({
                msg: "nuevo elector",
                electro
            })
        }

    }


    async putElector (req:Request, res:Response) { 

        const { id } = req.params;
        const { body } = req;

        const elector:any = await Padron.findByPk(id);

        if (!elector) {
            return res.status(400).json({
                msg: "No existe el usuario"
            })
        } 

        // forma 1
        // await elector.update(body);

        // forma 2
        await Padron.update(body, { where: { id } });

        res.json({
            msg: "elector actualizado",
            elector
        })

    }

    
    async deleteElector (req:Request, res:Response) { 

        const { id } = req.params;

        const elector:any = await Padron.findByPk(id);

        if (!elector) {
            return res.status(400).json({
                msg: "No existe el usuario"
            })
        }

        // forma 1
        // await elector.destroy();

        // forma 2
        await Padron.destroy({ where: { id } })

        res.json({
            msg: "elector eliminado",
            id
        })

    }

}

export default new PadronController;



