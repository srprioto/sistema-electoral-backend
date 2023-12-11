import { Sequelize } from 'sequelize';

const namedb:string = "sistema_electoral";
const userdb:string = "root";
const passdb:string = "";
const hostdb:string = "localhost"
const dialectdb:any = "mysql"


export const db = new Sequelize(
    namedb, 
    userdb, 
    passdb, 
    { 
        host: hostdb, 
        dialect: dialectdb
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
