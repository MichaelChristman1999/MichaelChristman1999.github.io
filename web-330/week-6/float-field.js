/*
    ==================
    Title: float-field.js
    Author: Michael Christman
    Date: April 22nd, 2023
    Description: A float field class module I created for the Future Value App from week 6
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
