import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './Components/car-list/car-list.component';
import { BookingsComponent } from './Components/bookings/bookings.component';

const routes: Routes = [
  {
    path:' ', redirectTo:'booking', pathMatch:'full'
  },
  {
    path:'car',component:CarListComponent
  },
  {
    path:'booking', component:BookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
