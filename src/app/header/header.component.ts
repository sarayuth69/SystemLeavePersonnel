import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  baseUrl = 'https://www.rmuti.ac.th/student/sarayuth.kr/Leavewebservice/API/';
  http: any;
  public seach;
  constructor(public router: Router) { }
  show : boolean  
  emp5 : boolean 
  emp4 : boolean 
  emp3 : boolean 
  emp2 : boolean 
  emp1 : boolean 
  show1 : boolean 
  EmpName  = localStorage.getItem('EmpName');
  EmpLastName  = localStorage.getItem('EmpLastName');
  PositionName  = localStorage.getItem('PositionName');
  EmpstatusName  = localStorage.getItem('EmpstatusName');
  Emp_ID = new FormControl('');
  ngOnInit() {

    
    if(localStorage.getItem('Role') === "6" ) {
      this.show = true; 
      // this.emp5 = false; 
      // this.emp3 = false; 
      
    } else if(localStorage.getItem('Role') === "1" ) {
      this.emp1 = true; 
      // this.show = false; 
      // this.emp3 = false; 
      
    } else if(localStorage.getItem('Role') === "2" ) {
      this.emp2 = true; 
      // this.show = false; 
      // this.emp3 = false; 
  
    } else if(localStorage.getItem('Role') === "3" ) {
      this.emp3 = true; 
      // this.emp5 = false; 
      // this.show = false; 
      // this.emp3 = false; 
  
    } else if(localStorage.getItem('Role') === "4" ) {
      // this.emp4 = false; 
      // this.emp5 = false; 
      // this.show = false; 
      this.emp4 = true; 
  
    } else if(localStorage.getItem('Role') === "5" ) {
      // this.emp4 = false; 
      // this.emp5 = false; 
      // this.show = false; 
      this.emp5 = true; 
  
    } 
   
  }
  clearUser(){
    localStorage.clear();
      setTimeout(() => {
      this.router.navigate(['/login']);
      }, 2000);
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
      this.http.get(`${this.baseUrl}Search.php?Emp_ID=` + Emp_ID).subscribe(
        (data: any) => {
          console.log(data);
          // this.seach = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
   
  }
}
