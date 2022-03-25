class OutputFormat {
    response : string;
    data? : Record<string, any>;
    err? : Error;

    constructor(response:string = "OK", data?:Record<string, any>, err?:Error) {
        this.response = response;
        if(data !== undefined) {
            this.data = data;
        }
        if(err !== undefined) {
            this.err = err;
        }               
    }
};

export default OutputFormat;