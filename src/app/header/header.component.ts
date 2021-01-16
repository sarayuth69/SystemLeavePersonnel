import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import {
  HttpClient,
  HttpHeaders,
  HttpEventType
} from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { GlobalVariable } from '../baseUrl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;

  public seach;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    private http: HttpClient,
    // private baseUrl : baseUrl
  ) { }
  show: boolean = false
  emp5: boolean
  emp4: boolean
  emp3: boolean
  emp2: boolean
  emp1: boolean

  emp5_A: boolean
  emp4_A: boolean
  emp3_A: boolean
  emp2_A: boolean
  emp1_A: boolean
  show1: boolean
  EmpName = localStorage.getItem('EmpName');
  EmpLastName = localStorage.getItem('EmpLastName');
  PositionName = localStorage.getItem('PositionName');
  EmpstatusName = localStorage.getItem('EmpstatusName');
  Emp_ID = new FormControl('');
  test = 0
  test_1: any;
  test_2: boolean
  msg: any;
  count_watting
  countleave_toDepartmenthead
  countleave_toDeputyleader
  countleave_toSupervisor
  countleave_toperson
  show_count_lavel2: boolean
  show_count_lavel3: boolean
  show_count_lavel4: boolean
  show_count_lavel5: boolean
  ngOnInit() {

    // if (this.test > 1) {
    //   this.test_2 = true
    // } else {
    //   this.test_2 = false
    // }

    const Emp_ID = 'Emp_ID=' + localStorage.getItem("Emp_ID")
    console.log(Emp_ID);
    const headers1 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}messageShow.php`, Emp_ID, {
        headers: headers1
      }).subscribe(
        (data: any) => {
          this.msg = data
          for (var i = 0; i <= this.msg.length; i++) {

            try {
              if (this.msg[i].count_data >= 1) {
                this.test_2 = true
                this.test_1 = this.msg[i].count_data
              } else {
                this.test_2 = false
              }
            } catch (error) {
              // console.log(' — Error is handled gracefully: ', error.name);
            }

          }
        },
        (error: any) => {
          console.log("");
        }

      )





    // this.http.get(`${this.baseUrl}message.php`).subscribe(
    //   (data: any) => {
    //     this.msg = data
    //     for (var i = 0; i <= this.msg.length; i++) {
    //       console.log(this.msg[i].count_data);
    //       if (this.msg[i].count_data >= 1) {
    //         this.test_2 = true
    //         this.test_1 = this.msg[i].count_data
    //       } else {
    //         this.test_2 = false
    //       }
    //     }
    //     // if (this.msg.count_data >= 1) {
    //     //   this.test_2 = true
    //     // } else {
    //     //   this.test_2 = false
    //     // }
    //     // console.log(this.msg);
    //   }, (error: any) => {
    //     console.log("");
    //   }
    // )


    // if (localStorage.getItem('privilege') === "A") {
    //   this.show = true;
    //   // this.emp5 = false; 
    //   // this.emp3 = false; 

    // }
    if (localStorage.getItem('Role') === "1" && localStorage.getItem('privilege') === "U") {
      this.emp1 = true;
      // this.show = false; 
      // this.emp3 = false; 

    } else if (localStorage.getItem('Role') === "2" && localStorage.getItem('privilege') === "U") {
      this.emp2 = true;
      const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
      console.log(body);
      const headers1 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}count_leavetoDepartmenthead.php`, body, {
          headers: headers1
        }).subscribe(
          (data: any) => {
            this.count_watting = data
            for (var i = 0; i <= this.count_watting.length; i++) {
              try {
                if (this.count_watting[i].countleave >= 1) {
                  this.show_count_lavel2 = true
                  this.countleave_toDepartmenthead = this.count_watting[i].countleave
                } else {
                  this.show_count_lavel2 = false
                }
              } catch (error) {
                
              }
            
            }
          },
          (error: any) => {
            console.log("");
          }

        )
      // this.show = false; 
      // this.emp3 = false; 

    } else if (localStorage.getItem('Role') === "3" && localStorage.getItem('privilege') === "U") {
      this.emp3 = true;
      const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
      console.log(body);
      const headers1 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}count_leavetoSupervisor.php`, body, {
          headers: headers1
        }).subscribe(
          (data: any) => {
            this.count_watting = data
            for (var i = 0; i <= this.count_watting.length; i++) {
              try {
                if (this.count_watting[i].countleave >= 1) {
                  this.show_count_lavel3 = true
                  this.countleave_toSupervisor = this.count_watting[i].countleave
                } else {
                  this.show_count_lavel3 = false
                }
              } catch (error) {

              }

            }
          },
          (error: any) => {
            console.log("");
          }

        )
      // this.emp5 = false; 
      // this.show = false; 
      // this.emp3 = false; 

    } else if (localStorage.getItem('Role') === "4" && localStorage.getItem('privilege') === "U") {
      // this.emp4 = false; 
      // this.emp5 = false; 
      // this.show = false; 
      this.emp4 = true;
      const body = 'Sector_ID=' + localStorage.getItem("Sector_ID")
      console.log(body);
      const headers1 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}count_leavetoDeputyleader.php`, body, {
          headers: headers1
        }).subscribe(
          (data: any) => {
            this.count_watting = data
            for (var i = 0; i <= this.count_watting.length; i++) {
              try {
                if (this.count_watting[i].countleave >= 1) {
                  this.show_count_lavel4 = true
                  this.countleave_toDeputyleader = this.count_watting[i].countleave
                } else {
                  this.show_count_lavel4 = false
                }
              } catch (error) {
                // console.log(' — Error is handled gracefully: ', error.name);
              }

            }
          },
          (error: any) => {
            console.log("");
          }

        )




      // this.http.get(`${this.baseUrl}count_leavetoDeputyleader.php`).subscribe(
      //   (data: any) => {
      //     this.count_watting = data
      //     for (var i = 0; i <= this.count_watting.length; i++) {
      //       console.log(this.count_watting[i].countleave);
      //       if (this.count_watting[i].countleave >= 1) {
      //         this.show_count_lavel4 = true
      //         this.countleave_toDeputyleader = this.count_watting[i].countleave
      //       } else {
      //         this.show_count_lavel4 = false
      //       }
      //     }

      //   }, (error: any) => {
      //     console.log("");
      //   }
      // )

    } else if (localStorage.getItem('Role') === "5" && localStorage.getItem('privilege') === "U") {
      // this.emp4 = false; 
      // this.emp5 = false; 
      // this.show = false; 
      this.emp5 = true;
      this.http.get(`${this.baseUrl}count_LeaveToperson.php`).subscribe(
        (data: any) => {
          this.count_watting = data
          for (var i = 0; i <= this.count_watting.length; i++) {
            try {
              if (this.count_watting[i].countleave >= 1) {
                this.show_count_lavel5 = true
                this.countleave_toperson = this.count_watting[i].countleave
              } else {
                this.show_count_lavel5 = false
              }
            } catch (error) {

            }

          }

        }, (error: any) => {
          console.log("");
        }
      )
    }

    else if (localStorage.getItem('Role') === "1" && localStorage.getItem('privilege') === "A") {
      this.emp1_A = true
    }
    else if (localStorage.getItem('Role') === "2" && localStorage.getItem('privilege') === "A") {
      this.emp2_A = true;
      const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
      console.log(body);
      const headers1 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}count_leavetoDepartmenthead.php`, body, {
          headers: headers1
        }).subscribe(
          (data: any) => {
            this.count_watting = data
            for (var i = 0; i <= this.count_watting.length; i++) {
              try {
                if (this.count_watting[i].countleave >= 1) {
                  this.show_count_lavel2 = true
                  this.countleave_toDepartmenthead = this.count_watting[i].countleave
                } else {
                  this.show_count_lavel2 = false
                }
              } catch (error) {

              }

            }
          },
          (error: any) => {
            console.log("");
          }

        )
      // this.show = false;
      // this.emp3 = false; 
    }
    else if (localStorage.getItem('Role') === "3" && localStorage.getItem('privilege') === "A") {

      this.emp3_A = true;
      const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
      console.log(body);
      const headers1 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}count_leavetoSupervisor.php`, body, {
          headers: headers1
        }).subscribe(
          (data: any) => {
            this.count_watting = data
            for (var i = 0; i <= this.count_watting.length; i++) {
              try {
                if (this.count_watting[i].countleave >= 1) {
                  this.show_count_lavel3 = true
                  this.countleave_toSupervisor = this.count_watting[i].countleave
                } else {
                  this.show_count_lavel3 = false
                }
              } catch (error) {

              }

            }
          },
          (error: any) => {
            console.log("");
          }

        )
    }
    else if (localStorage.getItem('Role') === "4" && localStorage.getItem('privilege') === "A") {
      this.emp4_A = true;
      const body = 'Sector_ID=' + localStorage.getItem("Sector_ID")
      console.log(body);
      const headers1 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}count_leavetoDeputyleader.php`, body, {
          headers: headers1
        }).subscribe(
          (data: any) => {
            this.count_watting = data
            for (var i = 0; i <= this.count_watting.length; i++) {
              try {
                if (this.count_watting[i].countleave >= 1) {
                  this.show_count_lavel4 = true
                  this.countleave_toDeputyleader = this.count_watting[i].countleave
                } else {
                  this.show_count_lavel4 = false
                }
              } catch (error) {
                // console.log(' — Error is handled gracefully: ', error.name);
              }

            }
          },
          (error: any) => {
            console.log("");
          }

        )
    }
    else if (localStorage.getItem('Role') === "5" && localStorage.getItem('privilege') === "A") {
      this.emp5_A = true;
      this.http.get(`${this.baseUrl}count_LeaveToperson.php`).subscribe(
        (data: any) => {
          this.count_watting = data
          for (var i = 0; i <= this.count_watting.length; i++) {
            try {
              if (this.count_watting[i].countleave >= 1) {
                this.show_count_lavel5 = true
                this.countleave_toperson = this.count_watting[i].countleave
              } else {
                this.show_count_lavel5 = false
              }
            } catch (error) {

            }

          }

        }, (error: any) => {
          console.log("");
        }
      )
    }
  }

  // click() {
  //   this.test += 1
  //   console.log(this.test);
  //   if (this.test >= 1) {
  //     this.test_2 = true
  //   } else {
  //     this.test_2 = false
  //   }
  // }
  // click_2() {
  //   this.test -= 1
  //   console.log(this.test);
  //   if (this.test >= 1) {
  //     this.test_2 = true
  //   } else {
  //     this.test_2 = false
  //   }
  // }
  public logoutsso = async () => {
    Swal.fire({
      title: 'ต้องการออกจากระบบหรือไม่?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'ออกจากระบบเรียบร้อย',
          '',
          'success'
        ).then(() => {
          localStorage.clear();
          window.location.replace(environment.ssoLogout);

        })
      }
    })
  }
  clearUser() {
    Swal.fire({
      title: 'ต้องการออกจากระบบหรือไม่?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'ออกจากระบบเรียบร้อย',
          '',
          'success'
        ).then(() => {
          localStorage.clear();
          this.router.navigate(['/login']);

        }).then(() => {
          window.location.reload();
        })
      }
    })
  }
  getsearch(Emp_ID) {
    console.log(Emp_ID);
    this.seach = [];
    if (this.Emp_ID.value.length === "0") {
      Swal.fire({
        icon: 'error',
        title: 'ไม่พบข้อมูล',
        text: 'Something went wrong!'
      })
    } else {
      this.http.get(`${this.baseUrl}Search.php?Emp_ID=` + Emp_ID).subscribe(
        (data: any) => {
          console.log(data);
          // this.seach = data;
        },
        (error: any) => {
          console.log("");
        }
      );
    }

  }
}
