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
import { environment } from 'src/environments/environment';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  baseUrl = 'http://localhost/Leavewebservice/API/';
  getname: any;
  test;

  constructor(public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,) { }

  ngOnInit() {

    // localStorage.clear();
    this.route.queryParams.subscribe((value: any) => {
      console.log(value);
      this.http
        .get(
          `${this.baseUrl}loginsso.php?perid=` + value.perid
        )
        .subscribe(
          (data: any) => {
            console.log(data);
            if (data.perid = "1309901383809") {
              console.log(data.perid);
              // localStorage.setItem('Emp_ID', data.perid);
              // this.router.navigate(['/leavelist']);
            }
          },
          (error: any) => {
            console.log(error);
          }
        )
    });
  }
  click(u: string, p: string) {
    if (!u || !p) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกรหัสผ่าน',
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
    var Username = Username.replace("\'", "");
    var Username = Username.replace("*", "");
    var Username = Username.replace("%", "");
    var Username = Username.replace("{}", "");
    var Username = Username.replace("&", "");
    var Username = Username.replace("$", "");
    var Username = Username.replace("#", "");
    console.log(Username)
    var Password = Password.replace("\'", "");
    var Password = Password.replace("*", "");
    var Password = Password.replace("%", "");
    var Password = Password.replace("$", "");
    var Password = Password.replace("#", "");
    var Password = Password.replace("{}", "");
    var Password = Password.replace("&", "");
    console.log(Password)
    if(Username === ""  ||  Password === ""){
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกรหัสผ่านให้ถูกต้อง',
        text: 'Something went wrong!',
        footer: '<a href ="/register">สมัครสมาชิก</a>'
      })
    }else {
      const body = 'Username=' + Username
      + '&Password=' + Password
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}Login.php`, body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
            if (data.length == 0) {
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
      localStorage.setItem('DeptName', data[0].DeptName);
      localStorage.setItem('Sector_ID', data[0].Sector_ID);
      localStorage.setItem('SectorName', data[0].SectorName);
      console.log(localStorage.getItem('Emp_ID'));
      console.log(localStorage.getItem('EmpName'));
      console.log(localStorage.getItem('EmpLastName'));
      console.log(localStorage.getItem('Empstatus_ID'));
      console.log(localStorage.getItem('PositionName'));
      console.log(localStorage.getItem('EmpstatusName'));
      console.log(localStorage.getItem('Role'));
      console.log(localStorage.getItem('Dept_ID'));
      console.log(localStorage.getItem('Sector_ID'));
      console.log(localStorage.getItem('SectorName'));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'เข้าสู่ระบบสำเร็จ',
        showConfirmButton: false,
        timer: 1000
      }).then(() => {
        if (data[0].Role == "6") {
          this.router.navigate(['/home']);
        }
        else if (data[0].Role == "5") {
          this.router.navigate(['/leavetowaiting']);
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
        const body = 'Username=' + Username
          + '&Password=' + Password
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}Login1.php`, body, {
            headers: headers
          })
          .subscribe(
            (data: any) => {
              console.log(data);

              if (data.length == 0) {
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
                localStorage.setItem('DeptName', data[0].DeptName);
                localStorage.setItem('Sector_ID', data[0].Sector_ID);
                localStorage.setItem('SectorName', data[0].SectorName);
                console.log(localStorage.getItem('Emp_ID'));
                console.log(localStorage.getItem('EmpName'));
                console.log(localStorage.getItem('EmpLastName'));
                console.log(localStorage.getItem('Empstatus_ID'));
                console.log(localStorage.getItem('PositionName'));
                console.log(localStorage.getItem('EmpstatusName'));
                console.log(localStorage.getItem('Role'));
                console.log(localStorage.getItem('Dept_ID'));
                console.log(localStorage.getItem('Sector_ID'));
                console.log(localStorage.getItem('SectorName'));
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'เข้าสู่ระบบสำเร็จ',
                  showConfirmButton: false,
                  timer: 1000
                }).then(() => {
                  if (data[0].Role == "6") {
                    this.router.navigate(['/leavelist']);
                  }
                  else if (data[0].Role == "5") {
                    this.router.navigate(['/leavetowaiting']);
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
              Swal.fire({
                icon: 'error',
                title: 'กรุณากรอกรหัสผ่านให้ถูกต้อง',
                text: 'Something went wrong!',
                footer: '<a href ="/register">สมัครสมาชิก</a>'
              })
            }
          );
      }
    );
    }
    }
  public loginsso = async () => {
    window.location.replace(environment.ssoLogin);

  }
  public logoutsso = async () => {
    window.location.replace(environment.ssoLogout);
  }

}
