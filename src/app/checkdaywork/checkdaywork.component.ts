import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// import { setTimeout } from 'timers';
@Component({
  selector: 'app-checkdaywork',
  templateUrl: './checkdaywork.component.html',
  styleUrls: ['./checkdaywork.component.scss']
})
export class CheckdayworkComponent implements OnInit {
  baseUrl = 'https://www.rmuti.ac.th/student/sarayuth.kr/Leavewebservice/API/';
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
  
  constructor(
    public http: HttpClient,
  ) { }

  ngOnInit() {
    // setTimeout(() => {
    //   for (let index = 0; index < this.Employee.length; index++) {
    //     const comin = document.getElementById(`comin${index}`) as HTMLInputElement;
    //     comin.checked = false;
    //     const notcomin = document.getElementById(`notcomin${index}`) as HTMLInputElement;
    //     notcomin.checked = false;
    //     // document.getElementById(`comin${index}`).checked  = false;
    //     // document.getElementById(`notcomin${index}`).checked = false;

    //   }
    // }, 2000);

    this.http.get(`${this.baseUrl}getEmployee_daywork.php`).subscribe(
      (data: any) => {
        console.log(data);
        this.Employee = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  //   chackwork(Emp_ID){
  //     this.Emp_IDshow = Emp_ID
  //     console.log(Emp_ID)
  //     this.http
  //       .get(
  //         'http://localhost/Leavewebservice/API/Chackwork.php?Emp_ID=' + this.Emp_IDshow
  //       )
  //       .subscribe(
  //         (data: any) => {
  //           console.log(data);
  //           this.chack = data;
  //         },
  //         (error: any) => {
  //           console.log(error);
  //         }

  //       );
  //       Swal.fire({
  //         position: 'center',
  //         icon: 'success',
  //         title: 'แก้ไขเรียบร้อย',
  //         showConfirmButton: false,
  //         timer: 1000
  //       }).then(
  //         this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
  //           (data: any) => {
  //             console.log(data);
  //             this.Employee = data;
  //           },
  //           (error: any) => {
  //             console.log(error);
  //           }
  //         )
  //       )
  // }

  // chack_No(Emp_ID){
  //   this.Emp_IDshow = Emp_ID
  //   console.log(Emp_ID)
  //   this.http
  //     .get(
  //       'http://localhost/Leavewebservice/API/Chackwork_No.php?Emp_ID=' + this.Emp_IDshow
  //     )
  //     .subscribe(
  //       (data: any) => {
  //         console.log(data);
  //         this.chack = data;
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       }

  //     );
  //     Swal.fire({
  //       position: 'center',
  //       icon: 'success',
  //       title: 'แก้ไขเรียบร้อย',
  //       showConfirmButton: false,
  //       timer: 1000
  //     }).then(
  //       this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
  //         (data: any) => {
  //           console.log(data);
  //           this.Employee = data;
  //         },
  //         (error: any) => {
  //           console.log(error);
  //         }
  //       )
  //     )
  // }


  Add_daywork(E, S, D,T) {
    this.Emp_ID = E;
    this.Status_Work = S;
    this.Day_Work = D;
    this.textdata = T;
    console.log(this.Emp_ID);
    console.log(this.Status_Work);
    console.log(this.Day_Work);
    console.log(this.textdata);
    if (!D) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันที่',
        text: 'Something went wrong!',
      })
    }
    else {
      const body = 'Emp_ID=' + this.Emp_ID
        + '&Status_Work=' + this.Status_Work
        + '&Day_Work=' + this.Day_Work
        + '&Data=' + this.textdata

      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post('http://localhost/Leavewebservice/API/AddWorkTime.php', body, {
          headers: headers
        })
        .subscribe(
          (data: any) => {
            console.log(data[0]);
            // this.department = data[0];
          },
          (error: any) => {
            console.log(error);
          }
        );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      // .then(()=>{
      //   this.http.get('http://localhost/Leavewebservice/API/getDept.php').subscribe(
      //     (data: any) => {
      //       console.log(data);

      //     },
      //     (error: any) => {
      //       console.log(error);
      //     }
      //   );
      // })
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
      console.log("asdasdsa");

    }
    console.log(a);

  }
  checkall() {
    for (let index = 0; index < this.Employee.length; index++) {
      const comin = document.getElementById(`comin${index}`) as HTMLInputElement;
      comin.checked = true;
      // document.getElementById(`comin${index}`).checked = true;

    }
  }
  checknotall() {
    for (let index = 0; index < this.Employee.length; index++) {
      const notcomin = document.getElementById(`notcomin${index}`) as HTMLInputElement;
      notcomin.checked = true;
      // document.getElementById(`notcomin${index}`).checked = true;

    }
  }
  add_all(Day_Work) {



    for (let index = 0; index < this.Employee.length; index++) {
      const Emp_ID = document.getElementById(`Emp_ID${index}`) as HTMLInputElement;
      Emp_ID.value;
    //  console.log(Emp_ID.value);
    const textdata = document.getElementById(`textdata${index}`) as HTMLInputElement;
    textdata.value;
    console.log(textdata.value);
    

      // var Emp_ID = document.getElementById(`Emp_ID${index}`).value;

      const Status_Work = document.getElementsByName(`radio${index}`)[0] as HTMLInputElement;
     const s = Status_Work.checked ? "มาทำงาน" : "ไม่มาทำงาน";
      // var Status_Work = document.getElementsByName(`radio${index}`)[0].checked ? "มาทำงาน" : "ไม่มาทำงาน";
      // console.log('s',Status_Work);

      // var Day_Work =  document.getElementById(`Day_Work${index}`).value;
       this.Add_daywork(Emp_ID.value, s, Day_Work ,textdata.value);
    }

  }

  checkradio(Day_Work) {
    
    if (!Day_Work) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาเลือกวันที่',
        text: 'Something went wrong!',
      })
    }
    else {
      var radiocheck = 0;
   
      
      for (let index = 0; index < this.Employee.length; index++) {
   
        const comin = document.getElementById(`comin${index}`) as HTMLInputElement;
        // comin.checked ;
        // console.log(comin.checked);
        
        const notcomin = document.getElementById(`notcomin${index}`) as HTMLInputElement;
        // notcomin.checked ;
        // console.log(notcomin.checked);
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
              title: 'เลือกไห้ครบ',
              text: 'Something went wrong!',
            })
          }
        }
      }
    }


    // var radiocheck =0;
    // for (let index = 0; index < this.Employee.length; index++) {
    //   // console.log(document.getElementById(`comin${index}`).checked);
    //   try{
    //     if(( document.getElementById(`comin${index}`).checked === true && document.getElementById(`notallcomin${index}`).checked === false)
    //     || ( document.getElementById(`comin${index}`).checked === false && document.getElementById(`notallcomin${index}`).checked === true) ){
    //       // radiocheck++;
    //      console.log(document.getElementById(`comin${index}`).checked  , document.getElementById(`notallcomin${index}`).checked );

    //     }


    //   if(this.Employee.length+1 === index){
    //     if(radiocheck==0){
    //       this.add_all(Day_Work);
    //     }
    //   }
    // }catch{

    //   console.log('t',radiocheck);
    //   radiocheck++;
    // }
    //   console.log(document.getElementById(`comin${index}`).value  , document.getElementById(`notallcomin${index}`).value );



    // }

  }
}
