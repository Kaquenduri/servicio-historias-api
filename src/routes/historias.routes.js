import { Router } from 'express';

const router = Router();

import * as historiasController from '../controllers/historias.controller.js';

// GET /api/v1/historias -> Obtiene todas las historias
router.get('/', historiasController.getAllHistorias);

export default router; 