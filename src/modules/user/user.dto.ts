import z, { email } from "zod";


const CreateUserSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(4),
    role: z.enum(['user', 'admin']).default('user')
}).strict();

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4)
}).strict();


export type LoginDTO = z.infer<typeof LoginSchema>;
export type CreateUserDTO = z.infer<typeof CreateUserSchema>;