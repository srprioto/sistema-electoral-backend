import { DataTypes } from 'sequelize';
import { db } from '../../config/database/connection';

const Padron = db.define("Padron", {

    nombre: { type: DataTypes.STRING },
    dni: { type: DataTypes.STRING },
    nivel: { type: DataTypes.STRING },
    grado: { type: DataTypes.STRING },
    seccion: { type: DataTypes.STRING },
    voto_estado: { type: DataTypes.BOOLEAN }

}, {
    tableName: 'padron', // Asegúrate de que coincida con el nombre real de la tabla en la base de datos
    // timestamps: false // Si no tienes timestamps, puedes configurarlo así
})

export default Padron;
