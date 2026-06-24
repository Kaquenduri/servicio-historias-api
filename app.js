import express from 'express';
import cors from 'cors';
import  historiasRoutes from './src/routes/historias.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
// endpoint base como /api/v1/historias
app.use('/api/v1/historias', historiasRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor de Historias corriendo en http://localhost:${PORT}`);
});
