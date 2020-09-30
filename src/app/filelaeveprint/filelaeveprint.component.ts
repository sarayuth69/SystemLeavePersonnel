import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  FormControl
} from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
@Component({
  selector: 'app-filelaeveprint',
  templateUrl: './filelaeveprint.component.html',
  styleUrls: ['./filelaeveprint.component.scss']
})
export class FilelaeveprintComponent implements OnInit {
public Employee;
  route: any;
  name: any;
  Ltype_4007 : boolean;
  Ltype : boolean;

  constructor(
    public http: HttpClient,
    public router : Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['Ltype_ID'];
     console.log(this.name);
     
    });
 
  }
  print() {
    window.print();
  }

}
