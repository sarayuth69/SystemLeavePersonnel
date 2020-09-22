import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// import { baseUrl } from '../baseUrl.service';
import { GlobalVariable } from '../baseUrl';

@Component({
  selector: 'app-leavetowaiting',
  templateUrl: './leavetowaiting.component.html',
  styleUrls: ['./leavetowaiting.component.scss']
})
export class LeavetowaitingComponent implements OnInit {
  //  baseUrl = 'https://www.rmuti.ac.th/student/sarayuth.kr/Leavewebservice/API/';
  public baseUrl = GlobalVariable.BASE_API_URL;
  table_leaveto_waiting;
  table_leaveto_waiting_3;
  setleavestatus;
  Emp_ID;
  Leave_ID;
  LeaveTotal;
  tableleavewaiting_2: boolean;
  tableleavewaiting_3: boolean;
  tableleavewaiting_4: boolean;
  tableleavewaiting_5: boolean;
  pageActual: any;
  constructor(
    public http: HttpClient,
    public route: ActivatedRoute,
    public api: APIService,
    // private baseUrl : baseUrl


  ) { }

  ngOnInit() {

    if (localStorage.getItem('Role') === "2") {
      this.tableleavewaiting_2 = true;
      this.tableleavewaiting_3 = false;
      this.tableleavewaiting_4 = false;
      this.tableleavewaiting_5 = false;
      const body2 = 'Dept_ID=' + localStorage.getItem("Dept_ID")
      console.log(body2);
      const headers2 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getleavetoDepartmenthead.php`, body2, {
          headers: headers2
        }).subscribe(
          (data: any) => {
            this.table_leaveto_waiting = data;
            console.log(this.table_leaveto_waiting);

          },
          (error: any) => {

          }

        )

    }
    else if (localStorage.getItem('Role') === "3") {
      this.tableleavewaiting_2 = false;
      this.tableleavewaiting_3 = true;
      this.tableleavewaiting_4 = false;
      this.tableleavewaiting_5 = false;
      const body3 = 'Dept_ID=' + localStorage.getItem("Dept_ID")
      console.log(body3);
      const headers3 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getleavetoSupervisor.php`, body3, {
          headers: headers3
        }).subscribe(
          (data: any) => {
            this.table_leaveto_waiting = data;
            console.log(this.table_leaveto_waiting);

          },
          (error: any) => {

          }

        )

    }
    else if (localStorage.getItem('Role') === "4") {
      this.tableleavewaiting_2 = false;
      this.tableleavewaiting_3 = false;
      this.tableleavewaiting_4 = true;
      this.tableleavewaiting_5 = false;
      this.http.get(`${this.baseUrl}getleavetoDeputyleader.php`).subscribe(
        (data: any) => {
          console.log(data);
          this.table_leaveto_waiting = data;
        },
        (error: any) => {

        }
      );
    }
    else if (localStorage.getItem('Role') === "5") {
      this.tableleavewaiting_2 = false;
      this.tableleavewaiting_3 = false;
      this.tableleavewaiting_4 = false;
      this.tableleavewaiting_5 = true;
      this.http.get(`${this.baseUrl}getleavetoperson.php`).subscribe(
        (data: any) => {
          console.log(data);
          this.table_leaveto_waiting = data;
        },
        (error: any) => {

        }
      );
    }
    // else if (localStorage.getItem('Role') === "3") {
    //   this.list = true;
    //   this.list1 = false;
    // }
    // else if (localStorage.getItem('Role') === "2") {
    //   this.list = true;
    //   this.list1 = false;
    // }
    // else if (localStorage.getItem('Role') === "1") {
    //   this.list = true;
    //   this.list1 = false;
    //   const body = 'Emp_ID=' + localStorage.getItem("Emp_ID")
    //   console.log(body);
    //   const headers = new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   });
    //   this.http
    //     .post(`${this.baseUrl}getLeave.php`, body, {
    //       headers: headers
    //     }).subscribe(
    //       (data: any) => {
    //         this.leave = data;
    //       },
    //       (error: any) => {
    //         
    //       }

    //     )
    // }

  }
  allow(Leave_ID) {
    if (!Leave_ID) {
      Swal.fire(
        'ไม่มีการลา?',
        'That thing is still around?',
        'question'
      )
    } else if (localStorage.getItem('Role') === "2") {
      this.Leave_ID = Leave_ID;
      const body = 'Leave_ID=' + this.Leave_ID
        + '&LeaveStatus_ID=' + 2
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}setleavestatus.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.setleavestatus = data;
            console.log(data);

          },
          (error: any) => {

          }

        )
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'อนุญาตเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}getleavetoDepartmenthead.php`, body, {
            headers: headers
          }).subscribe(
            (data: any) => {
              this.table_leaveto_waiting = data;
              console.log(this.table_leaveto_waiting);

            },
            (error: any) => {
              window.location.reload();
            }

          )
      })
    }
    else if (localStorage.getItem('Role') === "3") {
      this.Leave_ID = Leave_ID;
      const body = 'Leave_ID=' + this.Leave_ID
        + '&LeaveStatus_ID=' + 3
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}setleavestatus.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.setleavestatus = data;
            console.log(data);

          },
          (error: any) => {

          }

        )
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'อนุญาตเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}getleavetoSupervisor.php`, body, {
            headers: headers
          }).subscribe(
            (data: any) => {
              this.table_leaveto_waiting = data;
              console.log(this.table_leaveto_waiting);

            },
            (error: any) => {
              window.location.reload();

            }

          )
      })
    }
    else if (localStorage.getItem('Role') === "4") {
      this.Leave_ID = Leave_ID;
      const body = 'Leave_ID=' + this.Leave_ID
        + '&LeaveStatus_ID=' + 4
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}setleavestatus.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.setleavestatus = data;
            console.log(data);

          },
          (error: any) => {

          }

        )
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'อนุญาตเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.http.get(`${this.baseUrl}getleavetoDeputyleader.php`).subscribe(
          (data: any) => {
            console.log(data);
            this.table_leaveto_waiting = data;
          },
          (error: any) => {
            window.location.reload();

          }
        );
      })
    }
    else if (localStorage.getItem('Role') === "5") {
      this.Leave_ID = Leave_ID;
      const body = 'Leave_ID=' + this.Leave_ID
        + '&LeaveStatus_ID=' + 5
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}setleavestatus.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.setleavestatus = data;
            console.log(data);

          },
          (error: any) => {

          }

        )
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'อนุญาตเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.http.get(`${this.baseUrl}getleavetoperson.php`).subscribe(
          (data: any) => {
            console.log(data);
            this.table_leaveto_waiting = data;
          },
          (error: any) => {
            window.location.reload();

          }
        );
      })
    }

  }
  No_allow(Emp_ID, LeaveTotal) {
    this.LeaveTotal = LeaveTotal
    this.Emp_ID = Emp_ID
    const body = 'Emp_ID=' + this.Emp_ID +
      '&LeaveTotal=' + this.LeaveTotal

    console.log(body);
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });
    // this.http
    //   .post(`${this.baseUrl}No_allow.php`, body, {
    //     headers: headers
    //   }).subscribe(
    //     (data: any) => {
    //       this.No_allow = data;
    //       console.log(data);

    //     },
    //     (error: any) => {
    //       
    //     }

    //   )
    // Swal.fire({
    //   position: 'center',
    //   icon: 'success',
    //   title: 'อนุญาตเรียบร้อย',
    //   showConfirmButton: false,
    //   timer: 1500
    // })

  }

}
