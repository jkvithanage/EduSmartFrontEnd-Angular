import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import CustomerDTO from "../../models/CustomerDTO";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-save-customer',
  templateUrl: './save-customer.component.html',
  styleUrls: ['./save-customer.component.scss']
})
export class SaveCustomerComponent implements OnInit {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  customerForm = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    address: new FormControl(null,[Validators.required]),
    salary: new FormControl(null,[Validators.required]),
    avatar: new FormControl(null,[Validators.required]),
  });

  saveCustomer(){
    let dto = new CustomerDTO(
      this.customerForm.get('name')?.value,
      this.customerForm.get('address')?.value,
      Number(this.customerForm.get('salary')?.value),
      this.customerForm.get('avatar')?.value
    );
    this.http.post<any>('http://localhost:3000/api/v1/customer/save', {
      name:dto.name,
      address:dto.address,
      salary:dto.salary,
      avatar:dto.avatar
    }).subscribe(response=>{
      this.open(response.data.name + '-' + response.message);
    }, error => {
      console.log(error)
    });
  }

  ngOnInit(): void {

  }
  private open(message: string){
    this._snackBar.open(message, 'Close', {duration: 3000});
  }
}
