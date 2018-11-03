import { Directive, ElementRef, Attribute, HostListener } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
    selector: '[allowText][formControlName],[allowText][formControl],[allowText][ngModel],[allowText]'
})
export class StringValidator {

    alphabet = /^[a-zA-Z]+$/;
    alphaspace = /^[a-zA-Z ]+$/;
    alphanumeric = /^[a-zA-Z0-9]+$/;
    alphanumericspace = /^[a-zA-Z0-9 ]+$/;
    number = /^[0-9]+$/;
    decimal= /^[0-9.]+$/;

    result: boolean;

    constructor(  @Attribute('allowText') public allowText: string, private elementRef: ElementRef) { }

    validate(input) {
        let flag = this.allowText;

        if (input == null || input == '')
            return false;

        switch (flag) {
            case 'alphabet':
                this.result = this.alphabet.test(input);
                break;
            case 'alphaspace':
                this.result = this.alphaspace.test(input);
                break;
            case 'alphanumeric':
                this.result = this.alphanumeric.test(input);
                break;
            case 'alphanumericspace':
                this.result = this.alphanumericspace.test(input);
                break;
            case 'number':
                this.result = this.number.test(input);
                break;
                case 'decimal':
                this.result = this.decimal.test(input);
                break;
            default: this.result = false;
        }
        return this.result;
    }

    @HostListener('keypress', ['$event']) 
    onKeyPress(event: any) {
        let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        let input = event.target.value;
        if ((key == ' ' && input.trim() == '') || !this.validate(key)) {
			event.preventDefault();
		}
	}
}
