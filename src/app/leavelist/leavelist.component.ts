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
  list1: boolean
  list: boolean
  list6: boolean
  list5: boolean
  list4: boolean
  list3: boolean
  list2: boolean
  public leavetype;
  public Employee;
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
  // Local_DeptName = localStorage.getItem('DeptName');
  // Local_Sector = localStorage.getItem('SectorName');

  Leave_ID = new FormControl('');
  Emp_ID = new FormControl('');
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
  LType_ID = new FormControl('');


  EmpName = new FormControl('');
  EmpLastName = new FormControl('');
  Empstatus_ID = new FormControl('');
  PositionName = new FormControl('');
  DeptName = new FormControl('');
  Sector = new FormControl('');
  selectedFile: File;
  ngOnInit() {
    this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
      (data: any) => {
        console.log(data);
        this.Employee = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.http.get('http://localhost/Leavewebservice/API/getfile.php').subscribe(
      (data: any) => {
        console.log(data);
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
      .post('http://localhost/Leavewebservice/API/getLtype.php', body, {
        headers: headers
      }).subscribe(
        (data: any) => {
          this.leavetype = data;
          console.log(this.leavetype);

        },
        (error: any) => {
          console.log(error);
        }

      )



    if (localStorage.getItem('Role') === "5") {
      this.list5 = true;
      this.list = false;
      this.list6 = false;
      this.http.get('http://localhost/Leavewebservice/API/getLeaveToperson.php').subscribe(
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
        .post('http://localhost/Leavewebservice/API/getLeave.php', body, {
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
        .post('http://localhost/Leavewebservice/API/getLeave.php', body, {
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
        .post('http://localhost/Leavewebservice/API/getLeave.php', body, {
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
        .post('http://localhost/Leavewebservice/API/getLeave.php', body, {
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
     else if (localStorage.getItem('Role') === "6") {
      this.list = false;
      this.list1 = false;
      this.list6 = true;
      this.http.get('http://localhost/Leavewebservice/API/getleavetoperson.php').subscribe(
      (data: any) => {
        console.log(data);
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
  AddLeave(LeaveTotal) {
    this.LeaveTotal = new FormControl(LeaveTotal);
    if (LeaveTotal === '0') {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันลา',

      })
    } else if(localStorage.getItem('Role') === "1") {
      const body = 'Leave_ID=' + this.Leave_ID.value
        + '&Emp_ID=' + localStorage.getItem("Emp_ID")
        + '&Name_Leave=' + this.Name_Leave.value
        + '&To_Person=' + this.To_Person.value
        + '&LeaveDateStart=' + this.LeaveDateStart.value
        + '&LeaveDateLast=' + this.LeaveDateLast.value
        + '&LeaveData=' + this.LeaveData.value
        + '&ContactInformation=' + this.ContactInformation.value
        + '&LeaveTotal=' + this.LeaveTotal.value
        + '&LeaveStatus_ID=' + "1"
        + '&UploadFile=' + this.UploadFile.value
        + '&Response_Time=' + this.Response_Time.value
        + '&Person_Code_Allow=' + this.Person_Code_Allow.value
        + '&LType_ID=' + this.LType_ID.value

      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post('http://localhost/Leavewebservice/API/Add_leave.php', body, {
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
        //     .post('http://localhost/Leavewebservice/API/UpdateLtypeUser.php', body, {
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
          const body = 'LType_ID=' + this.LType_ID.value
          console.log(body);
          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post('http://localhost/Leavewebservice/API/LOrdinal.php', body, {
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
        .then(() => {
          this.http
            .post('http://localhost/Leavewebservice/API/getLeave.php', body, {
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
    }
    else if(localStorage.getItem('Role') === "2") {
      const body = 'Leave_ID=' + this.Leave_ID.value
        + '&Emp_ID=' + localStorage.getItem("Emp_ID")
        + '&Name_Leave=' + this.Name_Leave.value
        + '&To_Person=' + this.To_Person.value
        + '&LeaveDateStart=' + this.LeaveDateStart.value
        + '&LeaveDateLast=' + this.LeaveDateLast.value
        + '&LeaveData=' + this.LeaveData.value
        + '&ContactInformation=' + this.ContactInformation.value
        + '&LeaveTotal=' + this.LeaveTotal.value
        + '&LeaveStatus_ID=' + "2"
        + '&UploadFile=' + this.UploadFile.value
        + '&Response_Time=' + this.Response_Time.value
        + '&Person_Code_Allow=' + this.Person_Code_Allow.value
        + '&LType_ID=' + this.LType_ID.value

      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post('http://localhost/Leavewebservice/API/Add_leave.php', body, {
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
        //     .post('http://localhost/Leavewebservice/API/UpdateLtypeUser.php', body, {
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
          const body = 'LType_ID=' + this.LType_ID.value
          console.log(body);
          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post('http://localhost/Leavewebservice/API/LOrdinal.php', body, {
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
        .then(() => {
          this.http
            .post('http://localhost/Leavewebservice/API/getLeave.php', body, {
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
    }
    else if(localStorage.getItem('Role') === "3") {
      const body = 'Leave_ID=' + this.Leave_ID.value
        + '&Emp_ID=' + localStorage.getItem("Emp_ID")
        + '&Name_Leave=' + this.Name_Leave.value
        + '&To_Person=' + this.To_Person.value
        + '&LeaveDateStart=' + this.LeaveDateStart.value
        + '&LeaveDateLast=' + this.LeaveDateLast.value
        + '&LeaveData=' + this.LeaveData.value
        + '&ContactInformation=' + this.ContactInformation.value
        + '&LeaveTotal=' + this.LeaveTotal.value
        + '&LeaveStatus_ID=' + "3"
        + '&UploadFile=' + this.UploadFile.value
        + '&Response_Time=' + this.Response_Time.value
        + '&Person_Code_Allow=' + this.Person_Code_Allow.value
        + '&LType_ID=' + this.LType_ID.value

      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post('http://localhost/Leavewebservice/API/Add_leave.php', body, {
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
        //     .post('http://localhost/Leavewebservice/API/UpdateLtypeUser.php', body, {
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
          const body = 'LType_ID=' + this.LType_ID.value
          console.log(body);
          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post('http://localhost/Leavewebservice/API/LOrdinal.php', body, {
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
        .then(() => {
          this.http
            .post('http://localhost/Leavewebservice/API/getLeave.php', body, {
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
    }
    else if(localStorage.getItem('Role') === "4") {
      const body = 'Leave_ID=' + this.Leave_ID.value
        + '&Emp_ID=' + localStorage.getItem("Emp_ID")
        + '&Name_Leave=' + this.Name_Leave.value
        + '&To_Person=' + this.To_Person.value
        + '&LeaveDateStart=' + this.LeaveDateStart.value
        + '&LeaveDateLast=' + this.LeaveDateLast.value
        + '&LeaveData=' + this.LeaveData.value
        + '&ContactInformation=' + this.ContactInformation.value
        + '&LeaveTotal=' + this.LeaveTotal.value
        + '&LeaveStatus_ID=' + "4"
        + '&UploadFile=' + this.UploadFile.value
        + '&Response_Time=' + this.Response_Time.value
        + '&Person_Code_Allow=' + this.Person_Code_Allow.value
        + '&LType_ID=' + this.LType_ID.value

      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post('http://localhost/Leavewebservice/API/Add_leave.php', body, {
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
        //     .post('http://localhost/Leavewebservice/API/UpdateLtypeUser.php', body, {
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
          const body = 'LType_ID=' + this.LType_ID.value
          console.log(body);
          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post('http://localhost/Leavewebservice/API/LOrdinal.php', body, {
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
        .then(() => {
          this.http
            .post('http://localhost/Leavewebservice/API/getLeave.php', body, {
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
    }

  }


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });
    this.http.post('http://localhost/Leavewebservice/API/Uploadfile.php', uploadData, {
      // headers: headers,
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progres:' + Math.round(event.loaded / event.total * 100) + '%');
        } else if (event.type === HttpEventType.Response) {
          console.log(event);

        }
      })

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
  onselectleave(LTypeName) {
    console.log(LTypeName);
    // let dayleave = moment(LeaveDateLast).startOf('day').diff(moment(LeaveDateStart).startOf('day'),'day')
    // if(dayleave > 0){
    //   this.numberleave = dayleave;
    // }else{
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Something went wrong!',
    //     footer: '<a href>Why do I have this issue?</a>'
    //   })
    // }

  }
  nextpage(item) {
    console.log(item);

    this.router.navigate(['/testleave', item]);
  }
}
