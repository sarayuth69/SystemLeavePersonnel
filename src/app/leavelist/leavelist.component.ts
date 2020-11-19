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
// import { baseUrl } from '../baseUrl.service';
import { GlobalVariable } from '../baseUrl';

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
  LeaveDateLast = new FormControl('');
  LeaveData = new FormControl('');
  ContactInformation = new FormControl('');
  employee = new FormControl('');
  LeaveTotal = new FormControl('');
  LeaveStatus = new FormControl('');
  UploadFile = new FormControl('');
  Response_Time = new FormControl('');
  Person_Code_Allow = new FormControl('');
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
  selectedFile: File;
  marked = false;
  check_Remain: any;
  LType_ID_check: any;
  check_number: Number;
  LType_limit_check: Number;
  LeaveTotal_chack: any;
  LTypeName_check: any;
  LeaveDateStart_cancel = new Date();
  LeaveDateLast_cancel = new Date();

  // check_number_total : Number;


  ngOnInit() {
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
            // data.forEach(element =>
            //   console.log(element.LeaveStatus_ID)
            // );
            // if (data.LeaveStatus_ID = 5) {
            //   this.btn_cancel = false;
            //   this.btn_cancel_head = true;
            // }
            // if (data.LeaveStatus_ID = 1) {
            //   this.btn_cancel = true;
            //   this.btn_cancel_head = false;
            // }
            // this.leave.map(function (i) {
            //   console.log(i.Leave_ID, i.LeaveStatus_ID);
            //   if (i.LeaveStatus_ID == 5) {
            //     this.btn_cancel = false;
            //     this.btn_cancel_head = true;
            //   }
            // })

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

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  changed(e) {
    console.log(e.LType_ID);
  }


  // const tpyeUser = 'Emp_ID=' + localStorage.getItem("Emp_ID")
  // // +'LType_ID'+ this.id
  // console.log(tpyeUser);
  // const headers1 = new HttpHeaders({
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // });
  // this.http
  //   .post(`${this.baseUrl}check_leave_To_Add_leave.php`, tpyeUser, {
  //     headers: headers1
  //   }).subscribe(
  //     (data: any) => {
  //       this.leavetypeUser = data;
  //       console.log(this.leavetypeUser);

  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }

  //   )
  maxDate: any;
  dataChanged(newObj) {
    console.log(newObj);

    this.check_Remain = newObj.Remain
    this.LType_ID_check = newObj.LType_ID
    this.LType_limit_check = newObj.LType_limit
    this.LTypeName_check = `การ${newObj.LTypeName}`
    if (newObj.LTypeName == "ลาป่วย") {
      this.maxDate = moment(new Date()).format('YYYY-MM-DD')
    }
    else if (newObj.LTypeName !== "ลาป่วย") {
      this.maxDate = ""
    }

  }

  AddLeave(LeaveTotal, check_number, limit_type, Name_Leave,To_Person) {

    console.log(+check_number);
    console.log(+LeaveTotal);
    console.log(limit_type);
    console.log(Name_Leave);
    console.log(To_Person);

    

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
            this.Add_leave_level_1(LeaveTotal, Name_Leave,To_Person)
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
          title: 'กรุณาเลือกวันลา',
        })
      }

      else if (localStorage.getItem('Role') === "1") {
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
    this.Name_Leave = Name_Leave
    this.To_Person = To_Person
    const body = 'Leave_ID=' + this.Leave_ID.value
      + '&Emp_ID=' + localStorage.getItem("Emp_ID")
      + '&Name_Leave=' + this.Name_Leave
      + '&To_Person=' + this.To_Person
      + '&LeaveDateStart=' + this.LeaveDateStart.value
      + '&LeaveDateLast=' + this.LeaveDateLast.value
      + '&LeaveData=' + this.LeaveData.value
      + '&ContactInformation=' + this.ContactInformation.value
      + '&employee=' + this.employee.value
      + '&LeaveTotal=' + LeaveTotal
      + '&LeaveStatus_ID=' + "1"
      + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
      + '&UploadFile=' + this.UploadFile.value
      + '&Response_Time=' + this.Response_Time.value
      + '&Person_Code_Allow=' + this.Person_Code_Allow.value
      + '&LType_ID=' + this.LType_ID_check

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
  Add_leave_level_2(LeaveTotal, Name_Leave, To_Person) {
    const body = 'Leave_ID=' + this.Leave_ID.value
      + '&Emp_ID=' + localStorage.getItem("Emp_ID")
      + '&Name_Leave=' + Name_Leave
      + '&To_Person=' + To_Person
      + '&LeaveDateStart=' + this.LeaveDateStart.value
      + '&LeaveDateLast=' + this.LeaveDateLast.value
      + '&LeaveData=' + this.LeaveData.value
      + '&ContactInformation=' + this.ContactInformation.value
      + '&employee=' + this.employee.value
      + '&LeaveTotal=' + LeaveTotal
      + '&LeaveStatus_ID=' + "2"
      + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
      + '&UploadFile=' + this.UploadFile.value
      + '&Response_Time=' + this.Response_Time.value
      + '&Person_Code_Allow=' + this.Person_Code_Allow.value
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
  Add_leave_level_3(LeaveTotal, Name_Leave, To_Person) {
    const body = 'Leave_ID=' + this.Leave_ID.value
      + '&Emp_ID=' + localStorage.getItem("Emp_ID")
      + '&Name_Leave=' + Name_Leave
      + '&To_Person=' + To_Person
      + '&LeaveDateStart=' + this.LeaveDateStart.value
      + '&LeaveDateLast=' + this.LeaveDateLast.value
      + '&LeaveData=' + this.LeaveData.value
      + '&ContactInformation=' + this.ContactInformation.value
      + '&employee=' + this.employee.value
      + '&LeaveTotal=' + LeaveTotal
      + '&LeaveStatus_ID=' + "3"
      + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
      + '&UploadFile=' + this.UploadFile.value
      + '&Response_Time=' + this.Response_Time.value
      + '&Person_Code_Allow=' + this.Person_Code_Allow.value
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
  Add_leave_level_4(LeaveTotal, Name_Leave, To_Person) {
    const body = 'Leave_ID=' + this.Leave_ID.value
      + '&Emp_ID=' + localStorage.getItem("Emp_ID")
      + '&Name_Leave=' + Name_Leave
      + '&To_Person=' + To_Person
      + '&LeaveDateStart=' + this.LeaveDateStart.value
      + '&LeaveDateLast=' + this.LeaveDateLast.value
      + '&LeaveData=' + this.LeaveData.value
      + '&ContactInformation=' + this.ContactInformation.value
      + '&employee=' + this.employee.value
      + '&LeaveTotal=' + LeaveTotal
      + '&LeaveStatus_ID=' + "4"
      + '&LeaveStatus_Document=' + this.LeaveStatus_Document.value
      + '&UploadFile=' + this.UploadFile.value
      + '&Response_Time=' + this.Response_Time.value
      + '&Person_Code_Allow=' + this.Person_Code_Allow.value
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


  // onFileChanged(event) {
  //   this.selectedFile = event.target.files[0];
  //   console.log(this.selectedFile);
  // }
  // onUpload() {
  //   const uploadData = new FormData();
  //   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  //   // const headers = new HttpHeaders({
  //   //   'Content-Type': 'application/x-www-form-urlencoded'
  //   // });
  //   this.http.post(`${this.baseUrl}Uploadfile.php`, uploadData, {
  //     // headers: headers,
  //     reportProgress: true,
  //     observe: 'events'
  //   })
  //     .subscribe(event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         console.log('Upload Progres:' + Math.round(event.loaded / event.total * 100) + '%');
  //       } else if (event.type === HttpEventType.Response) {
  //         console.log(event);

  //       }
  //     })

  // }

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

  cancel(LTypeName, DateStart, DateLast, LeaveTotal) {

    console.log(DateStart);

    this.LTypeName = new FormControl(LTypeName);
    this.LeaveDateStart_cancel = DateStart
    this.LeaveDateLast_cancel = DateLast
    this.LeaveTotal_chack = LeaveTotal

  }

  onseletday(LeaveDateStart, LeaveDateLast) {
    // var dateStart = new Date(LeaveDateStart);
    // var dateLast = new Date(LeaveDateLast);
    console.log(LeaveDateStart, LeaveDateLast);

    var moment = require('moment-business-days');

    var dayleave = moment(LeaveDateLast).startOf('day').businessDiff(moment(LeaveDateStart).startOf('day'), 'day');

    if (dayleave > 0) {
      this.numberleave = dayleave + 1;
      console.log(this.numberleave);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
        text: '',
        footer: ''
      })
    }





    // let dayleave = moment(LeaveDateLast).startOf('day').diff(moment(LeaveDateStart).startOf('day'), 'day')

    // while(dayleave > 0){

    // }


    // if(dateStart.getDay() === 0 || dateLast.getDay() === 0 && dateStart.getDay() === 6 || dateLast.getDay() === 6 ){
    //   var dayleave = moment(dateLast,'MM-DD-YYYY').businessDiff(moment(dateStart).startOf('day'), 'day')
    //   this.numberleave = dayleave;




    // }
    // else{
    //   let dayleave = moment(LeaveDateLast).startOf('day').diff(moment(LeaveDateStart).startOf('day'), 'day')
    //    if (dayleave > 0) {
    //      this.numberleave = dayleave;
    //    } 
    //   //  else {
    //   //    Swal.fire({
    //   //      icon: 'error',
    //   //      title: 'Oops...',
    //   //      text: 'Something went wrong!',
    //   //      footer: '<a href>Why do I have this issue?</a>'
    //   //    })
    //   //  }
    // }

  }

  numberleave_cancal: any;
  onseletday_cancal(LeaveDateStart, LeaveDateLast) {
    // var dateStart = new Date(LeaveDateStart);
    // var dateLast = new Date(LeaveDateLast);
    console.log(LeaveDateStart, LeaveDateLast);

    var moment = require('moment-business-days');

    var dayleave = moment(LeaveDateLast).startOf('day').businessDiff(moment(LeaveDateStart).startOf('day'), 'day');

    if (dayleave > 0) {
      if (dayleave.Date() === 0 || dayleave.Date() === 6) {
        this.numberleave_cancal = dayleave + 1;
        console.log(this.numberleave);
      }
      this.numberleave_cancal = dayleave;
      console.log(this.numberleave);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันลาไห้ถูกต้อง',
        text: '',
        footer: ''
      })
    }



  }



  day() {
    moment().format('dddd');
  }

  printDocument(Ltype_ID) {
    this.router.navigate(['/filelaeveprint', { Ltype_ID }]);

  }


  Leave_ID_show: any;
  Name_Leave_show: any;
  To_Person_show: any;
  Emp_ID_show: any;
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
  show_data(Leave_ID, Name_Leave, To_Person, Emp_ID, EmpName, EmpLastName, PositionName, DeptName,
    SectorName, LTypeName, LeaveData, ContactInformation, employee, LeaveDateStart, LeaveDateLast, LeaveTotal, LeaveStatus_Name, LeaveStatus_Document) {
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
    this.LeaveDateStart_show = LeaveDateStart
    this.LeaveDateLast_show = LeaveDateLast
    this.LeaveTotal_show = LeaveTotal
    this.LeaveStatus_Name_show = LeaveStatus_Name
    this.LeaveStatus_Document_show = LeaveStatus_Document


  }
}
