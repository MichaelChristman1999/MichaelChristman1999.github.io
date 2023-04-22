/*
    ==================
    Title: float-field.js
    Author: William Austin
    Date: 4/22/2023
    Description: Creating a Float Field Module for Future Value App
*/

"use-strict";

export class FloatField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    validate(){
        if (!Number.isNaN(parseFloat(this.field))){
            return true;
            }
            else {
                return false;
            }
        }
    getMessage(){
        return `${this.name} must be a float value. You entered ${this.field}.`;
    }
}