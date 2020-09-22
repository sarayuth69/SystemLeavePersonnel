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
  public numberleave = 0;
  public positionEmp;
  public dep;
  public status;

  public countUser;
  public SectorName;
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
  employee = new FormControl('');
  LeaveStatus_Document = new FormControl('');


  DeptName = new FormControl('');
  Sector = new FormControl('');
  PositionName = new FormControl('');

  LType_ID = new FormControl('');


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

  Local_Emp_ID = localStorage.getItem('Emp_ID');
  Local_EmpName = localStorage.getItem('EmpName');
  Local_EmpLastName = localStorage.getItem('EmpLastName');
  Local_PositionName = localStorage.getItem('PositionName');
  Local_DeptName = localStorage.getItem('DeptName');
  Local_Sector = localStorage.getItem('SectorName');
  marked = false;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
    // private baseUrl : baseUrl




  ) { }

  ngOnInit() {
    const body1 = 'Dept_ID=' + localStorage.getItem("Dept_ID")
      + '&Role=' + localStorage.getItem("Role")
    console.log(body1);
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
          console.log(error);
        }

      )

    this.http.get(`${this.baseUrl}getEmployee.php`).subscribe(
      (data: any) => {
        this.Employee = data;
        if (this.Employee.leagth > 0) {
          this.table_Emp = true;
          this.table_search = false;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.http.get(`${this.baseUrl}countUser.php`).subscribe(
      (data: any) => {
        this.countUser = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.http.get(`${this.baseUrl}getStatus.php`).subscribe(
      (data: any) => {
        this.status = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.http.get(`${this.baseUrl}getDept.php`).subscribe(
      (data: any) => {
        this.dep = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.http.get(`${this.baseUrl}Search.php`).subscribe(
      (data: any) => {
        this.seach = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.http.get(`${this.baseUrl}getPosition.php`).subscribe(
      (data: any) => {
        this.positionEmp = data;
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
        },
        (error: any) => {
          console.log(error);
        }

      )





    // ฟังชันนี้อาจจะไม่ได้ใช้ ไห้ทำเป็น localStorage แบบ ประเภทการลา
    // this.http.get('http://localhost/Leavewebservice/API/getDept1001.php').subscribe(
    //   (data: any) => {
    //     this.Empployee1 = data;
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );


    if (localStorage.getItem('Role') === "6") {
      this.table1 = false;
      this.table2 = false;
      this.table3 = false;
      this.table4 = false;
      this.table5 = false;
      this.table6 = true;
    }
    if (localStorage.getItem('Role') === "5") {
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
  updateEmp(
    Emp_ID, EmpName, EmpLastName, Sex, Birthday, ID_card, Age, Tel, Address, Work_day, Duration_work, Empstatus_ID, Position_ID
    , Dept_ID
  ) {
    this.Emp_ID = new FormControl(Emp_ID);
    console.log(this.Emp_ID);

    // this.Prefix = new FormControl(Prefix);
    this.EmpName = new FormControl(EmpName);
    this.EmpLastName = new FormControl(EmpLastName);
    this.Sex = new FormControl(Sex);
    this.Birthday = new FormControl(Birthday);
    this.ID_card = new FormControl(ID_card);
    console.log(this.ID_card);

    this.Age = new FormControl(Age);
    this.Address = new FormControl(Address);
    this.Tel = new FormControl(Tel);
    this.Work_day = new FormControl(Work_day);
    this.Duration_work = new FormControl(Duration_work);
    this.Empstatus_ID = new FormControl(Empstatus_ID);
    this.Position_ID = new FormControl(Position_ID);
    this.Dept_ID = new FormControl(Dept_ID);
  }
  public updateEmployee() {
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
      + '&Duration_work=' + this.Duration_work.value
      + '&Empstatus_ID=' + this.Empstatus_ID.value
      + '&Position_ID=' + this.Position_ID.value
      + '&Dept_ID=' + this.Dept_ID.value;
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
          console.log(error);
        }
      );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
      .then(() => {
        window.location.reload();
        //   this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
        //     (data: any) => {
        //       this.Employee = data;
        //     },
        //     (error: any) => {
        //       console.log(error);
        //     }
        //   );
      })

  }


  deleteEmp(id, name) {
    this.Emp_ID_show = id;
    this.EmpName_show = name;

    Swal.fire({
      title: 'คุณจะลบ' + ' ' + this.EmpName_show + ' ' + 'หรือไม่',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00FF33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
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
          //     console.log(error);
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
              console.log(error);
            }
          );
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
          this.seach = data;

        },
        (error: any) => {
          console.log(error);
        }
      );
    }

  }
  LeaveEmp(
    Emp_ID, EmpName, EmpLastName, PositionName, DeptName, SectorName, Role,Empstatus_ID
  ) {

        this.Emp_ID = new FormControl(Emp_ID);
    this.EmpName = new FormControl(EmpName);
    this.EmpLastName = new FormControl(EmpLastName);
    this.PositionName = new FormControl(PositionName);
    this.DeptName = new FormControl(DeptName);
    this.SectorName = new FormControl(SectorName);
    this.Role = new FormControl(Role);
    this.Empstatus_ID = new FormControl(Empstatus_ID);
     
      const body = 'Empstatus_ID=' + this.Empstatus_ID.value
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
          console.log(error);
        }
      )
    }
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }
  AddLeave(LeaveTotal) {
    console.log(this.Role.value);
        this.LeaveTotal = new FormControl(LeaveTotal);
    if (LeaveTotal === '0') {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันลา',
      })
    }
      else if (this.Role.value === "1") {
      const body = 'Leave_ID=' + this.Leave_ID.value
        + '&Emp_ID=' + this.Emp_ID.value
        + '&Name_Leave=' + this.Name_Leave.value
        + '&To_Person=' + this.To_Person.value
        + '&LeaveDateStart=' + this.LeaveDateStart.value
        + '&LeaveDateLast=' + this.LeaveDateLast.value
        + '&LeaveData=' + this.LeaveData.value
        + '&ContactInformation=' + this.ContactInformation.value
        + '&employee=' + this.employee.value
        + '&LeaveTotal=' + this.LeaveTotal.value
        + '&LeaveStatus_ID=' + "1"
        + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
        + '&UploadFile=' + this.UploadFile.value
        + '&Response_Time=' + this.Response_Time.value
        + '&Person_Code_Allow=' + this.Person_Code_Allow.value
        + '&LType_ID=' + this.LType_ID.value

      // + '&file_names=' +  uploadData.append('myFile', this.selectedFile, this.selectedFile.name)

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

      })
        // ฟังชั้น จำนวนครั้งที่ลา 
        // .then(() => {
        //   const body = 'LType_ID=' + this.LType_ID.value
        //     + '&LeaveTotal=' + this.LeaveTotal.value
        //   console.log(body);
        //   const headers = new HttpHeaders({
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   });
        //   this.http
        //     .post(`${this.baseUrl}UpdateLtypeUser.php`, body, {
        //       headers: headers
        //     })
        //     .subscribe(
        //       (data: any) => {
        //         this.addLeave = data;
        //       },
        //       (error: any) => {
        //         console.log(error);
        //       }
        //     );
        // })
        .then(() => {
          // const body = 'LType_ID=' + this.LType_ID.value
          // console.log(body);
          // const headers = new HttpHeaders({
          //   'Content-Type': 'application/x-www-form-urlencoded'
          // });
          // this.http
          //   .post(`${this.baseUrl}LOrdinal.php`, body, {
          //     headers: headers
          //   }).subscribe(
          //     (data: any) => {
          //       this.leave = data;
          //     },
          //     (error: any) => {
          //       console.log(error);
          //     }
          //   )
        })
        .then(() => {
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
        })
      // .then(() => {
      //   this.onUpload();
      // })
    }
    else if (this.Role.value === "2") {
      const body = 'Leave_ID=' + this.Leave_ID.value
        + '&Emp_ID=' + this.Emp_ID.value
        + '&Name_Leave=' + this.Name_Leave.value
        + '&To_Person=' + this.To_Person.value
        + '&LeaveDateStart=' + this.LeaveDateStart.value
        + '&LeaveDateLast=' + this.LeaveDateLast.value
        + '&LeaveData=' + this.LeaveData.value
        + '&ContactInformation=' + this.ContactInformation.value
        + '&employee=' + this.employee.value
        + '&LeaveTotal=' + this.LeaveTotal.value
        + '&LeaveStatus_ID=' + "2"
        + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
        + '&UploadFile=' + this.UploadFile.value
        + '&Response_Time=' + this.Response_Time.value
        + '&Person_Code_Allow=' + this.Person_Code_Allow.value
        + '&LType_ID=' + this.LType_ID.value

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

      })
        // ฟังชั้น จำนวนครั้งที่ลา 
        // .then(() => {
        //   const body = 'LType_ID=' + this.LType_ID.value
        //     + '&LeaveTotal=' + this.LeaveTotal.value
        //   console.log(body);
        //   const headers = new HttpHeaders({
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   });
        //   this.http
        //     .post(`${this.baseUrl}UpdateLtypeUser.php`, body, {
        //       headers: headers
        //     })
        //     .subscribe(
        //       (data: any) => {
        //         this.addLeave = data;
        //       },
        //       (error: any) => {
        //         console.log(error);
        //       }
        //     );
        // })
        .then(() => {
          // const body = 'LType_ID=' + this.LType_ID.value
          // console.log(body);
          // const headers = new HttpHeaders({
          //   'Content-Type': 'application/x-www-form-urlencoded'
          // });
          // this.http
          //   .post(`${this.baseUrl}LOrdinal.php`, body, {
          //     headers: headers
          //   }).subscribe(
          //     (data: any) => {
          //       this.leave = data;
          //     },
          //     (error: any) => {
          //       console.log(error);
          //     }
          //   )
        })
        .then(() => {
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
        })
      // .then(() => {
      //   this.onUpload();
      // })
    }
    else if (this.Role.value === "3") {
      const body = 'Leave_ID=' + this.Leave_ID.value
        + '&Emp_ID=' + this.Emp_ID.value
        + '&Name_Leave=' + this.Name_Leave.value
        + '&To_Person=' + this.To_Person.value
        + '&LeaveDateStart=' + this.LeaveDateStart.value
        + '&LeaveDateLast=' + this.LeaveDateLast.value
        + '&LeaveData=' + this.LeaveData.value
        + '&ContactInformation=' + this.ContactInformation.value
        + '&employee=' + this.employee.value
        + '&LeaveTotal=' + this.LeaveTotal.value
        + '&LeaveStatus_ID=' + "3"
        + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
        + '&UploadFile=' + this.UploadFile.value
        + '&Response_Time=' + this.Response_Time.value
        + '&Person_Code_Allow=' + this.Person_Code_Allow.value
        + '&LType_ID=' + this.LType_ID.value

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

      })
        // ฟังชั้น จำนวนครั้งที่ลา 
        // .then(() => {
        //   const body = 'LType_ID=' + this.LType_ID.value
        //     + '&LeaveTotal=' + this.LeaveTotal.value
        //   console.log(body);
        //   const headers = new HttpHeaders({
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   });
        //   this.http
        //     .post(`${this.baseUrl}UpdateLtypeUser.php`, body, {
        //       headers: headers
        //     })
        //     .subscribe(
        //       (data: any) => {
        //         this.addLeave = data;
        //       },
        //       (error: any) => {
        //         console.log(error);
        //       }
        //     );
        // })
        .then(() => {
          // const body = 'LType_ID=' + this.LType_ID.value
          // console.log(body);
          // const headers = new HttpHeaders({
          //   'Content-Type': 'application/x-www-form-urlencoded'
          // });
          // this.http
          //   .post(`${this.baseUrl}LOrdinal.php`, body, {
          //     headers: headers
          //   }).subscribe(
          //     (data: any) => {
          //       this.leave = data;
          //     },
          //     (error: any) => {
          //       console.log(error);
          //     }
          //   )
        })
        .then(() => {
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
        })
      // .then(() => {
      //   this.onUpload();
      // })
    }
    else if (this.Role.value === "4") {
      const body = 'Leave_ID=' + this.Leave_ID.value
        + '&Emp_ID=' + this.Emp_ID.value
        + '&Name_Leave=' + this.Name_Leave.value
        + '&To_Person=' + this.To_Person.value
        + '&LeaveDateStart=' + this.LeaveDateStart.value
        + '&LeaveDateLast=' + this.LeaveDateLast.value
        + '&LeaveData=' + this.LeaveData.value
        + '&ContactInformation=' + this.ContactInformation.value
        + '&employee=' + this.employee.value
        + '&LeaveTotal=' + this.LeaveTotal.value
        + '&LeaveStatus_ID=' + "4"
        + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
        + '&UploadFile=' + this.UploadFile.value
        + '&Response_Time=' + this.Response_Time.value
        + '&Person_Code_Allow=' + this.Person_Code_Allow.value
        + '&LType_ID=' + this.LType_ID.value

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

      })
        // ฟังชั้น จำนวนครั้งที่ลา 
        // .then(() => {
        //   const body = 'LType_ID=' + this.LType_ID.value
        //     + '&LeaveTotal=' + this.LeaveTotal.value
        //   console.log(body);
        //   const headers = new HttpHeaders({
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   });
        //   this.http
        //     .post(`${this.baseUrl}UpdateLtypeUser.php`, body, {
        //       headers: headers
        //     })
        //     .subscribe(
        //       (data: any) => {
        //         this.addLeave = data;
        //       },
        //       (error: any) => {
        //         console.log(error);
        //       }
        //     );
        // })
        .then(() => {
          // const body = 'LType_ID=' + this.LType_ID.value
          // console.log(body);
          // const headers = new HttpHeaders({
          //   'Content-Type': 'application/x-www-form-urlencoded'
          // });
          // this.http
          //   .post(`${this.baseUrl}LOrdinal.php`, body, {
          //     headers: headers
          //   }).subscribe(
          //     (data: any) => {
          //       this.leave = data;
          //     },
          //     (error: any) => {
          //       console.log(error);
          //     }
          //   )
        })
        .then(() => {
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
        })
      // .then(() => {
      //   this.onUpload();
      // })
    }

  }

  onseletday(LeaveDateStart, LeaveDateLast) {
    console.log(LeaveDateStart, LeaveDateLast);
    let dayleave = moment(LeaveDateLast).startOf('day').diff(moment(LeaveDateStart).startOf('day'), 'day')
    if (dayleave > 0) {
      this.numberleave = dayleave;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    }
  }
}
