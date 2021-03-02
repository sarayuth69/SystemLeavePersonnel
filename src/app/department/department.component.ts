import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import {
  FormControl
} from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
// import { baseUrl } from '../baseUrl.service';
import { GlobalVariable } from '../baseUrl';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;

  public dep;
  public sector;
  public S;
  department: any;
  Dept_ID = new FormControl('');
  DeptName = new FormControl('');
  Sector_ID = new FormControl('');
  public Dept_ID_show;
  public DeptName_show;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
    // private baseUrl : baseUrl



  ) { }

  ngOnInit() {
    this.http.get(`${this.baseUrl}getDept.php`).subscribe(
      (data: any) => {
        console.log(data);
        this.dep = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.http.get(`${this.baseUrl}getsector.php`).subscribe(
      (data: any) => {
        this.sector = data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
  AddDept() {


    const body = 'Dept_ID=' + 0
      + '&DeptName=' + this.DeptName.value
    // + '&Sector_ID=' + this.Sector_ID

    console.log(body);
    if ( this.DeptName.value === "") {
      Swal.fire(
        'กรุณากรอกข้อมูล',
        '',
        'question'
      )
    }
    else {
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}InsertDept.php`, body, {
          headers: headers
        })
        .subscribe(
          (data: any) => {
            console.log(data);
            this.department = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'เพิ่มแผนกเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.http.get(`${this.baseUrl}getDept.php`).subscribe(
          (data: any) => {
            console.log(data);
            this.dep = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      }).then(() => {
        this.Dept_ID = new FormControl('');
        this.DeptName = new FormControl('');
      })
    }
  }

  deleteDept(id, name) {
    this.Dept_ID_show = id;
    this.DeptName_show = name;
    Swal.fire({
      title: 'คุณจะลบ' + ' ' + this.DeptName_show + ' ' + 'หรือไม่',
      text: "",
      icon: 'warning',
      confirmButtonText: 'บันทึก',
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'ยกเลิก',
      showCancelButton: true,
      cancelButtonColor: '#d33',

    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'ลบเรียบร้อย!',
          '',
          'success'
        ).then(() => {
          this.http.get(`${this.baseUrl}getDept.php`).subscribe(
            (data: any) => {
              console.log(data);
              this.dep = data;
            },
            (error: any) => {
              console.log(error);
            }
          );
        })
        this.http
          .get(
            `${this.baseUrl}DeleteDept.php?Dept_ID=` + this.Dept_ID_show
          )
          .subscribe(
            (data: any) => {
              console.log(data[0]);
              this.department = data[0];
            },
            (error: any) => {
              console.log(error);
            }
          );
      }
    })

  }

  updatedept(
    Dept_ID, DeptName
  ) {

    this.Dept_ID = new FormControl(Dept_ID);
    this.DeptName = new FormControl(DeptName);

  }
  public updateDepartmant() {


    const body =
      'Dept_ID=' + this.Dept_ID.value
      + '&DeptName=' + this.DeptName.value

    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}UpdateDepartmant.php`, body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.department = data[0];
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
      this.http.get(`${this.baseUrl}getDept.php`).subscribe(
        (data: any) => {
          console.log(data);
          this.dep = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }).then(() => {
      this.Dept_ID = new FormControl('');
      this.DeptName = new FormControl('');
      this.Sector_ID = new FormControl('');
    })

  }

}
