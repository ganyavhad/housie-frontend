import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SocketioService } from './socketio.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-gaurd.service';
import { LoginComponent } from './login/login.component';
import { InsideTableComponent } from './inside-table/inside-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TableComponent, LoginComponent, InsideTableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SocketioService, AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule { }
