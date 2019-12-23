import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-checkdaywork',
  templateUrl: './checkdaywork.component.html',
  styleUrls: ['./checkdaywork.component.scss']
})
export class CheckdayworkComponent implements OnInit {
  public Employee;
  public chack;
  public Emp_IDshow;
  Status_Work = new FormControl('');
  Emp_ID = new FormControl('');
  Day_Work = new FormControl('');
  
  constructor(
    public http: HttpClient,
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


  chackwork(Emp_ID){
    this.Emp_IDshow = Emp_ID
    console.log(Emp_ID)
    this.http
      .get(
        'http://localhost/Leavewebservice/API/Chackwork.php?Emp_ID=' + this.Emp_IDshow
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          this.chack = data;
        },
        (error: any) => {
          console.log(error);
        }
        
      );
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'แก้ไขเรียบร้อย',
        showConfirmButton: false,
        timer: 1000
      }).then(
        this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
          (data: any) => {
            console.log(data);
            this.Employee = data;
          },
          (error: any) => {
            console.log(error);
          }
        )
      )
}

chack_No(Emp_ID){
  this.Emp_IDshow = Emp_ID
  console.log(Emp_ID)
  this.http
    .get(
      'http://localhost/Leavewebservice/API/Chackwork_No.php?Emp_ID=' + this.Emp_IDshow
    )
    .subscribe(
      (data: any) => {
        console.log(data);
        this.chack = data;
      },
      (error: any) => {
        console.log(error);
      }
      
    );
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'แก้ไขเรียบร้อย',
      showConfirmButton: false,
      timer: 1000
    }).then(
      this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
        (data: any) => {
          console.log(data);
          this.Employee = data;
        },
        (error: any) => {
          console.log(error);
        }
      )
    )
}


Add_daywork(Emp_ID,Status_Work,day){
  console.log(Emp_ID);
  console.log(Status_Work);
  console.log(day);
  if(!day){
    Swal.fire({
      icon: 'error',
      title: 'กรุณาเลือกวันที่',
      text: 'Something went wrong!',
    })
    
  }else{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'แก้ไขเรียบร้อย',
      showConfirmButton: false,
      timer: 1000
    })
  }
  
  // const body = 'Day_Work=' + this.Day_Work.value
  // + '&Status_Work=' + this.Status_Work.value
  // + '&Emp_ID=' + this.Emp_ID.value

  // console.log(body);
  // const headers = new HttpHeaders({
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // });
  // this.http
  //   .post('http://localhost/Leavewebservice/API/InsertDept.php', body, {
  //     headers: headers
  //   })
  //   .subscribe(
  //     (data: any) => {
  //       console.log(data[0]);
  //       // this.department = data[0];
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: 'Your work has been saved',
  //     showConfirmButton: false,
  //     timer: 1500
  //   }).then(()=>{
  //     this.http.get('http://localhost/Leavewebservice/API/getDept.php').subscribe(
  //       (data: any) => {
  //         console.log(data);
        
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       }
  //     );
  //   })
 
}
}
