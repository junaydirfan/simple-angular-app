import {Teacher} from './teacher';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {
  teacher: Teacher = {
    name: "Dr Gul Zahra",
    designation: 'Assitant Professor',
    class: "CSc 7"
    };
  constructor() { }

  ngOnInit(): void {
  }

}
