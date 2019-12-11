import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import { FormControl } from '@angular/forms';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public Emp;

  Emp_ID = new FormControl('');
  Prefix = new FormControl('');
  EmpName = new FormControl('');
  EmpLastName = new FormControl('');
  Sex = new FormControl('');
  Birthday = new FormControl('');
  Age = new FormControl('');
  Address = new FormControl('');
  Tel = new FormControl('');
  Username = new FormControl('');
  Password = new FormControl('');
  Work_day = new FormControl('');
  Duration_work = new FormControl('');
  Empstatus_ID = new FormControl('');
  Position_ID = new FormControl('');
  Dept_ID = new FormControl('');
  Empployee: any;

  constructor(public router: Router  ,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,) { }

  ngOnInit() {

  }
  AddEmployee() {
    const body = 'Emp_ID=' + this.Emp_ID.value
    + '&Prefix=' + this.Prefix.value
    + '&EmpName=' + this.EmpName.value
    + '&EmpLastName=' + this.EmpLastName.value
    + '&Sex=' + this.Sex.value
    + '&Birthday=' + this.Birthday.value
    + '&Age=' + this.Age.value
    + '&Address=' + this.Address.value
    + '&Tel=' + this.Tel.value
    + '&Username=' + this.Username.value
    + '&Password=' + this.Password.value
    + '&Work_day=' + this.Work_day.value
    + '&Duration_work=' + this.Duration_work.value
    + '&Empstatus_ID=' + this.Empstatus_ID.value
    + '&Position_ID=' + this.Position_ID.value
    + '&Dept_ID=' + this.Dept_ID.value
  
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/Leavewebservice/API/InsertEmployee.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.Empployee = data[0];
          if(data == 0){
            Swal.fire({
              position: 'top-end',
              type: 'error',
              title: 'เพิ่มบุคลากรไม่สำเร็จ',
              showConfirmButton: false,
              timer: 1500
              
            })
          }else{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'เพิ่มบุคลากรเรียบร้อย',
              showConfirmButton: false,
              timer: 1500         
            }).then(()=>{
              setTimeout(() => {
                this.router.navigate(['/login']);
              }, 2000);
            })
         
          }
        
        },
        (error: any) => {
          console.log(error);
        
        }
      );
     
  
      
  }

}
