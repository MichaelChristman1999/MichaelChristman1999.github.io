/*
    ==================
    Title: float-max-field.js
    Author: William Austin
    Date: 4/22/2023
    Description: Creating a Float Field Max Module for Future Value App
*/

"use-strict";

export class FloatMaxField {
    constructor (name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }
    validate(){
        if (parseFloat(this.field) < this.max){
            return true; 
        }
        else {
            return false;
        }
    }
    getMessage(){
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`
    }
}