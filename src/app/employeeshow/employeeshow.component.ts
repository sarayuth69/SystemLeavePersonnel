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
import { GlobalVariable } from '../baseUrl';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-employeeshow',
  templateUrl: './employeeshow.component.html',
  styleUrls: ['./employeeshow.component.scss']
})
export class EmployeeshowComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;
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
  public numberleave;
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
  table1: boolean;
  table2: boolean;
  table3: boolean;
  table4: boolean;
  table5: boolean;
  table6: boolean;
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
  privilege: any;

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
  date_chack_leave;
  showleave_limit
  invalid_doc: any;
  invalid_limit: any;
  seach_waiting
  emp_waiting: boolean;
  seach_copy
  date_chack_work_date = moment(new Date()).format('YYYY-MM-DD');
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
    // private baseUrl : baseUrl




  ) { }

  ngOnInit() {
    try {
      this.Local_Emp_ID
      this.Local_EmpName
      this.Local_EmpLastName
      this.Local_PositionName
      this.Local_DeptName
      this.Local_SectorName
      this.date_now = moment(new Date()).format('YYYY-MM-DD')

    } catch (e) {

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

    this.http.get(`${this.baseUrl}countUser.php`).subscribe(
      (data: any) => {
        this.countUser = data;
      },
      (error: any) => {

      }
    );
    this.http.get(`${this.baseUrl}getStatus.php`).subscribe(
      (data: any) => {
        this.status = data;
      },
      (error: any) => {

      }
    );
    this.http.get(`${this.baseUrl}getDept.php`).subscribe(
      (data: any) => {
        this.dep = data;
      },
      (error: any) => {

      }
    );
    this.http.get(`${this.baseUrl}getsector.php`).subscribe(
      (data: any) => {
        this.sector = data;
      },
      (error: any) => {

      }
    )
    this.http.get(`${this.baseUrl}Search.php`).subscribe(
      (data: any) => {
        this.seach = data;
      },
      (error: any) => {

      }
    );


    this.http.get(`${this.baseUrl}Searchstatus_data_waiting.php`).subscribe(
      (data: any) => {
        this.seach_waiting = data;
        console.log(this.seach_waiting.length);
        if (this.seach_waiting.status_data === 'W') {
          this.emp_waiting = true;
        }
        else {
          this.emp_waiting = false;

        }

      },
      (error: any) => {

      }
    );

    this.http.get(`${this.baseUrl}getPosition.php`).subscribe(
      (data: any) => {
        this.positionEmp = data;
      },
      (error: any) => {
      }
    );

    this.http.get(`${this.baseUrl}getleave_limit.php`).subscribe(
      (data: any) => {
        for (var i = 0; i <= data.length; i++) {
          this.showleave_limit = data;
        }

      }, (error: any) => {

      }
    )
    const body = 'Empstatus_ID=' + localStorage.getItem("Empstatus_ID")
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getLtype.php`, body, {
        headers: headers
      }).subscribe(
        (data: any) => {
          this.leavetype = data;
        },
        (error: any) => {

        }

      )






    if (localStorage.getItem('Role') === "5" || localStorage.getItem('Role') === "4"
      || localStorage.getItem('Role') === "3" || localStorage.getItem('Role') === "2"
      || localStorage.getItem('Role') === "1" && localStorage.getItem('privilege') === "A") {
      this.table1 = false;
      this.table2 = false;
      this.table3 = false;
      this.table4 = false;
      this.table5 = false;
      this.table6 = true;
    }
    else if (localStorage.getItem('Role') === "5") {
      this.table1 = false;
      this.table2 = false;
      this.table3 = false;
      this.table4 = false;
      this.table5 = true;
      this.table6 = false;
    }
    else if (localStorage.getItem('Role') === "4") {
      this.table1 = false;
      this.table2 = false;
      this.table3 = false;
      this.table4 = true;
      this.table5 = false;
      this.table6 = false;
    }
    else if (localStorage.getItem('Role') === "3") {
      this.table1 = false;
      this.table2 = false;
      this.table3 = true;
      this.table4 = false;
      this.table5 = false;
      this.table6 = false;
    }
    else if (localStorage.getItem('Role') === "2") {
      this.table1 = false;
      this.table2 = true;
      this.table3 = false;
      this.table4 = false;
      this.table5 = false;
      this.table6 = false;
    }
    else if (localStorage.getItem('Role') === "1") {
      this.table1 = true;
      this.table2 = false;
      this.table3 = false;
      this.table4 = false;
      this.table5 = false;
      this.table6 = false;
    }

  }

  day_work_show
  check_work_day(Work_day) {
    console.log(Work_day);
    var moment = require('moment-business-days');
    var day_work = moment(this.date_chack_work_date).startOf('day').diff(moment(Work_day).startOf('day'), 'years');
    if (day_work > 0) {
      this.day_work_show = day_work + '' + 'ปี'

    }
    else if (day_work <= 0) {
      var day_work_month = moment(this.date_chack_work_date).startOf('day').diff(moment(Work_day).startOf('day'), 'months');
      this.day_work_show = day_work_month + '' + 'เดือน'


    }

  }
  updateEmp(
    Emp_ID, EmpName, EmpLastName, Sex, Birthday, ID_card, Age, Tel, Address, Work_day, Duration_work, Empstatus_ID, Position_ID
    , Dept_ID, Sector_ID, status_data, privilege_chack
  ) {
    console.log(Duration_work);

    this.Emp_ID = new FormControl(Emp_ID);
    // this.Prefix = new FormControl(Prefix);
    this.EmpName = new FormControl(EmpName);
    this.EmpLastName = new FormControl(EmpLastName);
    this.Sex = new FormControl(Sex);
    this.Birthday = new FormControl(Birthday);
    this.ID_card = new FormControl(ID_card);
    this.Age = new FormControl(Age);
    this.Address = new FormControl(Address);
    this.Tel = new FormControl(Tel);
    this.Work_day = new FormControl(Work_day);
    this.day_work_show = Duration_work
    this.Empstatus_ID = new FormControl(Empstatus_ID);
    this.Position_ID = new FormControl(Position_ID);
    this.Dept_ID = new FormControl(Dept_ID);
    this.Sector_ID = new FormControl(Sector_ID);
    this.status_data = new FormControl(status_data);

    if (privilege_chack === "A") {
      const ele = document.getElementById("inlineRadio1") as HTMLInputElement;
      ele.checked = true
    }
    else {
      const ele = document.getElementById("inlineRadio2") as HTMLInputElement;
      ele.checked = true
    }
  }
  public updateEmployee(Duration_work) {
    const ele = document.getElementById("inlineRadio1") as HTMLInputElement;
    if (ele.checked === true) {
      this.privilege = "A"
    }
    else {
      this.privilege = "U"
    }
    const body = 'Emp_ID=' + this.Emp_ID.value
      // + '&Prefix=' + this.Prefix.value
      + '&EmpName=' + this.EmpName.value
      + '&EmpLastName=' + this.EmpLastName.value
      + '&Sex=' + this.Sex.value
      + '&Birthday=' + this.Birthday.value
      + '&ID_card=' + this.ID_card.value
      + '&Age=' + this.Age.value
      + '&Address=' + this.Address.value
      + '&Tel=' + this.Tel.value
      + '&Work_day=' + this.Work_day.value
      + '&Duration_work=' + Duration_work
      + '&status_data=' + this.status_data.value
      + '&Empstatus_ID=' + this.Empstatus_ID.value
      + '&Position_ID=' + this.Position_ID.value
      + '&Dept_ID=' + this.Dept_ID.value
      + '&Sector_ID=' + this.Sector_ID.value
      + '&privilege=' + this.privilege
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}UpdateEmployee.php`, body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          this.Empployee = data[0];
        },
        (error: any) => {

        }
      );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'แก้ไขเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
    })
      .then(() => {
        window.location.reload();
        // this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
        //   (data: any) => {
        //     this.Employee = data;
        //   },
        //   (error: any) => {
        //    
        //   }
        // );

      })

  }


  deleteEmp(id, name) {
    this.Emp_ID_show = id;
    this.EmpName_show = name;

    Swal.fire({
      title: 'คุณจะลบ' + ' ' + this.EmpName_show + ' ' + 'หรือไม่',
      icon: 'warning',
      confirmButtonText: 'บันทึก',
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'ยกเลิก',
      showCancelButton: true,
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'ลบเรียบร้อย',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          window.location.reload();
          // this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
          //   (data: any) => {
          //     this.Employee = data;
          //   },
          //   (error: any) => {
          //    
          //   }
          // );
        })

        this.http
          .get(
            `${this.baseUrl}DeleteEmployee.php?Emp_ID=` + this.Emp_ID_show
          )
          .subscribe(
            (data: any) => {
              console.log(data[0]);
              this.Empployee = data[0];
            },
            (error: any) => {

            }
          );
      }
    })
  }



  getsearch(Emp_ID) {
    console.log(Emp_ID);
    if (this.Emp_ID.value.length === "0") {
      Swal.fire({
        icon: 'error',
        title: 'ไม่พบข้อมูล',
        text: ''
      })
    } else {
      this.http.get(`${this.baseUrl}Search.php?Emp_ID=` + Emp_ID).subscribe(
        (data: any) => {
          this.seach = data;
        },
        (error: any) => {

        }
      );
    }

  }
  date_now
  date_chack_work_day
  LeaveEmp(
    Emp_ID, EmpName, EmpLastName, PositionName, DeptName, SectorName, Role, Empstatus_ID, Work_day
  ) {

    this.LType_ID = new FormControl('');
    this.Emp_ID = new FormControl(Emp_ID);
    this.EmpName = new FormControl(EmpName);
    this.EmpLastName = new FormControl(EmpLastName);
    this.PositionName = new FormControl(PositionName);
    this.DeptName = new FormControl(DeptName);
    this.SectorName = new FormControl(SectorName);
    this.Role = new FormControl(Role);
    this.Empstatus_ID = new FormControl(Empstatus_ID);
    var day_work_month = moment(this.date_now).startOf('day').diff(moment(Work_day).startOf('day'), 'months');
    this.date_chack_work_day = day_work_month

    const tpyeUser2 = 'Emp_ID=' + Emp_ID
      + '&limit_ID=' + this.limit
      + '&Empstatus_ID=' + Empstatus_ID
      + '&Work_day=' + this.date_chack_work_day
    console.log(tpyeUser2);
    const headers2 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getLeave_type_User.php`, tpyeUser2, {
        headers: headers2
      }).subscribe(
        (data: any) => {
          this.leavetypeUser = data;
          console.log(this.leavetypeUser);

        },
        (error: any) => {
          console.log(error);
        }
      )





  }
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }
  maxDate: any;
  text_chack = /(ลาป่วย)/g;
  leavetypeUser_chack
  Remain_over_check: any;
  limit

  leave_chack = /(ลาคลอด)/g;
  leave_chack_1 = /(ลาอุปสมบท)/g;
  LTypeNamechack = /(ลาพักผ่อน)/g

  Prefix_chack_man = /(นาย)/g
  Prefix_chack_woman = /(นาง)/g
  EmpstatusNamechack = /(ลูกจ้างเงินรายได้)/g
  leavetypeUser_copy
  show_leave_type
  LOrdinal_leave_check
  number_leave_check
  dataChanged(newObj) {

    var moment = require('moment-business-days');
    var day_work_month = moment(this.date_chack_work_date).startOf('day').diff(moment(newObj.Work_day).startOf('day'), 'months');
    if (newObj.LTypeName === 'ลาพักผ่อน' && day_work_month < 6 && newObj.EmpstatusName === 'ลูกจ้างเงินรายได้') {
      Swal.fire({
        icon: 'error',
        title: 'ไม่สามารถลาได้เนื่องจากอายุงานไม่ถึง 6 เดือน',
      })
      this.LeaveDateStart = new FormControl('');
      this.LeaveDateLast = new FormControl('');
      this.btnDisable_start = true;
      this.btnDisable_last = true;
      this.numberleave = " ";
      this.LType_ID = new FormControl('');
      this.invalid_type = "is-invalid"
      this.LTypeName_check = ''
      this.check_Remain = ''
      this.LType_ID_check = ''
      this.Remain_over_check = ''
    }
    else if (newObj.Prefix === 'นาย' && newObj.LTypeName === 'ลาคลอดบุตร') {
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
      })
      this.LeaveDateStart = new FormControl('');
      this.LeaveDateLast = new FormControl('');
      this.btnDisable_start = true;
      this.btnDisable_last = true;
      this.numberleave = " ";
      this.LType_ID = new FormControl('');
      this.invalid_type = "is-invalid"
      this.LTypeName_check = ''
      this.check_Remain = ''
      this.LType_ID_check = ''
      this.Remain_over_check = ''

    }
    else {
      if (newObj.LTypeName === 'ลาพักผ่อน') {
        this.invalid_type = "is-valid"
        const tpyeUser_copy = 'Emp_ID=' + this.Emp_ID.value
        console.log(tpyeUser_copy);
        const headers2 = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}getLeave_type_User_holiday.php`, tpyeUser_copy, {
            headers: headers2
          }).subscribe(
            (data: any) => {
              this.leavetypeUser_copy = data;

              this.check_Remain = this.leavetypeUser_copy[0].Remain
              this.LType_ID_check = this.leavetypeUser_copy[0].LType_ID
              this.Remain_over_check = this.leavetypeUser_copy[0].Remain_over
              // console.log(this.check_Remain);
              // const leave_type = [...this.leavetypeUser, ...this.leavetypeUser_copy]

              // console.log(leave_type);
              // this.show_leave_type = leave_type
            },
            (error: any) => {
              console.log(error);
            }

          )
        this.LeaveDateStart = new FormControl('');
        this.LeaveDateLast = new FormControl('');
        this.btnDisable_start = true;
        this.btnDisable_last = true;
        this.numberleave = " ";
      }
      else if (newObj.LTypeName != 'ลาพักผ่อน') {

        this.invalid_type = "is-valid"
        var day_work_month = moment(this.date_now).startOf('day').diff(moment(newObj.Work_day).startOf('day'), 'months');

        const tpyeUser = 'Emp_ID=' + newObj.Emp_ID
          + '&limit_ID=' + this.limit
          + '&Empstatus_ID=' + newObj.Empstatus_ID
          + '&Work_day=' + day_work_month
          + '&LType_ID=' + newObj.LType_ID
        console.log(tpyeUser);
        const headers1 = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}getLeave_type_chack.php`, tpyeUser, {
            headers: headers1
          }).subscribe(
            (data: any) => {
              this.leavetypeUser_chack = data;
              console.log(this.leavetypeUser_chack);
              this.check_Remain = this.leavetypeUser_chack[0].Remain
              this.LType_ID_check = this.leavetypeUser_chack[0].LType_ID
              this.Remain_over_check = this.leavetypeUser_chack[0].Remain_over
              this.LOrdinal_leave_check = this.leavetypeUser_chack[0].LOrdinal
              this.number_leave_check = this.leavetypeUser_chack[0].number_leave_show
              console.log(this.check_Remain, this.Remain_over_check);

            }
            ,
            (error: any) => {
              // console.log(error);
            })
        this.LeaveDateStart = new FormControl('');
        this.LeaveDateLast = new FormControl('');
        this.btnDisable_start = true;
        this.btnDisable_last = true;
        this.numberleave = " ";
      }



    }

    if (newObj.LTypeName.length > 0 && this.leave_chack.test(newObj.LTypeName) != true && this.Prefix_chack_man.test(newObj.Prefix) != true
    ) {
      this.LTypeName_check = `การ${newObj.LTypeName}`
      console.log(this.LTypeName_check);

    }

    if (newObj.LTypeName.length > 0 && this.Prefix_chack_woman.test(newObj.Prefix) === true || this.leave_chack.test(newObj.LTypeName) != true
    ) {
      this.LTypeName_check = `การ${newObj.LTypeName}`
      console.log(this.LTypeName_check);

    }


    else {
      this.LTypeName_check = " "
    }

    if (this.text_chack.test(newObj.LTypeName)) {
      this.maxDate = moment(new Date()).format('YYYY-MM-DD')


      this.date_chack_leave = ''
      this.LeaveDateLast = new FormControl('');
      this.LeaveDateStart = new FormControl('');

    }
    else if (newObj.LTypeName !== "ลาป่วย") {
      this.date_chack_leave = moment(new Date()).format('YYYY-MM-DD')
      this.LeaveDateLast = new FormControl('');
      this.LeaveDateStart = new FormControl('');


    }

  }
  selectedFile: File;
  myFile: string[] = [];
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];

  }
  file_remove(element) {
    element.value = "";
    this.selectedFile = undefined
  }
  data = new FormControl('');

  upload_test: any
  change_doc(e) {
    this.invalid_doc = "is-valid"

  }
  minDate
  change_limit(e) {
    this.invalid_limit = "is-valid"
    console.log(e);
    this.limit = e
    const tpyeUser2 = 'Emp_ID=' + this.Emp_ID
      + '&limit_ID=' + this.limit
      + '&Empstatus_ID=' + this.Empstatus_ID
      + '&Work_day=' + this.date_chack_work_day
    console.log(tpyeUser2);
    const headers2 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getLeave_type_User.php`, tpyeUser2, {
        headers: headers2
      }).subscribe(
        (data: any) => {
          this.leavetypeUser = data;
          console.log(this.leavetypeUser);

        },
        (error: any) => {
          console.log(error);
        }
      )


    const tpyeUser = 'Emp_ID=' + this.Emp_ID.value
      + '&limit_ID=' + this.limit
      + '&LType_ID=' + this.LType_ID_check
    console.log(tpyeUser);
    const headers1 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getLeave_type_chack.php`, tpyeUser, {
        headers: headers1
      }).subscribe(
        (data: any) => {
          this.leavetypeUser_chack = data;
          console.log(this.leavetypeUser_chack);
          this.check_Remain = this.leavetypeUser_chack[0].Remain
          this.LType_ID_check = this.leavetypeUser_chack[0].LType_ID
          this.Remain_over_check = this.leavetypeUser_chack[0].Remain_over
          this.LOrdinal_leave_check = this.leavetypeUser_chack[0].LOrdinal
          this.number_leave_check = this.leavetypeUser_chack[0].number_leave_show


        }
        ,
        (error: any) => {
          // console.log(error);
        })
    this.http.get(`${this.baseUrl}getlimit_chake.php?limit_ID=` + this.limit).subscribe(data => {
      this.minDate = data[0].Date_start
      this.maxDate = data[0].Date_stop
      console.log(this.minDate, this.maxDate);

    }, (error => {
      console.log(error);

    }))


  }

  AddLeave(LeaveTotal, check_number, Remain_over, Name_Leave, To_Person, Role_chack,
    Leave_characteristics_dateStart, Leave_characteristics_dateLast, number_leave) {

    if (!this.LType_ID.value && !this.limit_ID.value && !this.LeaveStatus_Document.value) {
      this.invalid_type = "is-invalid"
      this.invalid_doc = "is-invalid"
      this.invalid_limit = "is-invalid"
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
      })
    }
    if (!this.LType_ID.value) {
      this.invalid_type = "is-invalid"
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
      })
    }

    else if (+LeaveTotal > +check_number || +number_leave > this.LOrdinal_leave_check) {
      Swal.fire({
        title: 'คุณลาเกินกำหนดแล้ว ยินยอมให้หักเงินเดือนหรือไม่',
        text: "",
        icon: 'warning',
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'ยกเลิก',
        showCancelButton: true,
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          if (Role_chack === "1") {
            if (!this.LeaveStatus_Document.value && !this.limit_ID.value) {
              this.invalid_doc = "is-invalid"
              this.invalid_limit = "is-invalid"
            }
            if (!this.LeaveDateLast.value) {
              Swal.fire({
                icon: 'error',
                title: 'กรุณาเลือกวันลาให้ถูกต้อง',
              })
            }
            if (!this.LeaveStatus_Document.value) {
              this.invalid_doc = "is-invalid"
            }
            if (!this.limit_ID.value) {
              this.invalid_limit = "is-invalid"
            }
            else if (this.LeaveStatus_Document.value.length > 0 && this.limit_ID.value.length > 0) {
              this.Add_leave_level_1(check_number, LeaveTotal, Name_Leave, To_Person, Leave_characteristics_dateStart, Leave_characteristics_dateLast)
            }
          }
          else if (Role_chack === "2") {
            if (!this.LeaveStatus_Document.value && !this.limit_ID.value) {
              this.invalid_doc = "is-invalid"
              this.invalid_limit = "is-invalid"
            }
            if (!this.LeaveDateLast.value) {
              Swal.fire({
                icon: 'error',
                title: 'กรุณาเลือกวันลาให้ถูกต้อง',
              })
            }
            if (!this.LeaveStatus_Document.value) {
              this.invalid_doc = "is-invalid"
            }
            if (!this.limit_ID.value) {
              this.invalid_limit = "is-invalid"
            }
            else if (this.LeaveStatus_Document.value.length > 0 && this.limit_ID.value.length > 0) {
              this.Add_leave_level_2(check_number, LeaveTotal, Name_Leave, To_Person, Leave_characteristics_dateStart, Leave_characteristics_dateLast)
            }
          }
          else if (Role_chack === "3") {
            if (!this.LeaveStatus_Document.value && !this.limit_ID.value) {
              this.invalid_doc = "is-invalid"
              this.invalid_limit = "is-invalid"
            }
            if (!this.LeaveDateLast.value) {
              Swal.fire({
                icon: 'error',
                title: 'กรุณาเลือกวันลาให้ถูกต้อง',
              })

            }
            if (!this.LeaveStatus_Document.value) {
              this.invalid_doc = "is-invalid"
            }
            if (!this.limit_ID.value) {
              this.invalid_limit = "is-invalid"
            }
            else if (this.LeaveStatus_Document.value.length > 0 && this.limit_ID.value.length > 0) {
              this.Add_leave_level_3(check_number, LeaveTotal, Name_Leave, To_Person, Leave_characteristics_dateStart, Leave_characteristics_dateLast)
            }
          }
          else if (Role_chack === "4") {
            if (!this.LeaveStatus_Document.value && !this.limit_ID.value) {
              this.invalid_doc = "is-invalid"
              this.invalid_limit = "is-invalid"
            }
            if (!this.LeaveDateLast.value) {
              Swal.fire({
                icon: 'error',
                title: 'กรุณาเลือกวันลาให้ถูกต้อง',
              })
            }
            if (!this.LeaveStatus_Document.value) {
              this.invalid_doc = "is-invalid"
            }
            if (!this.limit_ID.value) {
              this.invalid_limit = "is-invalid"
            }

            else if (this.LeaveStatus_Document.value.length > 0 && this.limit_ID.value.length > 0) {

              this.Add_leave_level_4(check_number, LeaveTotal, Name_Leave, To_Person, Leave_characteristics_dateStart, Leave_characteristics_dateLast)
            }
          }

        }
      })
    }

    else {

      if (LeaveTotal === '0') {
        Swal.fire({
          icon: 'error',
          title: 'กรุณาเลือกประเภทวันลา',
        }).then(() => {
          this.modal_dismiss = ""

        })

      }

      if (Role_chack === "1") {
        if (!this.LeaveStatus_Document.value && !this.limit_ID.value) {
          this.invalid_doc = "is-invalid"
          this.invalid_limit = "is-invalid"
        }


        if (!this.LeaveDateLast.value) {

          Swal.fire({
            icon: 'error',
            title: 'กรุณาเลือกวันลาให้ถูกต้อง',
          })

        }
        if (!this.LeaveStatus_Document.value) {
          this.invalid_doc = "is-invalid"
        }
        if (!this.limit_ID.value) {
          this.invalid_limit = "is-invalid"
        }

        else if (this.LeaveStatus_Document.value.length > 0 && this.limit_ID.value.length > 0) {

          this.Add_leave_level_1(check_number, LeaveTotal, Name_Leave, To_Person, Leave_characteristics_dateStart, Leave_characteristics_dateLast)
        }
      }
      else if (Role_chack === "2") {
        if (!this.LeaveStatus_Document.value && !this.limit_ID.value) {
          this.invalid_doc = "is-invalid"
          this.invalid_limit = "is-invalid"
        }


        if (!this.LeaveDateLast.value) {

          Swal.fire({
            icon: 'error',
            title: 'กรุณาเลือกวันลาให้ถูกต้อง',
          })

        }
        if (!this.LeaveStatus_Document.value) {
          this.invalid_doc = "is-invalid"
        }
        if (!this.limit_ID.value) {
          this.invalid_limit = "is-invalid"
        }

        else if (this.LeaveStatus_Document.value.length > 0 && this.limit_ID.value.length > 0) {

          this.Add_leave_level_2(check_number, LeaveTotal, Name_Leave, To_Person, Leave_characteristics_dateStart, Leave_characteristics_dateLast)
        }
      }
      else if (Role_chack === "3") {
        if (!this.LeaveStatus_Document.value && !this.limit_ID.value) {
          this.invalid_doc = "is-invalid"
          this.invalid_limit = "is-invalid"
        }


        if (!this.LeaveDateLast.value) {

          Swal.fire({
            icon: 'error',
            title: 'กรุณาเลือกวันลาให้ถูกต้อง',
          })

        }
        if (!this.LeaveStatus_Document.value) {
          this.invalid_doc = "is-invalid"
        }
        if (!this.limit_ID.value) {
          this.invalid_limit = "is-invalid"
        }

        else if (this.LeaveStatus_Document.value.length > 0 && this.limit_ID.value.length > 0) {

          this.Add_leave_level_3(check_number, LeaveTotal, Name_Leave, To_Person, Leave_characteristics_dateStart, Leave_characteristics_dateLast)
        }
      }
      else if (Role_chack === "4") {
        if (!this.LeaveStatus_Document.value && !this.limit_ID.value) {
          this.invalid_doc = "is-invalid"
          this.invalid_limit = "is-invalid"
        }


        if (!this.LeaveDateLast.value) {

          Swal.fire({
            icon: 'error',
            title: 'กรุณาเลือกวันลาให้ถูกต้อง',
          })

        }
        if (!this.LeaveStatus_Document.value) {
          this.invalid_doc = "is-invalid"
        }
        if (!this.limit_ID.value) {
          this.invalid_limit = "is-invalid"
        }

        else if (this.LeaveStatus_Document.value.length > 0 && this.limit_ID.value.length > 0) {

          this.Add_leave_level_4(check_number, LeaveTotal, Name_Leave, To_Person, Leave_characteristics_dateStart, Leave_characteristics_dateLast)
        }
      }

    }



  }

  Add_leave_level_1(check_number, LeaveTotal, Name_Leave, To_Person, Leave_characteristics_dateStart, Leave_characteristics_dateLast) {

    if (typeof (this.selectedFile) == 'undefined') {
      if (+LeaveTotal > +check_number) {
        const body = 'Leave_ID=' + this.leave_ID_chack
          + '&Emp_ID=' + this.Emp_ID.value
          + '&Name_Leave=' + Name_Leave + "/หักเงินเดือน"
          + '&To_Person=' + To_Person
          + '&LeaveDateStart=' + this.LeaveDateStart.value
          + '&Leave_characteristics_dateStart=' + Leave_characteristics_dateStart
          + '&LeaveDateLast=' + this.LeaveDateLast.value
          + '&Leave_characteristics_dateLast=' + Leave_characteristics_dateLast
          + '&LeaveData=' + this.LeaveData.value
          + '&ContactInformation=' + this.ContactInformation.value
          + '&employee=' + this.employee.value
          + '&LeaveTotal=' + LeaveTotal
          + '&number_leave=' + 1
          + '&LeaveStatus_ID=' + "1"
          + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
          + '&UploadFile=' + this.UploadFile.value
          + '&Response_Time=' + this.Response_Time.value
          + '&limit_ID=' + this.limit_ID.value
          + '&LType_ID=' + this.LType_ID_check
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}Add_leave.php`, body, {
            headers: headers
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              this.addLeave = data;
            },
            (error: any) => {

            }
          );
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ส่งการลาเรียบร้อย',
          showConfirmButton: false,
          timer: 1500

        }).then(() => {
          window.location.reload()
        })
        this.modal_dismiss = "model"
      }
      else {
        const body = 'Leave_ID=' + this.leave_ID_chack
          + '&Emp_ID=' + this.Emp_ID.value
          + '&Name_Leave=' + Name_Leave
          + '&To_Person=' + To_Person
          + '&LeaveDateStart=' + this.LeaveDateStart.value
          + '&Leave_characteristics_dateStart=' + Leave_characteristics_dateStart
          + '&LeaveDateLast=' + this.LeaveDateLast.value
          + '&Leave_characteristics_dateLast=' + Leave_characteristics_dateLast
          + '&LeaveData=' + this.LeaveData.value
          + '&ContactInformation=' + this.ContactInformation.value
          + '&employee=' + this.employee.value
          + '&LeaveTotal=' + LeaveTotal
          + '&number_leave=' + 1
          + '&LeaveStatus_ID=' + "1"
          + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
          + '&UploadFile=' + this.UploadFile.value
          + '&Response_Time=' + this.Response_Time.value
          + '&limit_ID=' + this.limit_ID.value
          + '&LType_ID=' + this.LType_ID_check
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}Add_leave.php`, body, {
            headers: headers
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              this.addLeave = data;
            },
            (error: any) => {

            }
          );
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ส่งการลาเรียบร้อย',
          showConfirmButton: false,
          timer: 1500

        }).then(() => {
          window.location.reload()
        })
        this.modal_dismiss = "model"
      }

    }


    else if (this.selectedFile.name.length > 0) {
      if (this.selectedFile.size > 2000000) {
        Swal.fire(
          'ไฟล์ใหญ่เกินไป?',
          'กรุณาเลือกไฟล์ใหม่?',
          'info'
        )
      } else {
        if (+LeaveTotal > +check_number) {
          const uploadData = new FormData();
          uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
          uploadData.append('Leave_ID', "0");
          uploadData.append('Emp_ID', this.Emp_ID.value)
          uploadData.append('Name_Leave', Name_Leave + "/หักเงินเดือน")
          uploadData.append('To_Person', To_Person)
          uploadData.append('LeaveDateStart', this.LeaveDateStart.value)
          uploadData.append('Leave_characteristics_dateStart', Leave_characteristics_dateStart)
          uploadData.append('LeaveDateLast', this.LeaveDateLast.value)
          uploadData.append('Leave_characteristics_dateLast', Leave_characteristics_dateLast)
          uploadData.append('LeaveData', this.LeaveData.value)
          uploadData.append('ContactInformation', this.ContactInformation.value)
          uploadData.append('employee', this.employee.value)
          uploadData.append('LeaveTotal', LeaveTotal)
          uploadData.append('number_leave', "1")
          uploadData.append('LeaveStatus_ID', "1")
          uploadData.append('LeaveStatus_Document', this.LeaveStatus_Document.value)
          uploadData.append('Response_Time', this.Response_Time.value)
          uploadData.append('limit_ID', this.limit_ID.value)
          uploadData.append('LType_ID', this.LType_ID_check)
          uploadData.append('file_names', this.selectedFile.name)
          console.log(uploadData);

          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post(`${this.baseUrl}Add_leave.php`, uploadData)
            .subscribe(
              (data: any) => {
                console.log(data);
                this.addLeave = data;
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'ส่งการลาเรียบร้อย',
                  showConfirmButton: false,
                  timer: 1500

                }).then(() => {
                  window.location.reload()
                })
                this.modal_dismiss = "model"
              },
              (error: any) => {

              }
            );
        }
        else {
          const uploadData = new FormData();
          uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
          uploadData.append('Leave_ID', "0");
          uploadData.append('Emp_ID', this.Emp_ID.value)
          uploadData.append('Name_Leave', Name_Leave)
          uploadData.append('To_Person', To_Person)
          uploadData.append('LeaveDateStart', this.LeaveDateStart.value)
          uploadData.append('Leave_characteristics_dateStart', Leave_characteristics_dateStart)
          uploadData.append('LeaveDateLast', this.LeaveDateLast.value)
          uploadData.append('Leave_characteristics_dateLast', Leave_characteristics_dateLast)
          uploadData.append('LeaveData', this.LeaveData.value)
          uploadData.append('ContactInformation', this.ContactInformation.value)
          uploadData.append('employee', this.employee.value)
          uploadData.append('LeaveTotal', LeaveTotal)
          uploadData.append('number_leave', "1")
          uploadData.append('LeaveStatus_ID', "1")
          uploadData.append('LeaveStatus_Document', this.LeaveStatus_Document.value)
          uploadData.append('Response_Time', this.Response_Time.value)
          uploadData.append('limit_ID', this.limit_ID.value)
          uploadData.append('LType_ID', this.LType_ID_check)
          uploadData.append('file_names', this.selectedFile.name)
          console.log(uploadData);

          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post(`${this.baseUrl}Add_leave.php`, uploadData)
            .subscribe(
              (data: any) => {
                console.log(data);
                this.addLeave = data;
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'ส่งการลาเรียบร้อย',
                  showConfirmButton: false,
                  timer: 1500

                }).then(() => {
                  window.location.reload()
                })
                this.modal_dismiss = "model"
              },
              (error: any) => {

              }
            );
        }

      }


    }

  }

  Add_leave_level_2(check_number, LeaveTotal, Name_Leave, To_Person, Leave_characteristics_dateStart, Leave_characteristics_dateLast) {
    if (typeof (this.selectedFile) == 'undefined') {
      if (+LeaveTotal > +check_number) {
        const body = 'Leave_ID=' + this.leave_ID_chack
          + '&Emp_ID=' + this.Emp_ID.value
          + '&Name_Leave=' + Name_Leave + "/หักเงินเดือน"
          + '&To_Person=' + To_Person
          + '&LeaveDateStart=' + this.LeaveDateStart.value
          + '&Leave_characteristics_dateStart=' + Leave_characteristics_dateStart
          + '&LeaveDateLast=' + this.LeaveDateLast.value
          + '&Leave_characteristics_dateLast=' + Leave_characteristics_dateLast
          + '&LeaveData=' + this.LeaveData.value
          + '&ContactInformation=' + this.ContactInformation.value
          + '&employee=' + this.employee.value
          + '&LeaveTotal=' + LeaveTotal
          + '&number_leave=' + 1
          + '&LeaveStatus_ID=' + "2"
          + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
          + '&UploadFile=' + this.UploadFile.value
          + '&Response_Time=' + this.Response_Time.value
          + '&limit_ID=' + this.limit_ID.value
          + '&LType_ID=' + this.LType_ID_check
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}Add_leave.php`, body, {
            headers: headers
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              this.addLeave = data;
            },
            (error: any) => {

            }
          );
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ส่งการลาเรียบร้อย',
          showConfirmButton: false,
          timer: 1500

        }).then(() => {
          window.location.reload()
        })
        this.modal_dismiss = "model"
      }
      else {
        const body = 'Leave_ID=' + this.leave_ID_chack
          + '&Emp_ID=' + this.Emp_ID.value
          + '&Name_Leave=' + Name_Leave
          + '&To_Person=' + To_Person
          + '&LeaveDateStart=' + this.LeaveDateStart.value
          + '&Leave_characteristics_dateStart=' + Leave_characteristics_dateStart
          + '&LeaveDateLast=' + this.LeaveDateLast.value
          + '&Leave_characteristics_dateLast=' + Leave_characteristics_dateLast
          + '&LeaveData=' + this.LeaveData.value
          + '&ContactInformation=' + this.ContactInformation.value
          + '&employee=' + this.employee.value
          + '&LeaveTotal=' + LeaveTotal
          + '&number_leave=' + 1
          + '&LeaveStatus_ID=' + "2"
          + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
          + '&UploadFile=' + this.UploadFile.value
          + '&Response_Time=' + this.Response_Time.value
          + '&limit_ID=' + this.limit_ID.value
          + '&LType_ID=' + this.LType_ID_check
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}Add_leave.php`, body, {
            headers: headers
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              this.addLeave = data;
            },
            (error: any) => {

            }
          );
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ส่งการลาเรียบร้อย',
          showConfirmButton: false,
          timer: 1500

        }).then(() => {
          window.location.reload()
        })
        this.modal_dismiss = "model"
      }

    }


    else if (this.selectedFile.name.length > 0) {
      if (this.selectedFile.size > 2000000) {
        Swal.fire(
          'ไฟล์ใหญ่เกินไป?',
          'กรุณาเลือกไฟล์ใหม่?',
          'info'
        )
      } else {
        if (+LeaveTotal > +check_number) {
          const uploadData = new FormData();
          uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
          uploadData.append('Leave_ID', "0");
          uploadData.append('Emp_ID', this.Emp_ID.value)
          uploadData.append('Name_Leave', Name_Leave + "/หักเงินเดือน")
          uploadData.append('To_Person', To_Person)
          uploadData.append('LeaveDateStart', this.LeaveDateStart.value)
          uploadData.append('Leave_characteristics_dateStart', Leave_characteristics_dateStart)
          uploadData.append('LeaveDateLast', this.LeaveDateLast.value)
          uploadData.append('Leave_characteristics_dateLast', Leave_characteristics_dateLast)
          uploadData.append('LeaveData', this.LeaveData.value)
          uploadData.append('ContactInformation', this.ContactInformation.value)
          uploadData.append('employee', this.employee.value)
          uploadData.append('LeaveTotal', LeaveTotal)
          uploadData.append('number_leave', "1")
          uploadData.append('LeaveStatus_ID', "2")
          uploadData.append('LeaveStatus_Document', this.LeaveStatus_Document.value)
          uploadData.append('Response_Time', this.Response_Time.value)
          uploadData.append('limit_ID', this.limit_ID.value)
          uploadData.append('LType_ID', this.LType_ID_check)
          uploadData.append('file_names', this.selectedFile.name)
          console.log(uploadData);

          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post(`${this.baseUrl}Add_leave.php`, uploadData)
            .subscribe(
              (data: any) => {
                console.log(data);
                this.addLeave = data;
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'ส่งการลาเรียบร้อย',
                  showConfirmButton: false,
                  timer: 1500

                }).then(() => {
                  window.location.reload()
                })
                this.modal_dismiss = "model"
              },
              (error: any) => {

              }
            );
        }
        else {
          const uploadData = new FormData();
          uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
          uploadData.append('Leave_ID', "0");
          uploadData.append('Emp_ID', this.Emp_ID.value)
          uploadData.append('Name_Leave', Name_Leave)
          uploadData.append('To_Person', To_Person)
          uploadData.append('LeaveDateStart', this.LeaveDateStart.value)
          uploadData.append('Leave_characteristics_dateStart', Leave_characteristics_dateStart)
          uploadData.append('LeaveDateLast', this.LeaveDateLast.value)
          uploadData.append('Leave_characteristics_dateLast', Leave_characteristics_dateLast)
          uploadData.append('LeaveData', this.LeaveData.value)
          uploadData.append('ContactInformation', this.ContactInformation.value)
          uploadData.append('employee', this.employee.value)
          uploadData.append('LeaveTotal', LeaveTotal)
          uploadData.append('number_leave', "1")
          uploadData.append('LeaveStatus_ID', "2")
          uploadData.append('LeaveStatus_Document', this.LeaveStatus_Document.value)
          uploadData.append('Response_Time', this.Response_Time.value)
          uploadData.append('limit_ID', this.limit_ID.value)
          uploadData.append('LType_ID', this.LType_ID_check)
          uploadData.append('file_names', this.selectedFile.name)
          console.log(uploadData);

          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post(`${this.baseUrl}Add_leave.php`, uploadData)
            .subscribe(
              (data: any) => {
                console.log(data);
                this.addLeave = data;
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'ส่งการลาเรียบร้อย',
                  showConfirmButton: false,
                  timer: 1500

                }).then(() => {
                  window.location.reload()
                })
                this.modal_dismiss = "model"
              },
              (error: any) => {

              }
            );
        }

      }


    }

  }
  Add_leave_level_3(check_number, LeaveTotal, Name_Leave, To_Person, Leave_characteristics_dateStart, Leave_characteristics_dateLast) {
    if (typeof (this.selectedFile) == 'undefined') {
      if (+LeaveTotal > +check_number) {
        const body = 'Leave_ID=' + this.leave_ID_chack
          + '&Emp_ID=' + this.Emp_ID.value
          + '&Name_Leave=' + Name_Leave + "/หักเงินเดือน"
          + '&To_Person=' + To_Person
          + '&LeaveDateStart=' + this.LeaveDateStart.value
          + '&Leave_characteristics_dateStart=' + Leave_characteristics_dateStart
          + '&LeaveDateLast=' + this.LeaveDateLast.value
          + '&Leave_characteristics_dateLast=' + Leave_characteristics_dateLast
          + '&LeaveData=' + this.LeaveData.value
          + '&ContactInformation=' + this.ContactInformation.value
          + '&employee=' + this.employee.value
          + '&LeaveTotal=' + LeaveTotal
          + '&number_leave=' + 1
          + '&LeaveStatus_ID=' + "3"
          + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
          + '&UploadFile=' + this.UploadFile.value
          + '&Response_Time=' + this.Response_Time.value
          + '&limit_ID=' + this.limit_ID.value
          + '&LType_ID=' + this.LType_ID_check
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}Add_leave.php`, body, {
            headers: headers
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              this.addLeave = data;
            },
            (error: any) => {

            }
          );
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ส่งการลาเรียบร้อย',
          showConfirmButton: false,
          timer: 1500

        }).then(() => {
          window.location.reload()
        })
        this.modal_dismiss = "model"
      }
      else {
        const body = 'Leave_ID=' + this.leave_ID_chack
          + '&Emp_ID=' + this.Emp_ID.value
          + '&Name_Leave=' + Name_Leave
          + '&To_Person=' + To_Person
          + '&LeaveDateStart=' + this.LeaveDateStart.value
          + '&Leave_characteristics_dateStart=' + Leave_characteristics_dateStart
          + '&LeaveDateLast=' + this.LeaveDateLast.value
          + '&Leave_characteristics_dateLast=' + Leave_characteristics_dateLast
          + '&LeaveData=' + this.LeaveData.value
          + '&ContactInformation=' + this.ContactInformation.value
          + '&employee=' + this.employee.value
          + '&LeaveTotal=' + LeaveTotal
          + '&number_leave=' + 1
          + '&LeaveStatus_ID=' + "3"
          + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
          + '&UploadFile=' + this.UploadFile.value
          + '&Response_Time=' + this.Response_Time.value
          + '&limit_ID=' + this.limit_ID.value
          + '&LType_ID=' + this.LType_ID_check
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}Add_leave.php`, body, {
            headers: headers
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              this.addLeave = data;
            },
            (error: any) => {

            }
          );
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ส่งการลาเรียบร้อย',
          showConfirmButton: false,
          timer: 1500

        }).then(() => {
          window.location.reload()
        })
        this.modal_dismiss = "model"
      }

    }


    else if (this.selectedFile.name.length > 0) {
      if (this.selectedFile.size > 2000000) {
        Swal.fire(
          'ไฟล์ใหญ่เกินไป?',
          'กรุณาเลือกไฟล์ใหม่?',
          'info'
        )
      } else {
        if (+LeaveTotal > +check_number) {
          const uploadData = new FormData();
          uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
          uploadData.append('Leave_ID', "0");
          uploadData.append('Emp_ID', this.Emp_ID.value)
          uploadData.append('Name_Leave', Name_Leave + "/หักเงินเดือน")
          uploadData.append('To_Person', To_Person)
          uploadData.append('LeaveDateStart', this.LeaveDateStart.value)
          uploadData.append('Leave_characteristics_dateStart', Leave_characteristics_dateStart)
          uploadData.append('LeaveDateLast', this.LeaveDateLast.value)
          uploadData.append('Leave_characteristics_dateLast', Leave_characteristics_dateLast)
          uploadData.append('LeaveData', this.LeaveData.value)
          uploadData.append('ContactInformation', this.ContactInformation.value)
          uploadData.append('employee', this.employee.value)
          uploadData.append('LeaveTotal', LeaveTotal)
          uploadData.append('number_leave', "1")
          uploadData.append('LeaveStatus_ID', "3")
          uploadData.append('LeaveStatus_Document', this.LeaveStatus_Document.value)
          uploadData.append('Response_Time', this.Response_Time.value)
          uploadData.append('limit_ID', this.limit_ID.value)
          uploadData.append('LType_ID', this.LType_ID_check)
          uploadData.append('file_names', this.selectedFile.name)
          console.log(uploadData);

          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post(`${this.baseUrl}Add_leave.php`, uploadData)
            .subscribe(
              (data: any) => {
                console.log(data);
                this.addLeave = data;
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'ส่งการลาเรียบร้อย',
                  showConfirmButton: false,
                  timer: 1500

                }).then(() => {
                  window.location.reload()
                })
                this.modal_dismiss = "model"
              },
              (error: any) => {

              }
            );
        }
        else {
          const uploadData = new FormData();
          uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
          uploadData.append('Leave_ID', "0");
          uploadData.append('Emp_ID', this.Emp_ID.value)
          uploadData.append('Name_Leave', Name_Leave)
          uploadData.append('To_Person', To_Person)
          uploadData.append('LeaveDateStart', this.LeaveDateStart.value)
          uploadData.append('Leave_characteristics_dateStart', Leave_characteristics_dateStart)
          uploadData.append('LeaveDateLast', this.LeaveDateLast.value)
          uploadData.append('Leave_characteristics_dateLast', Leave_characteristics_dateLast)
          uploadData.append('LeaveData', this.LeaveData.value)
          uploadData.append('ContactInformation', this.ContactInformation.value)
          uploadData.append('employee', this.employee.value)
          uploadData.append('LeaveTotal', LeaveTotal)
          uploadData.append('number_leave', "1")
          uploadData.append('LeaveStatus_ID', "3")
          uploadData.append('LeaveStatus_Document', this.LeaveStatus_Document.value)
          uploadData.append('Response_Time', this.Response_Time.value)
          uploadData.append('limit_ID', this.limit_ID.value)
          uploadData.append('LType_ID', this.LType_ID_check)
          uploadData.append('file_names', this.selectedFile.name)
          console.log(uploadData);

          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post(`${this.baseUrl}Add_leave.php`, uploadData)
            .subscribe(
              (data: any) => {
                console.log(data);
                this.addLeave = data;
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'ส่งการลาเรียบร้อย',
                  showConfirmButton: false,
                  timer: 1500

                }).then(() => {
                  window.location.reload()
                })
                this.modal_dismiss = "model"
              },
              (error: any) => {

              }
            );
        }

      }


    }
  }
  Add_leave_level_4(check_number, LeaveTotal, Name_Leave, To_Person, Leave_characteristics_dateStart, Leave_characteristics_dateLast) {

    if (typeof (this.selectedFile) == 'undefined') {
      if (+LeaveTotal > +check_number) {
        const body = 'Leave_ID=' + this.leave_ID_chack
          + '&Emp_ID=' + this.Emp_ID.value
          + '&Name_Leave=' + Name_Leave + "/หักเงินเดือน"
          + '&To_Person=' + To_Person
          + '&LeaveDateStart=' + this.LeaveDateStart.value
          + '&Leave_characteristics_dateStart=' + Leave_characteristics_dateStart
          + '&LeaveDateLast=' + this.LeaveDateLast.value
          + '&Leave_characteristics_dateLast=' + Leave_characteristics_dateLast
          + '&LeaveData=' + this.LeaveData.value
          + '&ContactInformation=' + this.ContactInformation.value
          + '&employee=' + this.employee.value
          + '&LeaveTotal=' + LeaveTotal
          + '&number_leave=' + 1
          + '&LeaveStatus_ID=' + "4"
          + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
          + '&UploadFile=' + this.UploadFile.value
          + '&Response_Time=' + this.Response_Time.value
          + '&limit_ID=' + this.limit_ID.value
          + '&LType_ID=' + this.LType_ID_check
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}Add_leave.php`, body, {
            headers: headers
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              this.addLeave = data;
            },
            (error: any) => {

            }
          );
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ส่งการลาเรียบร้อย',
          showConfirmButton: false,
          timer: 1500

        }).then(() => {
          window.location.reload()
        })
        this.modal_dismiss = "model"
      }
      else {
        const body = 'Leave_ID=' + this.leave_ID_chack
          + '&Emp_ID=' + this.Emp_ID.value
          + '&Name_Leave=' + Name_Leave
          + '&To_Person=' + To_Person
          + '&LeaveDateStart=' + this.LeaveDateStart.value
          + '&Leave_characteristics_dateStart=' + Leave_characteristics_dateStart
          + '&LeaveDateLast=' + this.LeaveDateLast.value
          + '&Leave_characteristics_dateLast=' + Leave_characteristics_dateLast
          + '&LeaveData=' + this.LeaveData.value
          + '&ContactInformation=' + this.ContactInformation.value
          + '&employee=' + this.employee.value
          + '&LeaveTotal=' + LeaveTotal
          + '&number_leave=' + 1
          + '&LeaveStatus_ID=' + "4"
          + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
          + '&UploadFile=' + this.UploadFile.value
          + '&Response_Time=' + this.Response_Time.value
          + '&limit_ID=' + this.limit_ID.value
          + '&LType_ID=' + this.LType_ID_check
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}Add_leave.php`, body, {
            headers: headers
          })
          .subscribe(
            (data: any) => {
              console.log(data);
              this.addLeave = data;
            },
            (error: any) => {

            }
          );
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ส่งการลาเรียบร้อย',
          showConfirmButton: false,
          timer: 1500

        }).then(() => {
          window.location.reload()
        })
        this.modal_dismiss = "model"
      }

    }


    else if (this.selectedFile.name.length > 0) {
      if (this.selectedFile.size > 2000000) {
        Swal.fire(
          'ไฟล์ใหญ่เกินไป?',
          'กรุณาเลือกไฟล์ใหม่?',
          'info'
        )
      } else {
        if (+LeaveTotal > +check_number) {
          const uploadData = new FormData();
          uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
          uploadData.append('Leave_ID', "0");
          uploadData.append('Emp_ID', this.Emp_ID.value)
          uploadData.append('Name_Leave', Name_Leave + "/หักเงินเดือน")
          uploadData.append('To_Person', To_Person)
          uploadData.append('LeaveDateStart', this.LeaveDateStart.value)
          uploadData.append('Leave_characteristics_dateStart', Leave_characteristics_dateStart)
          uploadData.append('LeaveDateLast', this.LeaveDateLast.value)
          uploadData.append('Leave_characteristics_dateLast', Leave_characteristics_dateLast)
          uploadData.append('LeaveData', this.LeaveData.value)
          uploadData.append('ContactInformation', this.ContactInformation.value)
          uploadData.append('employee', this.employee.value)
          uploadData.append('LeaveTotal', LeaveTotal)
          uploadData.append('number_leave', "1")
          uploadData.append('LeaveStatus_ID', "4")
          uploadData.append('LeaveStatus_Document', this.LeaveStatus_Document.value)
          uploadData.append('Response_Time', this.Response_Time.value)
          uploadData.append('limit_ID', this.limit_ID.value)
          uploadData.append('LType_ID', this.LType_ID_check)
          uploadData.append('file_names', this.selectedFile.name)
          console.log(uploadData);

          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post(`${this.baseUrl}Add_leave.php`, uploadData)
            .subscribe(
              (data: any) => {
                console.log(data);
                this.addLeave = data;
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'ส่งการลาเรียบร้อย',
                  showConfirmButton: false,
                  timer: 1500

                }).then(() => {
                  window.location.reload()
                })
                this.modal_dismiss = "model"
              },
              (error: any) => {

              }
            );
        } else {
          const uploadData = new FormData();
          uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
          uploadData.append('Leave_ID', "0");
          uploadData.append('Emp_ID', this.Emp_ID.value)
          uploadData.append('Name_Leave', Name_Leave)
          uploadData.append('To_Person', To_Person)
          uploadData.append('LeaveDateStart', this.LeaveDateStart.value)
          uploadData.append('Leave_characteristics_dateStart', Leave_characteristics_dateStart)
          uploadData.append('LeaveDateLast', this.LeaveDateLast.value)
          uploadData.append('Leave_characteristics_dateLast', Leave_characteristics_dateLast)
          uploadData.append('LeaveData', this.LeaveData.value)
          uploadData.append('ContactInformation', this.ContactInformation.value)
          uploadData.append('employee', this.employee.value)
          uploadData.append('LeaveTotal', LeaveTotal)
          uploadData.append('number_leave', "1")
          uploadData.append('LeaveStatus_ID', "4")
          uploadData.append('LeaveStatus_Document', this.LeaveStatus_Document.value)
          uploadData.append('Response_Time', this.Response_Time.value)
          uploadData.append('limit_ID', this.limit_ID.value)
          uploadData.append('LType_ID', this.LType_ID_check)
          uploadData.append('file_names', this.selectedFile.name)
          console.log(uploadData);

          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post(`${this.baseUrl}Add_leave.php`, uploadData)
            .subscribe(
              (data: any) => {
                console.log(data);
                this.addLeave = data;
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'ส่งการลาเรียบร้อย',
                  showConfirmButton: false,
                  timer: 1500

                }).then(() => {
                  window.location.reload()
                })
                this.modal_dismiss = "model"
              },
              (error: any) => {

              }
            );
        }

      }


    }
  }

  date_chack_start = /ครึ่งวัน/i
  date_chack_Last = /ครึ่งวัน/i
  a
  b
  num = 10;
  show_holiday
  show_numberleave
  numberleave1
  numberleave2
  show_1 = []
  show_2: boolean
  test_arrar = 0
  btnDisable_start: boolean = true
  btnDisable_last: boolean = true
  invalid_Last
  day_chack = new Date();
  onseletday(LeaveDateStart, LeaveDateLast, Leave_characteristics_dateStart, Leave_characteristics_dateLast, date_chack) {
    var moment = require('moment-business-days');
    var dayleave = moment(LeaveDateLast).startOf('day').businessDiff(moment(LeaveDateStart).startOf('day'), 'day') + 1;
    if (date_chack.length <= 0) {
      if (LeaveDateStart.length > 0 && moment(this.day_chack).startOf('day').businessDiff(moment(LeaveDateStart).startOf('day'), 'day') == 0) {
        Swal.fire({
          icon: 'error',
          title: 'ไม่สามารถลาในวันทำงานได้',
          text: '',
          footer: ''
        })
        this.LeaveDateStart = new FormControl('');
        this.LeaveDateLast = new FormControl('');
        this.btnDisable_start = true;
        this.btnDisable_last = true;
        this.numberleave = dayleave = 0;
      }
      else if (LeaveDateLast.length > 0 && moment(this.day_chack).startOf('day').businessDiff(moment(LeaveDateLast).startOf('day'), 'day') == 0) {
        Swal.fire({
          icon: 'error',
          title: 'ไม่สามารถลาในวันทำงานได้',
          text: '',
          footer: ''
        })
        this.LeaveDateStart = new FormControl('');
        this.LeaveDateLast = new FormControl('');
        this.btnDisable_start = true;
        this.btnDisable_last = true;
        this.numberleave = dayleave = 0;

      }



      else {

        const body = 'Emp_ID=' + this.Emp_ID.value
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}getLeave.php`, body, {
            headers: headers
          }).subscribe(
            (data: any) => {
              this.leave = data;
              for (let i = 0; i < this.leave.length; i++) {
                const element = this.leave[i];
                console.log(element.LeaveDateStart, element.LeaveDateLast);
                if (LeaveDateStart >= element.LeaveDateStart && LeaveDateStart <= element.LeaveDateLast) {
                  Swal.fire({
                    icon: 'error',
                    title: 'ไม่สามารถลาได้เนื่องจากคุณลาวันนี้ไปแล้ว',
                  })
                  this.LeaveDateStart = new FormControl('');
                  this.btnDisable_start = true;
                  this.numberleave = dayleave = 0;
                  break;
                }
                else if (LeaveDateLast >= element.LeaveDateStart && LeaveDateLast <= element.LeaveDateLast) {
                  Swal.fire({
                    icon: 'error',
                    title: 'ไม่สามารถลาได้เนื่องจากคุณลาวันนี้ไปแล้ว',
                  })
                  this.LeaveDateLast = new FormControl('');
                  this.btnDisable_last = true;
                  this.numberleave = dayleave = 0;
                  break;
                }
                else if (LeaveDateStart <= element.LeaveDateStart && LeaveDateLast >= element.LeaveDateStart) {
                  Swal.fire({
                    icon: 'error',
                    title: 'ไม่สามารถลาได้เนื่องจากคุณลาวันนี้ไปแล้ว',
                  })
                  console.log(123);

                  this.LeaveDateLast = new FormControl('');
                  this.btnDisable_last = true;
                  this.numberleave = 0;
                  this.LeaveDateStart = new FormControl('');
                  this.btnDisable_start = true;
                  this.numberleave = dayleave = 0;
                  break;
                }
              }
            },
            (error: any) => {
            }
          )

        if (LeaveDateStart.length > 0 && !moment(LeaveDateStart).isBusinessDay()) {
          Swal.fire({
            icon: 'error',
            title: 'คุณเลือกวันลาตรงกับวันหยุดราชการ',
            text: '',
            footer: ''
          })
          this.numberleave = 0;
          this.LeaveDateStart = new FormControl('');
        }
        else if (LeaveDateLast.length > 0 && !moment(LeaveDateLast).isBusinessDay()) {
          Swal.fire({
            icon: 'error',
            title: 'คุณเลือกวันลาตรงกับวันหยุดราชการ',
            text: '',
            footer: ''
          })
          this.numberleave = 0;
          this.LeaveDateLast = new FormControl('');
        }
        else {
          if (LeaveDateStart.length > 0) {
            this.btnDisable_start = false;
          }
          if (LeaveDateLast.length > 0) {
            this.btnDisable_last = false;
            this.invalid_Last = "is-valid"
          }
          this.http.get(`${this.baseUrl}show_holiday.php`).subscribe(
            (data: any) => {
              this.show_holiday = data
              console.log(this.show_holiday);
              if (this.date_chack_start.test(Leave_characteristics_dateStart) == true && Leave_characteristics_dateLast == "เต็มวัน"
                || Leave_characteristics_dateStart == "เต็มวัน" && this.date_chack_Last.test(Leave_characteristics_dateLast) == true) {
                for (var i = 0; i < this.show_holiday.length; i++) {
                  if (LeaveDateStart <= this.show_holiday[i].holiday_date && LeaveDateLast >= this.show_holiday[i].holiday_date) {
                    this.numberleave = dayleave -= 1
                  }
                  if (LeaveDateStart != this.show_holiday[i].holiday_date) {
                    this.numberleave = dayleave - 0.5
                  }
                }
                if (this.numberleave < 0) {
                  Swal.fire({
                    icon: 'error',
                    title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
                    text: '',
                    footer: ''
                  }).then(() => {
                    this.numberleave = 0
                  })
                }
              }
              if (this.date_chack_start.test(Leave_characteristics_dateStart) == true && this.date_chack_Last.test(Leave_characteristics_dateLast) == true) {
                for (var i = 0; i < this.show_holiday.length; i++) {
                  if (LeaveDateStart <= this.show_holiday[i].holiday_date && LeaveDateLast >= this.show_holiday[i].holiday_date) {
                    this.numberleave = dayleave -= 1
                  }
                  if (LeaveDateStart != this.show_holiday[i].holiday_date) {
                    this.numberleave = dayleave - 0.5
                  }
                }
                if (LeaveDateStart = LeaveDateLast && moment(LeaveDateLast).startOf('day').businessDiff(moment(LeaveDateStart).startOf('day'), 'day') + 1 > 1) {
                  this.numberleave = dayleave -= 1
                }
                if (moment(LeaveDateLast).startOf('day').businessDiff(moment(LeaveDateStart).startOf('day'), 'day') + 1 == 1 && LeaveDateStart == LeaveDateLast) {
                  this.numberleave = dayleave -= 1
                }
                if (this.numberleave < 0) {
                  Swal.fire({
                    icon: 'error',
                    title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
                    text: '',
                    footer: ''
                  })
                  this.numberleave = 0
                }
              }
              if (Leave_characteristics_dateStart == "เต็มวัน" && Leave_characteristics_dateLast == "เต็มวัน") {
                for (var i = 0; i < this.show_holiday.length; i++) {
                  if (LeaveDateStart <= this.show_holiday[i].holiday_date && LeaveDateLast >= this.show_holiday[i].holiday_date) {
                    this.numberleave = dayleave -= 1
                  }
                  if (LeaveDateStart != this.show_holiday[i].holiday_date || LeaveDateLast != this.show_holiday[i].holiday_date) {
                    this.numberleave = dayleave
                  }
                }
                if (this.numberleave < 0) {
                  Swal.fire({
                    icon: 'error',
                    title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
                    text: '',
                    footer: ''
                  })
                  this.numberleave = 0
                }
              }
              if (Leave_characteristics_dateStart == " " || Leave_characteristics_dateLast == " ") {
                Swal.fire({
                  icon: 'error',
                  title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
                  text: '',
                  footer: ''
                })
                this.numberleave = 0;
              }
            },
            (error: any) => {
              // console.log(error);

            }
          )
        }

      }

    }
    else if (moment(LeaveDateStart).startOf('day').businessDiff(moment(date_chack).startOf('day'), 'day') + 1 >= 5 && date_chack.length > 1) {
      const body = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      // console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getLeave.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.leave = data;
            for (let i = 0; i < this.leave.length; i++) {
              const element = this.leave[i];
              console.log(element.LeaveDateStart, element.LeaveDateLast);
              if (LeaveDateStart >= element.LeaveDateStart && LeaveDateStart <= element.LeaveDateLast) {
                Swal.fire({
                  icon: 'error',
                  title: 'ไม่สามารถลาได้เนื่องจากคุณลาวันนี้ไปแล้ว',
                })
                this.LeaveDateStart = new FormControl('');
                this.btnDisable_start = true;
                this.numberleave = dayleave = 0;
                break;
              }
              else if (LeaveDateStart < element.LeaveDateStart && LeaveDateLast > element.LeaveDateStart) {
                Swal.fire({
                  icon: 'error',
                  title: 'ไม่สามารถลาได้เนื่องจากคุณลาวันนี้ไปแล้ว',
                })
                this.LeaveDateStart = new FormControl('');
                this.btnDisable_start = true;
                this.LeaveDateLast = new FormControl('');
                this.btnDisable_last = true;
                this.numberleave = dayleave = 0;
                break;
              }
              else if (LeaveDateLast >= element.LeaveDateStart && LeaveDateLast <= element.LeaveDateLast) {
                Swal.fire({
                  icon: 'error',
                  title: 'ไม่สามารถลาได้เนื่องจากคุณลาวันนี้ไปแล้ว',
                })
                this.LeaveDateLast = new FormControl('');
                this.btnDisable_last = true;
                break;
              }
              this.numberleave = 0;
            }
          },
          (error: any) => {
          }
        )

      if (LeaveDateStart.length > 0 && !moment(LeaveDateStart).isBusinessDay()) {
        Swal.fire({
          icon: 'error',
          title: 'คุณเลือกวันลาตรงกับวันหยุดราชการ',
          text: '',
          footer: ''
        })
        this.numberleave = 0;
        this.LeaveDateStart = new FormControl('');
      }
      else if (LeaveDateLast.length > 0 && !moment(LeaveDateLast).isBusinessDay()) {
        Swal.fire({
          icon: 'error',
          title: 'คุณเลือกวันลาตรงกับวันหยุดราชการ',
          text: '',
          footer: ''
        })
        this.numberleave = 0;
        this.LeaveDateLast = new FormControl('');
      }
      else {
        if (LeaveDateStart.length > 0) {
          this.btnDisable_start = false;
        }
        if (LeaveDateLast.length > 0) {
          this.btnDisable_last = false;
          this.invalid_Last = "is-valid"
        }
        this.http.get(`${this.baseUrl}show_holiday.php`).subscribe(
          (data: any) => {
            this.show_holiday = data
            console.log(this.show_holiday);
            if (this.date_chack_start.test(Leave_characteristics_dateStart) == true && Leave_characteristics_dateLast == "เต็มวัน"
              || Leave_characteristics_dateStart == "เต็มวัน" && this.date_chack_Last.test(Leave_characteristics_dateLast) == true) {
              for (var i = 0; i < this.show_holiday.length; i++) {
                if (LeaveDateStart <= this.show_holiday[i].holiday_date && LeaveDateLast >= this.show_holiday[i].holiday_date) {
                  this.numberleave = dayleave -= 1
                }
                if (LeaveDateStart != this.show_holiday[i].holiday_date) {
                  this.numberleave = dayleave - 0.5
                }
              }
              if (this.numberleave < 0) {
                Swal.fire({
                  icon: 'error',
                  title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
                  text: '',
                  footer: ''
                }).then(() => {
                  this.numberleave = 0
                })
              }
            }
            if (this.date_chack_start.test(Leave_characteristics_dateStart) == true && this.date_chack_Last.test(Leave_characteristics_dateLast) == true) {
              for (var i = 0; i < this.show_holiday.length; i++) {
                if (LeaveDateStart <= this.show_holiday[i].holiday_date && LeaveDateLast >= this.show_holiday[i].holiday_date) {
                  this.numberleave = dayleave -= 1
                }
                if (LeaveDateStart != this.show_holiday[i].holiday_date) {
                  this.numberleave = dayleave - 0.5
                }
              }
              if (LeaveDateStart = LeaveDateLast && moment(LeaveDateLast).startOf('day').businessDiff(moment(LeaveDateStart).startOf('day'), 'day') + 1 > 1) {
                this.numberleave = dayleave -= 1


              }
              if (moment(LeaveDateLast).startOf('day').businessDiff(moment(LeaveDateStart).startOf('day'), 'day') + 1 == 1 && LeaveDateStart == LeaveDateLast) {
                this.numberleave = dayleave -= 1


              }
              if (this.numberleave < 0) {
                Swal.fire({
                  icon: 'error',
                  title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
                  text: '',
                  footer: ''
                })
                this.numberleave = 0
              }
            }
            if (Leave_characteristics_dateStart == "เต็มวัน" && Leave_characteristics_dateLast == "เต็มวัน") {
              for (var i = 0; i < this.show_holiday.length; i++) {
                if (LeaveDateStart <= this.show_holiday[i].holiday_date && LeaveDateLast >= this.show_holiday[i].holiday_date) {
                  this.numberleave = dayleave -= 1
                }
                if (LeaveDateStart != this.show_holiday[i].holiday_date || LeaveDateLast != this.show_holiday[i].holiday_date) {
                  this.numberleave = dayleave
                }
              }
              if (this.numberleave < 0) {
                Swal.fire({
                  icon: 'error',
                  title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
                  text: '',
                  footer: ''
                })
                this.numberleave = 0
              }
            }
            if (Leave_characteristics_dateStart == " " || Leave_characteristics_dateLast == " ") {
              Swal.fire({
                icon: 'error',
                title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
                text: '',
                footer: ''
              })
            }
          },
          (error: any) => {
            // console.log(error);

          }
        )
      }
    }
    else {
      Swal.fire({
        icon: 'warning',
        title: 'ต้องลาล่วงหน้าอย่างน้อย 5-7 วัน',
      })
      this.LeaveDateStart = new FormControl('');
      this.numberleave = ""
      this.btnDisable_start = true;
    }



  }



}
