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


  btn_delete: boolean;
  Emp_ID: any;
  Emp_ID_show: any;
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
  Role: any;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) { }
  ngOnInit() {
    if (localStorage.getItem('Role') === "5" || localStorage.getItem('Role') === "6") {
      const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        + '&Role=' + localStorage.getItem("Role")
      console.log(body);
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
            console.log(error);
          }
        )
    } else {
      const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        + '&Role=' + localStorage.getItem("Role")
      console.log(body);
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
            console.log(error);
          }
        )
    }

  }
  leaveSearch(Emp_ID_search) {
    console.log(Emp_ID_search);
    this.http.get(`${this.baseUrl}Checkleaveinfo.php?Emp_ID=` + Emp_ID_search).subscribe(
      (data: any) => {
        console.log(data);
        if (data.length === 0) {
          Swal.fire({
            icon: 'error',
            title: 'ไม่พบข้อมูล',
            text: 'Something went wrong!'
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
  }

  show_data(Leave_ID, Name_Leave, To_Person, Emp_ID, EmpName, EmpLastName, PositionName, DeptName,
    SectorName, LTypeName, LeaveData, ContactInformation, employee, LeaveDateStart, LeaveDateLast, LeaveTotal,
    LeaveStatus_Name, LeaveStatus_Document, LeaveStatus_ID) {
    
    console.log(LeaveStatus_ID);
    this.Leave_ID = Leave_ID
    this.Name_Leave = Name_Leave
    this.To_Person = To_Person
    this.Emp_ID_show = Emp_ID
    this.EmpName = EmpName
    this.EmpLastName = EmpLastName
    this.PositionName = PositionName
    this.DeptName = DeptName
    this.SectorName = SectorName
    this.LTypeName = LTypeName
    this.LeaveData = LeaveData
    this.ContactInformation = ContactInformation
    this.employee = employee
    this.LeaveDateStart = LeaveDateStart
    this.LeaveDateLast = LeaveDateLast
    this.LeaveTotal = LeaveTotal
    this.LeaveStatus_Name = LeaveStatus_Name
    this.LeaveStatus_Document = LeaveStatus_Document
    this.LeaveStatus_ID = LeaveStatus_ID
    if (localStorage.getItem('Role') === "6") {
      this.btn_delete = true
    }
    else{
      this.btn_delete = false
    }

  }
  delete_leave() {

    Swal.fire({
      title: 'คุณจะลบการลาของ' + ' ' + this.EmpName + this.EmpLastName + ' ' + 'หรือไม่',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ).then(() => {


          this.http
            .get(
              `${this.baseUrl}Delete_leave_user.php?Leave_ID=` + this.Leave_ID
            )
            .subscribe(
              (data: any) => {
                console.log(data[0]);
                this.seachleave = data[0];
              },
              (error: any) => {
                console.log(error);
              }
            );
        }).then(() => {
          this.leaveSearch(this.Emp_ID_show);
        })

      }
    })

  }
}
