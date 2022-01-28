import { operation } from './operation.routes'; 
import { userRoutes } from './user.routes'; 

import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';

const routes = Router();

routes.use('/operation', operation);
routes.use('/user', userRoutes);
routes.use(authenticateRoutes);

export { routes };