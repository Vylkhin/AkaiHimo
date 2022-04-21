# Akai Himo

This project is an API allowing to manage all the home automation of a house.

## Authors

- [@AmbreFavetto](https://github.com/AmbreFavetto) [Ambre Favetto]
- [@Vylkhin](https://github.com/Vylkhin) [Sylvain Lespagnol] 

## Types of features
- [Users](#Users)
- [Actuator](#Actuators)
- [Sensors](#Sensors)

<p id = "Users"> </p>

## **Users features**

------------------

## GET /user  
 
> ## Description 
> ```
> Get all users. 
> ```
> ## Request params
> ```
> None.
> ```
> ## Request body
> ```
> None.
> ```
>## Response
>```json
>{"response":  
>    "OK", 
> "data": 
>    [{ 
>        "_id": "",  
>        "email": "", 
>        "username": "",  
>        "id": "" 
>    }] 
> } 
>``` 
>## Example
> ### Request 
> ``` 
> GET http://localhost:3000/user
> ```
> ### Params
> ```
> None.
> ```
> ### Body
> ```
> None.
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": [
>		{
>			"_id": "62616942b4842c031a07dcf0",
>			"email": "c@c.com",
>			"username": "aaaa",
>			"__v": 0,
>			"id": "62616942b4842c031a07dcf0"
>		}
>	]
>}
>``` 

## GET /user/:id

> ## Description 
> ```
> Get a user by id. 
> ```
> ## Request params
> ```
> a user id.
> ```
> ## Request body 
> ```
> None.
> ```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": {
>		"_id": "",
>		"email": "",
>		"id": ""
>	}
>}
>```
> ## Example
> ### Request 
> ```
> GET http://localhost:3000/user/62616942b4842c031a07dcf0
> ```
> ### Params
> ```
> 62616942b4842c031a07dcf0
> ```
> ### Body
> ```
> *None.*
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": {
>		"_id": "62616942b4842c031a07dcf0",
>		"email": "c@c.com",
>		"username": "aaaa",
>		"__v": 0,
>		"id": "62616942b4842c031a07dcf0"
>	}
>}
>``` 

## POST /user

>## Description
>```
>Create a user. 
>``` 
> ## Request params
>```
>None.
>```
> ## Request body
>```json
>{
>	"email": "a@b.com",
>	"username": "aaaa",
>	"password" : "abcd"
>}
>```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": {
>		"id": ""
>	}
>}
>```
> ## Example
> ### Request 
> ```
> POST http://localhost:3000/user/
> ```
> ### Params
> ```
> None.
> ```
> ### Body
> ```json
> {
>	"email": "a@b.com",
>	"username": "abcd",
>	"password" : "efgh"
>}
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": {
>		"id": "6261a65afcda6892670ca9d4"
>	}
>}
>``` 

## PATCH /user/:id 

> ## Description: 
>```
>Update a user by id. 
>``` 
> ## Request params
>```json
>a user id
>```
> ## Request body
>```json
>{
>	"email": "b@c.com",
>	"username": "bbbb",
>	"password" : "bcde"
>}
>```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": {
>		"id": ""
>	}
>}
>```
> ## Example
> ### Request 
> ```
> PATCH http://localhost:3000/user/6261a65afcda6892670ca9d4
> ```
> ### Params
> ```
> 6261a65afcda6892670ca9d4
> ```
> ### Body
> ```json
> {
>	"email": "b@c.com",
>	"username": "bcde",
>	"password" : "fghi"
>}
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": {
>		"id": "6261a65afcda6892670ca9d4"
>	}
>}
>``` 

## DELETE /user/:id

> ## Description 
>```
>Delete a user by id. 
>``` 
> ## Request params
>```
>a user id
>```
> ## Request body 
>```
>None.
>```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": {
>		"id": ""
>	}
>}
>```
> ## Example
> ### Request 
> ```
> DELETE http://localhost:3000/user/6261a65afcda6892670ca9d4
> ```
> ### Params
> ```
> 6261a65afcda6892670ca9d4
> ```
> ### Body
> ```
> None.
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": {
>		"id": "6261a65afcda6892670ca9d4"
>	}
>}
>``` 

<p id = "Actuators"> </p>

## **Actuators features**

------------------

## GET /actuator 
 
