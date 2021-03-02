import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { GlobalVariable } from '../baseUrl';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { style } from '@angular/animations';

import * as Chart from 'chart.js'
import * as moment from 'moment';

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
  show_char: boolean;
  seachleave: any;
  btnDisable_Doc: boolean = true
  showleave_limit
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    protected http: HttpClient
    // private baseUrl : baseUrl



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
    try {
      this.test1.forEach(element => {
        this.test1.splice(element.LTypeName)
      });
    } catch (error) {

    }
    try {
      this.test2.forEach(element => {
        this.test2.splice(element.sum_total)
      });

    } catch (error) {

    }
    try {
      sumleave.forEach(element => {
        console.log(element.sum_total);
        this.test1.push(element.LTypeName)
        this.test2.push(element.sum_total)

      });
    } catch (error) {

    }
    this.canvas = document.getElementById('myChart');
    if (this.test1.length > 1 && this.test2.length > 1) {
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
            responsive: true,
            display: true.valueOf,
            maintainAspectRatio: false
          }
        },

      }
      );
    }
    else {
      this.canvas = document.getElementById('123');
    }

  }

  chart: any;
  chart_show: any;
  maxDate
  limit
  Empstatus_ID
  Employee_chack
  sumleave_show(Emp_ID, limit_ID) {
    this.maxDate = moment(new Date()).format('YYYY-MM-DD')
    this.http.get(`${this.baseUrl}getEmployee copy.php?Emp_ID=` + Emp_ID).subscribe(
      (data: any) => {
        console.log(data);
        try {
          this.Employee_chack = data;
          this.Empstatus_ID = data[0].Empstatus_ID
          var day_work_month = moment(this.maxDate).startOf('day').diff(moment(this.Employee_chack[0].Work_day).startOf('day'), 'months');
          console.log(day_work_month);
          const tpyeUser = 'Emp_ID=' + Emp_ID
            + '&limit_ID=' + limit_ID
            + '&Empstatus_ID=' + this.Empstatus_ID
            + '&Work_day=' + day_work_month
          const headers1 = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          this.http
            .post(`${this.baseUrl}getSumleave.php`, tpyeUser, {
              headers: headers1
            }).subscribe(
              (data: any) => {
                this.sumleave = data
                this.ngAfterViewInit(this.sumleave)
              },
              (error: any) => {
              }
            )
        } catch (e) {
        }

      },
      (error: any) => {
        console.log(error);
      }
    );


    // this.http.get(`${this.baseUrl}getSumleave.php?Emp_ID=${this.Emp_ID_show}`).subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.sumleave = data;
    //     // this.chart = "2d"
    //     this.ngAfterViewInit(this.sumleave)
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );
  }

  getsearchdayleave(Day_leave_start, Day_leave_last) {
    this.Day_leave_start_chack = Day_leave_start
    this.Day_leave_last_chack = Day_leave_last

    if (!Day_leave_start) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันที่',
        text: ''
      })
    } else {
      this.http.get(`${this.baseUrl}searchdayleave.php?Day_leave_start=${this.Day_leave_start_chack}&Day_leave_last=${this.Day_leave_last_chack}`).subscribe(
        (data: any) => {
          console.log(data);
          try {
            if (data.length === 0) {
              Swal.fire({
                icon: 'error',
                title: 'ไม่พบข้อมูล',
                text: ''
              })
            }
            else {
              this.searchdayleave = data;
            }
          } catch (e) {

          }

        },
        (error: any) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'ไม่พบข้อมูล',
            text: ''
          })
        }
      );
    }
  }



  Leave_ID_show: any;
  Name_Leave_show: any;
  To_Person_show: any;
  Prefix_show: any;
  EmpName_show: any;
  EmpLastName_show: any;
  PositionName_show: any;
  DeptName_show: any;
  SectorName_show: any;
  LTypeName_show: any;
  LeaveData_show: any;
  ContactInformation_show: any;
  employee_show: any;
  LeaveDateStart_show: any;
  LeaveDateLast_show: any;
  LeaveTotal_show: any;
  LeaveStatus_Name_show: any;
  LeaveStatus_Document_show: any;
  Leave_characteristics_dateStart_show: any;
  Leave_characteristics_dateLast_show: any;
  file_names_show: any;
  btn_delete: boolean;
  show_data(Leave_ID, Name_Leave, To_Person, Emp_ID, EmpName, EmpLastName, PositionName, DeptName,
    SectorName, LTypeName, LeaveData, ContactInformation, employee, LeaveDateStart, LeaveDateLast,
    LeaveTotal,
    LeaveStatus_Name, LeaveStatus_Document,
    Leave_characteristics_dateStart, Leave_characteristics_dateLast, file_names) {
    this.Leave_ID_show = Leave_ID
    this.Name_Leave_show = Name_Leave
    this.To_Person_show = To_Person
    this.Emp_ID_show = Emp_ID
    this.EmpName_show = EmpName
    this.EmpLastName_show = EmpLastName
    this.PositionName_show = PositionName
    this.DeptName_show = DeptName
    this.SectorName_show = SectorName
    this.LTypeName_show = LTypeName
    this.LeaveData_show = LeaveData
    this.ContactInformation_show = ContactInformation
    this.employee_show = employee
    this.LeaveDateStart_show = LeaveDateStart
    this.LeaveDateLast_show = LeaveDateLast
    this.LeaveTotal_show = LeaveTotal
    this.LeaveStatus_Name_show = LeaveStatus_Name
    this.LeaveStatus_Document_show = LeaveStatus_Document
    this.Leave_characteristics_dateStart_show = Leave_characteristics_dateStart
    this.Leave_characteristics_dateLast_show = Leave_characteristics_dateLast
    this.file_names_show = file_names
    if (localStorage.getItem('privilege') === "A") {
      this.btn_delete = true
    }
    else {
      this.btn_delete = false
    }

  }

  updateleave_status(LeaveStatus_Document) {
    const body = 'leave_ID=' + this.Leave_ID_show
      + '&LeaveStatus_Document=' + LeaveStatus_Document
    console.log(body);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http.post(`${this.baseUrl}Updatestatus_doc.php`, body, {
      headers: headers
    }).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'บันทึกเรียบร้อย',
          text: ''
        }).then(() => {
          this.http.get(`${this.baseUrl}Checkleaveinfo.php?Emp_ID=${this.Emp_ID_show}&Day_leave_start=${this.Day_leave_start_chack}&Day_leave_last=${this.Day_leave_last_chack}`).subscribe(
            (data: any) => {
              console.log(data);
              if (data.length === 0) {
                Swal.fire({
                  icon: 'error',
                  title: 'ไม่พบข้อมูล',
                  text: 'Something went wrong!'
                })
              } else {
                this.seachleave = data;
                this.getsearchdayleave(this.Day_leave_start_chack, this.Day_leave_last_chack);

              }
            },
            (error: any) => {
              Swal.fire({
                icon: 'error',
                title: 'ไม่พบข้อมูล',
                text: 'Something went wrong!'
              })
            }
          );

        })
      }, (error: any) => {
        console.log(error);

      }
    )
    // setTimeout(() => {

    // }, 200);

  }


  delete_leave(Leave_ID, EmpName, EmpLastName, LTypeName_show) {

    Swal.fire({
      title: 'คุณจะลบ ' + LTypeName_show + ' ของ' + ' ' + EmpName + ' ' + EmpLastName + ' ' + 'หรือไม่',
      text: "",
      icon: 'warning',
      confirmButtonText: 'ตกลง',
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'ยกเลิก',
      showCancelButton: true,
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'ลบการลาเรียบร้อย',
          '',
          'success'
        ).then(() => {
          this.http
            .get(
              `${this.baseUrl}Delete_leave_user.php?Leave_ID=` + Leave_ID
            )
            .subscribe(
              (data: any) => {
                console.log(data[0]);
                this.seachleave = data[0];
                this.getsearchdayleave(this.Day_leave_start_chack, this.Day_leave_last_chack);
              },
              (error: any) => {


              }
            );
        })

      }
    })

  }
}
