import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  form: FormGroup
  type: String
  roomCreated: Boolean
  roomId: Number
  roomJoined: Boolean
  roomData: {}
  constructor(
    public apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.type = 'Create'
    this.roomJoined = false
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
        this.roomData = res
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  startGame() {
    this.apiService.startGame(this.roomData).subscribe(
      (res: any) => {
        this.router.navigate(['/inside-table']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  joinRoom(roomId) {
    this.apiService.joinRoom({ roomId: roomId }).subscribe(
      (res: any) => {
        this.roomJoined = true
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
