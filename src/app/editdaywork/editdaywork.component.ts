import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-editdaywork',
  templateUrl: './editdaywork.component.html',
  styleUrls: ['./editdaywork.component.scss']
})
export class EditdayworkComponent implements OnInit {
  public searchdaywork;
  public Empployee;
  public getdaywork;
  Day_Work: any;
  pageActual: any;
  baseUrl = 'http://localhost/Leavewebservice/API/';
  Emp_ID = new FormControl('');
  EmpName = new FormControl('');
  EmpLastName = new FormControl('');
  Status_Work = new FormControl('');
  Data = new FormControl('');
  Day_ID = new FormControl('');


  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    // this.http.get('http://localhost/Leavewebservice/API/searchdaywork.php').subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.searchdaywork = data;
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );
  }

  getsearchDay_Work(Day_Work) {
    console.log(Day_Work);
    this.Day_Work = [];
    if (!Day_Work) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันที่',
        text: 'Something went wrong!'
      })
    } else {

      this.http.get(`${this.baseUrl}searchdaywork.php?Day_Work=` + Day_Work).subscribe(
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
            this.searchdaywork = data;
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  Updateworktime(
    Day_ID, EmpName, EmpLastName, Status_Work, Data
  ) {
    this.Day_ID = new FormControl(Day_ID);
    console.log(this.Day_ID);
    this.EmpName = new FormControl(EmpName);
    console.log(this.EmpName);
    this.EmpLastName = new FormControl(EmpLastName);
    this.Status_Work = new FormControl(Status_Work);
    this.Data = new FormControl(Data);

  }
  public updateworktime() {
    const body = 'Day_ID=' + this.Day_ID.value
      // + '&EmpName=' + this.EmpName.value
      // + '&EmpLastName=' + this.EmpLastName.value
      + '&Status_Work=' + this.Status_Work.value
      + '&Data=' + this.Data.value;
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}Updateworktime.php`, body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.Empployee = data[0];
        },
        (error: any) => {
          console.log(error);
        }
      );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'แก้ไขข้อมูลเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.http.get(`${this.baseUrl}getdaywork.php`).subscribe(
        (data: any) => {
          console.log(data);
          this.getdaywork = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    })


  }

}


