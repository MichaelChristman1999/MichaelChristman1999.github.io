/*
    ==================
    Title: float-max-field.js
    Author: Michael Christman
    Date: April 22nd, 2023
    Description: A float field max module I created for Future Value App assignment from week 6
*/

"use-strict";
export class FloatFieldMax {
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