> ## Description 
>```
>Get all actuators. 
>``` 
> ## Request params 
>```
>None.
>```
> ## Request body 
>```
>None.
>```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": [
>		{
>			"_id": "",
>			"type": "",
>			"designation": "",
>			"state": true,
>			"id": ""
>		}
>	]
>}
>``` 
> ## Example
> ### Request 
> ```
> GET http://localhost:3000/actuator
> ```
> ### Params
> ```
> None.
> ```
> ### Body
> ```
> None.
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": [
>		{
>			"_id": "6261ab82f81430cabd6c58fb",
>			"type": "LIGHT",
>			"designation": "the light",
>			"state": false,
>			"__v": 0,
>			"id": "6261ab82f81430cabd6c58fb"
>		}
>	]
>}
>``` 


## GET /actuator/:id 
 
> ## Description 
>```
>Get an actuator by id. 
>``` 
> ## Request params 
>```
>an actuator id.
>```
> ## Request body
>```
>None.
>```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": {
>		"_id": "",
>		"type": "",
>		"designation": "",
>		"state": false,
>		"id": ""
>	}
>}
>``` 
> ## Example
> ### Request 
> ```
> GET http://localhost:3000/actuator/6261ab82f81430cabd6c58fb
> ```
> ### Params
> ```
> 6261ab82f81430cabd6c58fb
> ```
> ### Body
> ```
> None.
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": {
>		"_id": "6261ab82f81430cabd6c58fb",
>		"type": "LIGHT",
>		"designation": "the light",
>		"state": false,
>		"id": "6261ab82f81430cabd6c58fb"
>	}
>}
>``` 

## POST /actuator/  
 
> ## Description 
>```
>Create an actuator. 
>``` 
> ## Request params
>```
>None.
>```
> ## Request body
>```json
>{
>	"type": "",
>	"designation": "",
>	"state" : true
>}
>```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": {
>		"type": "",
>		"designation": "",
>		"state": true,
>		"_id": "",
>		"id": ""
>	}
>}
>``` 
> ## Example
> ### Request 
> ```
> POST http://localhost:3000/actuator/
> ```
> ### Params
> ```
> None.
> ```
> ### Body
> ```json
> {
>	"type": "LIGHT",
>	"designation": "the light",
>	"state" : false
>}
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": {
>		"_id": "6261ab82f81430cabd6c58fb",
>		"type": "LIGHT",
>		"designation": "the light",
>		"state": false,
>		"id": "6261ab82f81430cabd6c58fb"
>	}
>}
>``` 

## PATCH /actuator/:id 
 
> ## Description
>```
>Update an actuator by id. 
>``` 
> ## Request params 
>```
>an actuator id
>```
> ## Request body
>```json
>{
>	"type": "",
>	"designation": "",
>	"state" : true
>}
>```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": {
>		"type": "",
>		"designation": "",
>		"state": true,
>		"_id": "",
>		"id": ""
>	}
>}
>``` 
> ## Example
> ### Request 
> ```
> PATCH http://localhost:3000/actuator/6261ab82f81430cabd6c58fb
> ```
> ### Params
> ```
> 6261ab82f81430cabd6c58fb
> ```
> ### Body
> ```json
> {
>	"type": "LIGHT",
>	"designation": "the light",
>	"state" : true
>}
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": {
>		"_id": "6261ab82f81430cabd6c58fb",
>		"type": "LIGHT",
>		"designation": "the light",
>		"state": false,
>		"id": "6261ab82f81430cabd6c58fb"
>	}
>}
>``` 

## DELETE /actuator/id: 
 
> ## Descriptio: 
>```
> Delete an actuator by id. 
>``` 
> ## Request params 
>```
>an actuator id.
>```
> ## Request body 
>```
>None.
>```
> ## Response
> ```json
>{
>	"response": "OK",
>	"data": {
>		"type": "",
>		"designation": "",
>		"state": true,
>		"_id": "",
>		"id": ""
>	}
>}
>``` 
> ## Example
> ### Request 
> ```
> DELETE http://localhost:3000/actuator/6261ab82f81430cabd6c58fb
> ```
> ### Params
> ```
> 6261ab82f81430cabd6c58fb
> ```
> ### Body
> ```
> None.
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": {
>		"_id": "6261ab82f81430cabd6c58fb",
>		"type": "LIGHT",
>		"designation": "the light",
>		"state": false,
>		"id": "6261ab82f81430cabd6c58fb"
>	}
>}
>``` 

<p id = "Sensors"> </p>

## Sensors features

------------------

## GET /sensor/ 
 
