import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  getTicket() {
    return this.httpClient.get(environment.serverUrl + '/getTicket');
  }
  guestLogin() {
    return this.httpClient.post(environment.serverUrl + '/player/guestLogin', {});
  }
  createRoom() {
    let user = localStorage.getItem('user');
    let userId = JSON.parse(user)._id
    return this.httpClient.post(environment.serverUrl + '/room/createRoom', { _id: userId, maxPlayer: 2 });
  }
  startGame(data) {
    let user = localStorage.getItem('user');
    let userId = JSON.parse(user)._id
    return this.httpClient.post(environment.serverUrl + '/room/startGame', { _id: userId, roomId: data.roomId });
  }
  joinRoom(data) {
    let user = localStorage.getItem('user');
    let userId = JSON.parse(user)._id
    console.log("aaaaaaa", { _id: userId, roomId: data.roomId })
    return this.httpClient.post(environment.serverUrl + '/room/joinRoom', { _id: userId, roomId: data.roomId });
  }
}
