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
    let userId = JSON.parse(user)
    return this.httpClient.post(environment.serverUrl + '/room/createRoom', { _id: userId, maxPlayer: 2 });
  }
}
