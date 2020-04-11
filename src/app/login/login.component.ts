import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { APIService } from '../api.service';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { log } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  getname: any;
  constructor(public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient, ) { }

  ngOnInit() {
    // localStorage.clear();
  }
  click(u: string, p: string) {
    if (!u || !p) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกรหัสผ่านให้ถูกต้อง',
        text: 'Something went wrong!',
        footer: '<a href ="/register">สมัครสมาชิก</a>'
      })
    }
    else if (u && p) {
      // ส่งไปฟังชัน
  
        this.APILogin(u, p);
     
    }
  }

  APILogin(Username, Password) {
    const body = 'Username=' + Username
      + '&Password=' + Password
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/Leavewebservice/API/Login1.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          
          if (data.length == 0 ) {
            Swal.fire({
              icon: 'error',
              title: 'กรุณากรอกรหัสผ่านให้ถูกต้อง',
              text: 'Something went wrong!',
              footer: '<a href ="/register">สมัครสมาชิก</a>'
            })
          }
          else {
            localStorage.setItem('Emp_ID', data[0].Emp_ID);
            localStorage.setItem('EmpName', data[0].EmpName);
            localStorage.setItem('EmpLastName', data[0].EmpLastName);
            localStorage.setItem('Empstatus_ID', data[0].Empstatus_ID);
            localStorage.setItem('EmpstatusName', data[0].EmpstatusName);
            localStorage.setItem('PositionName', data[0].PositionName);
            localStorage.setItem('Role', data[0].Role);
            localStorage.setItem('Dept_ID', data[0].Dept_ID);
            console.log(localStorage.getItem('Emp_ID'));
            console.log(localStorage.getItem('EmpName'));
            console.log(localStorage.getItem('EmpLastName'));
            console.log(localStorage.getItem('Empstatus_ID'));
            console.log(localStorage.getItem('PositionName'));
            console.log(localStorage.getItem('EmpstatusName'));
            console.log(localStorage.getItem('Role'));
            console.log(localStorage.getItem('Dept_ID'));
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'เข้าสู่ระบบสำเร็จ',
              showConfirmButton: false,
              timer: 1000
            }).then(() => {
              if (data[0].Role == "6" ) {
                this.router.navigate(['/leavelist']);
              }
              else if (data[0].Role == "5") {
                this.router.navigate(['/leavelist']);
              }
              else if (data[0].Role == "4") {
                this.router.navigate(['/leavelist']);
              }
              else if (data[0].Role == "3") {
          
                this.router.navigate(['/leavelist']);
              }
              else if (data[0].Role == "2") {
                this.router.navigate(['/leavelist']);
              }
              else if (data[0].Role == "1") {
                this.router.navigate(['/leavelist']);
              }
            })
              .then(() => {
                setTimeout(() => {
                  window.location.reload();

                }, 60);
              })
          }
        },
        (error: any) => {
          console.log(error);
        }
      );

  }

}
