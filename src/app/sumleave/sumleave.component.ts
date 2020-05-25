import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sumleave',
  templateUrl: './sumleave.component.html',
  styleUrls: ['./sumleave.component.scss']
})
export class SumleaveComponent implements OnInit {
  public myYear = new Date().getFullYear();
  public myMonth = new Date().getMonth();
  public myDay = new Date().getDay();
  public Employee;
  public countleave;
  public sumleave;

  constructor(
    public http: HttpClient

  ) { }

  ngOnInit() {
    // this.http.get('http://localhost/Leavewebservice/API/getLtype_Of.php').subscribe(
    //       (data: any) => {
    //         this.countleave = data;
    //       },
    //       (error: any) => {
    //         console.log(error);
    //       }
    //     )
    this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
      (data: any) => {
        console.log(data);
        this.Employee = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.http.get('http://localhost/Leavewebservice/API/getSumleave.php').subscribe(
      (data: any) => {
        console.log(data);
        this.sumleave = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
