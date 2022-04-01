import mongoose from "mongoose"

enum SensorType {
    TEMPERATURE = "TEMPERATURE",
    HUMIDITY = "HUMIDITY",
    BARO = "BARO",
    PROXIMITY = "PROXIMITY"
}

type Sensor = {
    type: SensorType
    designation: string
    rawValue: number
}

const SchemaSensor = new mongoose.Schema({
    type: {
        type : String,
        enum : ['TEMPERATURE','HUMIDITY','BARO','PROXIMITY']
    },
    designation : String,
    rawValue: Number
});

SchemaSensor.set('toJSON', { virtuals: true });
const sensor = mongoose.model<Sensor>('Sensor', SchemaSensor);


export default sensor;