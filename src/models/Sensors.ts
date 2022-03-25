import mongoose from "mongoose"

const SchemaSensor = new mongoose.Schema({
    type: ['TEMPERATURE','HUMIDITY','BARO','PROXIMITY'],
    designation : String,
    rawValue: Number
});

const sensor = mongoose.model('Sensor', SchemaSensor);

export default sensor;