import { DataTypes } from 'sequelize';
import { db } from '../../config/database/connection';

const Candidatos = db.define("Candidatos", {

    nombre_lista: { type: DataTypes.STRING },
    alcalde: { type: DataTypes.STRING },
    teniente_alcalde: { type: DataTypes.STRING },
    regidor_comunicacion: { type: DataTypes.STRING },
    regidor_derechos: { type: DataTypes.STRING },
    regidor_educacion: { type: DataTypes.STRING },
    regidor_emprendimiento: { type: DataTypes.STRING },
    regidor_salud: { type: DataTypes.STRING },
    imagen: { type: DataTypes.STRING },
    nivel: { type: DataTypes.STRING }

}, {
    tableName: 'candidatos', // Asegúrate de que coincida con el nombre real de la tabla en la base de datos
    // timestamps: false // Si no tienes timestamps, puedes configurarlo así
})

export default Candidatos;



