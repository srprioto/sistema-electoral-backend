import { Request, Response } from "express";
import Resultados from "../models/resultados.model";
import Padron from "../models/padron.model";
import queryBuild from "../../config/querys";


class ResultadosController {

    constructor(){ }


    async getMostrarResultados (req:Request, res:Response){

        const { nivel } = req.params;

        const consultaResultados:string = `
            SELECT
                candidatos.nombre_lista AS nombre,
                COUNT(resultados.id) AS votosRecibidos
            FROM
                candidatos
            LEFT JOIN
                resultados ON candidatos.id = resultados.candidatoId
            WHERE
                candidatos.nivel = '${nivel}'
            GROUP BY
                candidatos.id, candidatos.nombre_lista;
        `;

        const consultaVotosBlanco:string = `
            SELECT
                COUNT(*) AS totalVotosEnBlanco
            FROM
                resultados
            WHERE
                candidatoId IS NULL
                AND nivel = '${nivel}';
        `
        
        const votosBlanco = await queryBuild(consultaVotosBlanco);
        const votosEnBlanco = {
            nombre: "Votos en blanco",
            votosRecibidos: votosBlanco[0].totalVotosEnBlanco
        };

        const resultado = await queryBuild(consultaResultados);
        
        resultado.push(votosEnBlanco);

        res.json(resultado)
    }


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


