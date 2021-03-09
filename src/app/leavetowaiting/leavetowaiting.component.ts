import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// import { baseUrl } from '../baseUrl.service';
import { GlobalVariable } from '../baseUrl';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-leavetowaiting',
  templateUrl: './leavetowaiting.component.html',
  styleUrls: ['./leavetowaiting.component.scss']
})
export class LeavetowaitingComponent implements OnInit {
  //  baseUrl = 'https://www.rmuti.ac.th/student/sarayuth.kr/Leavewebservice/API/';
  public baseUrl = GlobalVariable.BASE_API_URL;
  table_leaveto_waiting;
  table_leaveto_waiting_3;
  setleavestatus;
  Emp_ID;
  Leave_ID;
  LeaveTotal;
  tableleavewaiting_2: boolean;
  tableleavewaiting_3: boolean;
  tableleavewaiting_4: boolean;
  tableleavewaiting_5: boolean;
  pageActual: any;
  count_watting
  countleave_toDepartmenthead
  countleave_toDeputyleader
  countleave_toSupervisor
  countleave_toperson
  show_count_lavel2: boolean
  show_count_lavel3: boolean
  show_count_lavel4: boolean
  show_count_lavel5: boolean



  table_leaveto_waiting_cancel: any;

  EmpName: any;
  EmpLastName: any;
  PositionName: any;
  DeptName: any;
  LTypeName: any;
  LeaveDateStart: any;
  LeaveDateLast: any;
  LeaveData: any;
  LeaveStatus_Name: any;
  alert_cancel: boolean = false;

  constructor(
    public http: HttpClient,
    public route: ActivatedRoute,
    public api: APIService,
    // private baseUrl : baseUrl


  ) { }

