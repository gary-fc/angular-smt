import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreateDispatchService {

  constructor(private http: HttpClient) {
  }

  public createDispatch(data: any) {
    return this.http.post('http://localhost:8000/api/dispatch', data);
  }

}
