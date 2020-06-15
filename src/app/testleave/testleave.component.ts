import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getLocaleDayNames } from '@angular/common';
import { months } from 'moment';
@Component({
  selector: 'app-testleave',
  templateUrl: './testleave.component.html',
  styleUrls: ['./testleave.component.scss']
})
export class TestleaveComponent implements OnInit {
  sector:any;
  a:any;
  Employee;
  day = new Date().getUTCDate();
  mont = new Date().getUTCMonth() +1 ;
  year = new Date().getUTCFullYear()+543;

  
  EmpName = localStorage.getItem('EmpName')
  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
      (data: any) => {
        console.log(data);
        this.Employee = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
    
  }
  print() {
    window.print();
  }
  // pdf(a){
  //   console.log(a);
  //   this.a = a;
  // const headers = new HttpHeaders({
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // });

  // this.http
  //   .post('http://localhost/Leavewebservice/API/testpdf.php', this.a, {
  //     headers: headers
  //   })
  //   .subscribe(

  //     (data: any) => {
  //       console.log(data);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
 
    // this.http.get('http://localhost/Leavewebservice/API/testpdf.php').subscribe(
    //   (data: any) => {
    //     this.sector = data;
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // )
  

}
