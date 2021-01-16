import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormControl } from '@angular/forms';
import { GlobalVariable } from '../baseUrl';


@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {
  public baseUrl = GlobalVariable.BASE_API_URL;

  public sector;
  public Sector_ID_show;
  public SectorName_show;
  Sector_ID = new FormControl('');
  SectorName = new FormControl('');
  constructor(
    public http: HttpClient,
    // private baseUrl : baseUrl


  ) { }

  ngOnInit() {
    this.http.get(`${this.baseUrl}getsector.php`).subscribe(
      (data: any) => {
        this.sector = data;
      },
      (error: any) => {
        console.log(error);
      }
    )

  }

  Addsector() {
    const body = 'Sector_ID=' + this.Sector_ID.value
      + '&SectorName=' + this.SectorName.value
    if (this.Sector_ID.value === "" || this.SectorName.value === "") {
      Swal.fire(
        'กรุณากรอกข้อมูล',
        '',
        'question'
      )
    }
    else {
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      this.http
        .post(`${this.baseUrl}InsertSector.php`, body, {
          headers: headers
        })
        .subscribe(

          (data: any) => {
            console.log(data);
          },
          (error: any) => {
            console.log(error);
          }
        );
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'เพิ่มฝ่ายงานเรียบร้อย',
        showConfirmButton: false,
        timer: 1500

      }).then(() => {
        this.http.get(`${this.baseUrl}getsector.php`).subscribe(
          (data: any) => {
            console.log(data);
            this.sector = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      }).then(() => {
        this.Sector_ID = new FormControl('');
        this.SectorName = new FormControl('');
      })
    }


  }

  deletesector(id, name) {
    this.Sector_ID_show = id;
    this.SectorName_show = name;
    Swal.fire({
      title: 'คุณจะลบ' + ' ' + this.SectorName_show + ' ' + 'หรือไม่',
      icon: 'warning',
      confirmButtonText: 'บันทึก',
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'ยกเลิก',
      showCancelButton: true,
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'ลบเรียบร้อย',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.http.get(`${this.baseUrl}getsector.php`).subscribe(
            (data: any) => {
              console.log(data);
              this.sector = data;
            },
            (error: any) => {
              console.log(error);
            }
          );
        })
        this.http
          .get(
            `${this.baseUrl}DeleteSector.php?Sector_ID=` + this.Sector_ID_show
          )
          .subscribe(
            (data: any) => {
              console.log(data[0]);
            },
            (error: any) => {
              console.log(error);
            }
          );
      }
    })
  }


  updateSector(
    Sector_ID, SectorName
  ) {
    this.Sector_ID = new FormControl(Sector_ID);
    this.SectorName = new FormControl(SectorName);
  }
  public updateSectorEmp() {
    const body =
      'Sector_ID=' + this.Sector_ID.value
      + '&SectorName=' + this.SectorName.value

    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post(`${this.baseUrl}UpdateSector.php`, body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
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
    }).then(() => {
      this.http.get(`${this.baseUrl}getsector.php`).subscribe(
        (data: any) => {
          this.sector = data;
        },
        (error: any) => {
          console.log(error);
        }
      )
    }).then(() => {
      this.Sector_ID = new FormControl('');
      this.SectorName = new FormControl('');
    })
  }


}
