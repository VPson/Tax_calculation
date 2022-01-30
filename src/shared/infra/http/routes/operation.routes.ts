import { CreateOperationsController } from '@modules/operations/useCases/createOperation/CreateOperationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';
import { Router } from 'express';

const operationRoutes = Router();

const createOperationsContoller = new CreateOperationsController();

operationRoutes.post('/', ensureAuthenticated, createOperationsContoller.handle);

export { operationRoutes };