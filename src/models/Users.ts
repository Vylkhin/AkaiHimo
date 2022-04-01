import mongoose from "mongoose"
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

//type UserGet = Omit<User, "password">
//type UserPost = Omit<User, "id">
//type UserUpdate = Partial<UserPost>

SchemaUser.set('toJSON', { virtuals: true });
const User = mongoose.model('User', SchemaUser);

export default User;