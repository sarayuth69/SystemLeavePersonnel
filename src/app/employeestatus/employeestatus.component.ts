import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  FormControl
} from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
@Component({
  selector: 'app-employeestatus',
  templateUrl: './employeestatus.component.html',
  styleUrls: ['./employeestatus.component.scss']
})
export class EmployeestatusComponent implements OnInit {
  public status;
  Empstatus: any;
  public Empstatus_ID_show;
  public EmpstatusName_show;
  Empstatus_ID = new FormControl('');
  EmpstatusName = new FormControl('');
  constructor(
    public router: Router  ,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.http.get('http://localhost/Leavewebservice/API/getStatus.php').subscribe(
      (data: any) => {
        console.log(data);
        this.status = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

  AddStatus() {
    const body = 'Empstatus_ID=' + this.Empstatus_ID.value
    + '&EmpstatusName=' + this.EmpstatusName.value
  if(!this.Empstatus_ID.value||!this.EmpstatusName.value){
    Swal.fire(
      'กรุณากรอกข้อมูล',
      'That thing is still around?',
      'question'
    ).then(()=>{
      this.Empstatus_ID = new FormControl('');
      this.EmpstatusName = new FormControl('');
    })
  }else{
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/Leavewebservice/API/InsertEmpstatus.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data[0]);
          this.Empstatus = data[0];
        },
        (error: any) => {
          console.log(error);
        }
      );
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'เพิ่มสถานะบุคลากรเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
        
      }).then(()=>{
        this.http.get('http://localhost/Leavewebservice/API/getStatus.php').subscribe(
          (data: any) => {
            console.log(data);
            this.status = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      })
  }
  }
  updateStatus(
    Empstatus_ID, EmpstatusName
  ) {
    this.Empstatus_ID = new FormControl(Empstatus_ID);
    this.EmpstatusName = new FormControl(EmpstatusName);
  }
  public updateEmpStatus() {
    const body =
    'Empstatus_ID=' + this.Empstatus_ID.value
    + '&EmpstatusName=' + this.EmpstatusName.value
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/Leavewebservice/API/UpdateStatus.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.Empstatus = data[0];
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
      }).then(()=>{
        this.http.get('http://localhost/Leavewebservice/API/getStatus.php').subscribe(
          (data: any) => {
            console.log(data);
            this.status = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      })
  }

  deletestatus(id, name) {
    this.Empstatus_ID_show = id;
    this.EmpstatusName_show = name;
    Swal.fire({
      title: 'คุณจะลบ'+' '+this.EmpstatusName_show+' '+'หรือไม่' ,
      type: 'warning',
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
        }).then(()=>{
          this.http.get('http://localhost/Leavewebservice/API/getStatus.php').subscribe(
            (data: any) => {
              console.log(data);
              this.status = data;
            },
            (error: any) => {
              console.log(error);
            }
          );
        })
        
        this.http
    .get(
      'http://localhost/Leavewebservice/API/DeleteStatus.php?Empstatus_ID=' + this.Empstatus_ID_show
    )
    .subscribe(
      (data: any) => {
        console.log(data[0]);
        this.Empstatus = data[0];
      },
      (error: any) => {
        console.log(error);
      }
    );
      }
    })
  }

}
