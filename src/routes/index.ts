/**
 * Root Router
 */

import express, {Request, Response} from 'express';
import helloRouter from './HelloRoutes';
import { LogInfo } from '@/utils/logger';

//serve instance
let server = express();

//Router instance
let rootRouter = express.Router();

//Activate for requests to http//localhost:8000/api

// Get : http//localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response)=>{
    LogInfo('Get : http://localhost:8000/api/')
    //send Hello World
    res.send('Welcome to my API Restful: Express + TS + Nodemon + jest + Swagger + Mongoose');
});

//Redirections to Routers & Controllers
server.use('/', rootRouter); //http://localhost:8000/api/
server.use('/hello', helloRouter);// http://localhost:8000/api/hello --> HelloRouter
//Add more routes to the app

export default server;