import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { SocketioService } from '../socketio.service';

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
  players = []
  roomData: {}
  constructor(
    public apiService: ApiService, private router: Router, private socketService: SocketioService) { }

  ngOnInit() {
    this.type = 'Create'
    this.roomJoined = false
    this.socketService.setupSocketConnection();
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
        this.socketService.socket.on('table_join_' + res.roomId, (player) => {
          this.players.push(player)
        })
      },
      (err) => {
        console.log(err);
      }
    );
  }
  startGame(roomData) {
    this.apiService.startGame(roomData).subscribe(
      (res: String) => {
        this.router.navigate(['/inside-table', { id: roomData.roomId }]);
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
        this.socketService.socket.on('game_start_' + roomId, (data) => {
          this.router.navigate(['/inside-table', { id: roomId }]);
        })
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
