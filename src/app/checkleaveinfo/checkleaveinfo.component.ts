import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-checkleaveinfo',
  templateUrl: './checkleaveinfo.component.html',
  styleUrls: ['./checkleaveinfo.component.scss']
})
export class CheckleaveinfoComponent implements OnInit {
  Dept_to_head;
  seachleave;
  Emp_ID = new FormControl('');
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) { }
  ngOnInit() {
    const body = 'Dept_ID=' + localStorage.getItem("Dept_ID")
      + '&Role=' + localStorage.getItem("Role")
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/Leavewebservice/API/getDept_to_head.php', body, {
        headers: headers
      }).subscribe(
        (data: any) => {
          this.Dept_to_head = data;
        },
        (error: any) => {
          console.log(error);
        }
      )
  }
  leaveSearch(Emp_ID) {
    console.log(Emp_ID);
      this.http.get('http://localhost/Leavewebservice/API/Checkleaveinfo.php?Emp_ID=' + Emp_ID).subscribe(
        (data: any) => {
          console.log(data);
          if(data.length === 0){
              Swal.fire({
                icon: 'error',
                title: 'ไม่พบข้อมูล',
                text: 'Something went wrong!'
            })
          }else{
            this.seachleave = data;
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
