import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SaveCustomerComponent } from './components/save-customer/save-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    CustomerComponent,
    SaveCustomerComponent,
    UpdateCustomerComponent,
    GetCustomerComponent,
    DeleteCustomerComponent,
    GetAllCustomersComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        MatListModule,
        MatTableModule
    ]
})
export class CustomerModule { }
