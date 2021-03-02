import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
//  import { setTimeout } from 'timers';
// import { baseUrl } from '../baseUrl.service';
import { GlobalVariable } from '../baseUrl';
import * as moment from 'moment';

@Component({
  selector: 'app-checkdaywork',
  templateUrl: './checkdaywork.component.html',
  styleUrls: ['./checkdaywork.component.scss']
})
export class CheckdayworkComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;

  public Employee;
  public chack;
  public Emp_IDshow;
  public E;
  public S;
  public D;
  Status_Work = new FormControl('');
  Emp_ID = new FormControl('');
  Day_Work = new FormControl('');
  textdata = new FormControl('');
  date_BusinessDay = new FormControl('');
  message
  maxDate
  date = moment(new Date()).format('YYYY-MM-DD')
  text_test
  getdaywork_chack
  constructor(
    public http: HttpClient,
    // private baseUrl: baseUrl
  ) { }

  ngOnInit() {

    this.maxDate = moment(new Date()).format('YYYY-MM-DD')
    const body = 'Day_Work=' + this.maxDate
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}getEmployee_daywork.php`, body, {
        headers: headers
      }).subscribe(
        (data: any) => {
          try {
            this.Employee = data;
            console.log(this.Employee.officiate_Day_Work);
            if (this.Employee[0].officiate_Day_Work.length > 0) {
              this.chack_day_save = true
              this.chack_day_nosave = false
            }
            else {
              this.chack_day_save = false
              this.chack_day_nosave = true
            }
            // officiate_Day_Work
            for (let index = 0; index <= this.Employee.length; index++) {
              console.log(this.Employee[index].LTypeName.length);
            }
          } catch (e) {
          }
        },
        (error: any) => {
        }
      )

  }
  chack_day_save: boolean;
  chack_day_nosave: boolean;
  onOptionsSelected(value) {
    var moment = require('moment-business-days');
    if (!moment(value).isBusinessDay()) {
      Swal.fire({
        icon: 'error',
        title: 'ไม่สามารถบันทึกตรงกับวันหยุดราชการได้',
        text: '',

      })
      this.date_BusinessDay = new FormControl('')
    } else {

      const body = 'Day_Work=' + value
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}getEmployee_daywork.php`, body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            try {
              this.Employee = data;
              console.log(this.Employee);

              console.log(this.Employee.officiate_Day_Work);
              if (this.Employee[0].officiate_Day_Work.length > 0) {
                this.chack_day_save = true
                this.chack_day_nosave = false
              }
              else {
                this.chack_day_save = false
                this.chack_day_nosave = true
              }

            } catch (e) {
            }
          },
          (error: any) => {
          }
        )
    }

  }

  add(Day_Work) {

    this.http.get(`${this.baseUrl}countdaywork.php?day_work=` + Day_Work).subscribe((data: any) => {
      console.log(data[0]);
      if (data[0].count_data > 0) {
        Swal.fire({
          icon: 'error',
          title: 'ไม่สามารถบันทึกวันมาทำงานซ้ำกันได้'

        })
      } else {
        this.checkradio(Day_Work)
      }

    }, (error: any) => {
      console.log(error);

    })

  }
  Add_daywork(E, S, D, T) {

    this.Emp_ID = E;
    this.Status_Work = S;
    if (S === "มาทำงาน") {
      this.message = 1
    }
    else if (S === "ไม่มาทำงาน" && T.length > 0) {
      this.message = 1
    }
    else if (S === "ไม่มาทำงาน" && T.length <= 0) {
      this.message = 0
    }
    this.Day_Work = D;
    this.textdata = T;
    if (!D) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันที่'

      })
    }
    else {
      const body = 'Emp_ID=' + this.Emp_ID
        + '&Status_Work=' + this.Status_Work
        + '&Day_Work=' + this.Day_Work
        + '&Data=' + this.textdata
        + '&message=' + this.message

      // console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post(`${this.baseUrl}AddWorkTime.php`, body, {
          headers: headers
        })
        .subscribe(
          (data: any) => {

          },
          (error: any) => {

          }
        );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'บันทึกเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        window.location.reload();
      })
    }
  }

  chack1(a, s) {

    if (a === true) {
      a = "มาทำงาน"
    }
    else if (a === false) {
      a = "ไม่มาทำงาน"
    }
    else if (a === null) {

    }


  }
  checkall() {
    for (let index = 0; index < this.Employee.length; index++) {
      const comin = document.getElementById(`comin${index}`) as HTMLInputElement;
      comin.checked = true;

    }
  }
  checknotall() {
    for (let index = 0; index < this.Employee.length; index++) {
      const notcomin = document.getElementById(`notcomin${index}`) as HTMLInputElement;
      notcomin.checked = true;

    }
  }
  add_all(Day_Work) {



    for (let index = 0; index < this.Employee.length; index++) {
      const Emp_ID = document.getElementById(`Emp_ID${index}`) as HTMLInputElement;
      Emp_ID.value;

      const textdata = document.getElementById(`textdata${index}`) as HTMLInputElement;
      textdata.value;

      const Status_Work = document.getElementsByName(`radio${index}`)[0] as HTMLInputElement;
      const s = Status_Work.checked ? "มาทำงาน" : "ไม่มาทำงาน";

      this.Add_daywork(Emp_ID.value, s, Day_Work, textdata.value);
    }

  }

  checkradio(Day_Work) {

    if (!Day_Work) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันที่',
        text: '',
      })
    }
    else {
      var radiocheck = 0;
      for (let index = 0; index < this.Employee.length; index++) {
        const comin = document.getElementById(`comin${index}`) as HTMLInputElement;
        const notcomin = document.getElementById(`notcomin${index}`) as HTMLInputElement;
        if (comin.checked == false && notcomin.checked == false) {
          console.log(this.Employee.length);
          console.log(index);
          radiocheck++;
        }
        if (this.Employee.length - 1 == index) {
          if (radiocheck == 0) {
            this.add_all(Day_Work);
          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'กรุณาเลือกไห้ครบ',
              text: '',
            })
          }
        }
      }
    }




  }
}
