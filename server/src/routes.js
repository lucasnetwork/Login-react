import express from 'express'
import SessionController from './controllers/SessionController';
import sessionValidate from './validations/SessionValidate';

const routes = express.Router();

routes.post('/session', sessionValidate.store, SessionController.store)

export default routes