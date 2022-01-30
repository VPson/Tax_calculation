import { operationRoutes } from './operation.routes'; 
import { userRoutes } from './user.routes'; 

import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';

const routes = Router();

routes.use('/operation', operationRoutes);
routes.use('/users', userRoutes);
routes.use(authenticateRoutes);

export { routes };