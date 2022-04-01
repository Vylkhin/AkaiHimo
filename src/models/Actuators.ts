import mongoose from "mongoose"
enum ActuatorType{
    BLINDS = "BLINDS",
    LIGHT = "LIGHT"
}

type Actuator = {
    type: ActuatorType
    designation: string
    state: boolean
}

/*
type ActuatorPost = Omit<Actuator, "id">
type ActuatorUpdate = Partial<ActuatorPost>
*/

const SchemaActuator = new mongoose.Schema({
    type : {
        type : String,
        enum : ['BLINDS', 'LIGHT']
    },
    designation: String,
    state: Boolean
});

SchemaActuator.set('toJSON', { virtuals: true });
const actuator = mongoose.model<Actuator>('Actuator', SchemaActuator);

export default actuator;