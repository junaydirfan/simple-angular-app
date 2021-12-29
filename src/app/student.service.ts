import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudents(): any[] {
  return [
  {
  ID: 'std101', FirstName: 'Nabiha', LastName: 'Tufail',
  Branch: 'CSE', DOB: '29/02/1988', Gender: 'Female'
  },
  {
  ID: 'std102', FirstName: 'Saad', LastName: 'Ali', 
  Branch: 'ETC', DOB: '23/05/1989', Gender: 'Male'
  },
  {
  ID: 'std103', FirstName: 'Sana', LastName: 'Asghar', 
  Branch: 'CSE', DOB: '24/07/1992', Gender: 'Female'
  },
  {
  ID: 'std104', FirstName: 'Hina', LastName: 'Nasir', 
  Branch: 'ETC', DOB: '19/08/1990', Gender: 'Female'
  },
  {
  ID: 'std105', FirstName: 'Ali', LastName: 'Ahsan', 
  Branch: 'CSE', DOB: '12/94/1991', Gender: 'Male'
  }
  ];
  }
  constructor() { }
  }
  