import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl =' http://localhost:8182/employeeapi';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<Object> {
    return this.http.get(this.baseUrl + `/employee/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/employeeList', employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseUrl + `/employee/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `/employee/${id}`, { responseType: 'text' });
  }

  getEmployeeList(): Observable<any> {
    return this.http.get(this.baseUrl + '/employeeList');
  }
}
