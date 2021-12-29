import { StudentService } from '../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstd-service',
  templateUrl: './viewstd-service.component.html',
  styleUrls: ['./viewstd-service.component.css'],
  providers: [StudentService]
})
export class ViewstdServiceComponent implements OnInit {
  students: any[];
  constructor(private stdService : StudentService) {
  this.students = this.stdService.getStudents();
  }  
  ngOnInit(): void {
  }
}
