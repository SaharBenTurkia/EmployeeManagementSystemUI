import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeeList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
        location.reload;
      },
      error => console.log(error)
    );
  }
}
