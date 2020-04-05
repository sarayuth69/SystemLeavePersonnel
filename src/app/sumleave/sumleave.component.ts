import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sumleave',
  templateUrl: './sumleave.component.html',
  styleUrls: ['./sumleave.component.scss']
})
export class SumleaveComponent implements OnInit {
  public myDate = new Date().getFullYear();
  public Employee;
  public countleave;

  constructor(
    public http: HttpClient

  ) {}

  ngOnInit() {
    this.http.get('http://localhost/Leavewebservice/API/getLtype_Of.php').subscribe(
          (data: any) => {
            this.countleave = data;
          },
          (error: any) => {
            console.log(error);
          }
        )
        this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
          (data: any) => {
            console.log(data);
            this.Employee = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
  }
}
