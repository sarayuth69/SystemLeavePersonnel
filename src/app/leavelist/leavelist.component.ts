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
@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.scss']
})
export class LeavelistComponent implements OnInit {
  baseUrl = 'http://localhost/Leavewebservice/API/';
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
    private http: HttpClient
  ) { }
  Local_Emp_ID = localStorage.getItem('Emp_ID');
  Local_EmpName = localStorage.getItem('EmpName');
  Local_EmpLastName = localStorage.getItem('EmpLastName');
  Local_PositionName = localStorage.getItem('PositionName');
  Local_DeptName = localStorage.getItem('DeptName');
  Local_Sector = localStorage.getItem('SectorName');

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
  loop: any;




  EmpName = new FormControl('');
  EmpLastName = new FormControl('');
  Empstatus_ID = new FormControl('');
  PositionName = new FormControl('');
  DeptName = new FormControl('');
  Sector = new FormControl('');
  selectedFile: File;
  marked = false;
  ngOnInit() {
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
          console.log(this.leavetype[0].Number);

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
            data.forEach(element =>
              console.log(element.LeaveStatus_ID)
            );
            if (data.LeaveStatus_ID = 5) {
              this.btn_cancel = false;
              this.btn_cancel_head = true;
            }
            if (data.LeaveStatus_ID = 1) {
              this.btn_cancel = true;
              this.btn_cancel_head = false;
            }
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
    // else if (localStorage.getItem('Empstatus_ID') === "105") {
    //   this.leave105 = true;
    //   this.leave106 = false;
    // }

  }
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  AddLeave(LeaveTotal) {
    // const uploadData = new FormData();
    // uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.LeaveTotal = new FormControl(LeaveTotal);
    if (LeaveTotal === '0') {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันลา',
      })
    }
    // else if(LeaveTotal< ){

    // }


    else if (localStorage.getItem('Role') === "1") {
      const body = 'Leave_ID=' + this.Leave_ID.value
        + '&Emp_ID=' + localStorage.getItem("Emp_ID")
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
    else if (localStorage.getItem('Role') === "2") {
      const body = 'Leave_ID=' + this.Leave_ID.value
        + '&Emp_ID=' + localStorage.getItem("Emp_ID")
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
    else if (localStorage.getItem('Role') === "3") {
      const body = 'Leave_ID=' + this.Leave_ID.value
        + '&Emp_ID=' + localStorage.getItem("Emp_ID")
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
    else if (localStorage.getItem('Role') === "4") {
      const body = 'Leave_ID=' + this.Leave_ID.value
        + '&Emp_ID=' + localStorage.getItem("Emp_ID")
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
        title: 'Are you sure?',
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
                    console.log(error);
                  }

                )
            }
          })
        }
      })

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


  day() {
    moment().format('dddd');
  }
}
