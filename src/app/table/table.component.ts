import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  numbers = [];
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
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.getTicket();
    // this.numbers = [
    //   [
    //     { number: 0, status: 'None' },
    //     { number: 15, status: 'Pending' },
    //     { number: 24, status: 'Pending' },
    //     { number: 35, status: 'Pending' },
    //     { number: 0, status: 'None' },
    //     { number: 0, status: 'None' },
    //     { number: 65, status: 'Pending' },
    //     { number: 76, status: 'Pending' },
    //     { number: 0, status: 'None' },
    //   ],
    //   [
    //     { number: 7, status: 'Pending' },
    //     { number: 0, status: 'None' },
    //     { number: 27, status: 'Pending' },
    //     { number: 0, status: 'None' },
    //     { number: 42, status: 'Pending' },
    //     { number: 55, status: 'Pending' },
    //     { number: 0, status: 'None' },
    //     { number: 0, status: 'None' },
    //     { number: 88, status: 'Pending' },
    //   ],
    //   [
    //     { number: 0, status: 'None' },
    //     { number: 18, status: 'Pending' },
    //     { number: 28, status: 'Pending' },
    //     { number: 0, status: 'None' },
    //     { number: 45, status: 'Pending' },
    //     { number: 0, status: 'None' },
    //     { number: 70, status: 'Pending' },
    //     { number: 78, status: 'Pending' },
    //     { number: 0, status: 'None' },
    //   ],
    // ];
  }
}
