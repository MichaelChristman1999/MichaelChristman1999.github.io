/*
    ==================
    Title: required-field.js, 
    Author: Michael Christman
    Date: April 22nd, 2023
    Description: A required field module I created for the Future Value App assignment from week 6
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
