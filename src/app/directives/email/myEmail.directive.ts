import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Directive({
	selector: '[validateEmail]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: forwardRef(() => myEmail), multi: true }
	]
})
export class myEmail implements Validator {
	pattern = /^[0-9a-zA-Z_.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;;

	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {

		let input = control.value;
		if(input == '' || input==null)
			return null;
			
		let flag = this.pattern.test(input);
		return flag ? null : {
			valid: false
		};
	}
}