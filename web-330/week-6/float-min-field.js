/*
    ==================
    Title: float-min-field.js
    Author: Michael Christman
    Date: April 22nd, 2023
    Description:A float field min Module I created for the Future Value App assignment
*/

"use-strict";

export class FloatFieldMin {
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
