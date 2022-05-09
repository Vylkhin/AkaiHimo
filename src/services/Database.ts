import IDatabase from "./interfaces/IDatabase";
import actuator from "@/models/Actuators";
import sensor from "@/models/Sensors";
import user from "@/models/Users";
import { EventEmitter } from "stream";
import mongoose from "mongoose";

class Database<type> extends EventEmitter implements IDatabase{

    constructor() {
        super();
    }
    
    typesList = {
        User: user,
        Sensor: sensor,
        Actuator: actuator,
    };

    public async getAll(model: keyof typeof this.typesList) {
        // TODO find the good way to do that
        if(model == "User") {
            return await mongoose.Model.find().select('-password');
        }
        return await mongoose.Model.find();
        //return await this.typesList[model].find();
    }

    public async login(model: keyof typeof this.typesList, email: string) {
        return await this.typesList[model].findOne({ email: email });
    }

    public async getById(model: keyof typeof this.typesList, id: string) {
        if(model == "User") {
            return await this.typesList[model].findById(id).select('-password');
        }
        return await this.typesList[model].findById(id);
    }

    public async create(model: keyof typeof this.typesList, data: any) {         
        return await this.typesList[model].create(data);
    }

    public async update(model: keyof typeof this.typesList, id: string, data: any) {
        // TODO find the good way to do that
        //await this.typesList[model].findByIdAndUpdate(id, data);
    }

    public async delete(model: keyof typeof this.typesList, id: string) {
        await this.typesList[model].findByIdAndDelete(id);
    }
}

export default Database;