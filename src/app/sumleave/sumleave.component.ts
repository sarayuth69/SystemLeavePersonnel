import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { GlobalVariable } from '../baseUrl';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { style } from '@angular/animations';

@Component({
  selector: 'app-sumleave',
  templateUrl: './sumleave.component.html',
  styleUrls: ['./sumleave.component.scss']
})
export class SumleaveComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;

  public myYear = new Date().getFullYear();
  public myMonth = new Date().getMonth();
  public myDay = new Date().getDay();
  public Employee;
  public countleave;
  public sumleave;
  public searchdayleave;
  Day_leave_start: any;
  Day_leave_last: any;
  Day_leave_start_chack: any;
  Day_leave_last_chack: any;
  Progress_with: any;
  Emp_ID_show;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    protected http: HttpClient
    // private baseUrl : baseUrl



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
    this.http.get(`${this.baseUrl}getEmployee.php`).subscribe(
      (data: any) => {
        console.log(data);
        this.Employee = data;
      },
      (error: any) => {
        console.log(error);
      }
    );


  }
  filterChanged(selectedValue: string) {
    console.log('value is ', selectedValue);

  }
  sumleave_show(Emp_ID) {
    this.Emp_ID_show = Emp_ID
    console.log(Emp_ID);

    this.http.get(`${this.baseUrl}getSumleave.php?Emp_ID=${this.Emp_ID_show}`).subscribe(
      (data: any) => {
        console.log(data);
        this.sumleave = data;
        // for (var i = 0; i < this.sumleave.length; i++) {
        //   console.log(this.width);
        // }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getsearchdayleave(Day_leave_start, Day_leave_last) {
    this.Day_leave_start_chack = Day_leave_start
    this.Day_leave_last_chack = Day_leave_last
    // const body ='Day_leave_start=' + this.Day_leave_start_chack
    //   + '&Day_leave_last=' + this.Day_leave_last_chack
    // console.log(body);
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });
    // this.http
    //   .post(`${this.baseUrl}searchdayleave.php`, body, {
    //     headers: headers
    //   })
    //   .subscribe(
    //     (data: any) => {
    //       console.log(data);
    //       this.searchdayleave = data;
    //     },
    //     (error: any) => {
    //       console.log(error);
    //     }
    //   );

    if (!Day_leave_start) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันที่',
        text: 'Something went wrong!'
      })
    } else {
      this.http.get(`${this.baseUrl}searchdayleave.php?Day_leave_start=${this.Day_leave_start_chack}&Day_leave_last=${this.Day_leave_last_chack}`).subscribe(
        (data: any) => {
          console.log(data);

          if (data.length === 0) {
            Swal.fire({
              icon: 'error',
              title: 'ไม่พบข้อมูล',
              text: 'Something went wrong!'
            })
          }
          else {
            this.searchdayleave = data;
          }
        },
        (error: any) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'ไม่พบข้อมูล',
            text: 'Something went wrong!'
          })
        }
      );
    }
  }
}
