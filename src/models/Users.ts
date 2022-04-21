import mongoose from "mongoose"
import z, { TypeOf } from "zod";

type User = {
    email: string
    password: string
    username: string
}
const SchemaUser = new mongoose.Schema<User>({
    email: String,
    password: String,
    username: String
});

SchemaUser.set('toJSON', { virtuals: true });
const User = mongoose.model('User', SchemaUser);

export default User;

export const userUpdate = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    username: z.string().min(2).regex(/^[a-zA-Z0-9]+$/),
  }); 