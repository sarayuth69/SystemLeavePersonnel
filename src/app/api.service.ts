import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APIService {

  // URL: 'http://localhost/Leavewebservice/API/getMyData.php';

  constructor(private http: HttpClient) {

  }

  // getConfig(): Observable<any> {

  //   // const url = 'https://www.rmuti.ac.th/student/sarayuth.kr/Leavewebservice/API/getMyData.php';

  //   // return this.http.get<any>(url);
  // }

}
