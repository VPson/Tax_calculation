import { AuthenticateUserController } from '@modules/users/useCases/authenticateUser/AuthenticateUserController';
import { Router } from 'express';


const authenticateRoutes = Router();

const autheticateUserController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', autheticateUserController.handle);

export { authenticateRoutes };