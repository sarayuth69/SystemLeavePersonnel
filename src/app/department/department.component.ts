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
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  baseUrl = 'http://localhost/Leavewebservice/API/';
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
  AddDept(s) {
    this.Sector_ID = s
    console.log(this.Sector_ID);
    // const body = 'Dept_ID=' + this.Dept_ID.value
    //   + '&DeptName=' + this.DeptName.value
    //   + '&Sector_ID=' + this.Sector_ID.value
    // console.log(this.Dept_ID.value);
    // console.log(this.DeptName.value);
    // console.log(this.Sector_ID);
    // console.log(body);
    // if (this.Dept_ID.value === "" || this.DeptName.value === "" || this.Sector_ID.value === "") {
    //   Swal.fire(
    //     'กรุณากรอกข้อมูล',
    //     'That thing is still around?',
    //     'question'
    //   )
    // }
    // else {
    //   console.log(body);
    //   const headers = new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   });
    //   this.http
    //     .post('http://localhost/Leavewebservice/API/InsertDept.php', body, {
    //       headers: headers
    //     })
    //     .subscribe(
    //       (data: any) => {
    //         console.log(data[0]);
    //         this.department = data[0];
    //       },
    //       (error: any) => {
    //         console.log(error);
    //       }
    //     );
    //   Swal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'Your work has been saved',
    //     showConfirmButton: false,
    //     timer: 1500
    //   }).then(() => {
    //     this.http.get('http://localhost/Leavewebservice/API/getDept.php').subscribe(
    //       (data: any) => {
    //         console.log(data);
    //         this.dep = data;
    //       },
    //       (error: any) => {
    //         console.log(error);
    //       }
    //     );
    //   }).then(() => {
    //     this.Dept_ID = new FormControl('');
    //     this.DeptName = new FormControl('');
    //     this.Sector_ID = new FormControl('');
    //   })
    // }
  }

  deleteDept(id, name) {
    this.Dept_ID_show = id;
    this.DeptName_show = name;
    Swal.fire({
      title: 'คุณจะลบ' + ' ' + this.DeptName_show + ' ' + 'หรือไม่',
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
    Dept_ID, DeptName, S
  ) {

    this.Dept_ID = new FormControl(Dept_ID);
    this.DeptName = new FormControl(DeptName);
    this.Sector_ID = S
  }
  public updateDepartmant(S) {
    this.Sector_ID = S
    console.log(this.Sector_ID);

    const body =
      'Dept_ID=' + this.Dept_ID.value
      + '&DeptName=' + this.DeptName.value
      + '&Sector_ID=' + this.Sector_ID
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
