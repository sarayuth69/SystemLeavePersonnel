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

  public leavetype;

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
    this.http.get('http://localhost/Leavewebservice/API/getLeavetype.php').subscribe(
      (data: any) => {
        this.leavetype = data;
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
        .post('http://localhost/Leavewebservice/API/InsertLeavetype.php', body, {
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
        this.http.get('http://localhost/Leavewebservice/API/getLeavetype.php').subscribe(
          (data: any) => {
            this.leavetype = data;
          },
          (error: any) => {
            console.log(error);
          }
        )
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
          this.http.get('http://localhost/Leavewebservice/API/getLeavetype.php').subscribe(
            (data: any) => {
              console.log(data);
              this.leavetype = data;
            },
            (error: any) => {
              console.log(error);
            }
          );
        })

        this.http
          .get(
            'http://localhost/Leavewebservice/API/Deleteleavetype.php?LType_ID=' + this.leavetype_ID_show
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
      .post('http://localhost/Leavewebservice/API/UpdateLeavetype.php', body, {
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
      this.http.get('http://localhost/Leavewebservice/API/getLeavetype.php').subscribe(
        (data: any) => {
          console.log(data);
          this.leavetype = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
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
