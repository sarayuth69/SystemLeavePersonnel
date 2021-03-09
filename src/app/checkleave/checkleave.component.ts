import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
// import { baseUrl } from '../baseUrl.service';
import { GlobalVariable } from '../baseUrl';
import * as moment from 'moment';
@Component({
  selector: 'app-checkleave',
  templateUrl: './checkleave.component.html',
  styleUrls: ['./checkleave.component.scss']
})
export class CheckleaveComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;

  public leavetype106;
  public leavetype104;
  public leavetypeUser = []
  pageActual: any;
  showleave_limit;
  show_year;
  limit;
  leavetypeUser_copy
  show_leave_type: any;
  maxDate
  showleave_limit_2
  Remain_show
  showleave_limit_holiday
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
    // private baseUrl: baseUrl


  ) { }
  ngOnInit() {

    let a = [
      { name: 'ลากิจ', day: 2 }, { name: 'ลากิจ1', day: 2 }
    ]

    console.log(a.filter(e => e.name == 'ลากิจ'))


    this.maxDate = moment(new Date()).format('YYYY-MM-DD')

    var day_work_month = moment(this.maxDate).startOf('day').diff(moment(localStorage.getItem('Work_day')).startOf('day'), 'months');
    console.log(day_work_month);

    const tpyeUser = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      + '&limit_ID=' + this.limit
      + '&Empstatus_ID=' + localStorage.getItem('Empstatus_ID')
      + '&Work_day=' + day_work_month
    console.log(tpyeUser);

    const headers1 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getLeave_type_User_day.php`, tpyeUser, {
        headers: headers1
      }).subscribe(
        (data: any) => {
          this.leavetypeUser_day = data;
          console.log(this.leavetypeUser_day);

        },
        (error: any) => {
        }
      )

    this.http.get(`${this.baseUrl}getleave_limit.php`).subscribe(
      (data: any) => {
        this.showleave_limit = data;
        console.log(this.showleave_limit);

      },
      (error: any) => {
        console.log(error);
      }
    )
    this.http.get(`${this.baseUrl}getleave_limit_show_limit copy.php`).subscribe(
      (data: any) => {
        this.showleave_limit_holiday = data;
      },
      (error: any) => {
        console.log(error);
      }
    )

    // const tpyeUser2 = 'Emp_ID=' + localStorage.getItem("Emp_ID")
    //   + '&limit_ID=' + this.limit
    // const tpyeUser_copy = 'Emp_ID=' + localStorage.getItem("Emp_ID")
    // console.log(tpyeUser_copy);
    // const headers2 = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });
    // this.http
    //   .post(`${this.baseUrl}getLeave_type_User_holiday.php`, tpyeUser2, {
    //     headers: headers2
    //   }).subscribe(
    //     (data: any) => {
    //       this.leavetypeUser_copy = data;
    //       this.Remain_show = this.leavetypeUser_copy[0].Remain
    //     },
    //     (error: any) => {
    //       console.log(error);
    //     }
    //   )
    const body = 'Empstatus_ID=' + localStorage.getItem("Empstatus_ID")
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getLtype.php`, body, {
        headers: headers
      }).subscribe(
        (data: any) => {
          this.leavetype106 = data;
        },
        (error: any) => {

        }

      )
  }
  limit_chack
  check_Remain = 0
  showleave_limit_chack
  chack_date_stop
  amont
  limit_ID_chack
  var_amount
  count_data
  datestop_1
  datestop_2
  Remain_show_1
  remain_cal
  date_limit
  leavetypeUser_day = []
  Name_limit_show
  show_data
  dataChanged(newObj) {
    // here comes the object as parameter
    console.log(newObj);

  }
  getlleave_user(data) {
    console.log(data);
    this.limit = data
    // this.Name_limit_show = data.Name_limit
    // console.log(this.Name_limit_show.substr(9));

    this.maxDate = moment(new Date()).format('YYYY-MM-DD')

    var day_work_month = moment(this.maxDate).startOf('day').diff(moment(localStorage.getItem('Work_day')).startOf('day'), 'months');
    console.log(day_work_month);

    const tpyeUser = 'Emp_ID=' + localStorage.getItem("Emp_ID")
      + '&limit_ID=' + this.limit
      + '&Empstatus_ID=' + localStorage.getItem('Empstatus_ID')
      + '&Work_day=' + day_work_month
    console.log(tpyeUser);

    const headers1 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getLeave_type_User_day.php`, tpyeUser, {
        headers: headers1
      }).subscribe(
        (data: any) => {
          this.leavetypeUser_day = data;
          console.log(this.leavetypeUser_day);

        },
        (error: any) => {
        }
      )

    // const tpyeUser2 = 'Emp_ID=' + localStorage.getItem("Emp_ID")
    //   + '&limit_ID=' + this.limit
    //   + '&Empstatus_ID=' + localStorage.getItem('Empstatus_ID')
    //   + '&Work_day=' + day_work_month
    //   + '&Name_limit=' + this.Name_limit_show.substr(9)

    // const headers2 = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });
    // this.http
    //   .post(`${this.baseUrl}getLeave_type_User.php`, tpyeUser2, {
    //     headers: headers2
    //   }).subscribe(
    //     (data: any) => {
    //       this.leavetypeUser = data;
    //       console.log(this.leavetypeUser);
    //       // const connect_array = [...this.leavetypeUser_day, ...this.leavetypeUser]
    //       // // this.show_data = connect_array
    //       // console.log(connect_array);
    //     },
    //     (error: any) => {
    //     }
    //   )

  }













  // getlleave_user_holiday(event) {
  //   this.limit = event
  //   const tpyeUser_copy = 'Emp_ID=' + localStorage.getItem("Emp_ID")
  //   console.log(tpyeUser_copy);
  //   const headers2 = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   });
  //   this.http
  //     .post(`${this.baseUrl}getLeave_type_User_holiday.php`, tpyeUser_copy, {
  //       headers: headers2
  //     }).subscribe(
  //       (data: any) => {
  //         this.leavetypeUser_copy = data;
  //         this.Remain_show = this.leavetypeUser_copy[0].Remain
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       }
  //     )
  //   this.http.get(`${this.baseUrl}getleave_limit_show_limit.php?limit_ID=` + this.limit).subscribe(data => {
  //     this.limit_ID_chack = data[0].limit_ID
  //     this.datestop_1 = data[0].Date_stop
  //     this.date_limit = data[0].date_limit
  //     console.log(this.date_limit);
  //     if (this.maxDate > this.datestop_1 && this.date_limit === "1" && this.leavetypeUser_copy[0].date_diff_work < 10
  //       && (this.leavetypeUser_copy[0].Empstatus_ID === "202" || this.leavetypeUser_copy[0].Empstatus_ID === "203")) {
  //       const count_body = 'vacation_Emp_ID=' + localStorage.getItem("Emp_ID")
  //         + '&vacation_limit_ID=' + this.limit_ID_chack
  //       // console.log(count_body);
  //       const headers_counth = {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //       this.http.post(`${this.baseUrl}count_vacation.php`, count_body, { 'headers': headers_counth })
  //         .subscribe((data: any) => {
  //           this.count_data = data[0].count_vacation
  //           console.log(this.count_data);
  //           if (this.count_data === "1") {
  //             this.http.get(`${this.baseUrl}getvacation.php?vacation_Emp_ID=${localStorage.getItem("Emp_ID")}&vacation_limit_ID=${this.limit_ID_chack}`).subscribe(data => {
  //               console.log(data);
  //               this.var_amount = data[0].vacation_amount
  //               this.Remain_show = (+this.leavetypeUser_copy[0].Number + +this.var_amount).toString()
  //               console.log(this.Remain_show);
  //             })
  //           }
  //           else if (this.count_data === "0") {
  //             console.log(this.Remain_show);

  //             // this.http.get(`${this.baseUrl}getvacation.php?vacation_Emp_ID=${localStorage.getItem("Emp_ID")}&vacation_limit_ID=${this.limit_ID_chack}`).subscribe(data => {
  //             //   console.log(data);
  //             //   this.var_amount = data[0].vacation_amount
  //             //   this.Remain_show = (+this.leavetypeUser_copy[0].Number + +this.var_amount).toString()
  //             //   console.log(this.Remain_show);

  //             // if (this.Remain_show > 20) {
  //             //   this.Remain_show = 20
  //             //   const body = 'Emp_ID=' + localStorage.getItem("Emp_ID")
  //             //     + '&limit_ID=' + this.limit_ID_chack
  //             //     + '&number=' + this.leavetypeUser_copy[0].Number
  //             //     + '&amount=' + this.Remain_show
  //             //   console.log(body);
  //             //   const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  //             //   this.http.post(`${this.baseUrl}Insertvacation.php`, body, { 'headers': headers })
  //             //     .subscribe((data: any) => {
  //             //       console.log(data);
  //             //     })
  //             // }
  //             // else if (this.Remain_show < 20) {
  //             //   const body = 'Emp_ID=' + localStorage.getItem("Emp_ID")
  //             //     + '&limit_ID=' + this.limit_ID_chack
  //             //     + '&number=' + this.leavetypeUser_copy[0].Number
  //             //     + '&amount=' + this.Remain_show
  //             //   console.log(body);
  //             //   const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  //             //   this.http.post(`${this.baseUrl}Insertvacation.php`, body, { 'headers': headers })
  //             //     .subscribe((data: any) => {
  //             //       console.log(data);
  //             //     })
  //             // }

  //             // }, (error) => {
  //             //   this.var_amount = 0
  //             //   this.Remain_show = (+this.leavetypeUser_copy[0].Remain + +this.var_amount).toString()
  //             //   console.log(this.Remain_show);

  //             // })
  //           }
  //         })

  //     }
  //   })
  // }
}


// const count_body = 'vacation_Emp_ID=' + localStorage.getItem("Emp_ID")
//   + '&vacation_limit_ID=' + this.limit_ID_chack
// console.log(count_body);
// const headers_counth = {
//   'Content-Type': 'application/x-www-form-urlencoded'
// }
// this.http.post(`${this.baseUrl}count_vacation.php`, count_body, { 'headers': headers_counth })
//   .subscribe((data: any) => {
//     this.count_data = data[0].count_vacation
//     if (this.count_data === "1") {
//       this.http.get(`${this.baseUrl}getvacation.php?vacation_Emp_ID=${localStorage.getItem("Emp_ID")}&vacation_limit_ID=${this.limit_ID_chack}`).subscribe(data => {
//         console.log(data);
//         this.Remain_show = (+this.leavetypeUser_copy[0].Number + +data[0].vacation_amount).toString()
//         console.log(this.Remain_show);
//       }, (error) => {

//       })

//     }
//     else {

//       const body = 'Emp_ID=' + localStorage.getItem("Emp_ID")
//         + '&limit_ID=' + this.limit_ID_chack
//         + '&number=' + this.leavetypeUser_copy[0].Number
//         + '&amount=' + this.Remain_show
//       console.log(body);
//       const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
//       this.http.post(`${this.baseUrl}Insertvacation.php`, body, { 'headers': headers })
//         .subscribe((data: any) => {
//           console.log(data);
//         })
//     }
//   })















