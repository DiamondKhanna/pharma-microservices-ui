import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[blank_to_null]'
})
export class Blank_To_Null {
	constructor(element: ElementRef) {
	}

	@HostListener('keyup', ['$event']) onKeyUp(ev: any) {
		if(ev.target.value.length==0)
		{
			ev.target.value=null;

		}
	}


}