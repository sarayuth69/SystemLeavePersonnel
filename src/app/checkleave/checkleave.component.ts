import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
@Component({
  selector: 'app-checkleave',
  templateUrl: './checkleave.component.html',
  styleUrls: ['./checkleave.component.scss']
})
export class CheckleaveComponent implements OnInit {
  public leavetype106;
  public leavetype104;
  constructor(
    public router: Router  ,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) { }
  ngOnInit() {

    const body = 'Empstatus_ID=' + localStorage.getItem("Empstatus_ID")
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/Leavewebservice/API/getLtype.php', body, {
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
  //   if(localStorage.getItem('Empstatus_ID') === "106" ){
  //     this.http.get('http://localhost/Leavewebservice/API/getLtype_Of.php').subscribe(
  //       (data : any)=>{
  //         this.leavetype106 = data;
  //       },
  //       (error:any)=>{
  //         console.log(error);
  //       }
  //     )
  //   }else if(localStorage.getItem('Empstatus_ID') === "105" ){
  //     this.http.get('http://localhost/Leavewebservice/API/getLtype_US.php').subscribe(
  //       (data : any)=>{
  //         this.leavetype106 = data;
  //       },
  //       (error:any)=>{
  //         console.log(error);
  //       }
  //     )
  // }
  //   else if(localStorage.getItem('Empstatus_ID') === "104" ){
  //     this.http.get('http://localhost/Leavewebservice/API/getLtype_EI.php').subscribe(
  //       (data : any)=>{
  //         this.leavetype106 = data;
  //       },
  //       (error:any)=>{
  //         console.log(error);
  //       }
  //     )
  // }

}


}
