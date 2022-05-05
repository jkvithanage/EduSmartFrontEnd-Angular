import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import {SaveCustomerComponent} from "./components/save-customer/save-customer.component";
import {UpdateCustomerComponent} from "./components/update-customer/update-customer.component";
import {DeleteCustomerComponent} from "./components/delete-customer/delete-customer.component";
import {GetCustomerComponent} from "./components/get-customer/get-customer.component";
import {GetAllCustomersComponent} from "./components/get-all-customers/get-all-customers.component";

const routes: Routes = [
  {
    path: '', component: CustomerComponent, children: [
      {path:'save',component:SaveCustomerComponent},
      {path:'update',component:UpdateCustomerComponent},
      {path:'delete',component:DeleteCustomerComponent},
      {path:'get',component:GetCustomerComponent},
      {path:'get-all',component:GetAllCustomersComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
