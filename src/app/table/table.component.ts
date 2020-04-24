import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  numbers = [];
  draw = [];
  drawNum = Number;
  getTicket() {
    this.apiService.getTicket().subscribe(
      (res: any) => {
        console.log(res);
        this.numbers = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  generateNumArr = function () {
    let counter = 1;
    for (let i = 0; i < 9; i++) {
      this.draw.push([]);
      for (let j = 0; j < 10; j++) {
        this.draw[i].push({ number: counter, status: 'Open' });
        counter++;
      }
    }
  };
  constructor(
    public apiService: ApiService,
    private socketService: SocketioService
  ) {}

  ngOnInit() {
    this.getTicket();
    this.generateNumArr();
    this.socketService.setupSocketConnection();
    this.socketService.socket.on('draw', (num) => {
      this.drawNum = num;
      for (let i = 0; i < 9; i++) {
        let index = this.draw[i].findIndex((n) => {
          return num == n.number;
        });
        if (index !== -1) {
          this.draw[i][index].status = 'Closed';
          return;
        }
      }
    });
  }
}
