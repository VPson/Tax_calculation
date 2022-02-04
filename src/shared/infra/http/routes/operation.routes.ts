import { CreateOperationController } from '@modules/operations/useCases/createOperation/CreateOperationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';
import { Router } from 'express';
import { DeleteOperationController } from '@modules/operations/useCases/deleteOperation/DeleteOperationController';
import { UpdateOperationController } from '@modules/operations/useCases/updateOperation/UpdateOperationController';

const operationRoutes = Router();

const createOperationContoller = new CreateOperationController();
const deleteOperationContoller = new DeleteOperationController();
const updateOperationContoller = new UpdateOperationController();

operationRoutes.post('/', ensureAuthenticated, createOperationContoller.handle);

operationRoutes.delete('/delete/:id', ensureAuthenticated, deleteOperationContoller.handle);

operationRoutes.patch('/update/:id', ensureAuthenticated, updateOperationContoller.handle);

export { operationRoutes };