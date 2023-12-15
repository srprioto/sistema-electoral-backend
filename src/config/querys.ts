import { QueryTypes } from "sequelize";
import { db } from "./database/connection";

const queryBuild = async (consulta:string) => { 
    return await db.query(consulta, {
        type: QueryTypes.SELECT,
    });
}

export default queryBuild;
