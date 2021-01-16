import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { APIService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { NgxPaginationModule } from 'ngx-pagination';
import { GlobalVariable } from '../baseUrl';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;

  table1: boolean;
  table2: boolean;
  table3: boolean;
  table4: boolean;
  table5: boolean;



















  public Employee;
  public Emp_ID_show;
  public EmpName_show;
  public EmpLtype_show;
  public leavetype;
  public Dept;
  public Dept_to_head;
  public addLeave;
  public leave;
  public leave2;
  public Role;
  public seach;
  public numberleave = 0;
  public positionEmp;
  public dep;
  public status;

  public countUser;
  // public SectorName;
  table_Emp: boolean;
  table_search: boolean;
  Empployee: any;
  Empployee1: any;
  pageActual: any;

  leave_ID_chack = 0;
  Emp_ID = new FormControl('');
  Prefix = new FormControl('');
  EmpName = new FormControl('');
  EmpLastName = new FormControl('');
  Sex = new FormControl('');
  Birthday = new FormControl('');
  ID_card = new FormControl('');
  Age = new FormControl('');
  Address = new FormControl('');
  Tel = new FormControl('');
  Work_day = new FormControl('');
  Duration_work = new FormControl('');
  Empstatus_ID = new FormControl('');
  Position_ID = new FormControl('');
  Dept_ID = new FormControl('');
  Sector_ID = new FormControl('');
  employee = new FormControl('');
  LeaveStatus_Document = new FormControl('');
  Leave_characteristics_dateLast = new FormControl('');
  Leave_characteristics_dateStart = new FormControl('');
  status_data = new FormControl('');


  DeptName = new FormControl('');
  SectorName = new FormControl('');
  PositionName = new FormControl('');

  LType_ID = new FormControl('');
  modal_dismiss: any;
  limit_ID = new FormControl('');
  Leave_ID = new FormControl('');
  Name_Leave = new FormControl('');
  To_Person = new FormControl('');
  LeaveDateStart = new FormControl('');
  LeaveDateLast = new FormControl('');
  LeaveData = new FormControl('');
  ContactInformation = new FormControl('');
  LeaveTotal = new FormControl('');
  LeaveStatus = new FormControl('');
  UploadFile = new FormControl('');
  Response_Time = new FormControl('');
  Person_Code_Allow = new FormControl('');
  invalid_type: any;



  Local_Emp_ID = localStorage.getItem('Emp_ID');
  Local_EmpName = localStorage.getItem('EmpName');
  Local_EmpLastName = localStorage.getItem('EmpLastName');
  Local_PositionName = localStorage.getItem('PositionName');
  Local_DeptName = localStorage.getItem('DeptName');
  Local_SectorName = localStorage.getItem('SectorName');
  Local_Role = localStorage.getItem('Role');

  marked = false;
  check_Remain: any;
  LType_ID_check: any;
  check_number: Number;
  LType_limit_check: Number;
  leavetypeUser
  LeaveTotal_chack: any;
  LTypeName_check: any;
  sector;
  showleave_limit
  invalid_doc: any;
  invalid_limit: any;
  constructor(public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,) { }

  ngOnInit() {

    this.http.get(`${this.baseUrl}getEmployee.php`).subscribe(
      (data: any) => {
        this.Employee = data;
        if (this.Employee.leagth > 0) {
          this.table_Emp = true;
          this.table_search = false;
        }
      },
      (error: any) => {

      }
    );
    if (localStorage.getItem('Role') === "5") {
      this.table1 = false;
      this.table2 = false;
      this.table3 = false;
      this.table4 = false;
      this.table5 = true;
  
    }
    else if (localStorage.getItem('Role') === "4") {
      this.table1 = false;
      this.table2 = false;
      this.table3 = false;
      this.table4 = true;
      this.table5 = false;
  
    }
    else if (localStorage.getItem('Role') === "3") {
      this.table1 = false;
      this.table2 = false;
      this.table3 = true;
      this.table4 = false;
      this.table5 = false;
  
    }
    else if (localStorage.getItem('Role') === "2") {
      this.table1 = false;
      this.table2 = true;
      this.table3 = false;
      this.table4 = false;
      this.table5 = false;
  
    }
    if (localStorage.getItem('Role') === "4") {
      const body1 = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        + '&Role=' + localStorage.getItem("Role")
        + '&Sector_ID=' + localStorage.getItem("Sector_ID")

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getDept_to_head.php`, body1, {
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
      const body1 = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        + '&Role=' + localStorage.getItem("Role")

      const headers1 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getDept_to_head.php`, body1, {
          headers: headers1
        }).subscribe(
          (data: any) => {
            this.Dept_to_head = data;
          },
          (error: any) => {

          }

        )

    }
  }

  

}
