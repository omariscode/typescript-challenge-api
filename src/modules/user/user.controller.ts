import { Request, Response } from "express";
import { UserService } from "./user.service";

const userService = new UserService()

export class UserController {
    async register(req: Request, res: Response){
        const response = await userService.register(req.body);
        return res.json({user: response}).status(201);
    }

    async login(req: Request, res: Response){
        const response =  await userService.login(req.body);
        return res.json({token: response}).status(201);
    }
}