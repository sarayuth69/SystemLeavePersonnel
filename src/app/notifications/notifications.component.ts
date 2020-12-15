import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormControl } from '@angular/forms';
// import { baseUrl } from '../baseUrl.service';
import { GlobalVariable } from '../baseUrl';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;
  notifications_show
  show_check: boolean;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) { }

  ngOnInit() {
  

    const Emp_ID = 'Emp_ID=' + localStorage.getItem("Emp_ID")
    console.log(Emp_ID);
    const headers1 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}message.php`, Emp_ID, {
        headers: headers1
      }).subscribe(
        (data: any) => {
          this.notifications_show = data
                 },
        (error: any) => {
          console.log(error);
        }

      )
  }

}
