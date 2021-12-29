import {stds} from '../staticData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstd',
  templateUrl: './viewstd.component.html',
  styleUrls: ['./viewstd.component.css']
})
export class ViewstdComponent implements OnInit {
  Class_stds=stds;
  constructor() { }

  ngOnInit(): void {
  }

}
