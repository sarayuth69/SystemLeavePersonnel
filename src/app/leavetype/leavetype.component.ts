import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-leavetype',
  templateUrl: './leavetype.component.html',
  styleUrls: ['./leavetype.component.scss']
})
export class LeavetypeComponent implements OnInit {
  baseUrl = 'http://localhost/Leavewebservice/API/';

  public leavetype;
  leavetype_ratcakan
  leavetype_emp_in_univercity
  leavetype_Temporary_worker
  public leavetype_ID_show;
  public leavetypeName_show;
  leavetype1: any;
  LType_ID = new FormControl('');
  LTypeName = new FormControl('');
  Number = new FormControl('');
  Remain = new FormControl('');
  AdvanceNotice = new FormControl('');
  LOrdinal = new FormControl('');
  QuotaStatus = new FormControl('');
  Empstatus_ID = new FormControl('');


  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) { }

  ngOnInit() {
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


  }
  AddLeavetype() {
    const body = 'LType_ID=' + this.LType_ID.value
      + '&LTypeName=' + this.LTypeName.value
      + '&Number=' + this.Number.value
      + '&Remain=' + this.Remain.value
      + '&AdvanceNotice=' + this.AdvanceNotice.value
      + '&LOrdinal=' + this.LOrdinal.value
      + '&QuotaStatus=' + this.QuotaStatus.value
      + '&Empstatus_ID=' + this.Empstatus_ID.value
    if (this.LType_ID.value === "" || this.LTypeName.value === "" || this.Number.value === ""
      || this.Remain.value === "" || this.AdvanceNotice.value === "" || this.LOrdinal.value === ""
      || this.QuotaStatus.value === "" || this.Empstatus_ID.value === "") {
      Swal.fire(
        'กรุณากรอกข้อมูล',
        'That thing is still around?',
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
        if(this.Empstatus_ID.value == 203){
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
       else if(this.Empstatus_ID.value == 202){
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
       else if(this.Empstatus_ID.value == 201){
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
        this.Remain = new FormControl('');
        this.AdvanceNotice = new FormControl('');
        this.LOrdinal = new FormControl('');
        this.QuotaStatus = new FormControl('');
        this.Empstatus_ID = new FormControl('');
      })
    }
  }

  deleteLeavetype(id, name) {
    this.leavetype_ID_show = id;
    this.leavetypeName_show = name;
    Swal.fire({
      title: 'คุณจะลบ' + ' ' + this.leavetypeName_show + ' ' + 'หรือไม่',
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
    LType_ID, LTypeName, Number, Remain, AdvanceNotice, LOrdinal, QuotaStatus, Empstatus_ID
  ) {
    this.LType_ID = new FormControl(LType_ID);
    this.LTypeName = new FormControl(LTypeName);
    this.Number = new FormControl(Number);
    this.Remain = new FormControl(Remain);
    this.AdvanceNotice = new FormControl(AdvanceNotice);
    this.LOrdinal = new FormControl(LOrdinal);
    this.QuotaStatus = new FormControl(QuotaStatus);
    this.Empstatus_ID = new FormControl(Empstatus_ID);
  }
  public updateLeaveType1() {
  
    const body =
      'LType_ID=' + this.LType_ID.value
      + '&LTypeName=' + this.LTypeName.value
      + '&Number=' + this.Number.value
      + '&Remain=' + this.Remain.value
      + '&AdvanceNotice=' + this.AdvanceNotice.value
      + '&LOrdinal=' + this.LOrdinal.value
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
      if(this.Empstatus_ID.value == 203){
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
     else if(this.Empstatus_ID.value == 202){
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
     else if(this.Empstatus_ID.value == 201){
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
      this.Remain = new FormControl('');
      this.AdvanceNotice = new FormControl('');
      this.LOrdinal = new FormControl('');
      this.QuotaStatus = new FormControl('');
      this.Empstatus_ID = new FormControl('');
    })
  }

}
