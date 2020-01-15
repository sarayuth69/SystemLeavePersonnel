import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { APIService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-employeeshow',
  templateUrl: './employeeshow.component.html',
  styleUrls: ['./employeeshow.component.scss']
})
export class EmployeeshowComponent implements OnInit {
  public Employee;
  public Emp_ID_show;
  public EmpName_show;
  public EmpLtype_show;
  public leavetype;
  public addLeave;
  public leave;
  public leave2;
  public seach;
  public numberleave =0;
  public positionEmp;
  Empployee: any;
  Empployee1: any;

  table1: boolean;
  table2: boolean;
  table3: boolean;
  table4: boolean;
  table5: boolean;
  table6: boolean;

  Emp_ID = new FormControl('');
  Prefix = new FormControl('');
  EmpName = new FormControl('');
  EmpLastName = new FormControl('');
  Sex = new FormControl('');
  Birthday = new FormControl('');
  Age = new FormControl('');
  Address = new FormControl('');
  Tel = new FormControl('');
  Work_day = new FormControl('');
  Duration_work = new FormControl('');
  Empstatus_ID = new FormControl('');
  Position_ID = new FormControl('');
  Dept_ID = new FormControl('');

  DeptName = new FormControl('');
  Sector = new FormControl('');
  PositionName = new FormControl('');



  Leave_ID  = new FormControl('');
  Name_Leave  = new FormControl('');
  To_Person  = new FormControl('');
  LeaveDateStart  = new FormControl('');
  LeaveDateLast  = new FormControl('');
  LeaveData  = new FormControl('');
  ContactInformation  = new FormControl('');
  LeaveTotal  = new FormControl('');
  LeaveStatus  = new FormControl('');
  UploadFile  = new FormControl('');
  Response_Time  = new FormControl('');
  Person_Code_Allow  = new FormControl('');

  Local_Emp_ID = localStorage.getItem('Emp_ID');
  Local_EmpName = localStorage.getItem('EmpName');
  Local_EmpLastName = localStorage.getItem('EmpLastName');
  Local_PositionName = localStorage.getItem('PositionName');
  Local_DeptName = localStorage.getItem('DeptName');
  Local_Sector = localStorage.getItem('Sector');

