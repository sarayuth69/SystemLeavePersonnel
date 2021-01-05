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
import { FormControl, FormControlName } from '@angular/forms';
import * as moment from 'moment';
// import { baseUrl } from '../baseUrl.service';
import { GlobalVariable } from '../baseUrl';
import { analyzeAndValidateNgModules, compileBaseDefFromMetadata } from '@angular/compiler';



import * as pdfMake from '../../../node_modules/pdfmake/build/pdfmake';
import * as pdfFonts from '../../../node_modules/pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.scss']
})
export class LeavelistComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;

  list1: boolean
  list: boolean
  list6: boolean
  list5: boolean
  list4: boolean
  list3: boolean
  list2: boolean
  btn_cancel: boolean
  btn_cancel_head: boolean
  selectedFile: File


  leave_ID_to_cancel
  test
  // LeaveStatus_ID
  // leave_ID
  public leavetype;
  public Employee;
  public cancel__leave;
  public file;
  public leave;
  public leave2;
  public leavetypeUser;
  public leavetype106;
  public addLeave;
  public numberleave = 0;
  leave106: boolean;
  leave105: boolean;
  leave104: boolean;
  pageActual: any;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    private http: HttpClient,
    // private baseUrl : baseUrl


  ) { }
  Local_Emp_ID = localStorage.getItem('Emp_ID');
  Local_EmpName = localStorage.getItem('EmpName');
  Local_EmpLastName = localStorage.getItem('EmpLastName');
  Local_PositionName = localStorage.getItem('PositionName');
  Local_DeptName = localStorage.getItem('DeptName');
  Local_Sector = localStorage.getItem('SectorName');
  Local_Role = localStorage.getItem('Role');



  Leave_ID = new FormControl('');
  Emp_ID = new FormControl('');
  Name_Leave = new FormControl('');
  To_Person = new FormControl('');
  LeaveDateStart = new FormControl('');
  Leave_characteristics_dateStart = new FormControl('');
  LeaveDateLast = new FormControl('');
  Leave_characteristics_dateLast = new FormControl('');
  LeaveData = new FormControl('');
  ContactInformation = new FormControl('');
  employee = new FormControl('');
  LeaveTotal = new FormControl('');
  LeaveStatus = new FormControl('');
  UploadFile = new FormControl('');
  Response_Time = new FormControl('');
  limit_ID = new FormControl('');
  LType_ID = new FormControl('');
  LeaveStatus_Document = new FormControl('');
  LTypeName = new FormControl('');
  loop: any;
  showcancel;


  EmpName = new FormControl('');
  EmpLastName = new FormControl('');
  Empstatus_ID = new FormControl('');
  PositionName = new FormControl('');
  DeptName = new FormControl('');
  Sector = new FormControl('');
  marked = false;
  check_Remain: any;
  LType_ID_check: any;
  check_number: Number;
  LType_limit_check: Number;
  LeaveTotal_chack: any;
  LTypeName_check: any;
  LeaveDateStart_cancel = new Date();
  LeaveDateLast_cancel = new Date();
  LeaveDateStart_cancel_month
  LeaveDateLast_cancel_month
  // check_number_total : Number;
  modal_dismiss: any;
  leave_ID_chack = 0;
  chack_date_show
  date_chack
  showleave_limit
  showcancel_allow
  ngOnInit() {
    this.http.get(`${this.baseUrl}getleave_limit.php`).subscribe(
      (data: any) => {

        for (var i = 0; i <= data.length; i++) {
          this.showleave_limit = data;
          console.log(this.showleave_limit[i].date_stop);

        }

      }, (error: any) => {
        console.log(error);
      }
    )
    const tpyeUser = 'Emp_ID=' + localStorage.getItem("Emp_ID")
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
    this.http.get(`${this.baseUrl}getEmployee.php`).subscribe(
      (data: any) => {

        this.Employee = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.http.get(`${this.baseUrl}getfile.php`).subscribe(
      (data: any) => {

        this.file = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
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
          // console.log(this.leavetype[0].Number);

        },
        (error: any) => {
          console.log(error);
        }

      )



    if (localStorage.getItem('Role') === "5") {
      this.list5 = true;
      this.list = false;
      this.list6 = false;
      this.http.get(`${this.baseUrl}getLeaveToperson.php`).subscribe(
        (data: any) => {
          this.leave2 = data;
        },
        (error: any) => {
          console.log(error);
        })

    }
    else if (localStorage.getItem('Role') === "4") {
      this.list = true;
      this.list1 = false;
      this.list6 = false;
      const body = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getLeave.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.leave = data;

          },
          (error: any) => {
            console.log(error);
          }

        )
      const body_cancel = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      console.log(body_cancel);
      const headers_cancel = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getcancel_leave.php`, body_cancel, {
          headers: headers_cancel
        }).subscribe(
          (data: any) => {
            this.showcancel = data;

          },
          (error: any) => {
            console.log(error);
          }

        )
      const body_cancel_allow = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      console.log(body_cancel_allow);
      const headers_cancel_allow = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getallow_cancel_leave.php`, body_cancel_allow, {
          headers: headers_cancel_allow
        }).subscribe(
          (data: any) => {
            this.showcancel_allow = data;

          },
          (error: any) => {
            console.log(error);
          }

        )

    }
    else if (localStorage.getItem('Role') === "3") {
      this.list = true;
      this.list1 = false;
      this.list6 = false;
      const body = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getLeave.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.leave = data;
          },
          (error: any) => {
            console.log(error);
          }

        )
      const body_cancel = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      console.log(body_cancel);
      const headers_cancel = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getcancel_leave.php`, body_cancel, {
          headers: headers_cancel
        }).subscribe(
          (data: any) => {
            this.showcancel = data;

          },
          (error: any) => {
            console.log(error);
          }

        )
      const body_cancel_allow = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      console.log(body_cancel_allow);
      const headers_cancel_allow = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getallow_cancel_leave.php`, body_cancel_allow, {
          headers: headers_cancel_allow
        }).subscribe(
          (data: any) => {
            this.showcancel_allow = data;

          },
          (error: any) => {
            console.log(error);
          }

        )
    }
    else if (localStorage.getItem('Role') === "2") {
      this.list = true;
      this.list1 = false;
      this.list6 = false;
      const body = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getLeave.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.leave = data;
          },
          (error: any) => {
            console.log(error);
          }

        )
      const body_cancel = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      console.log(body_cancel);
      const headers_cancel = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getcancel_leave.php`, body_cancel, {
          headers: headers_cancel
        }).subscribe(
          (data: any) => {
            this.showcancel = data;

          },
          (error: any) => {
            console.log(error);
          }

        )
      const body_cancel_allow = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      console.log(body_cancel_allow);
      const headers_cancel_allow = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getallow_cancel_leave.php`, body_cancel_allow, {
          headers: headers_cancel_allow
        }).subscribe(
          (data: any) => {
            this.showcancel_allow = data;

          },
          (error: any) => {
            console.log(error);
          }

        )
    }
    else if (localStorage.getItem('Role') === "1") {
      this.list = true;
      this.list1 = false;
      this.list6 = false;
      const body = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getLeave.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.leave = data;
            console.log(this.leave);

          }
          ,
          (error: any) => {
            console.log(error);
          }

        )
      const body_cancel = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      console.log(body_cancel);
      const headers_cancel = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getcancel_leave.php`, body_cancel, {
          headers: headers_cancel
        }).subscribe(
          (data: any) => {
            this.showcancel = data;
            console.log(this.showcancel);


          },
          (error: any) => {
            console.log(error);
          }
        )


      const body_cancel_allow = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      console.log(body_cancel_allow);
      const headers_cancel_allow = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getallow_cancel_leave.php`, body_cancel_allow, {
          headers: headers_cancel_allow
        }).subscribe(
          (data: any) => {
            this.showcancel_allow = data;

          },
          (error: any) => {
            console.log(error);
          }

        )
    }
    else if (localStorage.getItem('Role') === "6") {
      this.list = false;
      this.list1 = false;
      this.list6 = true;
      this.http.get(`${this.baseUrl}getleavetoperson.php`).subscribe(
        (data: any) => {

          this.leave = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }


  }

  toggleVisibility(e) {
    this.marked = e.target.checked;


  }
  toggleVisibility_date(e) {
    this.date_chack = e.target.checked;
  }

  changed(e) {
    console.log(e.LType_ID);
  }

  maxDate: any;
  text_chack = /(ลาป่วย)/g;
  dataChanged(newObj) {
    console.log(newObj.LTypeName.length);

    this.check_Remain = newObj.Remain
    this.LType_ID_check = newObj.LType_ID
    this.LType_limit_check = newObj.LType_limit
    if (newObj.LTypeName.length > 0) {
      this.LTypeName_check = `การ${newObj.LTypeName}`
    }
    else {
      this.LTypeName_check = " "
    }

    if (this.text_chack.test(newObj.LTypeName)) {
      this.maxDate = moment(new Date()).format('YYYY-MM-DD')
    }
    else if (newObj.LTypeName !== "ลาป่วย") {
      this.maxDate = ""
    }

  }
  progress

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    
    // this.progress = 10;
    // if (event.type == HttpEventType.UploadProgress) {
    //   this.progress = Math.round((100 / event.total) * event.loaded);
    // } else if (event.type == HttpEventType.Response) {
    //   this.progress = null;
    // }

  }
  file_remove(element) {
    element.value = "";
    this.selectedFile = undefined
  }
  data = new FormControl('');

  upload_test: any


  AddLeave(LeaveTotal, check_number, limit_type, Name_Leave, To_Person) {

    console.log(+check_number);
    console.log(+LeaveTotal);
    console.log(limit_type);
    console.log(Name_Leave);
    console.log(To_Person);
    console.log(this.selectedFile);



    if (+LeaveTotal > +check_number) {
      Swal.fire({
        title: 'คุณลาเกินกำหนดแล้ว ยินยอมให้หักเงินเดือนหรือไม่',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, '
      }).then((result) => {
        if (result.isConfirmed) {
          if (localStorage.getItem('Role') === "1") {
            this.Add_leave_level_1(LeaveTotal, Name_Leave, To_Person)
          }
          else if (localStorage.getItem('Role') === "2") {
            this.Add_leave_level_2(LeaveTotal, Name_Leave, To_Person)
          }
          else if (localStorage.getItem('Role') === "3") {
            this.Add_leave_level_3(LeaveTotal, Name_Leave, To_Person)
          }
          else if (localStorage.getItem('Role') === "4") {
            this.Add_leave_level_4(LeaveTotal, Name_Leave, To_Person)
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

      if (localStorage.getItem('Role') === "1") {
        this.Add_leave_level_1(LeaveTotal, Name_Leave, To_Person)
      }
      else if (localStorage.getItem('Role') === "2") {
        this.Add_leave_level_2(LeaveTotal, Name_Leave, To_Person)
      }
      else if (localStorage.getItem('Role') === "3") {
        this.Add_leave_level_3(LeaveTotal, Name_Leave, To_Person)
      }
      else if (localStorage.getItem('Role') === "4") {
        this.Add_leave_level_4(LeaveTotal, Name_Leave, To_Person)
      }

    }



  }

  Add_leave_level_1(LeaveTotal, Name_Leave, To_Person) {

    if (typeof (this.selectedFile) == 'undefined') {

      const body = 'Leave_ID=' + this.leave_ID_chack
        + '&Emp_ID=' + localStorage.getItem("Emp_ID")
        + '&Name_Leave=' + Name_Leave
        + '&To_Person=' + To_Person
        + '&LeaveDateStart=' + this.LeaveDateStart.value
        + '&Leave_characteristics_dateStart=' + this.Leave_characteristics_dateStart.value
        + '&LeaveDateLast=' + this.LeaveDateLast.value
        + '&Leave_characteristics_dateLast=' + this.Leave_characteristics_dateLast.value
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
            console.log(error);
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


    else if (this.selectedFile.name.length > 0) {
      if (this.selectedFile.size > 2000000) {
        alert("ไฟล์ไหญ่เกินไป")
      } else {
        const uploadData = new FormData();
        uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
        uploadData.append('Leave_ID', "0");
        uploadData.append('Emp_ID', localStorage.getItem("Emp_ID"))
        uploadData.append('Name_Leave', Name_Leave)
        uploadData.append('To_Person', To_Person)
        uploadData.append('LeaveDateStart', this.LeaveDateStart.value)
        uploadData.append('Leave_characteristics_dateStart', this.Leave_characteristics_dateStart.value)
        uploadData.append('LeaveDateLast', this.LeaveDateLast.value)
        uploadData.append('Leave_characteristics_dateLast', this.Leave_characteristics_dateLast.value)
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

              })
                .then(() => {
               
                 window.location.reload()
              })
              this.modal_dismiss = "model"
            },
            (error: any) => {
              console.log(error);
            }
          );
      }


    }

  }

  Add_leave_level_2(LeaveTotal, Name_Leave, To_Person) {
    if (typeof (this.selectedFile) == 'undefined') {

      const body = 'Leave_ID=' + this.leave_ID_chack
        + '&Emp_ID=' + localStorage.getItem("Emp_ID")
        + '&Name_Leave=' + Name_Leave
        + '&To_Person=' + To_Person
        + '&LeaveDateStart=' + this.LeaveDateStart.value
        + '&Leave_characteristics_dateStart=' + this.Leave_characteristics_dateStart.value
        + '&LeaveDateLast=' + this.LeaveDateLast.value
        + '&Leave_characteristics_dateLast=' + this.Leave_characteristics_dateLast.value
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
            console.log(error);
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


    else if (this.selectedFile.name.length > 0) {
      if (this.selectedFile.size > 2000000) {
        alert("ไฟล์ไหญ่เกินไป")
      } else {
        const uploadData = new FormData();
        uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
        uploadData.append('Leave_ID', "0");
        uploadData.append('Emp_ID', localStorage.getItem("Emp_ID"))
        uploadData.append('Name_Leave', Name_Leave)
        uploadData.append('To_Person', To_Person)
        uploadData.append('LeaveDateStart', this.LeaveDateStart.value)
        uploadData.append('Leave_characteristics_dateStart', this.Leave_characteristics_dateStart.value)
        uploadData.append('LeaveDateLast', this.LeaveDateLast.value)
        uploadData.append('Leave_characteristics_dateLast', this.Leave_characteristics_dateLast.value)
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
              console.log(error);
            }
          );
      }


    }

  }
  Add_leave_level_3(LeaveTotal, Name_Leave, To_Person) {
    if (typeof (this.selectedFile) == 'undefined') {

      const body = 'Leave_ID=' + this.leave_ID_chack
        + '&Emp_ID=' + localStorage.getItem("Emp_ID")
        + '&Name_Leave=' + Name_Leave
        + '&To_Person=' + To_Person
        + '&LeaveDateStart=' + this.LeaveDateStart.value
        + '&Leave_characteristics_dateStart=' + this.Leave_characteristics_dateStart.value
        + '&LeaveDateLast=' + this.LeaveDateLast.value
        + '&Leave_characteristics_dateLast=' + this.Leave_characteristics_dateLast.value
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
            console.log(error);
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


    else if (this.selectedFile.name.length > 0) {
      if (this.selectedFile.size > 2000000) {
        alert("ไฟล์ไหญ่เกินไป")
      } else {
        const uploadData = new FormData();
        uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
        uploadData.append('Leave_ID', "0");
        uploadData.append('Emp_ID', localStorage.getItem("Emp_ID"))
        uploadData.append('Name_Leave', Name_Leave)
        uploadData.append('To_Person', To_Person)
        uploadData.append('LeaveDateStart', this.LeaveDateStart.value)
        uploadData.append('Leave_characteristics_dateStart', this.Leave_characteristics_dateStart.value)
        uploadData.append('LeaveDateLast', this.LeaveDateLast.value)
        uploadData.append('Leave_characteristics_dateLast', this.Leave_characteristics_dateLast.value)
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
              console.log(error);
            }
          );
      }


    }
  }
  Add_leave_level_4(LeaveTotal, Name_Leave, To_Person) {

    if (typeof (this.selectedFile) == 'undefined') {

      const body = 'Leave_ID=' + this.leave_ID_chack
        + '&Emp_ID=' + localStorage.getItem("Emp_ID")
        + '&Name_Leave=' + Name_Leave
        + '&To_Person=' + To_Person
        + '&LeaveDateStart=' + this.LeaveDateStart.value
        + '&Leave_characteristics_dateStart=' + this.Leave_characteristics_dateStart.value
        + '&LeaveDateLast=' + this.LeaveDateLast.value
        + '&Leave_characteristics_dateLast=' + this.Leave_characteristics_dateLast.value
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
            console.log(error);
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


    else if (this.selectedFile.name.length > 0) {
      if (this.selectedFile.size > 2000000) {
        alert("ไฟล์ไหญ่เกินไป")
      } else {
        const uploadData = new FormData();
        uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
        uploadData.append('Leave_ID', "0");
        uploadData.append('Emp_ID', localStorage.getItem("Emp_ID"))
        uploadData.append('Name_Leave', Name_Leave)
        uploadData.append('To_Person', To_Person)
        uploadData.append('LeaveDateStart', this.LeaveDateStart.value)
        uploadData.append('Leave_characteristics_dateStart', this.Leave_characteristics_dateStart.value)
        uploadData.append('LeaveDateLast', this.LeaveDateLast.value)
        uploadData.append('Leave_characteristics_dateLast', this.Leave_characteristics_dateLast.value)
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
              console.log(error);
            }
          );
      }


    }
  }




  cancel_leave(leave_ID, LeaveStatus_ID) {
    console.log(leave_ID);
    console.log(LeaveStatus_ID);


    if (LeaveStatus_ID == 1 || LeaveStatus_ID == 2 || LeaveStatus_ID == 3 || LeaveStatus_ID == 4) {
      this.btn_cancel = true
      this.btn_cancel_head = false
      Swal.fire({
        title: 'ต้องการยกเลิกการลาหรือไม่?',
        text: "Want to cancel leave?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'ยกเลิกการลาเรียบร้อย',
            'success'
          )
          const body = 'Leave_ID=' + leave_ID
            + '&LeaveStatus_ID=' + "7"

          console.log(body);
          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post(`${this.baseUrl}cancel_leave.php`, body, {
              headers: headers
            })
            .subscribe(
              (data: any) => {
                console.log(data);
                this.cancel__leave = data;
              },
              (error: any) => {
                console.log(error);
              }
            );
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'ยกเลิกเรียบร้อย',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            if (localStorage.getItem('Role') === localStorage.getItem('Role')) {
              this.list = true;
              this.list1 = false;
              this.list6 = false;
              const body = 'Emp_ID=' + localStorage.getItem("Emp_ID")
              console.log(body);
              const headers = new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
              });
              this.http
                .post(`${this.baseUrl}getLeave.php`, body, {
                  headers: headers
                }).subscribe(
                  (data: any) => {
                    this.leave = data;
                  },
                  (error: any) => {
                    window.location.reload()
                    console.log(error);
                  }

                )
            }
          }).then(() => {
            const body_cancel = 'Emp_ID=' + localStorage.getItem("Emp_ID")
            console.log(body_cancel);
            const headers_cancel = new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded'
            });
            this.http
              .post(`${this.baseUrl}getcancel_leave.php`, body_cancel, {
                headers: headers_cancel
              }).subscribe(
                (data: any) => {
                  this.showcancel = data;

                },
                (error: any) => {
                  console.log(error);
                }

              )
          })


        }
      })

    }

  }
  LTypeName_namleave;
  Leave_ID_cancel;
  cancel(Leave_ID, LTypeName, DateStart, DateLast, LeaveTotal, LeaveDateStart, LeaveDateLast) {

    console.log(DateStart);
    this.LTypeName = new FormControl(LTypeName);
    this.LeaveDateStart_cancel_month = DateStart
    this.Leave_ID_cancel = Leave_ID
    console.log(this.Leave_ID_cancel);

    this.LeaveDateLast_cancel_month = DateLast
    this.LeaveDateStart_cancel = LeaveDateStart
    this.LeaveDateLast_cancel = LeaveDateLast
    this.LeaveTotal_chack = LeaveTotal
    this.LTypeName_namleave = "ขออนุญาตยกเลิกการ" + LTypeName
  }


  cancel_id = new FormControl('');
  cancel_data = new FormControl('');
  cancel_date_start = new FormControl('');
  cancel_date_stop = new FormControl('');
  cancel_total;
  cancel_status = new FormControl('');
  leave_ID = new FormControl('');
  Leave_ID_cancel_show




  allow_cancel_leave(cencel_total, Leave_ID_cancel) {
    this.cancel_total = cencel_total
    this.Leave_ID_cancel_show = Leave_ID_cancel
    const body = "cancel_id=" + 0
      + "&cancel_data=" + this.cancel_data.value
      + "&cancel_date_start=" + this.cancel_date_start.value
      + "&cancel_date_stop=" + this.cancel_date_stop.value
      + "&cancel_total=" + this.cancel_total
      + "&cancel_status=" + "10"
      + "&leave_ID=" + this.Leave_ID_cancel_show
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}allow_cancel_leave.php`, body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);

        },
        (error: any) => {
          console.log(error);
        }
      );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'เพิ่มประเภทการลาเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      window.location.reload()
    })
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
  onseletday(LeaveDateStart, LeaveDateLast, Leave_characteristics_dateStart, Leave_characteristics_dateLast) {
    console.log(LeaveDateStart, LeaveDateLast);

    this.http.get(`${this.baseUrl}show_holiday.php`).subscribe(
      (data: any) => {
        this.show_holiday = data
        console.log(this.show_holiday);
        var moment = require('moment-business-days');
        var dayleave = moment(LeaveDateLast).startOf('day').businessDiff(moment(LeaveDateStart).startOf('day'), 'day') + 1;
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
          if (this.numberleave == 0 || this.numberleave < 0) {
            Swal.fire({
              icon: 'error',
              title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
              text: '',
              footer: ''
            }).then(() => {

            })
          }
        }


        if (this.date_chack_start.test(Leave_characteristics_dateStart) == true && this.date_chack_Last.test(Leave_characteristics_dateLast) == true) {
          for (var i = 0; i < this.show_holiday.length; i++) {
            if (LeaveDateStart <= this.show_holiday[i].holiday_date && LeaveDateLast >= this.show_holiday[i].holiday_date) {
              this.numberleave = dayleave -= 1
            }
            if (LeaveDateStart != this.show_holiday[i].holiday_date) {
              this.numberleave = dayleave - 1
            }
          }
          if (LeaveDateStart = LeaveDateLast) {
            this.numberleave = dayleave -= 0.5

          }
          if (this.numberleave == 0 || this.numberleave < 0) {
            Swal.fire({
              icon: 'error',
              title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
              text: '',
              footer: ''
            })
          }
        }

        if (Leave_characteristics_dateStart == "เต็มวัน" && Leave_characteristics_dateLast == "เต็มวัน") {
          for (var i = 0; i < this.show_holiday.length; i++) {
            if (LeaveDateStart <= this.show_holiday[i].holiday_date && LeaveDateLast >= this.show_holiday[i].holiday_date) {
              this.numberleave = dayleave -= 1
            }
            if (LeaveDateStart != this.show_holiday[i].holiday_date) {
              this.numberleave = dayleave
            }
          }
          if (this.numberleave == 0 || this.numberleave < 0) {
            Swal.fire({
              icon: 'error',
              title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
              text: '',
              footer: ''
            })
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
        console.log(error);

      }
    )

  }

  numberleave_cancal: any;
  onseletday_cancal(cancel_date_start, cancel_date_stop) {
    console.log(cancel_date_start, cancel_date_stop);
    this.http.get(`${this.baseUrl}show_holiday.php`).subscribe(
      (data: any) => {
        this.show_holiday = data
        console.log(this.show_holiday);
        var moment = require('moment-business-days');
        var dayleave = moment(cancel_date_stop).startOf('day').businessDiff(moment(cancel_date_start).startOf('day'), 'day') + 1;
        // if (this.date_chack_start.test(Leave_characteristics_dateStart) == true && Leave_characteristics_dateLast == "เต็มวัน"
        //   || Leave_characteristics_dateStart == "เต็มวัน" && this.date_chack_Last.test(Leave_characteristics_dateLast) == true) {
        for (var i = 0; i < this.show_holiday.length; i++) {
          if (cancel_date_start <= this.show_holiday[i].holiday_date && cancel_date_stop >= this.show_holiday[i].holiday_date) {
            this.numberleave_cancal = dayleave -= 1
          }
          if (cancel_date_start != this.show_holiday[i].holiday_date) {
            this.numberleave_cancal = dayleave
          }
        }
        if (this.numberleave_cancal == 0 || this.numberleave_cancal < 0) {
          Swal.fire({
            icon: 'error',
            title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
            text: '',
            footer: ''
          }).then(() => {

          })
        }
        // }

      },
      (error: any) => {
        console.log(error);

      }
    )
  }

  day = new Date().getDate()
  month = new Date().getMonth()
  year = new Date().getFullYear() + 543
  public thmonth = new Array(
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม'
  );
  printDocument(Leave_ID, Name_Leave, To_Person, Emp_ID, Prefix, EmpName, EmpLastName, PositionName, DeptName,
    SectorName, LTypeName, LeaveData, ContactInformation, employee, LeaveDateStart_month, LeaveDateLast_month, LeaveTotal, LeaveStatus_Name, LeaveStatus_Document) {
    this.Leave_ID_show = Leave_ID
    this.Name_Leave_show = Name_Leave
    this.To_Person_show = To_Person
    this.Emp_ID_show = Emp_ID
    this.Prefix_show = Prefix
    this.EmpName_show = EmpName
    this.EmpLastName_show = EmpLastName
    this.PositionName_show = PositionName
    this.DeptName_show = DeptName
    this.SectorName_show = SectorName
    this.LTypeName_show = LTypeName
    console.log(LTypeName);

    this.LeaveData_show = LeaveData
    this.ContactInformation_show = ContactInformation
    this.employee_show = employee
    console.log(this.employee_show);

    this.LeaveDateStart_show = LeaveDateStart_month
    this.LeaveDateLast_show = LeaveDateLast_month
    this.LeaveTotal_show = LeaveTotal
    this.LeaveStatus_Name_show = LeaveStatus_Name
    this.LeaveStatus_Document_show = LeaveStatus_Document
    if (this.employee_show.length > 0) {
      pdfMake.fonts = {
        Roboto: {
          normal: "Roboto-Regular.ttf",
          bold: "Roboto-Medium.ttf",
          italics: "Roboto-Italic.ttf",
          bolditalics: "Roboto-MediumItalic.ttf"
        },
        THSarabunNew: {
          normal: "THSarabunNew.ttf",
          bold: "THSarabunNew Bold.ttf",
          italics: "THSarabunNew Italic.ttf",
          bolditalics: "THSarabunNew BoldItalic.ttf"
        }
      };
      var docDefinition = {
        content: [
          { text: 'แบบใบลาพักผ่อน', fontSize: 16, alignment: "center", bold: true },
          { text: 'มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน', alignment: "right", fontSize: 16 },
          { text: `วันที่ ${this.day} เดือน ${this.thmonth[this.month]} พ.ศ ${this.year}`, alignment: "right", fontSize: 16 },
          { text: "เรื่อง ขอลาพักผ่อน", fontSize: 16 },
          { text: "เรียน ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ", fontSize: 16 },
          {
            text: `ข้าพเจ้า.............${this.Prefix_show}  ${this.EmpName_show}   ${this.EmpLastName_show}......................ตำแหน่ง ..................${this.PositionName_show}..............................`,
            fontSize: 16, margin: [50, 0, 0, 0]
          },
          { text: `สังกัด แผนก  .............................................${this.DeptName_show}...........................................................................................`, fontSize: 16 },
          { text: "มีวันลาพักผ่อนสะสม.................วันทำการ  มีสิทธิลาพักผ่อนประจำปีนี้อีก  10  วันทำการ  รวมเป็น...................วันทำการ", fontSize: 16 },
          { text: `ขอลาพักผ่อนตั้งแต่วันที่..................${this.LeaveDateStart_show}......................ถึงวันที่..............${this.LeaveDateLast_show}..............................................`, fontSize: 16 },
          { text: `มีกำหนด..........${this.LeaveTotal_show}........วัน   ในระหว่างลาจะติดต่อข้าพเจ้าได้ที่................${this.ContactInformation_show}...............................................................`, fontSize: 16 },
          {
            columns: [
              { text: "สถิติการลาในปีงบประมาณนี้", fontSize: 16, margin: [50, 0, 0, 0] },
              {
                text: ''
              },
              { text: "ขอแสดงความนับถือ", fontSize: 16 },
            ]
          },
          {

            columns: [
              {
                style: 'table',
                table: {
                  widths: [70, 70, 70],
                  body: [
                    [{ text: 'ลามาแล้ว\n(วันทำการ)', alignment: 'center', fontSize: 16 }, { text: 'ลาครั้งนี้\n(วันทำการ)', alignment: 'center', fontSize: 16 },
                    { text: 'รวมเป็น\n(วันทำการ)', alignment: 'center', fontSize: 16 }
                    ],
                    [{ text: ' ', alignment: 'center', fontSize: 16 }, { text: ' ', alignment: 'center', fontSize: 16 },
                    { text: ' ', alignment: 'center', fontSize: 16 }
                    ]
                  ]
                }
              },
              {
                text: '\nลงชื่อ..............................................\n(.......................................................)\n'
                  + 'ความเห็นผู้บังคับบัญชา' + '\n.......................................................', alignment: 'center', fontSize: 16, margin: [0, 0, 0, 0]

              },

            ],
          },
          {
            alignment: 'justify',
            columns: [
              {
                text: "(ลงชื่อ).........................................(ผู้ตรวจสอบ)\n(........................................................)\nตำแหน่ง..........................................."
                  + `\nหมายเหตุ ในขณะที่ข้าพเจ้าลาพักผ่อนได้มอบหมายให้\n.............${this.employee_show}...............`
                  + "\nเป็นผู้รับผิดชอบงานแทน"
                  + "\n\n.........................................\n(.......................................................)"
                  + "\nผู้มอบหมายงาน"
                  + "\n\n.........................................\n(.......................................................)"
                  + "\nผู้รับผิดชอบงานแทน", alignment: 'center', fontSize: 16, margin: [0, 0, 0, 0]
              },

              {
                text: 'ลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............'



                  + '\n\nลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............'
                  + '\nคำสั่ง          \n(  ) อนุญาต        (  ) ไม่อนุญาต'


                  + '\n\nลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............', alignment: 'left', fontSize: 16, margin: [52, 0, 0, 0]

              }
            ]
          },

        ],
        defaultStyle: {
          font: "THSarabunNew"
        }
      };
      pdfMake.createPdf(docDefinition).open()
    }

    if (this.employee_show = " " && this.LTypeName_show == "ลาพักผ่อน") {
      pdfMake.fonts = {

        Roboto: {
          normal: "Roboto-Regular.ttf",
          bold: "Roboto-Medium.ttf",
          italics: "Roboto-Italic.ttf",
          bolditalics: "Roboto-MediumItalic.ttf"
        },
        THSarabunNew: {
          normal: "THSarabunNew.ttf",
          bold: "THSarabunNew Bold.ttf",
          italics: "THSarabunNew Italic.ttf",
          bolditalics: "THSarabunNew BoldItalic.ttf"
        }

      };

      var docDefinition = {
        content: [
          { text: 'แบบใบลาพักผ่อน', fontSize: 16, alignment: "center", bold: true },
          { text: 'มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน', alignment: "right", fontSize: 16 },
          { text: `วันที่ ${this.day} เดือน ${this.thmonth[this.month]} พ.ศ ${this.year}`, alignment: "right", fontSize: 16 },
          { text: "เรื่อง ขอลาพักผ่อน", fontSize: 16 },
          { text: "เรียน ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ", fontSize: 16 },
          {
            text: `ข้าพเจ้า.............${this.Prefix_show}  ${this.EmpName_show}   ${this.EmpLastName_show}......................ตำแหน่ง ..................${this.PositionName_show}..............................`,
            fontSize: 16, margin: [50, 0, 0, 0]
          },
          { text: `สังกัด แผนก  .............................................${this.DeptName_show}...........................................................................................`, fontSize: 16 },
          { text: "มีวันลาพักผ่อนสะสม.................วันทำการ  มีสิทธิลาพักผ่อนประจำปีนี้อีก  10  วันทำการ  รวมเป็น...................วันทำการ", fontSize: 16 },
          { text: `ขอลาพักผ่อนตั้งแต่วันที่..................${this.LeaveDateStart_show}......................ถึงวันที่..............${this.LeaveDateLast_show}..............................................`, fontSize: 16 },
          { text: `มีกำหนด..........${this.LeaveTotal_show}........วัน   ในระหว่างลาจะติดต่อข้าพเจ้าได้ที่................${this.ContactInformation_show}...............................................................`, fontSize: 16 },
          {
            columns: [
              { text: "สถิติการลาในปีงบประมาณนี้", fontSize: 16, margin: [50, 0, 0, 0] },
              {
                text: ''
              },
              { text: "ขอแสดงความนับถือ", fontSize: 16 },
            ]
          },
          {

            columns: [
              {
                style: 'table',
                table: {
                  widths: [70, 70, 70],
                  body: [
                    [{ text: 'ลามาแล้ว\n(วันทำการ)', alignment: 'center', fontSize: 16 }, { text: 'ลาครั้งนี้\n(วันทำการ)', alignment: 'center', fontSize: 16 },
                    { text: 'รวมเป็น\n(วันทำการ)', alignment: 'center', fontSize: 16 }
                    ],
                    [{ text: '', alignment: 'center', fontSize: 16 }, { text: '', alignment: 'center', fontSize: 16 },
                    { text: '', alignment: 'center', fontSize: 16 }
                    ]
                  ]
                }
              },
              {
                text: '\nลงชื่อ..............................................\n(.......................................................)\n'
                  + 'ความเห็นผู้บังคับบัญชา' + '\n.......................................................', alignment: 'center', fontSize: 16, margin: [0, 0, 0, 0]

              },

            ],
          },
          {
            alignment: 'justify',
            columns: [
              {
                text: "(ลงชื่อ).........................................(ผู้ตรวจสอบ)\n(........................................................)\nตำแหน่ง...........................................", alignment: 'center', fontSize: 16, margin: [0, 0, 0, 0]
              },

              {
                text: 'ลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............'



                  + '\n\nลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............'
                  + '\nคำสั่ง          \n(  ) อนุญาต        (  ) ไม่อนุญาต'


                  + '\n\nลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............', alignment: 'left', fontSize: 16, margin: [52, 0, 0, 0]

              }
            ]
          },

        ],
        defaultStyle: {
          font: "THSarabunNew"
        }
      };
      pdfMake.createPdf(docDefinition).open()
    }
    if (this.LTypeName_show == "ลาป่วย") {
      pdfMake.fonts = {

        Roboto: {
          normal: "Roboto-Regular.ttf",
          bold: "Roboto-Medium.ttf",
          italics: "Roboto-Italic.ttf",
          bolditalics: "Roboto-MediumItalic.ttf"
        },
        THSarabunNew: {
          normal: "THSarabunNew.ttf",
          bold: "THSarabunNew Bold.ttf",
          italics: "THSarabunNew Italic.ttf",
          bolditalics: "THSarabunNew BoldItalic.ttf"
        }

      };

      var docDefinition2 = {
        content: [
          {
            text: "แบบใบลาป่วย  ลาคลอดบุตร  ลากิจส่วนตัว", fontSize: 18, bold: true, alignment: "center",
          },
          { text: "เขียนที่.......................................................................", fontSize: 16, margin: [302, 20, 0, 0] },
          { text: `วันที่ ${this.day} เดือน ${this.thmonth[this.month]} พ.ศ ${this.year}`, fontSize: 16, alignment: "right" },
          { text: `เรื่อง ${this.Name_Leave_show}`, fontSize: 16 },
          { text: `เรียน ${this.To_Person_show}`, fontSize: 16 },
          { text: `ข้าพเจ้า...............${this.Prefix_show}  ${this.EmpName_show}   ${this.EmpLastName_show}................ตำแหน่ง...........${this.PositionName_show}...............`, fontSize: 16, margin: [70, 0, 0, 0] },
          { text: `สังกัด แผนก..............${this.DeptName_show}................. ฝ่าย / คณะ / ภาค / ศูนย์ .........${this.SectorName_show}..........`, fontSize: 16 },
          { text: "( / )  " + "ป่วย", fontSize: 16, margin: [70, 0, 0, 0] },
          { text: `ขอลา             ` + `(  )  ` + `กิจส่วนตัว` + `            เนื่องจาก...............${this.LeaveData_show}....................`, fontSize: 16 },
          { text: "(  )  " + "คลอดบุตร", fontSize: 16, margin: [70, 0, 0, 0] },
          { text: `ตั้งแต่วันที่....${this.LeaveDateStart_show}....ถึงวันที่....${this.LeaveDateLast_show}.....มีกำหนด.....${this.LeaveTotal_show}......วัน`, fontSize: 16 },
          { text: "ข้าพเจ้าได้ลา      (  ) ป่วย       (  ) กิจส่วนตัว     (  ) คลอดบุตร    ครั้งสุดท้ายวันที่.................../.................../.....................", fontSize: 16 },
          { text: "ถึงวันที่.............../.............../................มีกำหนด.................วัน  ในระหว่างลาจะติดต่อข้าพเจ้าได้ที่............................................", fontSize: 16 },
          { text: ".................................................................................................................โทรศัพท์.......................................................................", fontSize: 16 },
          {
            columns: [
              { text: "สถิติการลาในปีงบประมาณนี้", fontSize: 16, margin: [50, 0, 0, 0] },
              {
                text: ''
              },
              { text: "ขอแสดงความนับถือ", fontSize: 16 },
            ]
          },
          {

            columns: [
              {
                style: 'table',
                table: {
                  widths: [45, 45, 45, 45],
                  body: [
                    [{ text: 'ประเภท\n', alignment: 'center', fontSize: 16 }, { text: 'ลามาแล้ว\n', alignment: 'center', fontSize: 16 }, { text: 'ลาครั้งนี้\n', alignment: 'center', fontSize: 16 },
                    { text: 'รวมเป็น\n', alignment: 'center', fontSize: 16 }
                    ],
                    [{ text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 },
                    { text: ' ', alignment: 'center', fontSize: 15 }
                    ],
                    [{ text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 },
                    { text: ' ', alignment: 'center', fontSize: 15 }
                    ],
                    [{ text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 },
                    { text: ' ', alignment: 'center', fontSize: 15 }
                    ]
                  ]
                }
              },
              {
                text: 'ลงชื่อ..............................................\n(.......................................................)\n'
                  + 'ความเห็นผู้บังคับบัญชา' + '\n.......................................................', alignment: 'center', fontSize: 16, margin: [0, 0, 0, 0]

              },

            ],
          },
          {
            alignment: 'justify',
            columns: [
              {
                text: "\n(ลงชื่อ).........................................(ผู้ตรวจสอบ)\n(........................................................)\nตำแหน่ง..........................................."
                , alignment: 'center', fontSize: 16, margin: [0, 0, 0, 0]
              },

              {
                text: 'ลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............'



                  + '\n\nลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............'
                  + '\nคำสั่ง          \n(  ) อนุญาต        (  ) ไม่อนุญาต\n'


                  + 'ลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............', alignment: 'left', fontSize: 16, margin: [52, 0, 0, 0]

              }
            ]
          },
        ],

        defaultStyle: {
          font: "THSarabunNew",
        },
      };
      pdfMake.createPdf(docDefinition2).open()
    }
    if (this.LTypeName_show == "ลาคลอด") {
      pdfMake.fonts = {

        Roboto: {
          normal: "Roboto-Regular.ttf",
          bold: "Roboto-Medium.ttf",
          italics: "Roboto-Italic.ttf",
          bolditalics: "Roboto-MediumItalic.ttf"
        },
        THSarabunNew: {
          normal: "THSarabunNew.ttf",
          bold: "THSarabunNew Bold.ttf",
          italics: "THSarabunNew Italic.ttf",
          bolditalics: "THSarabunNew BoldItalic.ttf"
        }

      };

      var docDefinition2 = {
        content: [
          {
            text: "แบบใบลาป่วย  ลาคลอดบุตร  ลากิจส่วนตัว", fontSize: 18, bold: true, alignment: "center",
          },
          { text: "เขียนที่.......................................................................", fontSize: 16, margin: [302, 20, 0, 0] },
          { text: `วันที่ ${this.day} เดือน ${this.thmonth[this.month]} พ.ศ ${this.year}`, fontSize: 16, alignment: "right" },
          { text: `เรื่อง ${this.Name_Leave_show}`, fontSize: 16 },
          { text: `เรียน ${this.To_Person_show}`, fontSize: 16 },
          { text: `ข้าพเจ้า...............${this.Prefix_show}  ${this.EmpName_show}   ${this.EmpLastName_show}................ตำแหน่ง...........${this.PositionName_show}...............`, fontSize: 16, margin: [70, 0, 0, 0] },
          { text: `สังกัด แผนก..............${this.DeptName_show}................. ฝ่าย / คณะ / ภาค / ศูนย์ .........${this.SectorName_show}..........`, fontSize: 16 },
          { text: "(  )  " + "ป่วย", fontSize: 16, margin: [70, 0, 0, 0] },
          { text: `ขอลา             ` + `(  )  ` + `กิจส่วนตัว` + `            เนื่องจาก...............${this.LeaveData_show}....................`, fontSize: 16 },
          { text: "( / )  " + "คลอดบุตร", fontSize: 16, margin: [70, 0, 0, 0] },
          { text: `ตั้งแต่วันที่....${this.LeaveDateStart_show}....ถึงวันที่....${this.LeaveDateLast_show}.....มีกำหนด.....${this.LeaveTotal_show}......วัน`, fontSize: 16 },
          { text: "ข้าพเจ้าได้ลา      (  ) ป่วย       (  ) กิจส่วนตัว     (  ) คลอดบุตร    ครั้งสุดท้ายวันที่.................../.................../.....................", fontSize: 16 },
          { text: "ถึงวันที่.............../.............../................มีกำหนด.................วัน  ในระหว่างลาจะติดต่อข้าพเจ้าได้ที่............................................", fontSize: 16 },
          { text: ".................................................................................................................โทรศัพท์.......................................................................", fontSize: 16 },
          {
            columns: [
              { text: "สถิติการลาในปีงบประมาณนี้", fontSize: 16, margin: [50, 0, 0, 0] },
              {
                text: ''
              },
              { text: "ขอแสดงความนับถือ", fontSize: 16 },
            ]
          },
          {

            columns: [
              {
                style: 'table',
                table: {
                  widths: [45, 45, 45, 45],
                  body: [
                    [{ text: 'ประเภท\n', alignment: 'center', fontSize: 16 }, { text: 'ลามาแล้ว\n', alignment: 'center', fontSize: 16 }, { text: 'ลาครั้งนี้\n', alignment: 'center', fontSize: 16 },
                    { text: 'รวมเป็น\n', alignment: 'center', fontSize: 16 }
                    ],
                    [{ text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 },
                    { text: ' ', alignment: 'center', fontSize: 15 }
                    ],
                    [{ text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 },
                    { text: ' ', alignment: 'center', fontSize: 15 }
                    ],
                    [{ text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 },
                    { text: ' ', alignment: 'center', fontSize: 15 }
                    ]
                  ]
                }
              },
              {
                text: 'ลงชื่อ..............................................\n(.......................................................)\n'
                  + 'ความเห็นผู้บังคับบัญชา' + '\n.......................................................', alignment: 'center', fontSize: 16, margin: [0, 0, 0, 0]

              },

            ],
          },
          {
            alignment: 'justify',
            columns: [
              {
                text: "\n(ลงชื่อ).........................................(ผู้ตรวจสอบ)\n(........................................................)\nตำแหน่ง..........................................."
                , alignment: 'center', fontSize: 16, margin: [0, 0, 0, 0]
              },

              {
                text: 'ลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............'



                  + '\n\nลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............'
                  + '\nคำสั่ง          \n(  ) อนุญาต        (  ) ไม่อนุญาต\n'


                  + 'ลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............', alignment: 'left', fontSize: 16, margin: [52, 0, 0, 0]

              }
            ]
          },
        ],

        defaultStyle: {
          font: "THSarabunNew",
        },
      };
      pdfMake.createPdf(docDefinition2).open()
    }
    if (this.LTypeName_show == "ลากิจส่วนตัว") {
      pdfMake.fonts = {

        Roboto: {
          normal: "Roboto-Regular.ttf",
          bold: "Roboto-Medium.ttf",
          italics: "Roboto-Italic.ttf",
          bolditalics: "Roboto-MediumItalic.ttf"
        },
        THSarabunNew: {
          normal: "THSarabunNew.ttf",
          bold: "THSarabunNew Bold.ttf",
          italics: "THSarabunNew Italic.ttf",
          bolditalics: "THSarabunNew BoldItalic.ttf"
        }

      };

      var docDefinition2 = {
        content: [
          {
            text: "แบบใบลาป่วย  ลาคลอดบุตร  ลากิจส่วนตัว", fontSize: 18, bold: true, alignment: "center",
          },
          { text: "เขียนที่.......................................................................", fontSize: 16, margin: [302, 20, 0, 0] },
          { text: `วันที่ ${this.day} เดือน ${this.thmonth[this.month]} พ.ศ ${this.year}`, fontSize: 16, alignment: "right" },
          { text: `เรื่อง ${this.Name_Leave_show}`, fontSize: 16 },
          { text: `เรียน ${this.To_Person_show}`, fontSize: 16 },
          { text: `ข้าพเจ้า...............${this.Prefix_show}  ${this.EmpName_show}   ${this.EmpLastName_show}................ตำแหน่ง...........${this.PositionName_show}...............`, fontSize: 16, margin: [70, 0, 0, 0] },
          { text: `สังกัด แผนก..............${this.DeptName_show}................. ฝ่าย / คณะ / ภาค / ศูนย์ .........${this.SectorName_show}..........`, fontSize: 16 },
          { text: "(  )  " + "ป่วย", fontSize: 16, margin: [70, 0, 0, 0] },
          { text: `ขอลา             ` + `( / )  ` + `กิจส่วนตัว` + `            เนื่องจาก...............${this.LeaveData_show}....................`, fontSize: 16 },
          { text: "(  )  " + "คลอดบุตร", fontSize: 16, margin: [70, 0, 0, 0] },
          { text: `ตั้งแต่วันที่....${this.LeaveDateStart_show}....ถึงวันที่....${this.LeaveDateLast_show}.....มีกำหนด.....${this.LeaveTotal_show}......วัน`, fontSize: 16 },
          { text: "ข้าพเจ้าได้ลา      (  ) ป่วย       (  ) กิจส่วนตัว     (  ) คลอดบุตร    ครั้งสุดท้ายวันที่.................../.................../.....................", fontSize: 16 },
          { text: "ถึงวันที่.............../.............../................มีกำหนด.................วัน  ในระหว่างลาจะติดต่อข้าพเจ้าได้ที่............................................", fontSize: 16 },
          { text: ".................................................................................................................โทรศัพท์.......................................................................", fontSize: 16 },
          {
            columns: [
              { text: "สถิติการลาในปีงบประมาณนี้", fontSize: 16, margin: [50, 0, 0, 0] },
              {
                text: ''
              },
              { text: "ขอแสดงความนับถือ", fontSize: 16 },
            ]
          },
          {

            columns: [
              {
                style: 'table',
                table: {
                  widths: [45, 45, 45, 45],
                  body: [
                    [{ text: 'ประเภท\n', alignment: 'center', fontSize: 16 }, { text: 'ลามาแล้ว\n', alignment: 'center', fontSize: 16 }, { text: 'ลาครั้งนี้\n', alignment: 'center', fontSize: 16 },
                    { text: 'รวมเป็น\n', alignment: 'center', fontSize: 16 }
                    ],
                    [{ text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 },
                    { text: ' ', alignment: 'center', fontSize: 15 }
                    ],
                    [{ text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 },
                    { text: ' ', alignment: 'center', fontSize: 15 }
                    ],
                    [{ text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 }, { text: ' ', alignment: 'center', fontSize: 15 },
                    { text: ' ', alignment: 'center', fontSize: 15 }
                    ]
                  ]
                }
              },
              {
                text: 'ลงชื่อ..............................................\n(.......................................................)\n'
                  + 'ความเห็นผู้บังคับบัญชา' + '\n.......................................................', alignment: 'center', fontSize: 16, margin: [0, 0, 0, 0]

              },

            ],
          },
          {
            alignment: 'justify',
            columns: [
              {
                text: "\n(ลงชื่อ).........................................(ผู้ตรวจสอบ)\n(........................................................)\nตำแหน่ง..........................................."
                , alignment: 'center', fontSize: 16, margin: [0, 0, 0, 0]
              },

              {
                text: 'ลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............'



                  + '\n\nลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............'
                  + '\nคำสั่ง          \n(  ) อนุญาต        (  ) ไม่อนุญาต\n'


                  + 'ลงชื่อ..............................................\n(.......................................................)'
                  + '\nตำแหน่ง...........................................\nวันที่.........../......................./.............', alignment: 'left', fontSize: 16, margin: [52, 0, 0, 0]

              }
            ]
          },
        ],

        defaultStyle: {
          font: "THSarabunNew",
        },
      };
      pdfMake.createPdf(docDefinition2).open()
    }


  }






  makePdf2() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.fonts = {
      THSarabunNew: {
        normal: "THSarabunNew.ttf",
        bold: "THSarabunNew Bold.ttf",
        italics: "THSarabunNew Italic.ttf",
        bolditalics: "THSarabunNew BoldItalic.ttf"
      },
      Roboto: {
        normal: "Roboto-Regular.ttf",
        bold: "Roboto-Medium.ttf",
        italics: "Roboto-Italic.ttf",
        bolditalics: "Roboto-MediumItalic.ttf"
      }
    };
    var docDefinition = {
      content: [
        {
          text: "แบบใบลาไปช่วยเหลือภริยาที่คลอดบุตร", fontSize: 18, bold: true, alignment: "center",
        },
        { text: "เขียนที่...........................................................", fontSize: 16, margin: [313, 10, 20, 0] },
        { text: "วันที่..........เดือน...........................พ.ศ...........", fontSize: 16, margin: [313, 0, 20, 0] },
        { text: "เรื่อง  ขอลาไปช่วยเหลือภริยาที่คลอดบุตร", fontSize: 16, margin: [20, 0, 0, 0] },
        { text: "(คำขึ้นต้น).................................................", fontSize: 16, margin: [20, 0, 0, 0] },
        { text: "ข้าพเจ้า..............................................................................ตำแหน่ง..........................................................", fontSize: 16, margin: [70, 0, 20, 0] },
        { text: "ระดับ....................................................สังกัด.................................................................................................................", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "มีความประสงค์ลาไปช่วยเหลือภริยาโดยชอบด้วยกฎหมายชื่อ......................................................................................", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "ซึ่งคลอดบุตรเมื่อวันที่..........เดือน.................พ.ศ.........................จึงขออนุญาตลาไปช่วยเหลือภริยาที่คลอดบุตรตั้งแต่", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "วันที่............เดือน............พ.ศ...................ถึงวันที่..............เดือน................พ.ศ....................มีกำหนด...........วันทำการ", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "ในระหว่างลาจะติดต่อข้าพเจ้าได้ที่.................................................................................................................................", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "..........................................................................................................หมายเลขโทรศัพท์...............................................", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "(ลงชื่อ........................................................", fontSize: 16, margin: [200, 20, 0, 0] },
        { text: "(.........................................................)", fontSize: 16, margin: [220, 0, 0, 0] },
        { text: "ความเห็นของผู้บังคับบัญชา", fontSize: 16, bold: true, margin: [20, 0, 0, 0] },
        { text: "...................................................................................................................................................................", fontSize: 16, margin: [70, 0, 20, 0] },
        { text: "......................................................................................................................................................................................", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "ลงชื่อ.............................................................", fontSize: 16, margin: [150, 20, 0, 0] },
        { text: "(.............................................................)", fontSize: 16, margin: [170, 0, 0, 0] },
        { text: " ตำแหน่ง.....................................................", fontSize: 16, margin: [150, 0, 0, 0] },
        { text: " วันที่............../..................../................ ", fontSize: 16, margin: [150, 0, 0, 0] },
        { text: "คำสั่ง", fontSize: 16, margin: [20, 0, 0, 0] },
        { text: " อนุญาต (  )          ไม่อนุญาต  (  )  ", fontSize: 16, margin: [200, 20, 0, 0] },
        { text: "...................................................................................................................................................................", fontSize: 16, margin: [70, 0, 20, 0] },
        { text: "......................................................................................................................................................................................", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "ลงชื่อ.............................................................", fontSize: 16, margin: [150, 20, 0, 0] },
        { text: "(.............................................................)", fontSize: 16, margin: [170, 0, 0, 0] },
        { text: " ตำแหน่ง.....................................................", fontSize: 16, margin: [150, 0, 0, 0] },
        { text: " วันที่............../..................../................ ", fontSize: 16, margin: [150, 0, 0, 0] },

      ],

      defaultStyle: {
        font: "THSarabunNew",
      },
    };
    pdfMake.createPdf(docDefinition).open();
  }
  makePdf3() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.fonts = {
      THSarabunNew: {
        normal: "THSarabunNew.ttf",
        bold: "THSarabunNew Bold.ttf",
        italics: "THSarabunNew Italic.ttf",
        bolditalics: "THSarabunNew BoldItalic.ttf"
      },
      Roboto: {
        normal: "Roboto-Regular.ttf",
        bold: "Roboto-Medium.ttf",
        italics: "Roboto-Italic.ttf",
        bolditalics: "Roboto-MediumItalic.ttf"
      }
    };
    var docDefinition = {
      content: [
        {
          text: "แบบใบขอยกเลิกวันลา", fontSize: 18, bold: true, alignment: "center",
        },
        { text: "เขียนที่...........................................................", fontSize: 16, margin: [313, 10, 20, 0] },
        { text: "วันที่..........เดือน...........................พ.ศ...........", fontSize: 16, margin: [313, 0, 20, 0] },
        { text: "เรื่อง.................................................", fontSize: 16, margin: [20, 0, 0, 0] },
        { text: "เรียน.................................................", fontSize: 16, margin: [20, 0, 0, 0] },
        { text: "ตามที่ข้าพเจ้า.......................................................................ตำแหน่ง.........................................................", fontSize: 16, margin: [70, 0, 20, 0] },
        { text: "สังกัด......................................................................................ได้รับอนุญาตให้ลา..........................................................", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "ตั้งแต่วันที่.........................................................ถึงวันที่...................................................................รวม...........วัน  นั้น", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "ในระหว่างลาจะติดต่อข้าพเจ้าได้ที่.................................................................................................................................", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "เนื่องจาก.....................................................................................................................................................", fontSize: 16, margin: [70, 10, 20, 0] },
        { text: "จึงของยกเลิกวันลา...................................................................................................จำนวน....................................วัน", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "ตั้งแต่วันที่...........................................................ถึงวันที่...................................................................", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "ขอแสดงความนับถือ", fontSize: 16, margin: [340, 10, 0, 0] },
        { text: "(ลงชื่อ)............................................................", fontSize: 16, margin: [290, 10, 0, 0] },
        { text: "(..............................................................)", fontSize: 16, margin: [315, 0, 0, 0] },
        { text: "ความเห็นของผู้บังคับบัญชา", fontSize: 16, bold: true, margin: [20, 10, 0, 0] },
        { text: "...................................................................................................................................................................", fontSize: 16, margin: [70, 0, 20, 0] },
        { text: "......................................................................................................................................................................................", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "ลงชื่อ.............................................................", fontSize: 16, margin: [290, 20, 0, 0] },
        { text: " (ตำแหน่ง)......................................................", fontSize: 16, margin: [290, 0, 0, 0] },
        { text: " วันที่............../..................../................ ", fontSize: 16, margin: [290, 0, 0, 0] },
        { text: "คำสั่ง", fontSize: 16, margin: [20, 0, 0, 0] },
        { text: " อนุญาต (  )          ไม่อนุญาต  (  )  ", fontSize: 16, margin: [50, 10, 0, 0] },
        { text: "...................................................................................................................................................................", fontSize: 16, margin: [70, 0, 20, 0] },
        { text: "ลงชื่อ..............................................................", fontSize: 16, margin: [290, 20, 0, 0] },
        { text: " (ตำแหน่ง)......................................................", fontSize: 16, margin: [290, 0, 0, 0] },
        { text: " วันที่............../..................../................ ", fontSize: 16, margin: [290, 0, 0, 0] },

      ],

      defaultStyle: {
        font: "THSarabunNew",
      },
    };
    pdfMake.createPdf(docDefinition).open();
  }
  makePdf4() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.fonts = {
      THSarabunNew: {
        normal: "THSarabunNew.ttf",
        bold: "THSarabunNew Bold.ttf",
        italics: "THSarabunNew Italic.ttf",
        bolditalics: "THSarabunNew BoldItalic.ttf"
      },
      Roboto: {
        normal: "Roboto-Regular.ttf",
        bold: "Roboto-Medium.ttf",
        italics: "Roboto-Italic.ttf",
        bolditalics: "Roboto-MediumItalic.ttf"
      }
    };
    var docDefinition = {
      content: [
        {
          text: "แบบใบลาอุปสมบท", fontSize: 18, bold: true, alignment: "center",
        },
        { text: "เขียนที่.......................................................................", fontSize: 16, margin: [302, 20, 0, 0] },
        { text: "วันที่...............เดือน...............................พ.ศ..............", fontSize: 16, alignment: "right" },
        { text: "เรื่อง ขอลาอุปสมบท", fontSize: 16 },
        { text: "เรียน ..............................................................", fontSize: 16 },
        { text: "ข้าพเจ้า..............................................................................ตำแหน่ง..................................................................", fontSize: 16, margin: [70, 10, 0, 0] },
        { text: "สังกัด แผนก.................................................... ฝ่าย / คณะ / ภาค / ศูนย์ .................................................................................", fontSize: 16 },
        { text: "เกิดวันที่............................................................บรรจุเข้ารรับราชการเมื่อวันที่..............................................................................", fontSize: 16 },
        { text: "ข้าพเจ้า             (  )  " + "ยังไม่เคย" + "           (  )  " + "เคย" + "                  อุปสมบท   บัดนี้มีศรัทธาจะอุปสมบทในพระพุธศาสนา  ณ", fontSize: 16, margin: [0, 0, 0, 0] },
        { text: "วัด............................................................................ตั้งอยู่ ณ........................................................................................................", fontSize: 16 },
        { text: "......................................................................................................................................................................................................", fontSize: 16 },
        { text: "กำหนดวันที่.............................................................และ จำพรรษาอยู่ ณ วัด...............................................................................", fontSize: 16 },
        { text: "ตั้งอยู่ ณ.........................................................................................................................................................................................", fontSize: 16 },
        { text: "จึงขออนุญาตลาอุปสมบทมี กำหนด.......................วัน ตั้งแต่วันที่.......................................ถึงวันที่..............................................", fontSize: 16 },
        { text: "ขอแสดงความนับถือ", fontSize: 16, margin: [340, 20, 0, 0] },
        { text: "(ลงชื่อ)............................................................", fontSize: 16, margin: [290, 10, 0, 0] },
        { text: "(..............................................................)", fontSize: 16, margin: [315, 0, 0, 0] },
        { text: "ความเห็นของผู้บังคับบัญชา", fontSize: 16, bold: true, margin: [20, 10, 0, 0] },
        { text: "...........................................................................................................................................................................", fontSize: 16, margin: [70, 0, 0, 0] },
        { text: "......................................................................................................................................................................................................", fontSize: 16, margin: [0, 0, 0, 0] },
        { text: "(ลงชื่อ).............................................................", fontSize: 16, margin: [290, 10, 0, 0] },
        { text: "(......................................................................)", fontSize: 16, margin: [290, 0, 0, 0] },
        { text: " ตำแหน่ง..........................................................", fontSize: 16, margin: [290, 0, 0, 0] },
        { text: " วันที่............../..................../................ ", fontSize: 16, margin: [290, 0, 0, 0] },
        { text: "คำสั่ง", fontSize: 16, margin: [20, 0, 0, 0] },
        { text: " อนุญาต (  )          ไม่อนุญาต  (  )  ", fontSize: 16, margin: [50, 10, 0, 0] },
        { text: ".....................................................................................................................................................................................................", fontSize: 16, margin: [0, 10, 0, 0] },
        { text: "(ลงชื่อ)..............................................................", fontSize: 16, margin: [290, 10, 0, 0] },
        { text: "(........................................................................)", fontSize: 16, margin: [290, 0, 0, 0] },
        { text: " ตำแหน่ง............................................................", fontSize: 16, margin: [290, 0, 0, 0] },
        { text: " วันที่............../..................../................ ", fontSize: 16, margin: [290, 0, 0, 0] },

      ],

      defaultStyle: {
        font: "THSarabunNew",
      },
    };
    pdfMake.createPdf(docDefinition).open();
  }


  makePdf7() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.fonts = {
      THSarabunNew: {
        normal: "THSarabunNew.ttf",
        bold: "THSarabunNew Bold.ttf",
        italics: "THSarabunNew Italic.ttf",
        bolditalics: "THSarabunNew BoldItalic.ttf"
      },
      Roboto: {
        normal: "Roboto-Regular.ttf",
        bold: "Roboto-Medium.ttf",
        italics: "Roboto-Italic.ttf",
        bolditalics: "Roboto-MediumItalic.ttf"
      }
    };
    var docDefinition = {
      content: [
        { text: "รายงานการลงเวลาปฏิบัติราชการ", fontSize: 18, bold: true, alignment: "center" },
        { text: "ข้าราชการ พนักงานในสถาบันอุดมศึกษา เจ้าหน้าที่ สังกัดสำนักวิทยบริการและเทคโนโลยีสารสนเทศ", fontSize: 18, bold: true, alignment: "center", },
        { text: "วันอังคาร ที่ 24 ธันวาคม 2562", fontSize: 18, bold: true, alignment: "center" },
        {
          style: 'tableExample',
          margin: [20, 20, 20, 0],
          fontSize: 14,
          table: {
            widths: [100, '*', 200, '*'],
            body:
              [
                ['ลำดับ', 'เลขที่ตำแหน่ง', '    ชื่อ-สกุล', 'หมายเหตุ'],
                ['1',
                  { text: '', italics: true, color: 'black' },
                  { text: '', italics: true, color: 'black' },
                  { text: '', italics: true, color: 'black' }],
                ['2',
                  { text: '', italics: true, color: 'black' },
                  { text: '', italics: true, color: 'black' },
                  { text: '', italics: true, color: 'black' }]
              ]

          }
        },
        { text: "บุคลากรทั้งหมด", fontSize: 16, margin: [20, 30, 20, 0] },
        { text: " ตำแหน่งว่าง(พนักงานฯ)                                                        " + "    " + "        คน ", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: " ตำแหน่งว่าง(ลูกจ้างเงินรายได้)                                                " + "    " + "         คน ", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: "ข้าราชการทั้งหมด                                                 " + "", fontSize: 16, margin: [80, 0, 20, 0] },
        { text: "พนักงานในสถาบันอุดมศึกษา                                         " + "", fontSize: 16, margin: [80, 0, 20, 0] },
        { text: "ลูกจ้างเงินรายได้                                                  " + "", fontSize: 16, margin: [80, 0, 20, 0] },
        { text: "รวมทั้งสิ้น                                                       " + "", fontSize: 16, margin: [130, 0, 0, 0] },
        { text: "มาปฏิบัติราชการ                                                  " + "", fontSize: 16, margin: [20, 0, 20, 0] },
        { text: " ไปราชการ                                                     " + "", fontSize: 16, margin: [80, 0, 20, 0] },
        { text: "มาสาย                                                         " + "", fontSize: 16, margin: [80, 0, 20, 0] },
        { text: "การลา                                                         " + "", fontSize: 16, margin: [80, 0, 20, 0] },
        { text: "ลาพักผ่อน                                                      " + "", fontSize: 16, margin: [130, 20, 20, 0] },
        { text: "ลาป่วย                                                         " + "", fontSize: 16, margin: [130, 0, 20, 0] },
        { text: "ลากิจ                                                          " + "", fontSize: 16, margin: [130, 0, 20, 0] },
        { text: "ลาคลอด                                                       " + "", fontSize: 16, margin: [130, 0, 20, 0] },
        { text: "ขาด                                                          " + "", fontSize: 16, margin: [130, 0, 20, 0] },
        { text: "ไม่มาปฏิบัติราชการ                                               " + "", fontSize: 16, margin: [20, 0, 20, 0] },
        {
          margin: [20, 20, 20, 0],
          columns: [
            {
              text: " (ผู้ช่วยศาสตราจารย์พรภัสสร    อ่อนเกิด) " +
                " รองผู้อำนวยการฝ่ายบริหารงานทั่วไป " +
                "                                  ผู้ตรวจสอบ "
              , fontSize: 16, margin: [0, 60, 0, 0]
            },
            {
              text: " (ผู้ช่วยศาสตราจารย์อภิชาติ    ติรประเสริฐสิน) " +
                " ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ " +
                "                                        ผู้อนุญาต "
              , fontSize: 16, margin: [20, 60, 20, 0]
            },
          ]
        },
      ],

      defaultStyle: {
        font: "THSarabunNew",
      },
    };
    pdfMake.createPdf(docDefinition).open();
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
    console.log(LeaveTotal);
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
}
