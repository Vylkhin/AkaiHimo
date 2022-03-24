### API

## Collections

| Users               | Actuators                   | Sensors                                                            |
|:------------------- | :-------------------------- | :----------------------------------------------------------------- |
| Pseudo : STRING     | Type : "shutter" \| "light" | Type : "temperature" \|  "Humidity"  \| "Barometer" \| "Proximity" |
| Mail : STRING       | isUp : BOOLEAN              | Mesure : FLOAT                                                     |
| Password : STRING   | isDown : BOOLEAN            |                                                                    |

<br/>

---

<br/>

```
type Users = {
    pseudo : string,
    mail : string,
    password : string,
    admin : boolean,
    lastLogin: Date
}

type Actuators = {
    type : "shutter" | "light",
    isUp : boolean,
    isDown : boolean
}

type Sensors = {
    type : "temperature" | "Humidity" | "Barometer" | "Proximity",
    mesure : float
}
```

## Endpoints

| Method	| URI	  | Query parameters?	| Description	|  Body |
| :-------- | :------ | :--------------- | :----------- | :--- |
| GET       | /captors | type=string filter by type \| maxmesure=float mesure lower than \| minmesure=float mesure higher than  | Returns all existing captors and offers query filters  |  N/A                
| GET       | /captors/:id |   N/A          |  Returns an existing captor  | |              
| POST      |   /captors   |   N/A          |  Post a new captor           | {...} : Captors |
| PUT (or PATCH) | /captors/:id |  N/A      |  Update an existing captor   | {...} : Partial<Captors> |
| DELETE        | /captors/:id |   N/A      |  Delete an existing captor   | N/A |

| Method	| URI	  | Query parameters?	| Description	|  Body |
| :-------- | :------ | :--------------- | :----------- | :--- |
| GET       | /actuator | type=string filter by type \| isUp=boolean filter by isUp \| isDown=boolean filter by isDown  | Returns all existing actuators and offers query filters  |  N/A                
| GET       | /actuators/:id |   N/A          |  Returns an existing actuator  | |              
| POST      |   /actuators   |   N/A          |  Post a new actuator           | {...} : Actuators |
| PUT (or PATCH) | /actuators/:id |  N/A      |  Update an existing actuator   | {...} : Partial<Actuators> |
| DELETE        | /acturors/:id |   N/A      |  Delete an existing actuator   | N/A |