  constructor(
    public router: Router  ,
    public route: ActivatedRoute,
    public api: APIService,
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

    this.http.get('http://localhost/Leavewebservice/API/Search.php').subscribe(
      (data: any) => {
        console.log(data);
        this.seach = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    // this.http.get('http://localhost/Leavewebservice/API/getPosition.php').subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.positionEmp = data;
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );
    
    const body = 'Empstatus_ID=' + localStorage.getItem("Empstatus_ID")

      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post('http://localhost/Leavewebservice/API/getLeavetype.php', body, {
          headers: headers
        }).subscribe(
          (data: any) => {
            this.leavetype = data;
          },
          (error: any) => {
            console.log(error);
          }

        )
     
  
    // this.http.get('http://localhost/Leavewebservice/API/getDept1001.php').subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.Empployee1 = data;
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );


    if(localStorage.getItem('Role') === "5" ){
      this.table1 = false; 
      this.table2 = false; 
      this.table3 = false; 
      this.table4 = false; 
      this.table5 = true; 
      this.table6 = false; 
    }
    // else if(localStorage.getItem('Role') === "4" ){
    //   this.list = true; 
    //   this.list1 = false;
    // }
    // else if(localStorage.getItem('Role') === "3" ){
    //   this.list = true; 
    //   this.list1 = false; 
    // }
    else if(localStorage.getItem('Role') === "2" ){
      this.table1 = false; 
      this.table2 = false; 
      this.table3 = false; 
      this.table4 = true; 
      this.table5 = false; 
      this.table6 = false; 
    }
    // else if(localStorage.getItem('Role') === "1" ){
    //   this.table1 = false; 
    //   this.table2 = false; 
    //   this.table3 = false; 
    //   this.table4 = true; 
    //   this.table5 = false; 
    //   this.table6 = false; 
    // }
    else {
      this.table1 = true; 
      
    }


  }
  updateEmp(
    Emp_ID,EmpName,EmpLastName,Sex,Birthday,Age,Tel,Address,Work_day,Duration_work,Empstatus_ID,Position_ID
    ,Dept_ID
  ) {
    this.Emp_ID = new FormControl(Emp_ID);
    console.log(this.Emp_ID);
    
    // this.Prefix = new FormControl(Prefix);
    this.EmpName = new FormControl(EmpName);
    this.EmpLastName = new FormControl(EmpLastName);
    this.Sex = new FormControl(Sex);
    this.Birthday = new FormControl(Birthday);
    this.Age = new FormControl(Age);
    this.Address = new FormControl(Address);
    this.Tel = new FormControl(Tel);
    this.Work_day = new FormControl(Work_day);
    this.Duration_work = new FormControl(Duration_work);
    this.Empstatus_ID = new FormControl(Empstatus_ID);
    this.Position_ID = new FormControl(Position_ID);
    this.Dept_ID = new FormControl(Dept_ID);
  }
  public updateEmployee() {
    const body = 'Emp_ID=' + this.Emp_ID.value
    // + '&Prefix=' + this.Prefix.value
    + '&EmpName=' + this.EmpName.value
    + '&EmpLastName=' + this.EmpLastName.value
    + '&Sex=' + this.Sex.value
    + '&Birthday=' + this.Birthday.value
    + '&Age=' + this.Age.value
    + '&Address=' + this.Address.value
    + '&Tel=' + this.Tel.value
    + '&Work_day=' + this.Work_day.value
    + '&Duration_work=' + this.Duration_work.value
    + '&Empstatus_ID=' + this.Empstatus_ID.value
    + '&Position_ID=' + this.Position_ID.value
    + '&Dept_ID=' + this.Dept_ID.value;
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/Leavewebservice/API/UpdateEmployee.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.Empployee = data[0];
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
      }).then(()=>{
        this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
          (data: any) => {
            console.log(data);
            this.seach = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      })
     
  }

  
  deleteEmp(id, name) {
    this.Emp_ID_show = id;
    this.EmpName_show = name;
    
    Swal.fire({
      title: 'คุณจะลบ'+' '+this.EmpName_show+' '+'หรือไม่' ,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00FF33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'ลบเรียบร้อย',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          this.http.get('http://localhost/Leavewebservice/API/getEmployee.php').subscribe(
            (data: any) => {
              console.log(data);
              this.Employee = data;
            },
            (error: any) => {
              console.log(error);
            }
          );
        })
        
        this.http
    .get(
      'http://localhost/Leavewebservice/API/DeleteEmployee.php?Emp_ID=' + this.Emp_ID_show
    )
    .subscribe(
      (data: any) => {
        console.log(data[0]);
        this.Empployee = data[0];
      },
      (error: any) => {
        console.log(error);
      }
    );
      }
    })
  }

  LeaveEmp(
    Emp_ID,EmpName,EmpLastName,Empstatus_ID,PositionName,DeptName
  ){
    this.Emp_ID = new FormControl(Emp_ID);
    // this.Prefix = new FormControl(Prefix);
    this.EmpName = new FormControl(EmpName);
    this.EmpLastName = new FormControl(EmpLastName);
    this.Empstatus_ID = new FormControl(Empstatus_ID);
    this.PositionName = new FormControl(PositionName);
    this.DeptName = new FormControl(DeptName);

  }

  getsearch(Emp_ID) {
    console.log(Emp_ID);
    this.seach=[];
    if(this.Emp_ID.value.length === "0"){
      Swal.fire({
        icon: 'error',
        title: 'ไม่พบข้อมูล',
        text: 'Something went wrong!'
      })
    }else{
      this.http.get('http://localhost/Leavewebservice/API/Search.php?Emp_ID=' + Emp_ID).subscribe(
        (data: any) => {
          console.log(data);
          this.seach = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
   
  }

AddLeave(){
  const body = 'Leave_ID=' + this.Leave_ID.value
  + '&Emp_ID=' + this.Emp_ID.value
  + '&Name_Leave=' + this.Name_Leave.value
  + '&To_Person=' + this.To_Person.value
  + '&LeaveDateStart=' + this.LeaveDateStart.value
  + '&LeaveDateLast=' + this.LeaveDateLast.value
  + '&LeaveData=' + this.LeaveData.value   
  + '&ContactInformation=' + this.ContactInformation.value
  + '&LeaveTotal=' + this.LeaveTotal.value
  + '&LeaveStatus=' + this.LeaveStatus.value
  + '&UploadFile=' + this.UploadFile.value
  + '&Response_Time=' + this.Response_Time.value
  + '&Person_Code_Allow=' + this.Person_Code_Allow.value

  console.log(body);
  const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });
  this.http
    .post('http://localhost/Leavewebservice/API/Add_leave.php', body, {
      headers: headers
    })
    .subscribe(
      (data: any) => {
        console.log(data[0]);
        this.addLeave = data[0];
      },
      (error: any) => {
        console.log(error);
      }
    );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'ส่งการลาเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
      
    }).then(()=>{
      this.http.get('http://localhost/Leavewebservice/API/getLeave.php').subscribe(
    (data : any)=>{
      this.leave = data;
    },
    (error:any)=>{
      console.log(error);
    }
  )
    })
}


onseletday(LeaveDateStart,LeaveDateLast){
  console.log(LeaveDateStart,LeaveDateLast);
  let dayleave = moment(LeaveDateLast).startOf('day').diff(moment(LeaveDateStart).startOf('day'),'day')
  if(dayleave > 0){
    this.numberleave = dayleave;
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }
}
}
