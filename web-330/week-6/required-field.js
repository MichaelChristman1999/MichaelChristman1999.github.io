/*
    ==================
    Title: required-field.js, 
    Author: William Austin
    Date: 4/22/2023
    Description: Creating a Required Field Module for Future Value App
*/
"use-strict";

export class RequiredField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    validate(){
        return Boolean(this.field); 
    }
    getMessage(){
        return `${this.name} is a required field.`;
    }
}