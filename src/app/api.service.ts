import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  URL: 'http://localhost/Leavewebservice/API/getMyData.php';

 constructor(private http: HttpClient) {

 }

 getConfig() {
  return this.http.get(this.URL);
}

}
