import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormControl } from '@angular/forms';
// import { baseUrl } from '../baseUrl.service';
import { GlobalVariable } from '../baseUrl';

@Component({
  selector: 'app-leavetype',
  templateUrl: './leavetype.component.html',
  styleUrls: ['./leavetype.component.scss']
})
export class LeavetypeComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;


  public leavetype;
  public leave_limit;
  leavetype_ratcakan
  leavetype_emp_in_univercity
  leavetype_Temporary_worker
  public leavetype_ID_show;
  public leavetypeName_show;
  public Empstatus_ID_show;
  leavetype1: any;
  LType_ID_check = 0;
  LType_ID = new FormControl('');
  LTypeName = new FormControl('');
  Number = new FormControl('');
  LType_limit = new FormControl('');
  leavetype_remark = new FormControl('');
  AdvanceNotice = new FormControl('');
  LOrdinal = new FormControl('');
  QuotaStatus = new FormControl('');
  Empstatus_ID = new FormControl('');
  limit_date = new FormControl('');
  Date_start = new FormControl('');
  Date_stop = new FormControl('');
  limit_ID = new FormControl('');
  Name_limit = new FormControl('');

  pageActual: any;
  edit_limit: any;

  holiday_ID = new FormControl('');
  holiday_date = new FormControl('');
  holiday_data = new FormControl('');
  date = new Date().toString()
  showleave_limit;
  show_holiday;
  Insert_holiday;
  holiday_month_show;
  edit_holiday;
  holiday_ID_show;
  holiday_date_show;
  holiday_data_show;
  select_year
  show_year
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

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,

    // private baseUrl : baseUrl


  ) { }
  @Input('sortable-column')
  columnName: string;

  @Input('sort-direction')
  sortDirection: string = '';

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }
  ngOnInit() {




    this.http.get(`${this.baseUrl}getleave_limit.php`).subscribe(
      (data: any) => {

        for (var i = 0; i <= data.length; i++) {
          this.showleave_limit = data;
          // console.log(this.showleave_limit[i].date_stop);

        }
        //  this.showleave_limit = data;
      }, (error: any) => {
        console.log(error);
      }
    )
    this.http.get(`${this.baseUrl}getLeavetype.php`).subscribe(
      (data: any) => {
        this.leavetype = data;
      },
      (error: any) => {
        console.log(error);
      }
    )
    this.http.get(`${this.baseUrl}getleavetype_ratcakan.php`).subscribe(
      (data: any) => {
        this.leavetype_ratcakan = data;
      },
      (error: any) => {
        console.log(error);
      }
    )
    this.http.get(`${this.baseUrl}getleavetype_emp_in_univercity.php`).subscribe(
      (data: any) => {
        this.leavetype_emp_in_univercity = data;
      },
      (error: any) => {
        console.log(error);
      }
    )
    this.http.get(`${this.baseUrl}getleavetype_Temporary_worker.php`).subscribe(
      (data: any) => {
        this.leavetype_Temporary_worker = data;
      },
      (error: any) => {
        console.log(error);
      }
    )

    this.http.get(`${this.baseUrl}show_year.php`).subscribe(
      (data: any) => {
        this.show_year = data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }



  serch_year(select_year) {
    console.log(select_year);
    this.select_year = select_year
    if (select_year === undefined) {
      this.select_year = " "
      this.http.get(`${this.baseUrl}show_holiday.php?select_year=${this.select_year}`).subscribe(
        (data: any) => {
          this.show_holiday = data
        },
        (error: any) => {
          console.log(error);

        }
      )
    }
    else {
      this.http.get(`${this.baseUrl}show_holiday.php?select_year=${this.select_year}`).subscribe(
        (data: any) => {
          this.show_holiday = data
        },
        (error: any) => {
          console.log(error);

        }
      )
    }


  }
  AddLeavetype() {
    const body = 'LType_ID=' + this.LType_ID_check
      + '&LTypeName=' + this.LTypeName.value
      + '&Number=' + this.Number.value
      + '&LType_limit=' + this.LType_limit.value
      // + '&Remain=' + this.Remain.value
      + '&AdvanceNotice=' + this.AdvanceNotice.value
      + '&LOrdinal=' + 0
      + '&leavetype_remark=' + this.leavetype_remark.value
      + '&QuotaStatus=' + this.QuotaStatus.value
      + '&Empstatus_ID=' + this.Empstatus_ID.value
    if (this.LTypeName.value === "" || this.Number.value === "" || this.LType_limit.value === ""
      || this.AdvanceNotice.value === ""
      || this.QuotaStatus.value === "" || this.Empstatus_ID.value === "") {
      Swal.fire(
        'กรุณากรอกข้อมูล',
        '',
        'question'
      )
    } else {
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}InsertLeavetype.php`, body, {
          headers: headers
        })
        .subscribe(
          (data: any) => {
            console.log(data);
            this.leavetype1 = data;
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
        if (this.Empstatus_ID.value == 203) {
          this.http.get(`${this.baseUrl}getleavetype_ratcakan.php`).subscribe(
            (data: any) => {
              console.log(data);
              this.leavetype_ratcakan = data;
            },
            (error: any) => {
              console.log(error);
            }
          );
        }
        else if (this.Empstatus_ID.value == 202) {
          this.http.get(`${this.baseUrl}getleavetype_emp_in_univercity.php`).subscribe(
            (data: any) => {
              console.log(data);
              this.leavetype_emp_in_univercity = data;
            },
            (error: any) => {
              console.log(error);
            }
          );
        }
        else if (this.Empstatus_ID.value == 201) {
          this.http.get(`${this.baseUrl}getleavetype_Temporary_worker.php`).subscribe(
            (data: any) => {
              console.log(data);
              this.leavetype_Temporary_worker = data;
            },
            (error: any) => {
              console.log(error);
            }
          );
        }
      }).then(() => {
        this.LType_ID = new FormControl('');
        this.LTypeName = new FormControl('');
        this.Number = new FormControl('');
        this.LType_limit = new FormControl('');
        // this.Remain = new FormControl('');
        this.AdvanceNotice = new FormControl('');
        // this.LOrdinal = new FormControl('');
        this.QuotaStatus = new FormControl('');
        this.Empstatus_ID = new FormControl('');
      })
    }
  }

  deleteLeavetype(id, name, Empstatus_ID) {
    this.leavetype_ID_show = id;
    this.leavetypeName_show = name;
    this.Empstatus_ID_show = Empstatus_ID;
    console.log(this.Empstatus_ID_show);
    Swal.fire({
      title: 'คุณจะลบ' + ' ' + this.leavetypeName_show + ' ' + 'หรือไม่',
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

          if (this.Empstatus_ID_show == 203) {
            this.http.get(`${this.baseUrl}getleavetype_ratcakan.php`).subscribe(
              (data: any) => {
                console.log(data);
                this.leavetype_ratcakan = data;
              },
              (error: any) => {
                console.log(error);
              }
            );
          }
          else if (this.Empstatus_ID_show == 202) {
            this.http.get(`${this.baseUrl}getleavetype_emp_in_univercity.php`).subscribe(
              (data: any) => {
                console.log(data);
                this.leavetype_emp_in_univercity = data;
              },
              (error: any) => {
                console.log(error);
              }
            );
          }
          else if (this.Empstatus_ID_show == 201) {
            this.http.get(`${this.baseUrl}getleavetype_Temporary_worker.php`).subscribe(
              (data: any) => {
                console.log(data);
                this.leavetype_Temporary_worker = data;
              },
              (error: any) => {
                console.log(error);
              }
            );
          }
        })

        this.http
          .get(
            `${this.baseUrl}Deleteleavetype.php?LType_ID=` + this.leavetype_ID_show
          )
          .subscribe(
            (data: any) => {
              console.log(data[0]);
              this.leavetype1 = data[0];
            },
            (error: any) => {
              console.log(error);
            }
          );

      }
    })

  }


  updateLeavetype(
    LType_ID, LTypeName, Number, LType_limit, AdvanceNotice, LOrdinal, leavetype_remark, QuotaStatus, Empstatus_ID
  ) {
    this.LType_ID = new FormControl(LType_ID);
    this.LTypeName = new FormControl(LTypeName);
    this.Number = new FormControl(Number);
    this.LType_limit = new FormControl(LType_limit);
    // this.Remain = new FormControl(Remain);
    this.AdvanceNotice = new FormControl(AdvanceNotice);
    this.LOrdinal = new FormControl(LOrdinal);
    this.leavetype_remark = new FormControl(leavetype_remark);
    this.QuotaStatus = new FormControl(QuotaStatus);
    this.Empstatus_ID = new FormControl(Empstatus_ID);
  }
  public updateLeaveType1() {

    const body =
      'LType_ID=' + this.LType_ID.value
      + '&LTypeName=' + this.LTypeName.value
      + '&Number=' + this.Number.value
      + '&LType_limit=' + this.LType_limit.value
      // + '&Remain=' + this.Remain.value
      + '&AdvanceNotice=' + this.AdvanceNotice.value
      + '&LOrdinal=' + this.LOrdinal.value
      + '&leavetype_remark=' + this.leavetype_remark.value
      + '&QuotaStatus=' + this.QuotaStatus.value
      + '&Empstatus_ID=' + this.Empstatus_ID.value
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}UpdateLeavetype.php`, body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.leavetype1 = data[0];
        },
        (error: any) => {
          console.log(error);
        }
      );
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'แก้ไขเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      if (this.Empstatus_ID.value == 203) {
        this.http.get(`${this.baseUrl}getleavetype_ratcakan.php`).subscribe(
          (data: any) => {
            console.log(data);
            this.leavetype_ratcakan = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
      else if (this.Empstatus_ID.value == 202) {
        this.http.get(`${this.baseUrl}getleavetype_emp_in_univercity.php`).subscribe(
          (data: any) => {
            console.log(data);
            this.leavetype_emp_in_univercity = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
      else if (this.Empstatus_ID.value == 201) {
        this.http.get(`${this.baseUrl}getleavetype_Temporary_worker.php`).subscribe(
          (data: any) => {
            console.log(data);
            this.leavetype_Temporary_worker = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      }

    }).then(() => {
      window.location.reload()
    })
  }

  // check_limit() {



  // }
  text = new Date().getDate();
  date_limit
  add_leave_limit() {
    const notcomin = document.getElementById(`inlineRadio1`) as HTMLInputElement;
    console.log(notcomin);
    if (notcomin.checked == false) {
      this.date_limit = 0

    }
    else {
      this.date_limit = 1

    }


    if (this.Date_start.value === "" || this.Date_stop.value === "") {
      Swal.fire(
        'กรุณากรอกข้อมูล',
        '',
        'question'
      )
    } else {


      const body = 'limit_ID=' + 0
        + '&Name_limit=' + this.Name_limit.value
        + '&Date_start=' + this.Date_start.value
        + '&Date_stop=' + this.Date_stop.value
        + '&date_limit=' + this.date_limit
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}insert_leave_limit.php`, body, {
          headers: headers
        })
        .subscribe(
          (data: any) => {
            console.log(data);
            this.leave_limit = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'เพิ่มรอบประเมินเรียบร้อย',
        showConfirmButton: false,
        timer: 1500

      }).then(() => {
        this.http.get(`${this.baseUrl}getleave_limit.php`).subscribe(
          (data: any) => {
            this.showleave_limit = data;
          }, (error: any) => {
            console.log(error);
          }
        )
      })
    }
  }
  limit_ID_show
  Name_limit_show

  delete_leave_limit(limit_ID, Name_limit) {
    this.limit_ID_show = limit_ID;
    this.Name_limit_show = Name_limit;


    Swal.fire({
      title: 'คุณจะลบ' + ' ' + this.Name_limit_show + ' ' + 'หรือไม่',
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
          this.http
            .get(
              `${this.baseUrl}Delete_leave_limit.php?limit_ID=` + this.limit_ID_show
            )
            .subscribe(
              (data: any) => {

              },
              (error: any) => {
                window.location.replace;
                console.log(error);
              }
            );
        }).then(() => {
          this.http.get(`${this.baseUrl}getleave_limit.php`).subscribe(
            (data: any) => {
              this.showleave_limit = data;
            }, (error: any) => {
              console.log(error);
            }
          )
        })
      }

    })
  }

  add_holiday() {
    const body = 'holiday_ID=' + 0
      + '&holiday_date=' + this.holiday_date.value
      + '&holiday_data=' + this.holiday_data.value

    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}insert_holiday.php`, body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.Insert_holiday = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'เพิ่มข้อมูลเรียบร้อย',
      showConfirmButton: false,
      timer: 1500

    }).then(() => {
      this.http.get(`${this.baseUrl}show_holiday.php`).subscribe(
        (data: any) => {
          this.show_holiday = data
        },
        (error: any) => {
          console.log(error);
        }
      )
    })
  }

  update_holiday(
    holiday_ID, holiday_date, holiday_data
  ) {
    this.holiday_ID = new FormControl(holiday_ID);
    this.holiday_date = new FormControl(holiday_date);
    this.holiday_data = new FormControl(holiday_data);

  }
  public update_holiday_true() {
    const body =
      'holiday_ID=' + this.holiday_ID.value
      + '&holiday_date=' + this.holiday_date.value
      + '&holiday_data=' + this.holiday_data.value

    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}Update_holiday.php`, body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.edit_holiday = data[0];
        },
        (error: any) => {
          console.log(error);
        }
      );
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'แก้ไขเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.http.get(`${this.baseUrl}show_holiday.php`).subscribe(
        (data: any) => {
          this.show_holiday = data
        },
        (error: any) => {
          console.log(error);
        }
      )
    })
  }

  delete_holiday(holiday_ID, holiday_date, holiday_data) {
    this.holiday_ID_show = holiday_ID;
    this.holiday_date_show = holiday_date;
    this.holiday_data_show = holiday_data;
    console.log(this.Empstatus_ID_show);
    Swal.fire({
      title: 'คุณจะลบ' + ' ' + this.holiday_date_show + ' ' + 'ซึ่งเป็นวัน' + ' ' + this.holiday_data_show + ' ' + 'หรือไม่',
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
          this.http
            .get(
              `${this.baseUrl}Delete_holiday.php?holiday_ID=` + this.holiday_ID_show
            )
            .subscribe(
              (data: any) => {
                console.log(data[0]);
                this.leavetype1 = data[0];
              },
              (error: any) => {
                console.log(error);
              }
            );
        }).then(() => {
          this.http.get(`${this.baseUrl}show_holiday.php`).subscribe(
            (data: any) => {
              this.show_holiday = data
            },
            (error: any) => {
              console.log(error);
            }
          )
        })
      }

    })
  }

  updatelimit(limit_ID, Name_limit, Date_start, Date_stop) {
    this.limit_ID = new FormControl(limit_ID);
    this.Name_limit = new FormControl(Name_limit);
    this.Date_start = new FormControl(Date_start);
    this.Date_stop = new FormControl(Date_stop);
  }
  updatelimit_to_database() {
    const notcomin = document.getElementById(`inlineRadio1`) as HTMLInputElement;
    console.log(notcomin);
    if (notcomin.checked == false) {
      this.date_limit = 0

    }
    else {
      this.date_limit = 1

    }
    const body = 'limit_ID=' + 0
      + '&Name_limit=' + this.Name_limit.value
      + '&Date_start=' + this.Date_start.value
      + '&Date_stop=' + this.Date_stop.value
      + '&date_limit=' + this.date_limit
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}Updatelimit.php`, body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.edit_limit = data[0];
        },
        (error: any) => {
          console.log(error);
        }
      );
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'แก้ไขเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.http.get(`${this.baseUrl}getleave_limit.php`).subscribe(
        (data: any) => {
          for (var i = 0; i <= data.length; i++) {
            try {
              this.showleave_limit = data;
            } catch (e) {
            }

          }
        }, (error: any) => {
          console.log(error);
        }
      )
    })
  }
  remove_input() {
    this.limit_ID = new FormControl(" ");
    this.Name_limit = new FormControl(" ");
    this.Date_start = new FormControl(" ");
    this.Date_stop = new FormControl(" ");
    const notcomin = document.getElementById(`inlineRadio1`) as HTMLInputElement;
    notcomin.checked = false
  }
}
