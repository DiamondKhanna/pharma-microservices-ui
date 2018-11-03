import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any = [];
  screen: any = 'view';

  editedID:any;

  name_edit: any;
  manufacturer_edit: any;
  batch_no_edit: any;
  exp_date_edit: any;
  price_edit: any;
  type_edit: any;

  @ViewChild('editMedicineForm') editForm: NgForm;

  constructor(public dashboardService: DashboardService) { }

  ngOnInit() {
    this.getAllMedicines();
  }

  getAllMedicines() {
    this.dashboardService.getMedicines()
      .subscribe(response => {
        console.log(response);
        this.data = response;
      }, err => {
        console.log(err);
      });
  }

  change_screen(screen_name) {
    this.screen = screen_name;
  }


  edit(obj) {
    this.editedID = obj.id;
    this.change_screen('edit');
    this.name_edit = obj.name;
    this.manufacturer_edit = obj.manufacturer;
    this.batch_no_edit = obj.batch_number;
    this.exp_date_edit = obj.expiration_date;
    this.price_edit = obj.price;
    this.type_edit = obj.type
  }

  delete(obj) {
    obj.deleted = true;

    this.dashboardService.deleteMedicine(obj).subscribe(response => {
      console.log(response);
      this.getAllMedicines();
    }, err => {
      console.log(err);
    });

  }

  update_medicine(obj) {

    let req_obj = {
      "id": this.editedID,
      "name": obj.name_edit,
      "manufacturer": obj.manufacturer_edit,
      "batch_number": obj.batch_no_edit,
      "expiration_date": obj.exp_date_edit,
      "manufactured_date": obj.manufactured_date,
      "price": obj.price_edit,
      "type": obj.type_edit,
      "deleted": obj.deleted
    }
    this.dashboardService.updateMedicine(req_obj).subscribe(response => {
      console.log(response);
      alert(response.status);
      this.change_screen('view');
      this.getAllMedicines();
    }, err => {
      console.log(err);
    });
  }

  save_medicine(obj) {
    this.dashboardService.addMedicine(obj).subscribe(response => {
      console.log(response);
      alert(response.status);
      this.change_screen('view');
      this.getAllMedicines();
    }, err => {
      console.log(err);
    });
  }

}
