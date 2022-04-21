const convertor = (MIN_RAW_VALUE:number, 
    MAX_RAW_VALUE:number, 
    MIN_CONVERT_VALUE:number, 
    MAX_CONVERT_VALUE:number,
    valueToConvert:number) => {
        return ((valueToConvert * (MAX_CONVERT_VALUE - MIN_CONVERT_VALUE))/MAX_RAW_VALUE) + MIN_CONVERT_VALUE;
    }

const showSensors = (type:String, dataToConvert:number) => {
    let newValue;
    switch (type) {
        case "PROXIMITY":            
            break;
        case "TEMPERATURE":
            newValue = convertor(0,1023,-20,55,dataToConvert) + " °C";
            break;
        case "HUMIDITY":
            newValue = convertor(0,1023,0,100,dataToConvert) + " %HR";
            break;
        case "BARO":
            newValue = convertor(0, 1023, 950, 1150, dataToConvert) + " HPa";
        break;
    
        default:
            break;
    }

    return newValue;
}

export default {convertor, showSensors};
