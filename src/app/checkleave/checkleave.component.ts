import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
// import { baseUrl } from '../baseUrl.service';
import { GlobalVariable } from '../baseUrl';

@Component({
  selector: 'app-checkleave',
  templateUrl: './checkleave.component.html',
  styleUrls: ['./checkleave.component.scss']
})
export class CheckleaveComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;

  public leavetype106;
  public leavetype104;
  public leavetypeUser;
  pageActual: any;
  showleave_limit;
  show_year;
  limit;
  constructor(
    public router: Router  ,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
    // private baseUrl: baseUrl


  ) { }
  ngOnInit() {
    


    this.http.get(`${this.baseUrl}getleave_limit.php`).subscribe(
      (data: any) => {
        this.showleave_limit = data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  
    
    const tpyeUser = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      + '&limit_ID=' + this.limit
    console.log(tpyeUser);
    const headers1 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getLeave_type_User.php`, tpyeUser, {
        headers: headers1
      }).subscribe(
        (data: any) => {
          this.leavetypeUser = data;
          console.log(this.leavetypeUser);

        },
        (error: any) => {
          console.log(error);
        }

    )
    

    const body = 'Empstatus_ID=' + localStorage.getItem("Empstatus_ID")
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getLtype.php`, body, {
        headers: headers
      }).subscribe(
        (data: any) => {
          this.leavetype106 = data;
          console.log(this.leavetype106);
          
        },
        (error: any) => {
          console.log(error);
        }

      )
}
  getlleave_user(event) { 
    console.log(event);
    this.limit = event
    
    const tpyeUser = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      + '&limit_ID=' + this.limit
    console.log(tpyeUser);
    const headers1 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getLeave_type_User.php`, tpyeUser, {
        headers: headers1
      }).subscribe(
        (data: any) => {
          this.leavetypeUser = data;
          console.log(this.leavetypeUser);

        },
        (error: any) => {
          console.log(error);
        }

      )
  }

}
