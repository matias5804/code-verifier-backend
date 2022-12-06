import express, {Request, Response } from "express";
import { HelloController } from "@/controller/HelloController";
import { LogInfo } from "@/utils/logger";

//Router from express 
let helloRouter = express.Router();

//http://localhost:8000/api/hello?name=Martin/
helloRouter.route('/') 
    // GET:
    .get(async (req :Request, res: Response)=>{
        //obtain a query param
        let name: any = req?.query?.name;
        LogInfo(`Query Param: ${name}`);
        //Controller Instance to excute method
        const controller: HelloController = new HelloController();
        //obtain Response
        const response = await controller.getMessage(name);
        //send to the client the response
        return res.send(response); 
    })

//export hello router
export default helloRouter