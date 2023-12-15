import { Sequelize } from 'sequelize';

const namedb:string = "u533990259_sistema_electo";
const userdb:string = "u533990259_sis_electo";
const passdb:string = "TjHSC5#2?y2/";
const hostdb:string = "srv794.hstgr.io";

// const namedb:string = "sistema_electoral";
// const userdb:string = "root";
// const passdb:string = "";
// const hostdb:string = "localhost";

const dialectdb:any = "mysql";


export const db:any = new Sequelize(
    namedb, 
    userdb, 
    passdb, 
    { 
        host: hostdb, 
        dialect:dialectdb
        // logging: false
    }
);


const dbConnection = async () => {
    try {
        await db.authenticate();
        console.log("database online");
    } catch (error:any) {
        throw new Error( error );
    }
}


export default dbConnection;




// const namedb = process.env.NAMEDB || "sistema_electoral";
// const userdb = process.env.USERDB || "root";
// const passdb = process.env.PASSDB || "";
// const hostdb = process.env.HOSTDB || "localhost";