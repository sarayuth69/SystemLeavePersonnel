import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-leavetowaiting',
  templateUrl: './leavetowaiting.component.html',
  styleUrls: ['./leavetowaiting.component.scss']
})
export class LeavetowaitingComponent implements OnInit {
  table_leaveto_waiting
  setleavestatus
  Leave_ID
  constructor(
    public http: HttpClient,
    public route: ActivatedRoute,
    public api: APIService,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('Role') === "2") {
      const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post('http://localhost/Leavewebservice/API/getleavetoDepartmenthead.php', body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.table_leaveto_waiting = data;
            console.log(this.table_leaveto_waiting);

          },
          (error: any) => {
            console.log(error);
          }

        )

    }
    // else if (localStorage.getItem('Role') === "4") {
    //   this.list = true;
    //   this.list1 = false;
    // }
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
    //     .post('http://localhost/Leavewebservice/API/getLeave.php', body, {
    //       headers: headers
    //     }).subscribe(
    //       (data: any) => {
    //         this.leave = data;
    //       },
    //       (error: any) => {
    //         console.log(error);
    //       }

    //     )
    // }

  }
  allow(Leave_ID) {
    if(!Leave_ID){
      Swal.fire(
        'ไม่มีการลา?',
        'That thing is still around?',
        'question'
      )
  }else{

  
    this.Leave_ID = Leave_ID;
    const body = 'Leave_ID=' + this.Leave_ID
      + '&LeaveStatus_ID=' + 2
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/Leavewebservice/API/setleavestatus.php', body, {
        headers: headers
      }).subscribe(
        (data: any) => {
          this.setleavestatus = data;
          console.log(data);

        },
        (error: any) => {
          console.log(error);
        }

      )
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'แก้ไขเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
    }).then(()=>{
      const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post('http://localhost/Leavewebservice/API/getleavetoDepartmenthead.php', body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.table_leaveto_waiting = data;
            console.log(this.table_leaveto_waiting);

          },
          (error: any) => {
            console.log(error);
          }

        )
    })
  }
    
  }

}
