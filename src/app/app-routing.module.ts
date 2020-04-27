import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import { TableComponent } from './table/table.component';
import { InsideTableComponent } from './inside-table/inside-table.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'table',
    component: TableComponent,
    pathMatch: 'full'
  },
  {
    path: 'inside-table',
    component: InsideTableComponent,
    pathMatch: 'full'
  },
  { path: '', redirectTo: '/table', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
