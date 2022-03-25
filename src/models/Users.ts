import mongoose from "mongoose"

const SchemaUser = new mongoose.Schema({
    email: String,
    password: String,
    username: String
});

//type UserGet = Omit<User, "password">
//type UserPost = Omit<User, "id">
//type UserUpdate = Partial<UserPost>

const User = mongoose.model('User', SchemaUser);

export default User;