import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderBookingComponent } from './order-booking/order-booking.component';
import { OrderSearchComponent } from './order-search/order-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrintBookingDetailsComponent } from './print-booking-details/print-booking-details.component';
import { PrintBookingComponent } from './print-booking/print-booking.component';

const routes: Routes = [
  { path: 'PrintSearch', component: PrintBookingComponent },
  { path: 'OrderSearch', component: OrderSearchComponent },
  {
    path: 'Order/:id', component: OrderBookingComponent, children: [
      {path: 'Print/:ad', component: PrintBookingDetailsComponent}]
  },
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
