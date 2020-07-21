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
  thTime;
  thDate;
  day = new Date().getUTCDate();
  mont = new Date().getUTCMonth() +1 ;
  year = new Date().getUTCFullYear()+543;

  
  EmpName = localStorage.getItem('EmpName')
  constructor(
    public http: HttpClient
  ) { 

    this.getYear();
  }

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
  public getYear = () => {
    var now = new Date();
    var thday = new Array(
      ' อาทิตย์ ',
      ' จันทร์ ',
      ' อังคาร ',
      ' พุธ ',
      ' พฤหัส ',
      ' ศุกร์ ',
      ' เสาร์ '
    );
    var thmonth = new Array(
      ' มกราคม ',
      ' กุมภาพันธ์ ',
      ' มีนาคม ',
      ' เมษายน ',
      ' พฤษภาคม ',
      ' มิถุนายน ',
      ' กรกฎาคม ',
      ' สิงหาคม ',
      ' กันยายน ',
      ' ตุลาคม ',
      ' พฤศจิกายน ',
      ' ธันวาคม '
    );
    this.thDate =
      'วัน' +
      thday[now.getDay()] +
      'ที่' +
      ' ' +
      now.getDate() +
      ' ' +
      'เดือน' +
      thmonth[now.getMonth()] +
      ' ' +
      'พ.ศ.' +
      (0 + now.getFullYear() + 543);
    this.thTime =
      'เวลา' + ' ' +
      now.getHours()
      + ':' + now.getMinutes() + ' ' + 'น.';
  };
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
