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
  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
 
  }
  print() {
    window.print();
  }

}