  ngOnInit() {

    if (localStorage.getItem('Role') === "2") {
      this.tableleavewaiting_2 = true;
      this.tableleavewaiting_3 = false;
      this.tableleavewaiting_4 = false;
      this.tableleavewaiting_5 = false;

      const body2 = 'Dept_ID=' + localStorage.getItem("Dept_ID")
      console.log(body2);
      const headers2 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getleavetoDepartmenthead.php`, body2, {
          headers: headers2
        }).subscribe(
          (data: any) => {
            this.table_leaveto_waiting = data;
            console.log(this.table_leaveto_waiting);

          },
          (error: any) => {

          }

        )

    }
    else if (localStorage.getItem('Role') === "3") {
      this.tableleavewaiting_2 = false;
      this.tableleavewaiting_3 = true;
      this.tableleavewaiting_4 = false;
      this.tableleavewaiting_5 = false;


      const body3 = 'Dept_ID=' + localStorage.getItem("Dept_ID")
      console.log(body3);
      const headers3 = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getleavetoSupervisor.php`, body3, {
          headers: headers3
        }).subscribe(
          (data: any) => {
            this.table_leaveto_waiting = data;
            console.log(this.table_leaveto_waiting);

          },
          (error: any) => {

          }

        )

    }
    else if (localStorage.getItem('Role') === "4") {
      this.tableleavewaiting_2 = false;
      this.tableleavewaiting_3 = false;
      this.tableleavewaiting_4 = true;
      this.tableleavewaiting_5 = false;
      const body4 = 'Sector_ID=' + localStorage.getItem("Sector_ID")
      console.log(body4);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getleavetoDeputyleader.php`, body4, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.table_leaveto_waiting = data;
          },
          (error: any) => {
            console.log(error);
          }
        )

      // this.http.get(`${this.baseUrl}getleavetoDeputyleader.php`).subscribe(
      //   (data: any) => {
      //     console.log(data);
      //     this.table_leaveto_waiting = data;
      //   },
      //   (error: any) => {

      //   }
      // );
    }
    else if (localStorage.getItem('Role') === "5") {
      this.tableleavewaiting_2 = false;
      this.tableleavewaiting_3 = false;
      this.tableleavewaiting_4 = false;
      this.tableleavewaiting_5 = true;
      this.http.get(`${this.baseUrl}getleavetoperson.php`).subscribe(
        (data: any) => {
          console.log(data);
          this.table_leaveto_waiting = data;
        },
        (error: any) => {

        }
      );
      this.http.get(`${this.baseUrl}getLeaveToperson_cancel.php`).subscribe(
        (data: any) => {
          console.log(data);
          this.table_leaveto_waiting_cancel = data;
          if (this.table_leaveto_waiting_cancel.length > 0) {
            this.alert_cancel = true;
          }
        },
        (error: any) => {

        }
      );
    }


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
    //     .post(`${this.baseUrl}getLeave.php`, body, {
    //       headers: headers
    //     }).subscribe(
    //       (data: any) => {
    //         this.leave = data;
    //       },
    //       (error: any) => {
    //         
    //       }

    //     )
    // }

  }
  allow(Leave_ID) {
    if (!Leave_ID) {
      Swal.fire(
        'ไม่มีการลา?',
        '',
        'question'
      )
    } else if (localStorage.getItem('Role') === "2") {
      this.Leave_ID = Leave_ID;
      const body = 'Leave_ID=' + this.Leave_ID
        + '&LeaveStatus_ID=' + 2
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}setleavestatus.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.setleavestatus = data;
            console.log(data);

          },
          (error: any) => {
            // window.location.reload();

          }

        )
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'อนุญาตเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}getleavetoDepartmenthead.php`, body, {
            headers: headers
          }).subscribe(
            (data: any) => {
              this.table_leaveto_waiting = data;
              console.log(this.table_leaveto_waiting);

            },
            (error: any) => {
              setTimeout(() => {
                window.location.reload();

              }, 1600);
            }

          )
      }).then(() => {
        const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        console.log(body);
        const headers1 = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}count_leavetoDepartmenthead.php`, body, {
            headers: headers1
          }).subscribe(
            (data: any) => {
              this.count_watting = data
              for (var i = 0; i <= this.count_watting.length; i++) {
                console.log(this.count_watting[i].countleave);
                if (this.count_watting[i].countleave >= 1) {
                  this.show_count_lavel2 = true
                  this.countleave_toDepartmenthead = this.count_watting[i].countleave
                } else {
                  this.show_count_lavel2 = false
                }
              }
            },
            (error: any) => {
              console.log(error);
            }

          )
      })
    }
    else if (localStorage.getItem('Role') === "3") {
      this.Leave_ID = Leave_ID;
      const body = 'Leave_ID=' + this.Leave_ID
        + '&LeaveStatus_ID=' + 3
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}setleavestatus.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.setleavestatus = data;
            console.log(data);

          },
          (error: any) => {

          }

        )
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'อนุญาตเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}getleavetoSupervisor.php`, body, {
            headers: headers
          }).subscribe(
            (data: any) => {
              this.table_leaveto_waiting = data;
              console.log(this.table_leaveto_waiting);

            },
            (error: any) => {
              setTimeout(() => {
                window.location.reload();

              }, 1600);

            }

          )
      }).then(() => {
        const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        console.log(body);
        const headers1 = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}count_leavetoSupervisor.php`, body, {
            headers: headers1
          }).subscribe(
            (data: any) => {
              this.count_watting = data
              for (var i = 0; i <= this.count_watting.length; i++) {
                console.log(this.count_watting[i].countleave);
                if (this.count_watting[i].countleave >= 1) {
                  this.show_count_lavel3 = true
                  this.countleave_toSupervisor = this.count_watting[i].countleave
                } else {
                  this.show_count_lavel3 = false
                }
              }
            },
            (error: any) => {
              console.log(error);
            }

          )

      })
    }
    else if (localStorage.getItem('Role') === "4") {
      this.Leave_ID = Leave_ID;
      const body = 'Leave_ID=' + this.Leave_ID
        + '&LeaveStatus_ID=' + 4
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}setleavestatus.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.setleavestatus = data;
            console.log(data);

          },
          (error: any) => {

          }

        )
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'อนุญาตเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        const body4 = 'Sector_ID=' + localStorage.getItem("Sector_ID")
        console.log(body4);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}getleavetoDeputyleader.php`, body4, {
            headers: headers
          }).subscribe(
            (data: any) => {
              this.table_leaveto_waiting = data;
            },
            (error: any) => {
              window.location.reload();
            }
          )
      }).then(() => {
        this.http.get(`${this.baseUrl}count_leavetoDeputyleader.php`).subscribe(
          (data: any) => {
            this.count_watting = data
            for (var i = 0; i <= this.count_watting.length; i++) {

              try {
                if (this.count_watting[i].countleave >= 1) {
                  this.show_count_lavel4 = true
                  this.countleave_toDeputyleader = this.count_watting[i].countleave
                } else {
                  this.show_count_lavel4 = false
                }
              } catch (error) {
                // console.log(' — Error is handled gracefully: ', error.name);
              }
            }

          }, (error: any) => {
            console.log(error);
          }
        )
      })
    }
    else if (localStorage.getItem('Role') === "5") {
      this.Leave_ID = Leave_ID;
      const body = 'Leave_ID=' + this.Leave_ID
        + '&LeaveStatus_ID=' + 5
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}setleavestatus.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.setleavestatus = data;
            console.log(data);
          },
          (error: any) => {
          }
        )
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'อนุญาตเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.http.get(`${this.baseUrl}getleavetoperson.php`).subscribe(
          (data: any) => {
            console.log(data);
            this.table_leaveto_waiting = data;
          },
          (error: any) => {
            setTimeout(() => {
              window.location.reload();

            }, 1600);

          }
        );
      })
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
  show_file
  show_data(Leave_ID, Name_Leave, To_Person, Emp_ID, EmpName, EmpLastName, PositionName, DeptName,
    SectorName, LTypeName, LeaveData, ContactInformation, employee, LeaveDateStart, LeaveDateLast,
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
    this.LeaveDateStart_show = LeaveDateStart

    this.LeaveDateLast_show = LeaveDateLast
    this.LeaveTotal_show = LeaveTotal
    this.LeaveStatus_Name_show = LeaveStatus_Name
    this.LeaveStatus_Document_show = LeaveStatus_Document
    this.Leave_characteristics_dateStart_show = Leave_characteristics_dateStart
    this.Leave_characteristics_dateLast_show = Leave_characteristics_dateLast
    this.file_names_show = file_names
    this.http.get(`${this.baseUrl}getLeave_show_file.php?Leave_ID=${Leave_ID}`).subscribe(data => {
      this.show_file = data
    })

  }










  Leave_ID_cancel
  showdata_cancel(Leave_ID, EmpName, EmpLastName, PositionName, DeptName, LTypeName,
    LeaveDateStart, LeaveDateLast, LeaveTotal, LeaveData, LeaveStatus_Name, cancel_id) {
    console.log(EmpName);
    console.log(Leave_ID);

    this.Leave_ID_cancel = Leave_ID
    this.EmpName = EmpName
    this.EmpLastName = EmpLastName
    this.PositionName = PositionName
    this.DeptName = DeptName
    this.LTypeName = LTypeName
    this.LeaveDateStart = LeaveDateStart
    this.LeaveDateLast = LeaveDateLast
    this.LeaveTotal = LeaveTotal
    this.LeaveData = LeaveData
    this.LeaveStatus_Name = LeaveStatus_Name
    this.cancel_id = cancel_id



  }
  No_allow(Leave_ID) {
    console.log(Leave_ID);

    if (!Leave_ID) {
      Swal.fire(
        'ไม่มีการลา?',
        '',
        'question'
      )
    } else if (localStorage.getItem('Role') === "2") {
      this.Leave_ID = Leave_ID;
      const body = 'Leave_ID=' + this.Leave_ID
        + '&LeaveStatus_ID=' + 6
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}setleavestatus.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.setleavestatus = data;
            console.log(data);

          },
          (error: any) => {


          }

        )
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'ไม่อนุญาตให้ลางานเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}getleavetoDepartmenthead.php`, body, {
            headers: headers
          }).subscribe(
            (data: any) => {
              this.table_leaveto_waiting = data;
              console.log(this.table_leaveto_waiting);

            },
            (error: any) => {
              setTimeout(() => {
                window.location.reload();

              }, 1600);
            }

          )
      })
    }
    else if (localStorage.getItem('Role') === "3") {
      this.Leave_ID = Leave_ID;
      const body = 'Leave_ID=' + this.Leave_ID
        + '&LeaveStatus_ID=' + 6
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}setleavestatus.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.setleavestatus = data;
            console.log(data);

          },
          (error: any) => {

          }

        )
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'ไม่อนุญาตให้ลางานเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}getleavetoSupervisor.php`, body, {
            headers: headers
          }).subscribe(
            (data: any) => {
              this.table_leaveto_waiting = data;
              console.log(this.table_leaveto_waiting);

            },
            (error: any) => {
              setTimeout(() => {
                window.location.reload();

              }, 1600);

            }

          )
      })
    }
    else if (localStorage.getItem('Role') === "4") {
      this.Leave_ID = Leave_ID;
      const body = 'Leave_ID=' + this.Leave_ID
        + '&LeaveStatus_ID=' + 6
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}setleavestatus.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.setleavestatus = data;
            console.log(data);

          },
          (error: any) => {

          }

        )
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'ไม่อนุญาตให้ลางานเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.http.get(`${this.baseUrl}getleavetoDeputyleader.php`).subscribe(
          (data: any) => {
            console.log(data);
            this.table_leaveto_waiting = data;
          },
          (error: any) => {
            setTimeout(() => {
              window.location.reload();

            }, 1600);

          }
        );
      })
    }
    else if (localStorage.getItem('Role') === "5") {
      this.Leave_ID = Leave_ID;
      const body = 'Leave_ID=' + this.Leave_ID
        + '&LeaveStatus_ID=' + 6
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}setleavestatus.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.setleavestatus = data;
            console.log(data);

          },
          (error: any) => {

          }

        )
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'ไม่อนุญาตให้ลางานเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.http.get(`${this.baseUrl}getleavetoperson.php`).subscribe(
          (data: any) => {
            console.log(data);
            this.table_leaveto_waiting = data;
          },
          (error: any) => {
            setTimeout(() => {
              window.location.reload();

            }, 1600);

          }
        );
      })
    }
  }
  cancel_id: any;
  NO_allow_cancel(cancel_id) {
    const body = 'cancel_id=' + cancel_id
      + '&cancel_status=' + 9
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}setcancel_status.php`, body, {
        headers: headers
      }).subscribe(
        (data: any) => {
        },
        (error: any) => {
        }

      )
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'บันทึกเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.http.get(`${this.baseUrl}getLeaveToperson_cancel.php`).subscribe(
        (data: any) => {
          console.log(data);
          this.table_leaveto_waiting_cancel = data;

        },
        (error: any) => {
          setTimeout(() => {
            window.location.reload();

          }, 1600);
        }
      );
    }).then(() => {

    })


  }
  cancel_total: any;
  leave_ID: any;
  Name_Leave: any;
  allow_cancel(cancel_id, cancel_total, leave_ID, LeaveTotal, Name_Leave) {
    this.cancel_id = cancel_id;
    this.cancel_total = cancel_total;
    this.leave_ID = leave_ID;
    this.LeaveTotal = LeaveTotal;
    this.Name_Leave = Name_Leave;
    console.log(this.Name_Leave);

    const body = 'cancel_id=' + this.cancel_id
      + '&cancel_status=' + 8
      + '&cancel_total=' + this.cancel_total
      + '&leave_ID=' + this.leave_ID
    // + '&Name_Leave=' + this.Name_Leave + " / ขออนุญาตยกเลิก"
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}setcancel_status.php`, body, {
        headers: headers
      }).subscribe(
        (data: any) => {
        },
        (error: any) => {
        }
      )
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'อนุญาตเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      if (cancel_total >= LeaveTotal) {

        const body = '&cancel_total=' + this.cancel_total
          + '&leave_ID=' + this.leave_ID
        // + '&Name_Leave=' + this.Name_Leave + " / ขออนุญาตยกเลิก"
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}update_cancel_status_over.php`, body, {
            headers: headers
          }).subscribe(
            (data: any) => {
            },
            (error: any) => {
            }
          )
      }
      else if (cancel_total < LeaveTotal) {
        const body = '&cancel_total=' + this.cancel_total
          + '&leave_ID=' + this.leave_ID
        console.log(body);
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http
          .post(`${this.baseUrl}update_cancel_status.php`, body, {
            headers: headers
          }).subscribe(
            (data: any) => {
            },
            (error: any) => {
            }
          )
      }

    }).then(() => {
      this.http.get(`${this.baseUrl}getLeaveToperson_cancel.php`).subscribe(
        (data: any) => {
          console.log(data);
          this.table_leaveto_waiting_cancel = data;
        },
        (error: any) => {
          setTimeout(() => {
            window.location.reload();

          }, 1600);
        }
      );
    })
  }
}
