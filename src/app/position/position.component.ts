import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  FormControl
} from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  APIService
} from '../api.service';
@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  public positionEmp;
  Position_ID = new FormControl('');
  PositionName = new FormControl('');
  Role = new FormControl('');
  public Position_ID_show;
  public PositionName_show;
  Empposition: any;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) {}

  ngOnInit() {
    this.http.get('http://localhost/Leavewebservice/API/getPosition.php').subscribe(
      (data: any) => {
        console.log(data);
        this.positionEmp = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  AddPosition() {

    const body = 'Position_ID=' + this.Position_ID.value +
      '&PositionName=' + this.PositionName.value +
      '&Role=' + this.Role.value

    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  //   if(this.Position_ID.value === Position_ID.value){
  //     Swal.fire({
  //       type: 'error',
  //       title: 'ข้อมูลไม่ถูกต้อง',
  //       text: 'Something went wrong!'
  //     })
  //  } else{
    this.http
    .post('http://localhost/Leavewebservice/API/InsertPosition.php', body, {
      headers: headers
    })
    .subscribe(
      
      (data: any) => {
        console.log(data);
        this.Empposition = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'เพิ่มตำแหน่งเรียบร้อย',
    showConfirmButton: false,
    timer: 1500

  }).then(()=>{
    this.http.get('http://localhost/Leavewebservice/API/getPosition.php').subscribe(
      (data: any) => {
        console.log(data);
        this.positionEmp = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  })
  //  }
  }

  deletePosition(id, name) {
    this.Position_ID_show = id;
    this.PositionName_show = name;
    Swal.fire({
      title: 'คุณจะลบ' + ' ' + this.PositionName_show + ' ' + 'หรือไม่',
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
          this.http.get('http://localhost/Leavewebservice/API/getPosition.php').subscribe(
            (data: any) => {
              console.log(data);
              this.positionEmp = data;
            },
            (error: any) => {
              console.log(error);
            }
          );
        })

        this.http
          .get(
            'http://localhost/Leavewebservice/API/DeletePosition.php?Position_ID=' + this.Position_ID_show
          )
          .subscribe(
            (data: any) => {
              console.log(data[0]);
              this.Empposition = data[0];
            },
            (error: any) => {
              console.log(error);
            }
          );
       
      }
    })
  }

  updatePosition(
    Position_ID, PositionName,Role
  ) {
    this.Position_ID = new FormControl(Position_ID);
    this.PositionName = new FormControl(PositionName);
    this.Role = new FormControl(Role);
  }
  public updateEmpposition() {
    const body =
      'Position_ID=' + this.Position_ID.value +
      '&PositionName=' + this.PositionName.value+
      '&Role=' + this.Role.value
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/Leavewebservice/API/UpdatePosition.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.Empposition = data[0];
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
      timer: 1500
    }).then(()=>{
      this.http.get('http://localhost/Leavewebservice/API/getPosition.php').subscribe(
        (data: any) => {
          console.log(data);
          this.positionEmp = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    })
  }

}
