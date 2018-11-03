import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
@Injectable()
export class DashboardService {
  getMedicinesUrl: any = 'http://localhost:3001/medicine/getAllMedicines';
  addMedicinesUrl: any = 'http://localhost:3001/medicine/addMedicine';
  updateMedicineUrl: any = 'http://localhost:3001/medicine/updateMedicine';
  deleteMedicineUrl: any = 'http://localhost:3001/medicine/deleteMedicine';

  constructor(private http: Http) { }

  getMedicines() {
    return this.http.post(this.getMedicinesUrl, {})
      .map(this.successHandeler)
      .catch(this.errorHandeler);
  }

  addMedicine(obj) {
    return this.http.post(this.addMedicinesUrl, obj)
      .map(this.successHandeler)
      .catch(this.errorHandeler);
  }

  updateMedicine(obj) {
    return this.http.post(this.updateMedicineUrl, obj)
      .map(this.successHandeler)
      .catch(this.errorHandeler);
  }

  deleteMedicine(obj) {
    return this.http.post(this.deleteMedicineUrl, obj)
      .map(this.successHandeler)
      .catch(this.errorHandeler);
  }

  successHandeler(response) {
    if (response) {
      return response.json();
    }
  }

  errorHandeler(error) {
    return Observable.throw(error);
  }


}
