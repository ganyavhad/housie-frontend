import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SocketioService } from './socketio.service';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SocketioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
