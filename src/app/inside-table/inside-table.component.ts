
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SocketioService } from '../socketio.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-inside-table',
  templateUrl: './inside-table.component.html',
  styleUrls: ['./inside-table.component.scss']
})
export class InsideTableComponent implements OnInit {
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
    private socketService: SocketioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    // this.getTicket();
    this.generateNumArr();
    this.socketService.setupSocketConnection();
    this.socketService.socket.on('draw_' + id, (num) => {
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

