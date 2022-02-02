import { CreateOperationsController } from '@modules/operations/useCases/createOperation/CreateOperationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';
import { Router } from 'express';
import { DeleteOperationController } from '@modules/operations/useCases/deleteOperation/DeleteOperationController';

const operationRoutes = Router();

const createOperationsContoller = new CreateOperationsController();
const deleteOperationsContoller = new DeleteOperationController();

operationRoutes.post('/', ensureAuthenticated, createOperationsContoller.handle);

operationRoutes.delete('/delete/:id', ensureAuthenticated, deleteOperationsContoller.handle);

export { operationRoutes };