import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { HomeService } from './home.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent, ChartComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
