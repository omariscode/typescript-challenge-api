import mongoose from "mongoose";

export interface UserInterface {
    name: string,
    email: string,
    password: string,
    role: 'user' | 'admin'
}

const UserSchema = new mongoose.Schema<UserInterface>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required:true, minlength: 4},
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

export const UserModel = mongoose.model<UserInterface>('User', UserSchema)