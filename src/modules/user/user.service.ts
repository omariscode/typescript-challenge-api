import { UserModel } from "./user.model";
import { CreateUserDTO, LoginDTO } from "./user.dto";
import { AppError } from "../shared/error/AppError";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';


export class UserService{
    async register(data: CreateUserDTO){
        const user_exist = await UserModel.findOne({ email: data.email})
        if (user_exist) throw new AppError('Email already exists on the database', 400)
            
        const hashed = await bcrypt.hash(data.password, 10)
        const user = await UserModel.create({ name: data.name, password: hashed ,email: data.email, })

        return {id: user._id.toString(), name: user.name, email: user.email, role: user.role}
    }

    async login(data: LoginDTO){
        const email_exist =  await UserModel.findOne({email: data.email})
        if (!email_exist) throw new AppError('This email does not exist on our database', 401)

        const password = await bcrypt.compare(data.password, email_exist.password)
        if (!password) throw new AppError('Invalid password', 401)

        const token =  jwt.sign({id: email_exist._id, email: email_exist.email, role: email_exist.role}, "omarscode", {expiresIn: '1d'})
        return {token}

    }
}