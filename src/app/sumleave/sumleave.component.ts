import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { GlobalVariable } from '../baseUrl';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { style } from '@angular/animations';

import * as Chart from 'chart.js'

@Component({
  selector: 'app-sumleave',
  templateUrl: './sumleave.component.html',
  styleUrls: ['./sumleave.component.scss']
})
export class SumleaveComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;

  public myYear = new Date().getFullYear();
  public myMonth = new Date().getMonth();
  public myDay = new Date().getDay();
  public Employee;
  public countleave;
  public sumleave;
  public searchdayleave;
  Day_leave_start: any;
  Day_leave_last: any;
  Day_leave_start_chack: any;
  Day_leave_last_chack: any;
  Progress_with: any;
  Emp_ID_show;


  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    protected http: HttpClient
    // private baseUrl : baseUrl



  ) { }

  ngOnInit() {
    // this.http.get('http://localhost/Leavewebservice/API/getLtype_Of.php').subscribe(
    //       (data: any) => {
    //         this.countleave = data;
    //       },
    //       (error: any) => {
    //         console.log(error);
    //       }
    //     )
    this.http.get(`${this.baseUrl}getEmployee.php`).subscribe(
      (data: any) => {
        console.log(data);
        this.Employee = data;
      },
      (error: any) => {
        console.log(error);
      }
    );


  }
  canvas: any;

  test1 = []
  test2 = []

  ngAfterViewInit(sumleave) {
    console.log(sumleave);

    // this.chart_show = chart
    this.test1.forEach(element => {
      this.test1.splice(element.LTypeName)
    });
    this.test2.forEach(element => {
      this.test2.splice(element.sum_total)
    });
    
    sumleave.forEach(element => {
      console.log(element);
      this.test1.push(element.LTypeName)
      this.test2.push(element.sum_total)
    });


    this.canvas = document.getElementById('myChart');
    // this.ctx = this.canvas.getContext(this.chart_show);
    var myChart = new Chart(this.canvas, {
      type: 'pie',
      data: {
        labels: this.test1,

        datasets: [{

          data: this.test2,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(100, 180, 50, 1)',
            'rgba(97, 106, 107, 1)',
            'rgba(72, 140, 19, 1)',
            'rgba(231, 76, 60, 1)',
            'rgba(178, 186, 187, 1)',
            'rgba(23, 32, 42, 1)',
            'rgba(125, 102, 8, 1)',
            'rgba(54, 70, 90, 1)',
          ],

          borderWidth: 1
        }]
      },
      options: {
        legend: {
          responsive: false,
          display: true

        }
      },

    }

    );



  }


  filterChanged(selectedValue: string) {
    console.log('value is ', selectedValue);

  }
  chart: any;
  chart_show: any;
  sumleave_show(Emp_ID) {

    this.Emp_ID_show = Emp_ID
    console.log(Emp_ID);

    this.http.get(`${this.baseUrl}getSumleave.php?Emp_ID=${this.Emp_ID_show}`).subscribe(
      (data: any) => {
        console.log(data);
        this.sumleave = data;
        // this.chart = "2d"
        this.ngAfterViewInit(this.sumleave)
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getsearchdayleave(Day_leave_start, Day_leave_last) {
    this.Day_leave_start_chack = Day_leave_start
    this.Day_leave_last_chack = Day_leave_last
    // const body ='Day_leave_start=' + this.Day_leave_start_chack
    //   + '&Day_leave_last=' + this.Day_leave_last_chack
    // console.log(body);
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });
    // this.http
    //   .post(`${this.baseUrl}searchdayleave.php`, body, {
    //     headers: headers
    //   })
    //   .subscribe(
    //     (data: any) => {
    //       console.log(data);
    //       this.searchdayleave = data;
    //     },
    //     (error: any) => {
    //       console.log(error);
    //     }
    //   );

    if (!Day_leave_start) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันที่',
        text: 'Something went wrong!'
      })
    } else {
      this.http.get(`${this.baseUrl}searchdayleave.php?Day_leave_start=${this.Day_leave_start_chack}&Day_leave_last=${this.Day_leave_last_chack}`).subscribe(
        (data: any) => {
          console.log(data);

          if (data.length === 0) {
            Swal.fire({
              icon: 'error',
              title: 'ไม่พบข้อมูล',
              text: 'Something went wrong!'
            })
          }
          else {
            this.searchdayleave = data;
          }
        },
        (error: any) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'ไม่พบข้อมูล',
            text: 'Something went wrong!'
          })
        }
      );
    }
  }
}
