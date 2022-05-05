import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.scss']
})
export class GetAllCustomersComponent implements OnInit {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
  }

  searchForm = new FormGroup({
    search: new FormControl(null)
  });

  dataArray: any[] = [];
  displayedColumns: any[] = ['Name', 'Address', 'Salary', 'Avatar'];
  dataSource: any[] = [];

  ngOnInit(): void {
    this.searchForm.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.http.get<any>('http://localhost:3000/api/v1/customer/search', {
        headers: {text: value.search}
      }).subscribe(responseData => {
        this.dataArray = responseData.data;
      }, error => {
        console.log(error);
      })
    });
  }

  private open(message: string) {
    this._snackBar.open(message, 'Close', {duration: 3000});
  }

}
