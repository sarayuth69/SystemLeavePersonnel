import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-testleave',
  templateUrl: './testleave.component.html',
  styleUrls: ['./testleave.component.scss']
})
export class TestleaveComponent implements OnInit {
  sector:any;
  a:any;
  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
   

  }

  pdf(a){
    console.log(a);
    this.a = a;
  const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  this.http
    .post('http://localhost/Leavewebservice/API/testpdf.php', this.a, {
      headers: headers
    })
    .subscribe(

      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
 
    // this.http.get('http://localhost/Leavewebservice/API/testpdf.php').subscribe(
    //   (data: any) => {
    //     this.sector = data;
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // )
  }

}