> ## Description
>```
> Get all sensors. 
>``` 
> ## Request params
>```
>None.
>```
> ## Request body
>```
>None.
>```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": [
>		{
>			"designation": "",
>			"rawValue": 1
>		}
>	]
>}
>``` 
> ## Example
> ### Request 
> ```
> GET http://localhost:3000/sensor
> ```
> ### Params
> ```
> None.
> ```
> ### Body
> ```
> None.
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": [
>		{
>			"type": "TEMPERATURE",
>			"designation": "tempéré",
>			"rawValue": 563,
>			"value": "21.27565982404692 °C"
>		},
>		{
>			"type": "TEMPERATURE",
>			"designation": "froid",
>			"rawValue": 0,
>			"value": "-20 °C"
>		}
>	]
>}
>``` 

## GET /sensor/:id
 
> ## Description 
>```
>Get a sensor by id. 
>``` 
> ## Request params
>```
>a sensor id.
>```
> ## Request body
>```
>None.
>```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": [
>		{
>			"designation": "",
>			"rawValue": 1
>		}
>	]
>}
>``` 
> ## Example
> ### Request 
> ```
> GET http://localhost:3000/sensor/6261b00cf81430cabd6c5902
> ```
> ### Params
> ```
> 6261b00cf81430cabd6c5902
> ```
> ### Body
> ```
> None.
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": [
>		{
>           "id": "6261b00cf81430cabd6c5902",
>			"type": "TEMPERATURE",
>			"designation": "froid",
>			"rawValue": 0,
>			"value": "-20 °C"
>		}
>	]
>}
>``` 

## POST /sensor/ 

> ## Description
>```
>Create a sensor. 
>``` 
> ## Request params
>```
>None.
>```
> ## Request body
>```json
>{
>	"type": "",
>	"designation": "",
>	"rawValue" : 1
>}
>```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": {
>		"type": "",
>		"designation": "",
>		"rawValue": 1,
>		"_id": "",
>		"id": ""
>	}
>}
>``` 
> ## Example
> ### Request 
> ```
> POST http://localhost:3000/sensor/
> ```
> ### Params
> ```
> None.
> ```
> ### Body
> ```json
> {
>	"type": "TEMPERATURE",
>	"designation": "le froid",
>	"rawValue" : 0
>}
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": {
>		"type": "TEMPERATURE",
>		"designation": "le froid",
>		"rawValue": 0,
>		"_id": "6261b12ad51b212df0f5acb0",
>		"__v": 0,
>		"id": "6261b12ad51b212df0f5acb0"
>	}
>}
>``` 

## PATCH /sensor/:id 
 
> ## Description
>```
>Update a sensor by id. 
>``` 
> ## Request params
>```
>a sensor id.
>```
> ## Request body
>```json
>{
>	"type": "",
>	"designation": "",
>	"rawValue" : 1
>}
>```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": {
>		"type": "",
>		"designation": "",
>		"rawValue": 1,
>		"_id": "",
>		"id": ""
>	}
>}
>``` 
> ## Example
> ### Request 
> ```
> PATCH http://localhost:3000/sensor/6261b12ad51b212df0f5acb0
> ```
> ### Params
> ```
> 6261b12ad51b212df0f5acb0
> ```
> ### Body
> ```json
> {
>	"type": "TEMPERATURE",
>	"designation": "le chaud",
>	"rawValue" : 700
>}
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": {
>		"id": "6261b12ad51b212df0f5acb0",
>			"type": "TEMPERATURE",
>			"designation": "le chaud",
>			"rawValue": 700,
>			"value": "31.319648093841643 °C"
>	}
>}
>``` 

## DELETE /sensor/:id  

> ## Description
>```
>Delete a sensor by id. 
>``` 
> ## Request params
>```
>a sensor id.
>```
> ## Request body
>```
>None.
>```
> ## Response
>```json
>{
>	"response": "OK",
>	"data": {
>		"type": "",
>		"designation": "",
>		"rawValue": 1,
>		"_id": "",
>		"id": ""
>	}
>}
>``` 
> ## Example
> ### Request 
> ```
> DELETE http://localhost:3000/sensor/6261b12ad51b212df0f5acb0
> ```
> ### Params
> ```
> 6261b12ad51b212df0f5acb0
> ```
> ### Body
> ```json
> None.
> ```
> ### Response
> ```json
> {
>	"response": "OK",
>	"data": {
>		"id": "6261b12ad51b212df0f5acb0",
>			"type": "TEMPERATURE",
>			"designation": "le chaud",
>			"rawValue": 700,
>			"value": "31.319648093841643 °C"
>	}
>}
>``` 
