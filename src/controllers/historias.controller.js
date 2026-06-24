import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllHistorias = (req, res) => {
    try {

        // Ruta absoluta hacia historias.json
        const jsonPath = path.join(
            __dirname,
            '../data/historias.json'
        );

        // Leer archivo JSON
        const rawData = fs.readFileSync(
            jsonPath,
            'utf8'
        );

        const historias = JSON.parse(rawData);

        res.status(200).json(historias);

    } catch (error) {

        console.error(
            'Error al leer historias.json:',
            error
        );

        res.status(500).json({
            message: 'Error interno del servidor al obtener las historias.'
        });

    }
};