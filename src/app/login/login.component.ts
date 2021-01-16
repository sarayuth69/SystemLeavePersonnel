import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { APIService } from '../api.service';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { baseUrl } from '../baseUrl.service';
import { GlobalVariable } from '../baseUrl';
import { style } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;

  getname: any;
  test;

  constructor(public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
    //  private baseUrl : baseUrl
  ) {

  }

  ngOnInit() {

    localStorage.clear();

    this.route.queryParams.subscribe((value: any) => {
      console.log(value);
      if (value.length < 0) {
    
        alert("1")
        this.router.navigate(['/login']);
        localStorage.clear();
      }
      else {
        this.http
          .get(
            `${this.baseUrl}loginsso.php?perid=` + value.perid
          )
          .subscribe(
            (data: any) => {
              console.log(data);
              console.log(data.uid[0]);
              const body = 'Emp_ID=' + data.uid[0]
              console.log(body);
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
                    // if (data.status_data == "W") {
                    //   Swal.fire({
                    //     icon: 'warning',
                    //     title: 'รออนุญาตให้ใช้ระบบ',
                    //     text: 'Something went wrong!'
                    //   })
                    //   this.logoutsso()
                    // }
                    // else {
                    localStorage.setItem('Emp_ID', data[0].Emp_ID);
                    localStorage.setItem('EmpName', data[0].EmpName);
                    localStorage.setItem('EmpLastName', data[0].EmpLastName);
                    localStorage.setItem('Empstatus_ID', data[0].Empstatus_ID);
                    localStorage.setItem('EmpstatusName', data[0].EmpstatusName);
                    localStorage.setItem('PositionName', data[0].PositionName);
                    localStorage.setItem('Position_ID', data[0].Position_ID);
                    localStorage.setItem('Role', data[0].Role);
                    localStorage.setItem('Dept_ID', data[0].Dept_ID);
                    localStorage.setItem('DeptName', data[0].DeptName);
                    localStorage.setItem('Sector_ID', data[0].Sector_ID);
                    localStorage.setItem('SectorName', data[0].SectorName);
                    localStorage.setItem('privilege', data[0].privilege);

                    console.log(localStorage.getItem('Emp_ID'));
                    console.log(localStorage.getItem('EmpName'));
                    console.log(localStorage.getItem('EmpLastName'));
                    console.log(localStorage.getItem('Empstatus_ID'));
                    console.log(localStorage.getItem('PositionName'));
                    console.log(localStorage.getItem('Position_ID'));
                    console.log(localStorage.getItem('EmpstatusName'));
                    console.log(localStorage.getItem('Role'));
                    console.log(localStorage.getItem('Dept_ID'));
                    console.log(localStorage.getItem('Sector_ID'));
                    console.log(localStorage.getItem('SectorName'));
                    // Swal.fire({
                    //   position: 'center',
                    //   icon: 'success',
                    //   title: 'เข้าสู่ระบบสำเร็จ',
                    //   showConfirmButton: false,
                    //   timer: 1000
                    // }).then(() => {
                    if (data[0].privilege == "A") {
                      this.router.navigate(['/home']);
                    }
                    else if (data[0].Role == "5" && data[0].privilege == "U") {
                      this.router.navigate(['/leavetowaiting']);
                    }
                    else if (data[0].Role == "4" && data[0].privilege == "U") {
                      this.router.navigate(['/leavelist']);
                    }
                    else if (data[0].Role == "3" && data[0].privilege == "U") {

                      this.router.navigate(['/leavelist']);
                    }
                    else if (data[0].Role == "2" && data[0].privilege == "U") {
                      this.router.navigate(['/leavelist']);
                    }
                    else if (data[0].Role == "1" && data[0].privilege == "U") {
                      this.router.navigate(['/leavelist']);
                    }
                    //   })
                    //     .then(() => {
                    setTimeout(() => {
                      window.location.reload();

                    }, 60);
                    //     })
                    // }
                  },
                  (error: any) => {

                    const body = 'Emp_ID=' + data.uid[0]
                    const headers = new HttpHeaders({
                      'Content-Type': 'application/x-www-form-urlencoded'
                    });
                    this.http
                      .post(`${this.baseUrl}Login1.php`, body, {
                        headers: headers
                      })
                      .subscribe(
                        (data: any) => {
                          console.log(data.status_data);

                          // if (data.status_data == "W") {
                          //   Swal.fire({
                          //     icon: 'warning',
                          //     title: 'รออนุญาตให้ใช้ระบบ',
                          //     text: 'Something went wrong!'
                          //   })
                          //   this.logoutsso();
                          // }
                          // else {
                          localStorage.setItem('Emp_ID', data[0].Emp_ID);
                          localStorage.setItem('EmpName', data[0].EmpName);
                          localStorage.setItem('EmpLastName', data[0].EmpLastName);
                          localStorage.setItem('Empstatus_ID', data[0].Empstatus_ID);
                          localStorage.setItem('EmpstatusName', data[0].EmpstatusName);
                          localStorage.setItem('PositionName', data[0].PositionName);
                          localStorage.setItem('Position_ID', data[0].Position_ID);
                          localStorage.setItem('Role', data[0].Role);
                          localStorage.setItem('Dept_ID', data[0].Dept_ID);
                          localStorage.setItem('DeptName', data[0].DeptName);
                          localStorage.setItem('Sector_ID', data[0].Sector_ID);
                          localStorage.setItem('SectorName', data[0].SectorName);
                          localStorage.setItem('privilege', data[0].privilege);

                          console.log(localStorage.getItem('Emp_ID'));
                          console.log(localStorage.getItem('EmpName'));
                          console.log(localStorage.getItem('EmpLastName'));
                          console.log(localStorage.getItem('Empstatus_ID'));
                          console.log(localStorage.getItem('PositionName'));
                          console.log(localStorage.getItem('Position_ID'));
                          console.log(localStorage.getItem('EmpstatusName'));
                          console.log(localStorage.getItem('Role'));
                          console.log(localStorage.getItem('Dept_ID'));
                          console.log(localStorage.getItem('Sector_ID'));
                          console.log(localStorage.getItem('SectorName'));
                          console.log(localStorage.getItem('privilege'));

                          // Swal.fire({
                          //   position: 'center',
                          //   icon: 'success',
                          //   title: 'เข้าสู่ระบบสำเร็จ',
                          //   showConfirmButton: false,
                          //   timer: 1000
                          // }).then(() => {
                          if (data[0].privilege == "A") {
                            this.router.navigate(['/leavelist']);
                          }
                          else if (data[0].Role == "5" && data[0].privilege == "U") {
                            this.router.navigate(['/leavetowaiting']);
                          }
                          else if (data[0].Role == "4" && data[0].privilege == "U") {
                            this.router.navigate(['/leavelist']);
                          }
                          else if (data[0].Role == "3" && data[0].privilege == "U") {

                            this.router.navigate(['/leavelist']);
                          }
                          else if (data[0].Role == "2" && data[0].privilege == "U") {
                            this.router.navigate(['/leavelist']);
                          }
                          else if (data[0].Role == "1" && data[0].privilege == "U") {
                            this.router.navigate(['/leavelist']);
                          }
                          // })
                          //   .then(() => {
                          setTimeout(() => {
                            window.location.reload();

                          }, 60);
                          //   })
                          // }
                        },
                        (error: any) => {
                          console.log(error);
                          Swal.fire({
                            title: 'เรียบร้อย',
                            text: "ส่งคำร้องขอใช้งานระบบเรียบร้อย รอผู้ดูแลระบบอนุญาต",
                            icon: 'warning',
                            confirmButtonText: 'บันทึก',
                            confirmButtonColor: '#3085d6',
                            cancelButtonText: 'ยกเลิก',
                            showCancelButton: true,
                            cancelButtonColor: '#d33',
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                'รอใช้งานระบบ',
                                '',
                                'success'
                              )
                              setTimeout(() => {
                                this.logoutsso();
                              }, 2000);

                            }
                          })
                        }
                      );
                  }
                );

            },
            (error: any) => {
              console.log(error);
            }
          )
      }

    });




    // this.route.queryParams.subscribe((value: any) => {
    //   console.log(value);
    //   // if (value.oldPath) this.oldPath = value.oldPath;
    //   if (value.sso) {
    //     this.http
    //       .post(`/loginsso?perid=${value.perid}`)
    //       .subscribe((value: any) => {
    //         console.log(value);
    // if (value.response.success) {
    //   let a = value.response.data.userID;

    //   this.onlogin(a);
    //   // console.log(a);
    // } else {
    // this.http.alertLog('error', 'ไม่พบข้อมูลผู้ใช้งาน');
    // setTimeout(function () {
    //   window.location.replace(environment.ssoLogout);
    // }, 3000);
    // }
    //         });
    //     }
    //   });

  }
  // click(u: string, p: string) {
  //   if (!u || !p) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'กรุณากรอกรหัสผ่าน',
  //       text: 'Something went wrong!',
  //       footer: '<a href ="/register">สมัครสมาชิก</a>'
  //     })
  //   }
  //   else if (u && p) {
  //     // ส่งไปฟังชัน
  //     this.APILogin(u, p);
  //   }
  // }
  // APILogin(Username, Password) {
  //   var Username = Username.replace("\'", "");
  //   var Username = Username.replace("*", "");
  //   var Username = Username.replace("%", "");
  //   var Username = Username.replace("{}", "");
  //   var Username = Username.replace("&", "");
  //   var Username = Username.replace("$", "");
  //   var Username = Username.replace("#", "");
  //   console.log(Username)
  //   var Password = Password.replace("\'", "");
  //   var Password = Password.replace("*", "");
  //   var Password = Password.replace("%", "");
  //   var Password = Password.replace("$", "");
  //   var Password = Password.replace("#", "");
  //   var Password = Password.replace("{}", "");
  //   var Password = Password.replace("&", "");
  //   console.log(Password)
  //   if (Username === "" || Password === "") {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'กรุณากรอกรหัสผ่านให้ถูกต้อง',
  //       text: 'Something went wrong!',
  //       footer: '<a href ="/register">สมัครสมาชิก</a>'
  //     })
  //   } else {
  //     const body = 'Username=' + Username
  //       + '&Password=' + Password
  //     const headers = new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     });
  //     this.http
  //       .post(`${this.baseUrl}Login.php`, body, {
  //         headers: headers
  //       })
  //       .subscribe(
  //         (data: any) => {
  //           console.log(data);
  //           if (data.length == 0) {
  //             Swal.fire({
  //               icon: 'error',
  //               title: 'กรุณากรอกรหัสผ่านให้ถูกต้อง',
  //               text: 'Something went wrong!',
  //               footer: '<a href ="/register">สมัครสมาชิก</a>'
  //             })
  //           }
  //           else {
  //             localStorage.setItem('Emp_ID', data[0].Emp_ID);
  //             localStorage.setItem('EmpName', data[0].EmpName);
  //             localStorage.setItem('EmpLastName', data[0].EmpLastName);
  //             localStorage.setItem('Empstatus_ID', data[0].Empstatus_ID);
  //             localStorage.setItem('EmpstatusName', data[0].EmpstatusName);
  //             localStorage.setItem('PositionName', data[0].PositionName);
  //             localStorage.setItem('Position_ID', data[0].Position_ID);
  //             localStorage.setItem('Role', data[0].Role);
  //             localStorage.setItem('Dept_ID', data[0].Dept_ID);
  //             localStorage.setItem('DeptName', data[0].DeptName);
  //             localStorage.setItem('Sector_ID', data[0].Sector_ID);
  //             localStorage.setItem('SectorName', data[0].SectorName);
  //             console.log(localStorage.getItem('Emp_ID'));
  //             console.log(localStorage.getItem('EmpName'));
  //             console.log(localStorage.getItem('EmpLastName'));
  //             console.log(localStorage.getItem('Empstatus_ID'));
  //             console.log(localStorage.getItem('PositionName'));
  //             console.log(localStorage.getItem('Position_ID'));
  //             console.log(localStorage.getItem('EmpstatusName'));
  //             console.log(localStorage.getItem('Role'));
  //             console.log(localStorage.getItem('Dept_ID'));
  //             console.log(localStorage.getItem('Sector_ID'));
  //             console.log(localStorage.getItem('SectorName'));
  //             Swal.fire({
  //               position: 'center',
  //               icon: 'success',
  //               title: 'เข้าสู่ระบบสำเร็จ',
  //               showConfirmButton: false,
  //               timer: 1000
  //             }).then(() => {
  //               if (data[0].Role == "6") {
  //                 this.router.navigate(['/home']);
  //               }
  //               else if (data[0].Role == "5") {
  //                 this.router.navigate(['/leavetowaiting']);
  //               }
  //               else if (data[0].Role == "4") {
  //                 this.router.navigate(['/leavelist']);
  //               }
  //               else if (data[0].Role == "3") {

  //                 this.router.navigate(['/leavelist']);
  //               }
  //               else if (data[0].Role == "2") {
  //                 this.router.navigate(['/leavelist']);
  //               }
  //               else if (data[0].Role == "1") {
  //                 this.router.navigate(['/leavelist']);
  //               }
  //             })
  //               .then(() => {
  //                 setTimeout(() => {
  //                   window.location.reload();

  //                 }, 60);
  //               })
  //           }
  //         },
  //         (error: any) => {
  //           const body = 'Username=' + Username
  //             + '&Password=' + Password
  //           const headers = new HttpHeaders({
  //             'Content-Type': 'application/x-www-form-urlencoded'
  //           });
  //           this.http
  //             .post(`${this.baseUrl}Login1.php`, body, {
  //               headers: headers
  //             })
  //             .subscribe(
  //               (data: any) => {
  //                 console.log(data);

  //                 if (data.length == 0) {
  //                   Swal.fire({
  //                     icon: 'error',
  //                     title: 'กรุณากรอกรหัสผ่านให้ถูกต้อง',
  //                     text: 'Something went wrong!',
  //                     footer: '<a href ="/register">สมัครสมาชิก</a>'
  //                   })
  //                 }
  //                 else {
  //                   localStorage.setItem('Emp_ID', data[0].Emp_ID);
  //                   localStorage.setItem('EmpName', data[0].EmpName);
  //                   localStorage.setItem('EmpLastName', data[0].EmpLastName);
  //                   localStorage.setItem('Empstatus_ID', data[0].Empstatus_ID);
  //                   localStorage.setItem('EmpstatusName', data[0].EmpstatusName);
  //                   localStorage.setItem('PositionName', data[0].PositionName);
  //                   localStorage.setItem('Position_ID', data[0].Position_ID);
  //                   localStorage.setItem('Role', data[0].Role);
  //                   localStorage.setItem('Dept_ID', data[0].Dept_ID);
  //                   localStorage.setItem('DeptName', data[0].DeptName);
  //                   localStorage.setItem('Sector_ID', data[0].Sector_ID);
  //                   localStorage.setItem('SectorName', data[0].SectorName);
  //                   console.log(localStorage.getItem('Emp_ID'));
  //                   console.log(localStorage.getItem('EmpName'));
  //                   console.log(localStorage.getItem('EmpLastName'));
  //                   console.log(localStorage.getItem('Empstatus_ID'));
  //                   console.log(localStorage.getItem('PositionName'));
  //                   console.log(localStorage.getItem('Position_ID'));
  //                   console.log(localStorage.getItem('EmpstatusName'));
  //                   console.log(localStorage.getItem('Role'));
  //                   console.log(localStorage.getItem('Dept_ID'));
  //                   console.log(localStorage.getItem('Sector_ID'));
  //                   console.log(localStorage.getItem('SectorName'));
  //                   Swal.fire({
  //                     position: 'center',
  //                     icon: 'success',
  //                     title: 'เข้าสู่ระบบสำเร็จ',
  //                     showConfirmButton: false,
  //                     timer: 1000
  //                   }).then(() => {
  //                     if (data[0].Role == "6") {
  //                       this.router.navigate(['/leavelist']);
  //                     }
  //                     else if (data[0].Role == "5") {
  //                       this.router.navigate(['/leavetowaiting']);
  //                     }
  //                     else if (data[0].Role == "4") {
  //                       this.router.navigate(['/leavelist']);
  //                     }
  //                     else if (data[0].Role == "3") {

  //                       this.router.navigate(['/leavelist']);
  //                     }
  //                     else if (data[0].Role == "2") {
  //                       this.router.navigate(['/leavelist']);
  //                     }
  //                     else if (data[0].Role == "1") {
  //                       this.router.navigate(['/leavelist']);
  //                     }
  //                   })
  //                     .then(() => {
  //                       setTimeout(() => {
  //                         window.location.reload();

  //                       }, 60);
  //                     })
  //                 }
  //               },
  //               (error: any) => {
  //                 console.log(error);
  //                 Swal.fire({
  //                   icon: 'error',
  //                   title: 'กรุณากรอกรหัสผ่านให้ถูกต้อง',
  //                   text: 'Something went wrong!',
  //                   footer: '<a href ="/register">สมัครสมาชิก</a>'
  //                 })
  //               }
  //             );
  //         }
  //       );
  //   }
  // }
  public loginsso = async () => {
    window.location.replace(environment.ssoLogin);

  }
  public logoutsso = async () => {
   
    window.location.replace(environment.ssoLogout);
  }

}
