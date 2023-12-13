import { DataTypes } from 'sequelize';
import { db } from '../../config/database/connection';

const Resultados = db.define("Resultados", {

    padronId: { type: DataTypes.INTEGER },
    candidatoId: { type: DataTypes.INTEGER },
    nivel: { type: DataTypes.STRING }

    // teniente_alcalde: { type: DataTypes.STRING },
    // regidor_comunicacion: { type: DataTypes.STRING },
    // regidor_derechos: { type: DataTypes.STRING },
    // regidor_educacion: { type: DataTypes.STRING },
    // regidor_emprendimiento: { type: DataTypes.STRING },
    // regidor_salud: { type: DataTypes.STRING },
    // imagen: { type: DataTypes.STRING },
    // nivel: { type: DataTypes.STRING }

}, {
    tableName: 'resultados', // Asegúrate de que coincida con el nombre real de la tabla en la base de datos
    // timestamps: false // Si no tienes timestamps, puedes configurarlo así
})

export default Resultados;



