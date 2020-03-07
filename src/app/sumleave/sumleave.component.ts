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

  constructor(
    public http: HttpClient

  ) {}

  ngOnInit() {
    this.http.get('http://localhost/Leavewebservice/API/getEmployee_daywork.php').subscribe(
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
