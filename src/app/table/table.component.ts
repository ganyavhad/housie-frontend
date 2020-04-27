import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  type: String
  roomCreated: Boolean
  constructor(
    public apiService: ApiService) { }

  ngOnInit() {
    this.type = 'Create'
  }
  select(type) {
    this.type = type
    this.roomCreated = false
    console.log(type)
  }
  createRoom() {
    this.apiService.createRoom().subscribe(
      (res: any) => {
        this.roomCreated = true
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
