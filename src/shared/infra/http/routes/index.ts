import { operation } from './operation.routes'; 
import { userRoutes } from './user.routes'; 

import { Router } from 'express';

const routes = Router();

routes.use('/operation', operation);
routes.use('/user', userRoutes);

export { routes };