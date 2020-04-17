import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'chart',
  component: ChartComponent
},{path:'**',pathMatch:'full',redirectTo:'home'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
