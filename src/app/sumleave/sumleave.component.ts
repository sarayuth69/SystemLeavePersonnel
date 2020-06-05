import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
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
  public searchdayleave;
  public Day_leave;

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

  getsearchdayleave(Day_leave) {
    console.log(Day_leave);
    if (!Day_leave) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันที่',
        text: 'Something went wrong!'
      })
    } else {
      this.http.get('http://localhost/Leavewebservice/API/searchdayleave.php?LeaveDateStart=' + Day_leave).subscribe(
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
        }
      );
    }
  }
}
