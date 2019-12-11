import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }
  show : boolean  
  emp5 : boolean 
  emp4 : boolean 
  emp3 : boolean 
  emp2 : boolean 
  emp1 : boolean 
  show1 : boolean 
  test  = localStorage.getItem('EmpName');
  test1  = localStorage.getItem('EmpLastName');

  ngOnInit() {

    
    if(localStorage.getItem('Role') === "6" ) {
      this.show = true; 
      // this.emp5 = false; 
      // this.emp3 = false; 
      
    } else if(localStorage.getItem('Role') === "5" ) {
      this.emp5 = true; 
      // this.show = false; 
      // this.emp3 = false; 
      
    } else if(localStorage.getItem('Role') === "4" ) {
      this.emp4 = true; 
      // this.show = false; 
      // this.emp3 = false; 
  
    } else if(localStorage.getItem('Role') === "3" ) {
      this.emp3 = true; 
      // this.emp5 = false; 
      // this.show = false; 
      // this.emp3 = false; 
  
    } else if(localStorage.getItem('Role') === "2" ) {
      // this.emp4 = false; 
      // this.emp5 = false; 
      // this.show = false; 
      this.emp2 = true; 
  
    } else if(localStorage.getItem('Role') === "1" ) {
      // this.emp4 = false; 
      // this.emp5 = false; 
      // this.show = false; 
      this.emp1 = true; 
  
    } 
   
  }
  clearUser(){
    localStorage.clear();
      setTimeout(() => {
      this.router.navigate(['/login']);
      }, 2000);
  }
}
