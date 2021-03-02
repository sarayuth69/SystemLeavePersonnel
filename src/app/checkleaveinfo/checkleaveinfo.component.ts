import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// import { baseUrl } from '../baseUrl.service';
import { GlobalVariable } from '../baseUrl';

@Component({
  selector: 'app-checkleaveinfo',
  templateUrl: './checkleaveinfo.component.html',
  styleUrls: ['./checkleaveinfo.component.scss']
})
export class CheckleaveinfoComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;
  Dept_to_head;
  seachleave;
  pageActual: any;
  // Emp_ID = new FormControl('');
  deleteleave;

  leavetypeUser
  btn_delete: boolean;
  Emp_ID: any;
  Leave_ID: any;
  Name_Leave: any;
  To_Person: any;
  EmpName: any;
  EmpLastName: any;
  PositionName: any;
  DeptName: any;
  SectorName: any;
  LTypeName: any;
  LeaveData: any;
  ContactInformation: any;
  employee: any;
  LeaveDateStart: any;
  LeaveDateLast: any;
  LeaveTotal: any;
  LeaveStatus_Name: any;
  LeaveStatus_Document: any;
  LeaveStatus_ID: any;
  Day_leave_start_show: any;
  Day_leave_last_show: any;
  Role: any;
  btnDisable_Doc: boolean = true
  limit;
  showleave_limit;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) { }
  ngOnInit() {
    this.http.get(`${this.baseUrl}getleave_limit.php`).subscribe(
      (data: any) => {
        this.showleave_limit = data;
      },
      (error: any) => {
        console.log(error);
      }
    )

    if (localStorage.getItem('Role') === "5") {
      const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        + '&Role=' + localStorage.getItem("Role")
        + '&privilege=' + localStorage.getItem("privilege")

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getDept_to_head.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.Dept_to_head = data;

          },
          (error: any) => {

          }
        )
    }
    if (localStorage.getItem('Role') === "4") {
      const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        + '&Role=' + localStorage.getItem("Role")
        + '&Sector_ID=' + localStorage.getItem("Sector_ID")

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getDept_to_head.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.Dept_to_head = data;
          },
          (error: any) => {

          }
        )
    }
    else {
      const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        + '&Role=' + localStorage.getItem("Role")

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getDept_to_head.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.Dept_to_head = data;
          },
          (error: any) => {

          }
        )
    }

  }

  leavetypeUser_copy
  getlleave_user(event) {
    console.log(event);
    this.limit = event







    const tpyeUser = 'Emp_ID=' + this.Emp_ID_show
      + '&limit_ID=' + this.limit
    console.log(tpyeUser);
    const headers1 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getLeave_type_User.php`, tpyeUser, {
        headers: headers1
      }).subscribe(
        (data: any) => {
          this.leavetypeUser = data;
          console.log(this.leavetypeUser);
        },
        (error: any) => {
          console.log(error);
        }

      )


    const tpyeUser_copy = 'Emp_ID=' + this.Emp_ID_show
    console.log(tpyeUser_copy);
    const headers2 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getLeave_type_User copy.php`, tpyeUser, {
        headers: headers1
      }).subscribe(
        (data: any) => {
          this.leavetypeUser_copy = data;
          console.log(this.leavetypeUser_copy);
        },
        (error: any) => {
          console.log(error);
        }

      )
  }
  leaveSearch(Emp_ID_search, Day_leave_start, Day_leave_last) {

    this.Emp_ID_show = Emp_ID_search
    this.Day_leave_start_show = Day_leave_start
    this.Day_leave_last_show = Day_leave_last

    if (this.Day_leave_start_show.length < 1 || this.Day_leave_last_show.length < 1) {
      Swal.fire(
        'เลือกวันที่ไห้ครบ?',
        'Choose the correct valid date.?',
        'question'
      )
    } else {
      this.http.get(`${this.baseUrl}Checkleaveinfo.php?Emp_ID=${this.Emp_ID_show}&Day_leave_start=${this.Day_leave_start_show}&Day_leave_last=${this.Day_leave_last_show}`).subscribe(
        (data: any) => {
          console.log(data);
          if (data.length === 0) {
            Swal.fire({
              icon: 'error',
              title: 'ไม่พบข้อมูล',
              text: ''
            })
          } else {
            this.seachleave = data;
          }
        },
        (error: any) => {
          Swal.fire({
            icon: 'error',
            title: 'ไม่พบข้อมูล',
            text: 'Something went wrong!'
          })
        }
      );
      // const tpyeUser = 'Emp_ID=' + Emp_ID_search
      // const headers1 = new HttpHeaders({
      //   'Content-Type': 'application/x-www-form-urlencoded'
      // });
      // this.http
      //   .post(`${this.baseUrl}getLeave_type_User.php`, tpyeUser, {
      //     headers: headers1
      //   }).subscribe(
      //     (data: any) => {
      //       this.leavetypeUser = data;

      //     },
      //     (error: any) => {

      //     }

      // )
      

      const tpyeUser = 'Emp_ID=' + Emp_ID_search
     
      console.log(tpyeUser);
      const headers1 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getLeave_type_User.php`, tpyeUser, {
          headers: headers1
        }).subscribe(
          (data: any) => {
            this.leavetypeUser = data;
            console.log(this.leavetypeUser);
          },
          (error: any) => {
            console.log(error);
          }

        )


      const tpyeUser_copy = 'Emp_ID=' + this.Emp_ID_show
      console.log(tpyeUser_copy);
      const headers2 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getLeave_type_User copy.php`, tpyeUser, {
          headers: headers1
        }).subscribe(
          (data: any) => {
            this.leavetypeUser_copy = data;
            console.log(this.leavetypeUser_copy);
          },
          (error: any) => {
            console.log(error);
          }

        )
    }

  }
  Leave_ID_show: any;
  Name_Leave_show: any;
  To_Person_show: any;
  Emp_ID_show: any;
  Prefix_show: any;
  EmpName_show: any;
  EmpLastName_show: any;
  PositionName_show: any;
  DeptName_show: any;
  SectorName_show: any;
  LTypeName_show: any;
  LeaveData_show: any;
  ContactInformation_show: any;
  employee_show: any;
  LeaveDateStart_show: any;
  LeaveDateLast_show: any;
  LeaveTotal_show: any;
  LeaveStatus_Name_show: any;
  LeaveStatus_Document_show: any;
  Leave_characteristics_dateStart_show: any;
  Leave_characteristics_dateLast_show: any;
  file_names_show: any;
  show_data(Leave_ID, Name_Leave, To_Person, Emp_ID, EmpName, EmpLastName, PositionName, DeptName,
    SectorName, LTypeName, LeaveData, ContactInformation, employee, LeaveDateStart_month, LeaveDateLast_month,
    LeaveTotal,
    LeaveStatus_Name, LeaveStatus_Document,
    Leave_characteristics_dateStart, Leave_characteristics_dateLast, file_names) {
    this.Leave_ID_show = Leave_ID
    this.Name_Leave_show = Name_Leave
    this.To_Person_show = To_Person
    this.Emp_ID_show = Emp_ID
    this.EmpName_show = EmpName
    this.EmpLastName_show = EmpLastName
    this.PositionName_show = PositionName
    this.DeptName_show = DeptName
    this.SectorName_show = SectorName
    this.LTypeName_show = LTypeName
    this.LeaveData_show = LeaveData
    this.ContactInformation_show = ContactInformation
    this.employee_show = employee
    this.LeaveDateStart_show = LeaveDateStart_month
    this.LeaveDateLast_show = LeaveDateLast_month
    this.LeaveTotal_show = LeaveTotal
    this.LeaveStatus_Name_show = LeaveStatus_Name
    this.LeaveStatus_Document_show = LeaveStatus_Document
    this.Leave_characteristics_dateStart_show = Leave_characteristics_dateStart
    this.Leave_characteristics_dateLast_show = Leave_characteristics_dateLast
    this.file_names_show = file_names


  }


  // updateleave_status(LeaveStatus_Document) {
  //   const body = 'leave_ID=' + this.Leave_ID_show
  //     + '&LeaveStatus_Document=' + LeaveStatus_Document
  //   console.log(body);

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   });
  //   this.http.post(`${this.baseUrl}Updatestatus_doc.php`, body, {
  //     headers: headers
  //   }).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'บันทึกเรียบร้อย',
  //         text: ''
  //       }).then(() => {
  //         this.http.get(`${this.baseUrl}Checkleaveinfo.php?Emp_ID=${this.Emp_ID_show}&Day_leave_start=${this.Day_leave_start_show}&Day_leave_last=${this.Day_leave_last_show}`).subscribe(
  //           (data: any) => {
  //             console.log(data);
  //             if (data.length === 0) {
  //               Swal.fire({
  //                 icon: 'error',
  //                 title: 'ไม่พบข้อมูล',
  //                 text: 'Something went wrong!'
  //               })
  //             } else {
  //               this.seachleave = data;
  //             }
  //           },
  //           (error: any) => {
  //             Swal.fire({
  //               icon: 'error',
  //               title: 'ไม่พบข้อมูล',
  //               text: 'Something went wrong!'
  //             })
  //           }
  //         );

  //       })
  //     }, (error: any) => {
  //       console.log(error);

  //     }
  //   )

  // }







  // delete_leave() {

  //   Swal.fire({
  //     title: 'คุณจะลบการลาของ' + ' ' + this.EmpName + this.EmpLastName + ' ' + 'หรือไม่',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       ).then(() => {
  //         this.http
  //           .get(
  //             `${this.baseUrl}Delete_leave_user.php?Leave_ID=` + this.Leave_ID
  //           )
  //           .subscribe(
  //             (data: any) => {
  //               console.log(data[0]);
  //               this.seachleave = data[0];
  //             },
  //             (error: any) => {


  //             }
  //           );
  //       }).then(() => {
  //         this.leaveSearch(this.Emp_ID_show, this.Day_leave_start_show, this.Day_leave_last_show);
  //       })

  //     }
  //   })

  // }

}
