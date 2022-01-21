import { operation } from './operation.routes'; 
import { user } from './user.routes'; 

import { Router } from 'express';

const routes = Router();

routes.use('/operation', operation);
routes.use('/user', user);

export { routes };