/*
    ==================
    Title: float-min-field.js
    Author: William Austin
    Date: 4/22/2023
    Description: Creating a Float Field Min Module for Future Value App
*/

"use-strict";

export class FloatMinField {
    constructor (name, field, min){
        this.name = name;
        this.field = field;
        this.min = min;
    }
    validate(){
        if (parseFloat(this.field) > this.min){
            return true; 
        }
        else {
            return false;
        }
    }
    getMessage(){
        return `${this.name} must be more than ${this.min}. You entered ${this.field}.`
    }
}